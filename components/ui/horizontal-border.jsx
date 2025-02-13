export default function HorizontalBorder({ className }) {
  return (
    <hr
      className={`border-1 border-neutral-400 border-opacity-90 w-full ${className}`}
    />
  );
}
