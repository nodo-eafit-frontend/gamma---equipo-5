import React from "react";
import { Card } from "../../atoms/Card/Card";
import { ImageCard } from "../../atoms/ImageCard/ImageCard";
import { TitleCard } from "../../atoms/TitleCard/TitleCard";
import { Button } from "../../atoms/Button/Button";
import "./CardInitiatives.scss";

export const CardInitiatives = (props) => {
  const { imagen, title, button } = props;

  const handleClick = () => {};

  return (
    <Card>
      <ImageCard {...imagen} />
      <TitleCard title={title} />
      <a href={button.href} target="_blank">
        <Button title={button?.title} handleClick={handleClick} />
      </a>
    </Card>
  );
};
