import { styled } from "@stitches/react";

export const HomePageContainer = styled('section', {
    backgroundColor: '#F0F0F5',
    width: '100%',
    padding: '2rem 10rem',
    minHeight: '100vh',
    
    '@media (max-width: 768px)': {
        padding: '1rem 5rem',
    }
})

export const NavContainer = styled('section', {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media (max-width: 768px)': {
        flexDirection: 'column',
    }
    
})


