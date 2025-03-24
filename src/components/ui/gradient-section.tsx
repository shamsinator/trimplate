interface GradientSectionProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
  direction?: "up" | "down";
}

export function GradientSection({
  children,
  className = "",
  intensity = "medium",
  direction = "down",
}: GradientSectionProps) {
  const intensityMap = {
    light: "opacity-30",
    medium: "opacity-50",
    strong: "opacity-80",
  };

  const directionMap = {
    up: "from-muted to-background",
    down: "from-background via-muted to-background",
  };

  return (
    <section className={`w-full relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-gradient-to-b ${directionMap[direction]} ${intensityMap[intensity]}`}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
