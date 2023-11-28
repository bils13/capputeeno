import { styled } from "@stitches/react";


export const CardWrapper = styled('div', {
    width: '256px',
    background: 'var(--white)',
})

export const ImageWrapper = styled('div', {
    position: 'relative',
    width: '100%',
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