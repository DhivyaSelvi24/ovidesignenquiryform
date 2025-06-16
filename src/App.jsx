import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import customTheme from './theme/CustomTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryForm from './components/enquiryform.jsx'

function App() {
  

  return (
    <>
  <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <div
        style={{
          backgroundColor: customTheme.palette.background.default,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          minHeight: '100vh',
          paddingBottom: '2rem', // ensure footer spacing
        }}
      >
         <img
          src="/images/ovilogo.png"
          alt="Ovi Logo"
          style={{
            height: 60,
            marginTop: '2rem',
            marginBottom: '1rem',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
          }}
        />
        <Header />
        <Container maxWidth="sm" sx={{ py: 4 }}>
          <EnquiryForm />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>

     
    </>
  )
}

export default App
