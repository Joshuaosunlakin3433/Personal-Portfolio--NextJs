import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="text-emerald-300 size-9" />
        <h3 className="text-3xl font-calistoga">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">{description}</p>
    </div>
  );
};


