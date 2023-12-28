import { styled } from "@stitches/react";


export const CardWrapper = styled('div', {
    width: '256px',
    background: 'var(--white)',
    borderRadius: '8px',

    '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.1)',
        transition: '0.3s all',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }
})

export const Image = styled('img', {
    borderRadius: '8px 8px 0 0',
    width: '256px',
    height: '300px',
})

export const TextWrapper = styled('div', {
    marginTop: '0.25rem',
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
    color: 'var(--text-dark)',

    'label': {
        lineHeight: '150%',
        fontSize: '16px',
    }
})

export const Line = styled('div', {
    width: '100%',
    border: '1px solid #DCE2E5',
    marginTop: '0.25rem',
})

export const Price = styled('p', {
    marginTop: '0.25rem',
    fontSize: '14px',
    fontWeight: '600',
    color: 'black',
})