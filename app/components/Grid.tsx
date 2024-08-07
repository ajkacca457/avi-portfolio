"use client";
import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { delay, motion } from "framer-motion";
import { title } from "process";
import { headers } from "next/headers";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="w-[90vw] max-w-[1280px] mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
          img={item.img}
          id={i}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="grid grid-cols-3 gap-x-4 h-full place-content-center"
    >   
    </motion.div>
  );
};


const SkeletonTwo = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 100%", "80% 50%", "20% 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2 relative"
      style={{
        background:"linear-gradient(-45deg, #6a11cb, #2575fc, #7b2cbf, #00c6ff)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="h-full w-full absolute top-0 left-0 bg-black/60 z-10"></div>

      <motion.div className="h-full w-full rounded-lg p-4 flex flex-col justify-center gap-y-4 z-20">
        <p className="text-white text-justify text-sm">Hi, I’m Avi. I enjoy learning new technologies, building projects, and studying Finnish. With four years as a Programme/Project Manager in NGOs and the corporate sector, I've worked on community development, HR, and IT projects like e-learning. After self-learning programming, I completed an intensive bootcamp at Microverse. Now, as a Full Stack Developer, I’m eager to work with innovative teams to create impactful projects.</p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
      initial: {
      scale: 1,
      rotate: 0,
      backgroundColor: "#f3f3f3",
      },
      hover: {
        scale: 1.02,
        rotate:1.5,
        backgroundColor: "red",
        transition: {
          delay: 0.2,
          duration: 0.2,
        },
      },
    };
const arr= ["html", "css ", "scss", "tailwind", "bootstrap", "javascript", "react", "next js", "node js", "php", "wordpress",, "ruby", "rails"]
return (
  <motion.div
    initial="initial"
    animate="animate"
    className="grid grid-cols-3 gap-2 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col"
  >
    {arr.map(( item, index) => (
      <motion.div
      variants={variants}
        key={"skelenton-two" + index}
        initial="initial"
        whileHover="hover"
        style={{
          maxWidth: "100%",
        }}
        className="flex flex-row bg-white rounded-sm text-sm"
      >
       <span className="m-auto">{item}</span> 
      </motion.div>
    ))}
  </motion.div>
);
};


const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Web Design
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <p className="border border-green-500 text-center bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Web Development
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <p className="border border-orange-500 text-center bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Mobile Development
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};


const items = [
  {
    header: <SkeletonOne />,
    className: "md:col-span-1",
    title:"Integrity, Respect, and Commitment",
    img:"/profile.jpg",   
    description: (
      <span className="text-sm">
      </span>
    ),
    },
  {
    title: "About Me",
    header: <SkeletonTwo />,
    className: "md:col-span-2",
  },
  {
    title: "Skills",
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "My Services",
    header: <SkeletonFour />,
    className: "md:col-span-1"
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },

];
