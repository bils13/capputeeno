import { styled } from "@stitches/react";

interface MenuProps {
    disable: boolean
}

export const Organize = styled('div', {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    '& p':{
        fontSize: '16px',

        '@media (max-width: 768px)': {
            fontSize:'12px',
        }
    },

    '&:hover': {
        cursor: 'pointer',
    }
})

export const Menu = styled<MenuProps>('ul', {
    backgroundColor: 'var(--white)',
    position: 'absolute',
    right: '0px',
    listStyle: 'none',
    textAlign: 'left',
    width: '176px',
    boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.10)',
    borderRadius: '4px',
    zIndex: '999',
    top: '100%',
    variants: {
        disable: {
            true: {
                padding: '0.8rem 1rem',
                transition: '0.3s all',
                visibility: 'visible',
            },
            false: {
                visibility: 'hidden',
            }
        }
    }
})

export const Options = styled('li', {
    fontSize: '14px',
    width: '100%',
    gap: '4px',
    lineHeight: '1.375rem',

    '&:hover': {
        fontWeight: '600',
    }
})