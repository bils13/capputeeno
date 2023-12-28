import { styled } from "@stitches/react";


export const ProductContainerDetails = styled('div', {
    marginTop: '1rem',
    width: '100%',
    height: '580px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '2rem',

    '@media (max-width: 1024px)':{
        flexDirection: 'column',
        height: '100%',
    }
})

export const Image = styled('img', {
    height: 'inherit',
    width: '640px',
    borderRadius: '5px',

    '@media only screen and (max-width: 768px)':{
        width: '100%',
    }
})

export const Details = styled('div', {
    position: 'relative',
    height: '100%',
    width: '640px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',

    'label': {
        fontSize: '16px',
        color: 'var(--text-dark)',
        marginBottom: '0.7rem',
    },

    'h1': {
        fontSize: '32px',
        fontWeight: '300',
        color: 'var(--text-dark)',
        marginBottom: '4px',
    },

    '@media only screen and (max-width: 768px)':{
        width: '100%',
    }
})

export const Price = styled('p', {
    fontSize: '20px',
    fontWeight: '900',
    color: 'var(--shapes-dark)',
    marginBottom: '1.5rem',
})

export const Freight = styled('p', {
    fontSize: '12px',
    fontWeight: '400',
    color: 'var(--text-dark)',
    marginBottom: '2.5rem',
})

export const DescriptionWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    'label': {
        textTransform: 'uppercase',
        fontSize: '16px',
        fontWeight: '500',
        color: 'var(--text-dark)',
        marginBottom: '0.25rem',
    },

    'p': {
        fontSize: '14px',
        fontWeight: '400',
        color: 'var(--text-dark)',
    }
})

export const Button = styled('button', {
    position: 'absolute',
    width: '100%',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'var(--brand-blue)',
    padding: '10px 0',
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: 500,
    color: 'var(--white)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    bottom: '0',

    '@media only screen and (max-width: 768px)':{
        marginTop: '1rem',
        position: 'relative',
        marginBottom: '1rem',
        padding: '10px 10px',
    }
})