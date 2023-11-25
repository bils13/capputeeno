import { styled } from "@stitches/react";

interface NavLinkProps {
    isActive?: string,
}

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

export const NavWrapper = styled('div', {
    gap: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    listStyle: 'none',
})

export const Link = styled<NavLinkProps>('li',{
    textTransform: 'uppercase',
    fontWeight: '400',
    fontSize: '18px',
    variants: {
        isActive: {
            all: {
                fontSize: '22px',
                fontWeight: '600',
                borderBottom: '4px solid var(--orange-low)'
            },
            't-shirts': {
                fontSize: '22px',
                fontWeight: '600',
                borderBottom: '4px solid var(--orange-low)'
            },
            mugs: {
                fontSize: '22px',
                fontWeight: '600',
                borderBottom: '4px solid var(--orange-low)'
            }
        }
    },

    '&:hover': {
        cursor: 'pointer',
    }
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