import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath:
            'https://cdn.shopify.com/s/files/1/0178/4492/8612/files/Desktop_Banner_5_39e10bbf-5c73-47bf-a50b-d13e5cbbe8f1.jpg?v=1678461842',
    },
    {

        imgPath:
            'https://cdn.shopify.com/s/files/1/0178/4492/8612/files/Desktop_Banner_eb60c266-1d0b-4ccf-a510-65238004b9d6.jpg?v=1678870428',
    },
    {
        imgPath:
            'https://cdn.shopify.com/s/files/1/0178/4492/8612/files/Desktop_Banner_1_a5ec67fb-020a-48cd-8f18-f76be23d625e.jpg?v=1678948731',
    }
];

function Slider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (

        <Box>
            <div style={{ position: "relative" }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img src={step.imgPath} alt="rooms" style={{ width: '100%', height: '70vh' }} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <div style={{
                        position: "absolute",
                          color: "white",
                         bottom: "5%",
                         width: '100%',
                       
                    
                     }}
                    >
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                        sx={{
                            backgroundColor: 'rgba(33, 25, 25, 0.08)'
                       }}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        sx={{
                            backgroundColor: "black", color: 'white', ":hover": {
                                backgroundColor: "black", color: 'white'
                        }}}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{
                        backgroundColor: "black", color: 'white', ":hover": {
                            backgroundColor: "black", color: 'white'
                        }
                    }}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
                />
                </div>
                </div>
        </Box>
    );
}

export default Slider;