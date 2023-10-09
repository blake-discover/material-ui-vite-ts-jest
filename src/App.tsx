import { Box, Button, Container, Typography } from "@mui/material";
import * as React from "react";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Vite.js example in TypeScript
        </Typography>

        <Box
          sx={{
            button: { backgroundColor: "aqua" },
            "button:hover": { backgroundColor: "bisque" },
          }}
        >
          <button>Submit</button>
        </Box>

        <Button>Submit</Button>
      </Box>
    </Container>
  );
}
