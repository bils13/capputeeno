import { styled } from "@stitches/react";


export const CartContainer = styled('section', {
    backgroundColor: '#F0F0F5',
    width: '100%',
    padding: '2rem 10rem',
    minHeight: '100vh',

    '@media (max-width: 768px)': {
        padding: '0.25rem 5rem',
    }
})

export const WrapperCart = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',

    '@media (max-width: 768px)': {
        flexDirection: 'column',
    }
})

export const Wrapper = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    variants: {
        'margin': {
            'margin': {
                marginTop: '0.7rem',
                marginBottom: '1.25rem',
            }
        },
        'alignItems': {
            'alignItems': {
                alignItems: 'center',
            }
        },
        'direction':{
            'column': {
                flexDirection: 'column',
                position: 'absolute',
                bottom: '0%',
                marginBottom: '1rem',
            }
        } 
    }
})

export const CartList = styled('div', {
    marginTop: '1.5rem',

    'h1': {
        textTransform: 'uppercase',
        fontSize: '24px',
        fontWeight: '500',
    }
})

export const TotalItems = styled('p', {
    marginTop: '0.5rem',
    fontSize: '16px',
    fontWeight: '300',
    color: 'var(--text-dark)',

    'span': {
        fontWeight: '600',
        color: 'var(--text-dark)',
    }
})

export const Card = styled('section', {
    marginTop: '1.5rem',
    display: 'flex', 
    'img': {
        width: '256px',
        height: '100%',
    },

    '@media (max-width: 1024px)': {
        flexDirection: 'column',
        maxWidth: '100vw',
        minWidth: '256px',

        'img': {
            minWidth: '256px',
            height: '100%',
        },
    }
})

export const CardInfoWrapper = styled('div', {
    borderRadius: '0 8px 8px 0',
    background: 'var(--white)',
    maxWidth: '738px',
    padding: '1rem',

    'h2': {
        fontSize: '22px',
        fontWeight: '300',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'var(--text-dark)',
    },

    '@media (max-width: 768px)': {
        maxWidth: '258px',

        'h2': {
            fontSize: '16px',
        }
    }
})

export const Description = styled('p', {
    marginTop: '0.8rem',
    fontSize: '14px',
    fontWeight: '400',
    marginBottom: '1.5rem',

    '@media (max-width: 768px)': {
        fontSize: '12px',
    }
})

export const UnitPrice = styled('p', {
    fontSize: '16px',
    fontWeight: '600',

    '@media (max-width: 768px)': {
        fontSize: '12px',
    }
})

export const QuantitySelect = styled('select', {
    width: '65px',
    height: '40px',
    padding: '4px',
    background: '#F3F5F6',
    border: '1px solid var(--text-dark)',
    borderRadius: '8px',
})

export const CartResume = styled('div', {
    position: 'relative',
    width: '352px',
    height: 'calc(100vh - 250px)',
    background: 'var(--white)',
    padding: '1rem 1.5rem',

    'h2': {
        fontSize: '20px',
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: '1.3rem',
    },

    '@media (max-width: 768px)': {
        marginTop: '1rem',
        width: '200px',
        padding: '0.5rem 1rem',
        height: '450px',
    }

})

export const PriceResume = styled('p', {
    fontSize: '16px',
    fontWeight: '400',
    color: 'var(--text-dark)',
    variants: {
        'bold': {
            'bold': {
                marginTop: '8px',
                fontWeight: '600',
                color: 'black',
            }
        }
    },

    '@media (max-width: 768px)': {
        fontSize: '12px',
    }
})

export const Button = styled('button', {
    marginTop: '2.2rem',
    width: '100%',
    height: '44px',
    background: '#51B853',
    border: 'none',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: '600',
    color: 'var(--white)',
    cursor: 'pointer',

    '&:hover':{ 
        background: '#408442',
        transition: '0.3s all',
    },

    '@media (max-width: 768px)': {
        fontSize: '12px',
    }
})

export const Links = styled('p', {
    color: 'var(--text-dark)',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
    marginBottom: '12px',
    variants: {
        margin: {
            'null': {
                marginBottom: '0px',
            }
        }
    },

    '@media (max-width: 768px)': {
        fontSize: '10px',
    }
})