"use client"

import { FormEvent, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const WAITLIST_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxwRr4z47xGuS60VX0-GJ5UqlgVk4Av8kDRRzSlPnVJgt6eLRLk6h849JgcH-ugK8t3/exec"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalizedEmail = email.trim()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError("Please enter a valid email address.")
      return
    }

    setError("")
    setIsSubmitting(true)

    try {
      await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${encodeURIComponent(normalizedEmail)}`,
      })
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex flex-1 items-center justify-center px-5 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="w-full max-w-xl text-center">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            We&apos;re still building.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
            Drive AI is evolving. Leave your email and we&apos;ll let you know when there&apos;s something new to try.
          </p>

          {submitted ? (
            <p className="mt-10 font-serif text-xl font-bold text-primary">
              {"Thanks, we'll be in touch!"}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <Input
                id="waitlist-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "waitlist-error" : undefined}
                className="h-11 flex-1"
                required
              />
              <Button type="submit" size="lg" disabled={isSubmitting} className="h-11">
                {isSubmitting ? "Submitting..." : "Keep me posted"}
              </Button>
            </form>
          )}

          {error && !submitted ? (
            <p id="waitlist-error" role="alert" className="mt-3 text-sm text-destructive">
              {error}
            </p>
          ) : null}
        </div>
      </section>
      <Footer />
    </main>
  )
}
