import React from "react";
import Image from "next/image";
import cooperKill from "../../../../public/CharacterKilling/cooperKill.gif";

export default function CharacterKilling({ name, height, width }) {
  let image;
  switch (name) {
    case "cooper":
      image = cooperKill;
      break;
  }
  return (
    <>
      <Image height={height} width={width} alt="killing" src={image} />
    </>
  );
}
