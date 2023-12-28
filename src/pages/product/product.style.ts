import { styled } from "@stitches/react";

export const ProductContainer = styled('section', {
    backgroundColor: '#F0F0F5',
    width: '100%',
    padding: '2rem 10rem',
    minHeight: '100vh',

    '@media (max-width: 300px)':{
        padding: '0.2rem 1rem',
    },

    '@media only screen and (min-width: 300px) and (max-width: 1024px)':{
        padding: '0.25rem 5rem',
    }
})

