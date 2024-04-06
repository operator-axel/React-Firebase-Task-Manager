// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9800", // This is an orange color. Adjust the hex code to your preference.
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#ff9800",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ff9800",
            },
            "&:hover fieldset": {
              borderColor: "ff9800",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#ff9800",
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
