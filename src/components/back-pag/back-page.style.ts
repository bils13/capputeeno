import { styled } from "@stitches/react";

export const IconWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',

    'p': {
        color: 'var(--text-dark)',
        fontSize: '14px',
        fontWeight: '500',
    }
})