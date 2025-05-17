import TechIcon from "./TechIcon";

export const ToolBoxItems = ({
  items,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
}) => {
  return (
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%_transparent)]">
      <div className="flex flex-none">
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-white/10"
          >
            <TechIcon component={item.iconType} />
            <span className="w-4 font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolBoxItems;
