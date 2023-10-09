import React from "react";
import { Box, Button, buttonClasses } from "@mui/material";
import userEvent from "@testing-library/user-event";

import { render } from "helpers/test-utils";

import theme from "./theme";

const testText = "Submit";

describe("CSS-in-JS", () => {
  test("Default state", () => {
    const { getByText } = render(
      <Box sx={{ button: { backgroundColor: "aqua" } }}>
        <button>{testText}</button>
      </Box>
    );

    const button = getByText(testText);
    expect(button).toHaveStyle({ "background-color": "aqua" });
  });

  test("Hover Pseudo class", async () => {
    const user = userEvent.setup();
    const { getByText } = render(
      <Box
        sx={{
          button: { backgroundColor: "aqua" },
          "button:hover": { backgroundColor: "bisque" },
        }}
      >
        <button>{testText}</button>
      </Box>
    );

    const button = getByText(testText);
    await user.hover(button);
    expect(button).toHaveStyle({ "background-color": "bisque" });
  });

  describe("The follow demonstrates the default hover style is being applied erroneously", () => {
    test("Default state", async () => {
      const { getByText } = render(
        <Box
          sx={{
            button: { backgroundColor: "aqua" },
            "button:hover": { backgroundColor: "bisque" },
          }}
        >
          <button>{testText}</button>
        </Box>
      );

      const button = getByText(testText);
      expect(button).toHaveStyle({ "background-color": "aqua" });
    });
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
