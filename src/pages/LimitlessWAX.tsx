import React, {useState} from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const InputLabelComponent = ({label}: {label: string}) => {
  return (    
    <Box 
      width={{ xs: "100%", sm: "calc(50% - 16px)" }} 
      sx={{ 
        mb: { xs: 2, sm: 0 }
      }}
    >
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
        fullWidth
        margin="none"
        InputLabelProps={{ style: { color: '#fff' } }}
        sx={{ 
          input: { 
            color: '#fff',
            height: '20px',
            padding: '8px 12px',
            fontSize: { xs: '0.875rem', sm: '1rem' }
          },
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

  const [isAddForm, setIsAddForm] = useState(1);

  return (
    <>
      {isAddForm ? (
        <Box
          sx={{
            bgcolor: "#4A1E2A",
            boxShadow: 3,
            m: { xs: 1, sm: 2 },
            p: { xs: 2, sm: 3, md: 4 },
            minHeight: { xs: '400px', sm: '500px', md: '70vh' },
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
              onClick={() => setIsAddForm(0)}
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
        </Box>
      ) : (
      <Box
        sx={{
          bgcolor: "#4A1E2A",
          boxShadow: 3,
          m: { xs: 1, sm: 2 },
          p: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          position: "relative",
          gap: { xs: 2, sm: 3 },
        }}
      >
        <Box 
          display="flex" 
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretch', sm: 'center' }}
          justifyContent="space-between"
          gap={2}
        >          
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
          <Box 
            display="flex" 
            gap={1}
            sx={{
              flexDirection: 'row'
            }}
          >
            {['Save', 'Load'].map((text) => (
              <Button 
                key={text}
                variant="contained" 
                size="small"
                onClick={text === 'Save' ? () => setIsAddForm(1) : undefined}
                sx={{
                  borderRadius: "0",
                  bgcolor: "#882140",
                  color: "white",
                  textTransform: 'none',
                  px: { xs: 2, sm: 3 },
                  width: { xs: '50%', sm: 'auto' },
                  fontSize: { xs: '0.875rem', sm: '1rem' }
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 2, sm: 3 } }} display="flex" flexDirection="column" gap={{ xs: 2, sm: 3 }}>
          <InputLabelComponent label="Name this action" />
          <InputLabelComponent label="Smart contract address" />
          
          {[1, 2, 3, 4].map((num) => (
            <Box 
              key={num}
              display="flex" 
              flexDirection={{ xs: 'column', sm: 'row' }}
              gap={{ xs: 2, sm: 4 }}
            >
              <InputLabelComponent label={`Action #${num}`} />
              <InputLabelComponent label={`Data #${num}`} />
            </Box>
          ))}
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
        >Add Action +</Button>
        <Box 
          display="flex" 
          flexDirection={{ xs: 'column', sm: 'row' }}
          gap={{ xs: 3, sm: 6 }}
        >
          <Box>
            <Typography 
              variant="h6"
              sx={{ 
                mb: { xs: 1, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.25rem' }
              }}
            >
              How much CPU
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1, sm: 2 }
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
                  width: { xs: '80px', sm: '60px' },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                  },
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    backgroundColor: '#831F3F'
                  }
                }}
              />
              <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
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
              >Custom Token +</Button>
            </Box>
          </Box>
        </Box>
        <Box 
          display="flex" 
          gap={{ xs: 2, sm: 3 }}
          mt={{ xs: 2, sm: 0 }}
          pb={8}
        >
          {['Submit', 'Reset'].map((text) => (
            <Button 
              key={text}
              variant="contained" 
              size="small" 
              onClick={text === 'Submit' ? () => setIsAddForm(1) : undefined}
              sx={{
                background: "#882140",
                borderRadius: "0",
                color: "white",
                border: "1px solid white",
                textTransform: 'none',
                minWidth: 'fit-content',
                width: { xs: '100%', sm: 'fit-content' },
                px: { xs: 2, sm: 4 },
                fontSize: { xs: '0.875rem', sm: '1rem' },
                '&:hover': {
                  background: "#9C2749"
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Box>
      )}
      
    </>
  );
};

export default LimitlessWAX;