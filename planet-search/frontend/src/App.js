import './App.css';
import { useEffect, useState } from 'react';
import InputBox from './components/InputBox';
import { Button, Slide, Stack, Typography, Box } from '@mui/material';
import { computeResult } from './data/api';
import { ThemeProvider } from '@emotion/react';
import spaceTheme from './themes';
import AddressDisplay from './components/AddressDisplay';
import PlanetButton from './components/PlanetButton';

function App() {
    const [userAddress, setUserAddress] = useState('');
    const [selectedPlanet, setSelectedPlanet] = useState('');
    const [result, setResult] = useState('');

    const backgroundURL = 'https://blenderartists.org/uploads/default/optimized/4X/7/e/2/7e2d7bea4ac21388c4a96e1371f375c4ce00094b_2_1035x582.jpg'
    const planets = [
        { name: 'Mercury', colour: 'linear-gradient(45deg, #E6E6E6, #333333)' },
        { name: 'Venus', colour: 'linear-gradient(45deg, #FAD02E, #FF8C00)' },
        { name: 'Mars', colour: 'linear-gradient(45deg, #FF9733, #FF0000)' },
        { name: 'Jupiter', colour: 'linear-gradient(45deg, #F0E68C, #B8860B)' },
        { name: 'Saturn', colour: 'linear-gradient(45deg, #D2B48C, #8B4513)' },
        { name: 'Uranus', colour: 'linear-gradient(45deg, #00FFFF, #008080)' },
        { name: 'Neptune', colour: 'linear-gradient(45deg, #0000FF, #000080)' },
    ];

    const handlePlanetSelection = (e) => {
        const planet = e.target.id;
        setSelectedPlanet(planet);
    };

    const handleRestart = async () => {
        setUserAddress('');
        setSelectedPlanet('');
        setResult('');
    }

    useEffect(() => {
        const fetchResult = async () => {
            if (selectedPlanet && userAddress) {
                try {
                    const result = await computeResult(userAddress, selectedPlanet);
                    setResult(result);
                } catch {
                    console.log("Couldn't get result");
                }
            }
        }
        fetchResult();
    }, [selectedPlanet, userAddress])

    return (
        <ThemeProvider theme={spaceTheme} >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                minHeight='100vh'
                sx={{
                    backgroundImage: `url(${backgroundURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {!userAddress ?
                    <InputBox setUserAddress={setUserAddress} /> :
                    <Stack spacing={2} alignItems={'center'}>
                        <AddressDisplay address={userAddress} />
                        <Slide in={!!userAddress && !selectedPlanet} direction='right'>
                            <Box >
                                {planets.map((planet) => (
                                    <PlanetButton
                                        key={planet.name}
                                        handlePlanetSelection={handlePlanetSelection}
                                        planet={planet}
                                    />
                                ))}
                            </Box>
                        </Slide>
                        <Slide in={result} direction='right'>
                            <Stack spacing={2} alignItems={'center'}>
                                <Typography
                                    sx={{
                                        ...spaceTheme.typography.spaceText,
                                        WebkitTextStroke: '0.5px black',
                                        color: spaceTheme.palette.text.primary
                                    }}
                                >
                                    At an altitude of {Math.round(result.altitude)}°, {selectedPlanet} is {result.isVisible ? 'visible' : 'not visible'} from your address!
                                </Typography>
                                <Button
                                    onClick={handleRestart}
                                    variant='contained'
                                    sx={{
                                        ...spaceTheme.button.regular,
                                        ...spaceTheme.typography.spaceText,
                                        backgroundColor: spaceTheme.palette.primary.main,
                                        color: spaceTheme.palette.text.primary
                                    }}
                                >
                                    Start again
                                </Button>
                            </Stack>
                        </Slide>
                    </Stack>
                }
            </Box>
        </ThemeProvider>
    );
}

export default App;
