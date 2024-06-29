import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/system';
import { useMediaQuery, Grid } from '@mui/material';

const marks = [
  {
    value: 0,
    label: 'Strongly Disagree',
  },
  {
    value: 25,
    label: 'Disagree',
  },
  {
    value: 50,
    label: 'Neutral',
  },
  {
    value: 75,
    label: 'Agree',
  },
  {
    value: 100,
    label: 'Strongly agree',
  },
];

const CustomSlider = styled(Slider)({
  color: 'rgb(32, 173, 180)', // Custom color
  '& .MuiSlider-thumb': {
    backgroundColor: 'rgb(32, 173, 180)', // Thumb color
  },
  '& .MuiSlider-track': {
    backgroundColor: 'rgb(32, 173, 180)', // Track color
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#d8d8d8', // Rail color
  },
  '& .MuiSlider-mark': {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#A0A0A0',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'black',
  },
  '& .MuiSlider-markLabel': {
    fontSize: '21px', // Increase font size
    color: '#343333',
  },
});

export default function SliderBar({ value, onChange }) {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');

  const getWidth = () => {
    if (isSmallScreen) return '90%';
    if (isMediumScreen) return '70%';
    return '800px';
  };

  return (
    <Grid container justifyContent="center" sx={{ marginTop: '10%' }}>
      <Box sx={{ width: getWidth() }}>
        <CustomSlider
          aria-label="Restricted values"
          value={value}
          step={null}
          marks={marks}
          onChange={(event, newValue) => onChange(newValue)}
        />
      </Box>
    </Grid>
  );
}
