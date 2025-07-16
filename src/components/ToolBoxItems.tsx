import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";

export const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName, 
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?:string;
}) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={twMerge(
        "flex flex-none py-0.5 gap-6",
         itemsWrapperClassName)}>
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center justify-center gap-3 py-3 px-8 outline outline-white/10 rounded-md"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolBoxItems;
