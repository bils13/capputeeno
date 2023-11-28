import { styled } from "@stitches/react";

interface PageProps {
    isActive: 1 | 2 | 3 | 4 | 5,
}

interface ArrowProps {
    rotates: string,
}

export const PContainer = styled('section',{
    marginTop: '1.25rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '2px',
})

export const Page = styled<PageProps>('p',{
    width: '2rem',
    height: '2rem',
    padding: '0.25rem',
    borderRadius: '0.5rem',
    backgroundColor: 'var(--light-gray)',
    textAlign: 'center',
    fontSize: '1rem',
    color: 'var(--text-dark)',
    fontWeight: '400',
    variants: {
        isActive: {
            1: {
                color: 'var(--orange-low)',
                border: '2px solid var(--orange-low)',
            },
            2: {
                color: 'var(--orange-low)',
                border: '2px solid var(--orange-low)',
            },
            3: {
                color: 'var(--orange-low)',
                border: '2px solid var(--orange-low)',
            }, 
            4: {
                color: 'var(--orange-low)',
                border: '2px solid var(--orange-low)',
            },
            5: {
                color: 'var(--orange-low)',
                border: '2px solid var(--orange-low)',
            }
        }
    },

    '&:hover':{
        cursor: 'pointer',
    }
})

export const ArrowContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2px',
    marginLeft: '0.5rem',
})

export const ArrowWrapper = styled<ArrowProps>('div', {
    width: '2rem',
    height: '2rem',
    padding: '0.25rem',
    borderRadius: '0.5rem',
    backgroundColor: 'var(--light-gray)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2px',
    variants: {
        rotates: {
            90: {
                transform: 'rotate(90deg)'
            },
            270: {
                transform: 'rotate(270deg)'
            }
        }
    },

    '&:hover': {
        cursor: 'pointer',
    }
})