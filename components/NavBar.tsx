import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const NavBar = () => {
  return (
    <header className="absolute w-full z-10 ">
      <nav className="mx-auto  max-w-[1440px] flex justify-between items-center py-4 px-6 sm:px-16">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div>
          {" "}
          <CustomButton
            containerStyles="text-primary-blue bg-white tracking-wider font-bold  rounded-full bg-primary-blue min-w-[130px]"
            title="Sign In"
            btnType="button"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
