/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import {
  WiMoonAltWaxingGibbous3 as DarkModeIcon,
  WiMoonAltWaningCrescent4 as LightModeIcon,
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
        color: "light",
        bg: "primary",
        borderRadius: "sm",
        cursor: "pointer",
        "&:hover": {
          color: "highlight"
        }
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
