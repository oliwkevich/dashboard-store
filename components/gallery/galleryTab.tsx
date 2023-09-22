import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface GalaryTabProps {
  image: ImageType;
}

export const GalaryTab: React.FC<GalaryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt="image"
              fill
              className="object-cover object-center"
            />
          </span>
          <span
            className={
              (cn("absolute inset-0 rounded-md ring-2 ring-offset-2"),
              selected ? "ring-black" : "ring-transparent")
            }
          />
        </>
      )}
    </Tab>
  );
};
