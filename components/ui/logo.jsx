import Plus_Jakarta_Sans from "@/lib/fonts/plus-jakarta-sans";

export default function Logo(props) {
  const { className, withTM } = props;
  return (
    <div className={`${Plus_Jakarta_Sans.className}`}>
      <span className={className}>Lazuardy</span>
      {withTM && <span className="ms-1 absolute">™</span>}
    </div>
  );
}
