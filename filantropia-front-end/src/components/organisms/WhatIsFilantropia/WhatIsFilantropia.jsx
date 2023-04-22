import { Card } from "../../atoms/Card/Card";
import { ListCard } from "../../molecules/ListCard/ListCard";
import { TitleCard } from "../../atoms/TitleCard/TitleCard";
import { ParagraphCard } from "../../atoms/ParagraphCard/ParagraphCard";
import React from "react";
import "./WhatIsFilantropia.scss";

export const WhatIsFilantropia = (props) => {
  const { whatIsFilantropia } = props;
  return (
    <section className="whatIsFilantropia" id="quienes_somos">
      <ListCard name="whatIsFilantropia">
        {whatIsFilantropia.map((card) => {
          return (
            <Card key={card.id}>
              <TitleCard title={card.title} />
              <ParagraphCard paragraph={card.paragraph} />
            </Card>
          );
        })}
      </ListCard>
    </section>
  );
};
