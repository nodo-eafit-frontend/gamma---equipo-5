import React from "react";
import { TitleSection } from "../../atoms/TitleSection/TitleSection";
import { Toggle } from "../../atoms/Toggle/Toggle";
import "./HeaderDonations.scss";

export const HeaderDonations = (props) => {
  const { title, subtitle, toggle } = props;
  console.log(props);
  return (
    <section className="donations__header">
      <TitleSection title={title} />
      <h3 className="donations__header-subtitle">{subtitle}</h3>
      <Toggle {...toggle} />
    </section>
  );
};
