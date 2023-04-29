import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const RemoveAll = ({ destroyData }) => {
  const Remove = () => {
    destroyData();
  };

  return (
    <Box sx={{ width: "95%" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={10}>
          <Stack>
            <Button
              variant="contained"
              onClick={Remove}
              sx={{
                backgroundColor: "red",
                color: "white",
                width: "100%", 
                "&:hover": {
                  backgroundColor: "red",
                },
              }}
            >
              Cancella tutto
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RemoveAll;




