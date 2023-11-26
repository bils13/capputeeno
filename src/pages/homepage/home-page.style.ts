import { styled } from "@stitches/react";

export const HomePageContainer = styled('section', {
    backgroundColor: '#F0F0F5',
    width: '100%',
    padding: '2rem 10rem',
    height: '100vh',
})

export const NavContainer = styled('section', {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})


export const Organize = styled('div', {
    display: 'flex',
    alignItems: 'center',

    '& p':{
        fontSize: '16px',
    },

    '&:hover': {
        cursor: 'pointer',
    }
})