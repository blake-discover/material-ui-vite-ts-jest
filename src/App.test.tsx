import React from "react";
import { render } from "helpers/test-utils";
import { Box, Button, buttonClasses } from "@mui/material";
import theme from "./theme";

describe("Button", () => {
  const testText = "Submit";

  describe("Control assumptions", () => {
    test("HTML", () => {
      const { getByText } = render(<button>{testText}</button>);

      const button = getByText(testText);
      expect(button).toHaveStyle({ "background-color": "ButtonFace" });
    });

    test("CSS-in-JS", () => {
      const { getByText } = render(
        <Box sx={{ button: { backgroundColor: "aqua" } }}>
          <button>{testText}</button>
        </Box>
      );

      const button = getByText(testText);
      expect(button).toHaveStyle({ "background-color": "aqua" });
    });
  });

  describe("Theme assumption", () => {
    test("Should have default contained variant", () => {
      const { getByText } = render(<Button>{testText}</Button>);

      const button = getByText(testText);
      expect(button).toHaveClass(buttonClasses.contained);
    });
  });

  describe("Background styles", () => {
    describe('The following tests check for the "dark" modifier of the primary color. The "dark" property in this instance should **only** be applicable during a hover state', () => {
      test("Should have correct background-color -- dark", () => {
        const { getByText } = render(<Button>{testText}</Button>);

        const button = getByText(testText);
        expect(button).toHaveStyle({
          "background-color": theme.palette.primary.dark,
        });
      });
    });

    test("Should have correct background-color -- main", () => {
      const { getByText } = render(<Button>{testText}</Button>);

      const button = getByText(testText);
      expect(button).toHaveStyle({
        "background-color": theme.palette.primary.main,
      });
    });
  });
});
