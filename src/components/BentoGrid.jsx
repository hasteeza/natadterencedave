export function BentoGrid({ children, className = "" }) {
  return (
    <section className={`grid grid-cols-1 gap-2 md:grid-cols-6 ${className}`}>
      {children}
    </section>
  );
}
