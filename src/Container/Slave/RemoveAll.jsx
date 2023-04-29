import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const RemoveAll = ({ destroyData }) => {
  const Bye = () => {
    destroyData();
  };

  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={Bye} style={{ backgroundColor: "red", color: "white" }}>
          Cancella tutto
        </Button>
     </Stack>
    </div>
  )
}

export default RemoveAll


