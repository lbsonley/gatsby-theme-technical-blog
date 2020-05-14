/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import {
  WiMoonAltWaningCrescent4 as DarkModeIcon,
  WiMoonAltWaningGibbous4 as LightModeIcon,
} from "react-icons/wi";

const ColorModeToggle = () => {
  const [mode, setMode] = useColorMode();

  return (
    <button
      onClick={() => {
        const next = mode === "dark" ? "light" : "dark";
        setMode(next);
      }}
      sx={{
        border: "none",
        p: 3,
        color: "background",
        bg: "text",
        borderRadius: "sm",
        cursor: "pointer",
      }}
    >
      {mode === "dark" ? (
        <LightModeIcon size={24} />
      ) : (
        <DarkModeIcon size={24} />
      )}
    </button>
  );
};

export default ColorModeToggle;
