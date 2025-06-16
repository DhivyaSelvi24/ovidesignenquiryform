import { Typography, Box } from '@mui/material';

export default function Header() {
  return (
    <Box textAlign="center" mb={2}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', letterSpacing: 2 }}>
        ENQUIRY FORM
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 1, color: '#ccc' }}>
        If you have any queries kindly take a moment to fill up this form, Our representatives will contact you shortly.
      </Typography>
    </Box>
  );
}
