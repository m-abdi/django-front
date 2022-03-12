import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { responsiveFontSizes } from "@mui/material/styles";
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "'Dosis', serif",
  },
  palette: {
    primary: {
      main: "#2b8ad2",
    },
    secondary: {
      main: "#faaa4b",
    },
    error: {
      main: "#f50057",
    },
    info: {
      main: "#732bd2",
    },
    success: {
      main: "#2bd2c7"
    }
  },
});

export default responsiveFontSizes(theme);
