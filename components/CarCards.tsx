"use client";

import { carProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { CarDetails, CustomButton } from ".";

interface carCardProps {
  car: carProps;
}

const CarCards = ({ car }: carCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="car-card__price">
        <span className="car-card__price-dollar ">$</span>
        {carRent}
        <span className="car-card__price-day">/day</span>
      </p>
      <div className="car-card__image">
        <Image
          src={generateCarImageUrl(car, "1")}
          alt="car modal"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex mt-2 w-full ">
        <div className="car-card__icon-container">
          <div className="car-card__icon">
            <Image
              src={"/steering-wheel.svg"}
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="car-card__icon-text">
              {transmission === "a" ? "Automatic" : "Manuel"}
            </p>
          </div>

          <div className="car-card__icon">
            <Image
              src={"/tire.svg"}
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>

          <div className="car-card__icon">
            <Image
              src={"/gas.svg"}
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCards;
