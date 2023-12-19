import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PlanetButton = ({ handlePlanetSelection, planet }) => {
    const theme = useTheme();

    return (
        <Button
            id={planet.name}
            onClick={handlePlanetSelection}
            sx={{
                background: planet.colour,
                color: theme.palette.text.primary,
                fontFamily: 'monospace',
                fontSize: 16,
                borderRadius: '50%',
                margin: theme.spacing(2),
                padding: theme.spacing(2),
                width: theme.spacing(10),
                height: theme.spacing(10),
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.secondary.dark}, ${theme.palette.primary.dark})`,
                },
            }}
        >
            {planet.name}
        </Button>
    );
};

export default PlanetButton;
