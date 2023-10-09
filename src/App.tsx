import { Box, Button, Container, Typography } from "@mui/material";
import * as React from "react";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Vite.js example in TypeScript
        </Typography>

        {/* HTML */}
        <button>Submit</button>
        {/* CSS-in-JS */}
        <Box sx={{ button: { backgroundColor: "aqua" } }}>
          <button>Submit</button>
        </Box>
        {/* Mui */}
        <Button>Submit</Button>
      </Box>
    </Container>
  );
}
