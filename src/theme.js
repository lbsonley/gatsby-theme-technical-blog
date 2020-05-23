export const theme = {
  /**
   * Breakpoints
   */
  breakpoints: ["576px", "768px", "992px", "1200px"],

  /**
   * Colors
   */
  colors: {
    light: "#FAFAFA",
    text: "#263238",
    background: "#FAFAFA",
    primary: "#1E272C",
    secondary: "#546E7A",
    accent: "#73B6B0",
    highlight: "#80CBC4",
    muted: "#546E7A",
    modes: {
      dark: {
        light: "#FAFAFA",
        text: "#FAFAFA",
        background: "#263238",
        primary: "#1E272C",
        secondary: "#546E7A",
        accent: "#73B6B0",
        highlight: "#80CBC4",
        muted: "#546E7A",
      },
    },
  },

  /**
   * Typography
   */
  fonts: {
    body:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    heading:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [14, 18, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.125,
  },

  /**
   * Borders
   */
  borderWidths: {
    none: "0px",
    thin: "1px",
    medium: "3px",
    thick: "5px",
  },
  radii: {
    default: "0px",
    sm: "4px",
    md: "8px",
    pill: "100px",
  },

  /**
   * Shadows
   */
  shadows: {
    small: "0 1.25px 2.5px rgba(0, 0, 0, .5)",
    medium: "0 5px 10px rgba(0, 0, 0, .5)",
    large: "0 8px 20px rgba(0, 0, 0, .5)",
  },

  /**
   * Sizes and Spacings
   */
  sizes: {
    maxWidth: "600px",
    width: "90vw",
    minHeight: "100vh",
  },

  space: [0, 2, 4, 8, 12, 20, 32, 52, 84],

  zIndices: [0, 1, 10, 100, 1000],

  /**
   * theme-ui <Link> component
   */
  links: {
    tag: {
      textDecoration: "none",
      borderRadius: "pill",
      bg: "primary",
      color: "light",
      transition: "background-color 0.2s ease",
      py: 2,
      px: 4,
      mr: 3,
      my: 3,
      "&:hover": {
        bg: "highlight",
      },
    },
  },

  /**
   * Elements rendered in MDX or `Styled`
   */
  styles: {
    root: {
      fontSize: 1,
      lineHeight: "body",
      fontFamily: "body",
      fontWeight: "body",
    },
    h1: {
      fontSize: 5,
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      my: 5,
    },
    h2: {
      fontSize: 4,
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      my: 4,
    },
    h3: {
      fontSize: 3,
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      my: 4,
    },
    p: {
      fontSize: 1,
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      my: 5,
    },
    a: {
      color: "accent",
      transition: "color 0.2s ease",
      "&:hover": {
        color: "highlight",
      },
    },
  },
};
