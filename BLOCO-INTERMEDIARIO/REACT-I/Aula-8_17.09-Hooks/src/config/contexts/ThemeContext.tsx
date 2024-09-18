import { createContext, useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import UseEffect from "../../pages/UseEffect";

type TTheme = "light" | "dark";

interface ThemeContext {
  userName: string;
  theme: TTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({
  userName: "",
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<TTheme>(
    (localStorage.getItem("mode") as TTheme) ?? "light"
  );

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("mode", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ userName: "Anderson", theme: theme, toggleTheme: toggle }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
