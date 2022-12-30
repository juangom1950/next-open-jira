import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';



export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        },
        },

        components: {
            // we add here Mui. This is going to change the Appbar that is in the Navbar.tsx
            MuiAppBar: {
                defaultProps: {
                    elevation: 0
                },
                styleOverrides: {
                    root: {
                        backgroundColor: '#4a148c'
                    }
                }
            }
        }
});