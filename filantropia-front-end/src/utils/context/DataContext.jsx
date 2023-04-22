import { createContext, useMemo } from "react";
import { HEADER } from "../data/header";
import { HOME_PAGE } from "../data/homePage";
import { DONATIONS } from "../data/donations";
import { FOOTER } from "../data/footer";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const providerValue = useMemo(
    () => ({
      HEADER,
      HOME_PAGE,
      DONATIONS,
      FOOTER,
    }),
    [HOME_PAGE, DONATIONS, FOOTER, HEADER]
  );

  return (
    <DataContext.Provider value={providerValue}>
      {props.children}
    </DataContext.Provider>
  );
};
