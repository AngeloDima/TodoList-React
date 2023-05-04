import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBox from "./CheckBox";


const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


export default function InteractiveList(props) {

  console.log(props)

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={10}>
          <Demo>
            <List>
              {props.data && props.data.map && props.data.map((item) => (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={() => props.onRemove(item.id)} />
                    </IconButton>
                  }
                >
                  <CheckBox check={item.id} completed={false}/>
                  
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
    
  );

}



