import React, { useState } from 'react';
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Box,
  Typography,
  Container
} from '@mui/material';

export default function EnquiryForm() {
  const [role, setRole] = useState('');
  const [demo, setDemo] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    department: '',
    year: '',
    experience: '',
    domain: '',
    itOrNonIT: ''
  });

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      role,
      college: formData.college,
      department: formData.department,
      year: formData.year,
      experience: formData.experience,
      domain: formData.domain,
      itOrNonIT: formData.itOrNonIT,
      demo
    };

    try {
      // Convert to URL parameters
      const params = new URLSearchParams();
      for (const key in payload) {
        params.append(key, payload[key]);
      }

      //const url = `https://script.google.com/macros/s/AKfycbwQE4gjiY65VbmzHfyBJfgZg3XrgdnOv8TW2EW5f-0uwOMDFw6_oCiIJlPQfcz6ujKe/exec${params.toString()}`;

      const response = await fetch('/gas', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });


      const result = await response.json();
      if (result.result === "success") {
        alert("Form submitted successfully!");
      } else {
        alert("Form submission failed. " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Check console for error.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>

        <form onSubmit={handleSubmit}>
          <Box display={'flex'} flexDirection={'column'}>
            <TextField name="name" label="Name" margin="normal" required value={formData.name} onChange={handleChange} />
            <TextField name="phone" label="Phone" margin="normal" required value={formData.phone} onChange={handleChange} />
            <TextField name="email" label="Email" margin="normal" required value={formData.email} onChange={handleChange} />

            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Are you?</FormLabel>
              <RadioGroup value={role} onChange={handleRoleChange}>
                <FormControlLabel value="student" control={<Radio />} label="Student" />
                <FormControlLabel value="graduate" control={<Radio />} label="Fresh Graduate" />
                <FormControlLabel value="professional" control={<Radio />} label="Working Professional" />
                <FormControlLabel value="career_break" control={<Radio />} label="Woman with long career break" />
              </RadioGroup>
            </FormControl>

            {role === 'student' && (
              <>
                <TextField name="college" label="College Name" fullWidth margin="normal" value={formData.college} onChange={handleChange} />
                <TextField name="department" label="Department" fullWidth margin="normal" value={formData.department} onChange={handleChange} />
                <TextField name="year" label="Current Year" fullWidth margin="normal" value={formData.year} onChange={handleChange} />
              </>
            )}
            {role === 'graduate' && (
              <>
                <TextField name="college" label="College Name" fullWidth margin="normal" value={formData.college} onChange={handleChange} />
                <TextField name="department" label="Department" fullWidth margin="normal" value={formData.department} onChange={handleChange} />
              </>
            )}
            {role === 'professional' && (
              <>
                <TextField name="experience" label="Years of Experience" fullWidth margin="normal" value={formData.experience} onChange={handleChange} />
                <TextField name="domain" label="Domain" fullWidth margin="normal" value={formData.domain} onChange={handleChange} />
                <TextField name="itOrNonIT" label="IT or Non-IT" fullWidth margin="normal" value={formData.itOrNonIT} onChange={handleChange} />
              </>
            )}

            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Do you need a Demo class?</FormLabel>
              <RadioGroup value={demo} onChange={(e) => setDemo(e.target.value)}>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
