import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';

const InputBox = ({ setUserAddress }) => {
    const theme = useTheme();
    const [inputValue, setInputValue] = useState('');

    const handleTextChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmitAddress = (e) => {
        if (inputValue) {
            setUserAddress(inputValue)
        }
        e.preventDefault();
    };

    return (
        <Box
            component='form'
            noValidate
            autoComplete='true'
            onSubmit={handleSubmitAddress}
            display='flex'
            sx={{
                backgroundColor: theme.palette.background.paper
            }}
        >
            <TextField
                onChange={handleTextChange}
                type='text'
                placeholder='Address'
                sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderStyle: 'none',
                    }
                }}
                inputProps={{
                    style: {
                        ...theme.typography.spaceText,
                        color: theme.palette.text.primary,
                    },
                }}
            />
            <Button
                type='submit'
                variant='contained'
                sx={{
                    ...theme.button,
                    ...theme.typography.spaceText,
                    backgroundColor: theme.palette.primary.main
                }}
            >
                Submit
            </Button>
        </Box>
    );
}

export default InputBox;