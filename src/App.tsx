import './App.css'
import { RouterProvider } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material'; 
import router from '@/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ConnectWallet from './components/ConnectWallet';
import WalletDialog from './components/WalletDialog';

const theme = createTheme();


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{px:{lg:'6rem',sm:'2rem',xs:'0.5rem'},mx:'auto',boxSizing:'border-box',maxWidth:'1700px'}}>
        <Header />
        <RouterProvider router={router} />
        <ConnectWallet />
        <WalletDialog />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
