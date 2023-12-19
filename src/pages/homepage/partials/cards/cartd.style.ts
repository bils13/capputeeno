import { styled } from "@stitches/react";


export const CardsContainer = styled('section',{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 256px)',
    marginTop: '2rem',
    maxWidth: '100%',
    gridGap: '32px',
    justifyContent: 'space-between',
    marginBottom: '4.5rem',

    '@media (max-width: 1024px)': {
        justifyContent: 'center'
    }
})