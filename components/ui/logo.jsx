import Plus_Jakarta_Sans from "@/lib/fonts/plus-jakarta-sans";
import Doto from "@/lib/fonts/doto";

export default function Logo(props) {
  const { className, withTM } = props;
  return (
    <div className={`${Plus_Jakarta_Sans.className}`}>
      <span className={`${className} text-[1rem]`}>
        Lazuardy
        <span className={`${Doto.className} font-medium text-[1.1rem] ms-1`}>
          Tech
        </span>
      </span>
      {withTM && <span className="ms-1 absolute">™</span>}
    </div>
  );
}
