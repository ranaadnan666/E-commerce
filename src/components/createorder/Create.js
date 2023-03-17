import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import Shipping from './shipping/Shipping';
import ReviewPayment from './reviewpayment/ReviewPayment';

const steps = ['Shipping', 'Review & Payment'];

export default function Create() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 0;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            {/* go back to home page */}
            <Box  width={{ md:"10%",xs:'50%',sm:'70%'}} mx={'auto'} pt={5} mb={2}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link  style={{ textDecoration: 'none', color:'gray'}} to="/">
                        Home
                    </Link>
                    <Typography color="gray">Create Order</Typography>
                </Breadcrumbs>
            </Box>

            {/* shipping way  */}
            <Box width={{ md: "70%", xs: '90%', sm: '90%' }} mx={'auto'} mb={2}>
                <Box width={{ md: "30%", xs: '100%', sm: '100%' }}  mx={'auto'} >
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                    </Stepper>
                </Box>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset} sx={{
                                backgroundColor: '#000000', color: 'white', height: '50px', ":hover": {
                                    backgroundColor: '#000000', color: 'white'
                                }
                            }} >finished</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {/* shipping side */}
                            <Box>
                                {activeStep === steps.length - 1 ? <ReviewPayment/> : <Shipping />}
                                
                           </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1  }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}

                                <Button onClick={handleNext} sx={{
                                    backgroundColor: '#000000', color: 'white', height: '50px', ":hover": {
                                        backgroundColor: '#000000', color: 'white'
                                    }
                                }}>
                                {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </>
    );
}
