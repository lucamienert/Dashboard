import {
  Alert,
  AlertTitle
} from '@mui/material'

const Error = () => {
  return (
    <Alert style={{ height: '100vh', width: '100vw' }} severity="error">
      <AlertTitle>Ein Fehler ist aufgetreten</AlertTitle>
      <strong>Error Code: 404 (Page not found)</strong>
    </Alert>
  )
}

export default Error