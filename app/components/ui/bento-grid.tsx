import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[18rem] grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  id: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border border-white/10 justify-between flex flex-col overflow-hidden",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      {img && 
      <>
        <img src={img} className="object-cover object-top w-full h-full rounded-xl absolute top-0 left-0 z-0" />
        <div className="z-10 absolute bg-purple-800/40 group-hover/bento:bg-black/60 w-full h-full top-0 left-0 transition duration-200 ease-in"></div>
      </>
      }

      <div className={`${id===0?" -translate-x-[100vh] relative h-full group-hover/bento:translate-x-2 transition duration-200 z-10":"group-hover/bento:translate-x-2 transition duration-200 z-10"}`}>
        {icon}
        <div className={`${id===0?"h-full flex flex-col justify-end font-sans antialiased font-bold text-white text-xl mb-2 mt-2":"font-sans font-bold text-white mb-2 mt-2"}`}>
          {title}
        </div>
        <div className="font-sans font-normal text-white my-2">
          {description}
        </div>
      </div>

      {id!==0 && <>{header}</>}

      	
    </div>
  );
};
