"use client";

import Image from "next/image";
import React from "react";
import { chakra } from "@chakra-ui/react";

// for handling screensizes. returns a formatted object to use in chakra styling
// for now only accounts for iphone se, iphone xr, iphone 12 pro, pixel 5, samsung galaxy s8+,
//                           samsung galaxy s20 ultra, ipad air, ipad mini (pass parameters in that order)
// NOTE: this function is for convenience only and serves no functional purpose.
const SizeFormatter = (
  iphone_se_prop = "0",
  iphone_xr_prop = "0",
  iphone_12pro_prop = "0",
  pixel_5_prop = "0",
  galaxy_s8plus_prop = "0",
  galaxy_s20ultra_prop = "0",
  ipad_air_prop = "0",
  ipad_mini_prop = "0"
) => {
  return {
    iphone_se: iphone_se_prop,
    iphone_xr: iphone_xr_prop,
    iphone_12pro: iphone_12pro_prop,
    pixel_5: pixel_5_prop,
    galaxy_s8plus: galaxy_s8plus_prop,
    galaxy_s20ultra: galaxy_s20ultra_prop,
    ipad_air: ipad_air_prop,
    ipad_mini: ipad_mini_prop,
  };
};

//underlying next image
const ImageContent = ({ item, onClick, className }) => {
  return (
    <Image
      alt={item.name}
      src={item.src}
      onClick={onClick}
      className={className}
      width={item.width} //will be overwritten by chakra prop width
      height={item.height} //will be overwritten by chakra prop
    />
  );
};

//
//
//
//wrapper using chakra factory
const ItemImage = chakra(ImageContent, {
  baseStyle: {
    position: "relative",
    margin: 0,
    cursor: "pointer",
  },
  shouldForwardProp: (props) => {
    return ["item", "onClick", "className"].includes(props);
  },
});

// This is for backgrounds with very large heights compared to widths
// set the height as a prop around 58% - 65%
const CustomBgImage = chakra(ImageContent, {
  baseStyle: {
    position: "relative",
    margin: 0
  },
  shouldForwardProp: (props) => {
    return ["item", "onClick", "className"].includes(props);
  },
});

//
//
//
//
//
//will be deprecated soon. to be replaced with custom ItemImage
const CldImageItems = ({ item, className, location, width, onClick }) => {
  return (
    <Image
      alt={item.name}
      src={item.src}
      height={item.height}
      width={item.width}
      className={className}
      style={{
        position: "relative",
        cursor: "pointer",
        margin: 0,
        top: location[0],
        right: location[1],
        bottom: location[2],
        left: location[3],
        width: width,
      }}
      onClick={onClick}
    />
  );
};

//not used anymore except for background image
const CldImage = ({ item, className, style, onClick }) => {
  return (
    <Image
      alt={item.name}
      src={item.src}
      height={item.height}
      width={item.width}
      className={className}
      style={style}
      onClick={onClick}
    />
  );
};
//
export { CldImage, CldImageItems, ItemImage, CustomBgImage, SizeFormatter };
