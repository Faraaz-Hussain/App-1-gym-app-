import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Notification() {
  return (
    <div>
        <Stack sx={{ width: '100%' }}>
      <Alert severity="success">Registered Successfully</Alert>
    </Stack>
    </div>
  )
}

export default Notification
