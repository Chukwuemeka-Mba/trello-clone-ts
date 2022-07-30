import React from "react";

import { CardContainer } from "../assets/styles/styles";
interface CardProps {
  text: string;
}
export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
