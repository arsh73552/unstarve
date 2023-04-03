import React from 'react';
import ReactDOM from 'react-dom/client';
import Typography from '@mui/material/Typography';
import './style.css';
import { Button, ButtonGroup } from '@mui/material';
import Stack from '@mui/material/Stack';
import ActionCard from '../components/card'
import background from "../images/background.png";
import Log from '../pages/LoginPage.js'
import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#BB6B60',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));


export function LandingPage() {
    const [distance, setDistance] = useState('Close-by');
    const [cuisine, setCuisine] = useState('Indian');
    const [price, setPrice] = useState('200');

    const returnDistance = (e) => {
        setDistance(e.target.value)
        console.log(distance)
    }

    const returnCuisine = (e) => {
        setCuisine(e.target.value)
        console.log(cuisine)
    }

    const returnPrice = (e) => {
        setPrice(e.target.value)
        console.log(price)
    }
    

    
    const [flag, setFlag] = React.useState(true);

    const handleClick = () => {
        setFlag(!flag);
    };
    return (
        <div className='LandingPage' style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'fit',
            height: "100vh"
        }}>
            <div className='heading'>
                <Typography style={{ color: 'white' }} variant="h4" component="h4">
                    UnStarve
                </Typography>
                <Typography style={{ color: 'white' }} variant="h6" component="h6">
                    No more starving from indecisiveness
                </Typography>
                {/* <Button variant="outlined" size="medium" style={{ borderRadius: 20, top:-70, left: 600, color: 'white', borderColor: 'white' }}
                 onClick = {(Log)}>
                    Log back in
                </Button> */}
            </div>
            <ThemeProvider theme={theme}>
            <div className='box'>
                <div className='textMessages'>
                    <div className='msg' style={{ height: '42px', order: 0 }}>Hey food aficionado 👋, what’s your craving for today!</div>
                    <div className='msg' style={{ height: '64px', order: 1 }}>Help me out, tell me a few things about you, and I’ll find th best places to eat around you</div>
                    <div className='msg' style={{ height: '306px', order: 2 }}>
                        <div className='ques'>
                            How far do you want to travel?
                            <ButtonGroup size="small" >
                                <Button  
                                onClick={handleClick}
                                color={flag ? "primary": "secondary"}
                                variant = {flag ? "outlined":"contained"}
                                aria-label={flag ? "contained button group":"contained button group"}
                                style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20, color: 'black', borderColor: 'black' }}  
                                value={'Close-by'}>Close-by</Button>
                                <Button  
                                style={{ color: 'black', borderColor: 'black' }} onClick={returnDistance} value={'Lil further'}>Lil further</Button>
                                <Button  style={{ color: 'black', borderColor: 'black' }} onClick={returnDistance} value={'Ready to travel'}>Ready to travel</Button>
                                <Button  style={{ color: 'black', borderColor: 'black' }} onClick={returnDistance} value={'Very Far'}>Very Far</Button>
                                <Button  style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20, color: 'black', borderColor: 'black' }} onClick={returnDistance} value={'Earth'}>Earth</Button>
                            </ButtonGroup>
                        </div>
                        <div className='ques'>
                            What type of cuisines do you like
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }} onClick={returnCuisine} value={'Indian'}>Indian</Button>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }} onClick={returnCuisine} value={'Italian'}>Italian</Button>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }} onClick={returnCuisine} value={'Mexican'}>Mexican</Button>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }} onClick={returnCuisine} value={'Afghani'}>Afghani</Button>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }} onClick={returnCuisine} value={'Mughlai'}>Mughlai</Button>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }} onClick={returnCuisine} value={'Lebanese'}>Lebanese</Button>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }} onClick={returnCuisine} value={'Greek'}>Greek</Button>
                            </Stack>
                        </div>
                        <div style={{ paddingTop: 30 }} className='ques'>
                            How much do you plan on spending?
                            <ButtonGroup size="medium" variant="outlined" aria-label="outlined button group">
                                <Button style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20, color: 'black', borderColor: 'black' }} onClick={returnPrice} value={'200'}>200</Button>
                                <Button style={{ color: 'black', borderColor: 'black' }} onClick={returnPrice} value={'200-500'}>200-500</Button>
                                <Button style={{ color: 'black', borderColor: 'black' }} onClick={returnPrice} value={'500-1000'}>500-1000</Button>
                                <Button style={{ color: 'black', borderColor: 'black' }} onClick={returnPrice} value={'1000-2000'}>1000-2000</Button>
                                <Button style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20, color: 'black', borderColor: 'black' }} onClick={returnPrice} value={'2000+'}>2000+</Button>
                            </ButtonGroup>
                        </div>
                    </div>

                    {/* <div className='msg' style={{ height: '64px', order: 3 }}>
                        Okay, so you like a close-by restaurant with Indian cuisine which is moderately expensive.
                    </div>
                    <div className='msg' style={{ height: '42px', order: 4 }}>
                        Here are some personalised suggestions for you:
                    </div>
                    <div className='msg' style={{ height: '250px', order: 5 }}>
                        <ActionCard restrauntName='Nanados' distance='2' price='200'/>
                    </div>
                    <div className='msg' style={{ height: '250px', order: 5 }}>
                        <ActionCard restrauntName='testPhase' distance='5' price='600'/>
                    </div> */}

                    <Button variant="contained" sx={{ borderRadius: 10, backgroundColor: '#FFCB68', width: 570, height: 40, color: 'black', border: 'solid', borderWidth: 1, fontWeight: 'bold', order: 3 }}
                        onClick = {(Log)}
                    >Give me suggestions</Button>
                    <Typography className="quote" style={{ color: 'white', fontStyle:'italic', order: 4}} variant="body1" component="body1">
                        “Nothing brings people together like good food”
                    </Typography>
                </div>
            </div>
            </ThemeProvider>
            
        </div>
    );
}