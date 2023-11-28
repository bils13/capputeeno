import { styled } from "@stitches/react"

interface NavLinkProps {
    isActive?: string,
}

export const LinkWrapper = styled('div', {
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