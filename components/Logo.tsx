import Image from "next/image";
import React from "react";
import LogoImage from "@/public/images/logo.png";
import Link from "next/link";
import cn from "classnames";
import { yeseva } from "@/public/font";

type LogoProps = {
  isGrayScaled?: boolean;
  width?: number;
};

const Logo = ({ isGrayScaled, width = 84 }: LogoProps) => {
  return (
    <Link
      href={"/"}
      className="inline-flex items-end"
    >
      <Image
        priority={true}
        src={LogoImage}
        alt="logo"
        width={width}
        height={width}
        className={cn({ "is-gray-scaled": isGrayScaled })}
      />
      <strong className={`${yeseva.className} text-4xl ml-[-1rem]`}>
        Okay
      </strong>
    </Link>
  );
};

export default Logo;
