import { useEffect, useMemo, useState } from "react";

export const useToggleState = () => {
  JSON.stringify(localStorage.setItem("toggle", false));
  const [isToggle, setIsToggle] = useState(
    JSON.parse(localStorage.getItem("toggle"))
  );

  useEffect(() => {
    localStorage.setItem("toggle", isToggle);
  }, [isToggle]);

  const handleToggleState = () => {
    setIsToggle(!JSON.parse(localStorage.getItem("toggle")));
  };

  const toggleState = useMemo(
    () => ({
      isToggle,
      handleToggleState,
    }),
    [isToggle]
  );
  return toggleState;
  // return { isToggle, handleToggleState };
};
