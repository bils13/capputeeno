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
    '@media (max-width: 768px)': {
        fontSize:'12px',
    },
    variants: {
        isActive: {
            all: {
                fontSize: '22px',
                fontWeight: '600',
                borderBottom: '4px solid var(--orange-low)',
                '@media (max-width: 768px)': {
                    fontSize:'14px',
                }
            },
            't-shirts': {
                fontSize: '22px',
                fontWeight: '600',
                borderBottom: '4px solid var(--orange-low)',
                '@media (max-width: 768px)': {
                    fontSize:'12px',
                }
            },
            mugs: {
                fontSize: '22px',
                fontWeight: '600',
                borderBottom: '4px solid var(--orange-low)',
                '@media (max-width: 768px)': {
                    fontSize:'12px',
                }
            }
        }
    },

    '&:hover': {
        cursor: 'pointer',
    }
})