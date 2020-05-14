export const theme = {
  /**
   * Breakpoints
   */
  breakpoints: ["576px", "768px", "992px", "1200px"],

  /**
   * Colors
   */
  colors: {
    text: "#546E7A",
    background: "#FAFAFA",
    primary: "#80CBC4",
    secondary: "#7C4DFF",
    accent: "#39ADB5",
    highlight: "#F6A434",
    muted: "#94A7B0",
    modes: {
      dark: {
        text: "#FAFAFA",
        background: "#263238",
        primary: "#546E7A",
        secondary: "#32424A",
        accent: "#009688",
        highlight: " #C792EA",
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
   * Layout
   */
  layout: {
    header: {
      padding: 6,
      marginBottom: 7,
      color: "background",
      bg: "text",
      boxShadow: "medium",
    },
    footer: {
      padding: 6,
      marginTop: 7,
    },
    container: {
      maxWidth: "maxWidth",
      width: "width",
    },
  },

  /**
   * theme-ui <Link> component
   */
  links: {
    tag: {
      textDecoration: "none",
      borderRadius: "pill",
      bg: "primary",
      color: "background",
      transition: "background-color 0.2s ease",
      py: 2,
      px: 4,
      mr: 3,
      my: 3,
      "&:hover": {
        bg: "highlight",
      },
    },
    title: {
      color: "background",
      textDecoration: "none",
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
