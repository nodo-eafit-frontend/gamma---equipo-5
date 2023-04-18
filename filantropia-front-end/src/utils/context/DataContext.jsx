import { createContext, useMemo } from "react";
import { HEADER } from "../data/header";
import { HOME_PAGE } from "../data/homePage";
import { FOOTER } from "../data/footer";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const providerValue = useMemo(
    () => ({
      HEADER,
      HOME_PAGE,
      FOOTER,
    }),
    [HOME_PAGE]
  );

  return (
    <DataContext.Provider value={providerValue}>
      {props.children}
    </DataContext.Provider>
  );
};
