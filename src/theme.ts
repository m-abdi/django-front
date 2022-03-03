import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { responsiveFontSizes } from "@mui/material/styles";
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "'Slabo 27px', serif;",
  },
  palette: {
    primary: {
      main: "#9fa8da",
    },
    secondary: {
      main: "#fdd835",
    },
    error: {
      main: "#b50934",
    },
    info: {
      main: "#098ab5",
    },
  },
});

export default theme;
