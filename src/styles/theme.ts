import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: "#f4f4f4"
        },
        primary: {
            main: '#4a00ff',
            contrastText: '#f4f4f4'
        },
        secondary: {
            main: '#f4f4f4',
            contrastText: '#111',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    paddingTop: 60,
                    paddingBottom: 60,
                    paddingLeft: 12,
                    paddingRight: 12,
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    whiteSpace: 'nowrap',
                    textTransform: 'capitalize'
                }
            }
        }
    }
});

export default theme;