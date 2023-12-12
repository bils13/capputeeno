import { styled } from '@stitches/react';

export const HeaderContainer = styled('header', {
    backgroundColor: `var(--white)`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 10rem',

    '& h1': {
        color: `var(--gray)`,
        textTransform: 'lowercase',
        fontSize: '48px',

        '&:hover': {
            cursor: 'pointer',
        }
    }
})

export const HeaderWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
})

export const InputContainer = styled('div', {
    width: '352px',
    padding: '0.5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#F3F5F6',
    borderRadius: '8px',
})

export const Input = styled('input', {
    width: '80%',
    background: '#F3F5F6',
    fontSize: '14px',
    border: 'none',
    outline: 'none',

    '&, &::placeholder': { 
        textAlign: 'left',
      }
})

export const BagWrapper = styled('div', {
    position: 'relative',

    '& p': {
        position: 'absolute',
        top: '18px',
        right: '-8px',
        fontSize: '12px',
        height: '22px',
        width: '20px', 
        color: 'var(--white)',
        border: '1px solid red',
        background: 'red',
        borderRadius: '100%',
        textAlign: 'center',
    },

    '&:hover': {
        cursor: 'pointer',
    }
})
