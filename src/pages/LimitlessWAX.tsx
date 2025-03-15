import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const InputLabelComponent = ({label}: {label: string}) => {
  return (    
    <Box width={{xs: "100%", sm: "calc(50% - 32px)"}} mr={4}>
      <Typography 
        variant="body2"
        sx={{ 
          mb: 1,
          fontSize: { xs: '0.875rem', sm: '1rem' }
        }}
      >
        {label}
      </Typography>
      <TextField
        margin="none"
        InputLabelProps={{ style: { color: '#fff' } }}
        sx={{ 
          input: { 
            color: '#fff',
            height: '20px',
            padding: '8px 12px',
            fontSize: { xs: '0.875rem', sm: '1rem' }
          },
          width: "100%",
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            backgroundColor: '#831F3F'
          }
        }}
      />
    </Box>
  )
}

const LimitlessWAX: React.FC = () => {
  return (
    <>
      {/* <Box
        sx={{
          bgcolor: "#4A1E2A",
          boxShadow: 3,
          m: { xs: 1, sm: 2 },
          p: { xs: 2, sm: 3, md: 4 },
          minHeight: { xs: '500px', sm: '600px', md: '70vh' },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <Typography 
          variant="h4" 
          sx={{
            fontWeight: "bold", 
            position: "absolute", 
            top: { xs: 12, sm: 16 },
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }
          }}
        >
          LimitlessWAX
        </Typography>

        <Box 
          display="flex" 
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="center" 
          alignItems="center"
          gap={{ xs: 2, sm: 3 }}
        >
          <Button 
            variant="outlined" 
            size="large" 
            sx={{
              my: 1,
              borderRadius: "0",
              color: "white",
              border: "1px dotted white",
              textTransform: 'none',
              fontWeight: "bold",
              width: { xs: '100%', sm: 'auto' },
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            Add Action +
          </Button>
          
          <Typography 
            variant="h6" 
            sx={{
              display: { xs: 'none', sm: 'block' },
              mx: 3, 
              color: "white"
            }}
          >
            or
          </Typography>
          
          <Button 
            variant="contained" 
            size="small" 
            sx={{
              my: 1,
              background: "#882140",
              borderRadius: "0",
              color: "white",
              border: "1px solid white",
              textTransform: 'none',
              fontWeight: "bold",
              width: { xs: '100%', sm: 'auto' },
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            Load
          </Button>
        </Box>

        <Box 
          bgcolor="#831F3F" 
          borderRadius={{ xs: 3, sm: 5 }}
          p={{ xs: 2, sm: 3 }}
          textAlign="center"
          position="absolute"
          sx={{
            transform: { xs: 'none', sm: 'translate(-50%, 0)' },
            width: { xs: 'calc(100% - 32px)', sm: 'auto' }
          }}
          bottom={{ xs: 16, sm: 24 }}
          left={{ xs: 16, sm: '50%' }}
          display="flex"
          flexWrap={{ xs: 'wrap', sm: 'nowrap' }}
          gap={{ xs: 2, sm: 4 }}
          justifyContent="center"
        >
          {[1, 2, 3, 4].map((_, index) => (
            <Button
              key={index}
              sx={{
                border: "1px dotted white",
                color: "white",
                fontSize: { xs: 30, sm: 40, md: 50 },
                fontWeight: "bold",
                borderRadius: "0",
                height: { xs: 50, sm: 60 },
                width: { xs: 50, sm: 60 },
                minWidth: { xs: 50, sm: 60 },
                p: 0,
                '&:hover': {
                  border: "1px solid white",
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <span>+</span>
            </Button>
          ))}
        </Box>
      </Box> */}
      
      <Box
        sx={{
          bgcolor: "#4A1E2A",
          boxShadow: 3,
          m: { xs: 1, sm: 2 },
          p: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          position: "relative",
          gap: 1.5,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">          
          <Typography 
            variant="h4" 
            sx={{
              fontWeight: "bold", 
              color: "white",
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }
            }}
          >
            LimitlessWAX
          </Typography>
          <Box display="flex" gap={1}>
            <Button 
              variant="contained" 
              size="small"
              sx={{
                borderRadius: "0",
                bgcolor: "#882140",
                color: "white",
                textTransform: 'none',
                px: 2,
                width: { xs: '100%', sm: 'auto' },
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              Save
            </Button>
            <Button 
              variant="contained" 
              size="small"
              sx={{
                borderRadius: "0",
                bgcolor: "#882140",
                color: "white",
                textTransform: 'none',
                px: 2,
                width: { xs: '100%', sm: 'auto' },
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              Load
            </Button>            
          </Box>
        </Box>
        <InputLabelComponent label="Name this action" />
        <InputLabelComponent label="Smart contract address" />
        <Box display="flex">
          <InputLabelComponent label="Action #1" />
          <InputLabelComponent label="Data #1" />
        </Box>
        <Box display="flex">
          <InputLabelComponent label="Action #2" />
          <InputLabelComponent label="Data #2" />
        </Box>
        <Box display="flex">
          <InputLabelComponent label="Action #3" />
          <InputLabelComponent label="Data #3" />
        </Box>
        <Box display="flex">
          <InputLabelComponent label="Action #4" />
          <InputLabelComponent label="Data #4" />
        </Box>
        <Button 
          variant="outlined" 
          size="small" 
          sx={{
            my: 1,
            borderRadius: "0",
            color: "white",
            border: "1px dotted white",
            textTransform: 'none',
            fontWeight: "bold",
            width: "fit-content",
            fontSize: { xs: '0.875rem', sm: '1rem' }
          }}
        >
          Add Action +
        </Button>
        <Box display="flex" gap={6}>
          <Box>
            <Typography 
              variant="h6"
              sx={{ 
                mb: 1,
              }}
            >
              How much CPU
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1, sm: 2 },
              mb: { xs: 1, sm: 2 }
            }}>
              <TextField
                margin="none"
                InputLabelProps={{ style: { color: '#fff' } }}
                sx={{ 
                  input: { 
                    color: '#fff',
                    height: '20px',
                    padding: '8px 12px',
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  },
                  width: "60px",
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    backgroundColor: '#831F3F'
                  }
                }}
              />
              <Typography 
                variant="h6"
                sx={{fontWeight: "bold", color: '#EDEDED',}}
              >
                ms
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography 
              variant="h6"
              sx={{ 
                mb: 1,
              }}
            >
              Pay with
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1, sm: 2 },
              mb: { xs: 1, sm: 2 }
            }}>
              <Box
                margin="none"
                sx={{ 
                  color: '#EDEDED',
                  bgcolor: "#831F3F",
                  height: 36,
                  width: "60px",
                  textAlign: "center",
                  py: "6px"
                }}
              >
                <Typography sx={{fontWeight: "bold"}}>WAX</Typography>                
              </Box>
              <Typography 
                variant="h6"
                sx={{ 
                  color: '#EDEDED',
                }}
              >
                or
              </Typography>
              <Button 
                variant="outlined" 
                size="small" 
                sx={{
                  my: 1,
                  borderRadius: "0",
                  color: "white",
                  border: "1px dotted white",
                  textTransform: 'none',
                  fontWeight: "bold",
                  width: "fit-content",
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              >
                Custom Token +
              </Button>
            </Box>
          </Box>
        </Box>
        <Box display="flex" gap={2}>
          <Button 
            variant="contained" 
            size="small" 
            sx={{
              mb: 1,
              background: "#882140",
              borderRadius: "0",
              color: "white",
              border: "1px solid white",
              textTransform: 'none',
              minWidth: 'fit-content',
              width: 'fit-content',
              px: { xs: 3, sm: 4 },
              fontSize: { xs: '0.875rem', sm: '20px' },
              '&:hover': {
                background: "#9C2749"
              }
            }}
          >
            Submit
          </Button>
          <Button 
            variant="contained" 
            size="small" 
            sx={{
              mb: 1,
              background: "#882140",
              borderRadius: "0",
              color: "white",
              border: "1px solid white",
              textTransform: 'none',
              minWidth: 'fit-content',
              width: 'fit-content',
              px: { xs: 3, sm: 4 },
              fontSize: { xs: '0.875rem', sm: '20px' },
              '&:hover': {
                background: "#9C2749"
              }
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LimitlessWAX;