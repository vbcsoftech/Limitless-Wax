import React, { ReactNode } from "react";
import { Box, Button, Typography, SxProps, Theme } from "@mui/material";
import { SystemProps } from '@mui/system';

// Interface definitions
interface StyledBoxProps extends SystemProps {
  children: ReactNode;
  width?: any;
  bgcolor?: string;
  textAlign?: "center" | "left" | "right";
  sx?: SxProps<Theme>;
}

interface StatsBoxProps {
  title: string;
  value: string | number;
}

interface NavigationButtonProps {
  text: string;
}

interface EarningsDisplayProps {
  title: string;
  value: string | number;
}

// Reusable styled components
const StyledBox = ({ children, width = '100%', sx, ...props }: StyledBoxProps) => (
  <Box
    sx={{
      boxShadow: "10px 10px 5px #00000026",
      borderRadius: { xs: 3, md: 5 },
      p: { xs: 1, sm: 2 },
      width: { xs: '100%', md: width },
      ...sx
    }}
    {...props}
  >
    {children}
  </Box>
);

const StatsBox = ({ title, value }: StatsBoxProps) => (
  <StyledBox sx={{ bgcolor: "#4A1E2A", width: { xs: '100%', md: '50%' } }}>
    <Typography 
      variant="h6" 
      sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
    >
      {title}
    </Typography>
    <Typography 
      variant="h4" 
      sx={{
        textAlign: "center",
        py: { xs: 2, sm: 4 },
        fontSize: { xs: '1.75rem', sm: '2.125rem' }
      }}
    >
      {value}
    </Typography>
  </StyledBox>
);

const ActionButton = ({ title }: { title: string }) => (
  <StyledBox 
    sx={{
      bgcolor: "#391E24",
      textAlign: "center"
    }}
  >
    <Typography 
      variant="h6" 
      sx={{
        fontWeight: "bold",
        fontSize: { xs: '1rem', sm: '1.25rem' },
        py: {xs: 1/2, sm: 1}
      }}
    >
      {title}
    </Typography>
  </StyledBox>
);

const NavigationButton = ({ text }: NavigationButtonProps) => (
  <Button
    variant="contained"
    sx={{ 
      backgroundColor: "#5C2736", 
      color: "#fff",
      width: { xs: '100%', sm: '50%' },
      p: { xs: 1.5, sm: 2, md: 4 },
      borderRadius: { xs: 3, md: 5 },
      fontSize: { xs: '14px', sm: '16px', md: '18px' },
      display: "flex",
      justifyContent: "space-between",
      '&:hover': {
        backgroundColor: "#6C3142"
      }
    }}
  >
    {text}
    <Typography 
      variant="h4" 
      fontWeight="700" 
      fontSize={{ xs: '1.5rem', sm: '2rem' }}
    >
      &#62;
    </Typography>
  </Button>
);

const EarningsDisplay = ({ title, value }: EarningsDisplayProps) => (
  <>
    <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}>
      {title}
    </Typography>          
    <Typography variant="h3" fontSize={{ xs: '2rem', sm: '2.5rem', md: '3rem' }}>
      {value}
    </Typography>
  </>
);

const AccountDashboard = () => {
  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 3, md: 4 },
        p: { xs: 1, sm: 2, md: 3 }
      }}
    >
      {/* Main Content Grid */}
      <Box 
        sx={{
          display: "flex",
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 4 }
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '60%' },
            display: "flex",
            flexDirection: 'column',
            gap: { xs: 2, md: 3 }
          }}>
            <Box 
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row", },
                gap: { xs: 2, md: 3 }
              }}
            >
              <StatsBox 
                title="Requested CPU for self total:" 
                value="6.12354" 
              />
              <Box 
                sx={{
                  width: { xs: '100%', md: '50%' }, 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: { xs: 2, md: 3 } 
                }}
              >
                <ActionButton title="Update Collected Fees" />
                <ActionButton title="Request Free CPU" />
              </Box>
            </Box>

            {/* Middle Column */}
            <Box 
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row", },
                gap: { xs: 2, md: 3 }
              }}
            >
              <StatsBox 
                title="Requested CPU for other total:" 
                value="6.12354" 
              />
              <StatsBox 
                title="Deposited WAX to earn:" 
                value="6.12354" 
              />
            </Box>
          </Box>

        {/* Right Column */}
        <StyledBox 
          sx={{
            width: { xs: '100%', md: '40%' },
            bgcolor: "#831F3F",
            textAlign: "center"
          }}
        >
          <EarningsDisplay title="Total Free CPU" value="6.12354" />
          <EarningsDisplay title="1 Day Earning" value="6.12354" />
          <EarningsDisplay title="15 Days Earning" value="6.12354" />
          <EarningsDisplay title="30 Days Earning" value="6.12354" />
        </StyledBox>
      </Box>
      
      {/* Navigation Buttons */}
      <Box 
        sx={{
          display: "flex",
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 3 },
          width: "100%"
        }}
      >
        <NavigationButton text="Go to Cpu4Sale" />
        <NavigationButton text="Go to LimitlessWAX" />
      </Box>
    </Box>
  );
};

export default AccountDashboard;