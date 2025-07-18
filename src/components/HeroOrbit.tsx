import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  outline,
  outlineColor,
  outlineWidth,
  orbitDuration,
  shouldOrbit,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  outline?: string;
  outlineColor?: string;
  outlineWidth?: number;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?:boolean;
  spinDuration?:string;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex justify-start items-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
            outline: `${outline}`,
            outlineColor: `${outlineColor}`,
            outlineWidth: `${outlineWidth}`,
          }}
        >
         <div className= {twMerge(shouldSpin === true && "animate-spin")} style={{
          animationDuration:spinDuration,
         }}>
           <div
            className="inline-flex"
            style={{ transform: `rotate(${rotation * -1}deg)` }}
          >
            {children}
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};
