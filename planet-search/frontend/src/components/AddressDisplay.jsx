import React from 'react';
import Paper from '@mui/material/Paper';
import { useTheme } from '@emotion/react';

const AddressDisplay = ({ address }) => {
    const theme = useTheme();

    return (
        <Paper
            elevation={3}
            sx={{
                padding: 2,
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                ...theme.typography.spaceText
            }}
        >
            <strong>Your address:</strong> {address}
        </Paper>
    );
};

export default AddressDisplay;