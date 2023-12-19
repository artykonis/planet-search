import { createTheme } from '@mui/material/styles';

const spaceTheme = createTheme({
    palette: {
        primary: {
            main: '#0d47a1', // Dark Blue
        },
        secondary: {
            main: '#4e342e', // Brown
        },
        background: {
            default: '#000000', // Black
            paper: '#111111',   // Dark Gray
        },
        text: {
            primary: '#ffffff', // White
            secondary: '#bdbdbd', // Light Gray
        }
    },
    typography: {
        spaceText: {
            textAlign: 'center',
            fontSize: 25,
            fontFamily: 'monospace',
            fontWeight: 'bold',
            letterSpacing: '2px'
        }
    }, 
    button: {
        regular: {
            marginLeft: '16px',
            borderRadius: 0,
        }
    }
});

export default spaceTheme;