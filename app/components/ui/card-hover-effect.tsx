import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    date: string;
    role: string;
    company: string;
    companyUrl: string;
    stack: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          key={idx}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple-200/50 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.role}</CardTitle>
            <CardDescription>{item.date}</CardDescription>
            <CardDescription>
              <Link href={item.companyUrl} target="_blank" className="text-blue-500 underline text-base">
                {item.company}
              </Link>
            </CardDescription>

            <div className="flex flex-wrap mt-4">
              {item.stack.map((stack, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-blue-900 p-1 rounded-md mr-2 mt-2"
                >
                  {stack}
                </span>
              ))}
            </div>

          </Card>
        </div>
      ))}
    </div>
  );
};


export const ProjectHoverEffect = ({
  items,
  className,
}: {
  items: {
    imgurl: string;
    title: string;
    url: string;
    description: string;
    stack: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          key={idx}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-purple-200/50 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="mb-3 text-purple-300">{item.title}</CardTitle>
            <img src={item.imgurl} alt={item.title} className="w-full rounded-md" />
            <CardDescription>{item.description}</CardDescription>
            <CardDescription>
              <Link href={item.url} target="_blank" className="text-blue-400 underline text-base">
                Live Link
              </Link>
            </CardDescription>

            <div className="flex flex-wrap mt-4">
              {item.stack.map((stack, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-blue-900 p-1 rounded-md mr-2 mt-2"
                >
                  {stack}
                </span>
              ))}
            </div>

          </Card>
        </div>
      ))}
    </div>
  );
};


export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <video className="w-full h-full absolute top-0 left-0 object-fill opacity-5" autoPlay loop muted>
        <source src="/glow.mp4" type="video/mp4" />
      </video>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
