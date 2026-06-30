const stats = [
  { value: "$2K–5K", label: "Avg. recovered per claim" },
  { value: "90%", label: "Of supplement work automated" },
  { value: "10 min", label: "From upload to package" },
]

export function StatsRow() {
  return (
    <section className="py-3 sm:py-4 bg-primary">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-4 sm:px-8">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background font-serif tracking-[-0.03em]">
                {stat.value}
              </span>
              <span className="mt-1.5 text-xs sm:text-sm text-background/50 leading-snug max-w-[120px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
