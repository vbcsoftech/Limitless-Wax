import React from 'react';
import { Box, Typography, Button, Grid, useMediaQuery, AppBarProps, Theme, SxProps } from '@mui/material';

import CallToAction from '../components/CallToAction';
import FAQSection from '../components/FAQSection';

type CustomAppBarProps = AppBarProps & {
  customBgColor?: string;
  customShadow?: string;
  customPadding?: number;
};

interface DashboardProps {
  className?: string;
  sx?: SxProps<Theme>;
}

const defaultAppBarStyles: SxProps<Theme> = {
  bgcolor: 'transparent',
  boxShadow: 'none',
  py: 2,
};

const Dashboard: React.FC<DashboardProps> = ({ className, sx }) => {
  const isSmallScreen: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const appBarProps: CustomAppBarProps = {
    position: "static",
    component: "nav",
    elevation: 0,
  };

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        pb: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }
      }}
    >
      <Box textAlign="center" sx={{ py: 4, ...sx }}>
        <Box>
          <Typography variant={isSmallScreen ? "h5" : "h3"} sx={{color: "white"}} gutterBottom>
            A new CPU renting system on the WAX blockchain
          </Typography>
          <Typography variant="h6" paragraph>
            Created with help from the WAX development team and community members Vaaaan & deraXyna.
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" sx={{ flexDirection: isSmallScreen ? 'column' : 'row', gap: 2, mt: 3 }}>
          <Button variant="contained" size="large" sx={{background:"#882140", borderRadius: "0", color: "white", border: "1px solid white"}}>
            CPU4SALE
          </Button>
          <Button variant="contained" size="large" sx={{background:"#882140", borderRadius: "0", color: "white", border: "1px solid white"}}>
            LIMITLESSWAX
          </Button>
        </Box>

        <Box 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            backgroundImage: "url('images/Rectangle - inverse.png')",
            mt: 4,
            borderRadius: 6,
            color: "white",
            overflow: 'hidden'
          }}
        >
          <Box 
            sx={{
              p: { xs: 4, sm: 6, md: 8 },
              width: { xs: '100%', md: '55%' },
              flex: '1'
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
              }}
            >
              Allowing anyone to rent CPU or deposit wax and earn from renting to others.
            </Typography>
            <br />
            <Typography 
              variant="body1" 
              textAlign="left" 
              paragraph
              sx={{
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              The price is dynamically set between a 1% and 10% fee and it changes everytime someone deposits/withdraws/rents/returns wax.<br/><br />
              Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available.
              There is also a free system implemented but it has limits too.
            </Typography>
          </Box>
          <Box 
            component="img"
            src="images/side1 1.png"
            sx={{
              width: { xs: '100%', md: '45%' },
              objectFit: 'cover',
              height: { xs: '300px', md: 'auto' }
            }}
          />
        </Box>

        <Box mt={4}>
          <Typography variant={isSmallScreen ? "h5" : "h4"} sx={{color: "white"}} gutterBottom>
            Users can interact with the smart contract in a number of ways
          </Typography>
          <Typography variant="h6" paragraph>
            The system will be open for 1 week before allowing users to deposit their own wax to earn. If users find bugs there is a bug bounty program on discord.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 2, 
          mt: 4,
          justifyContent: 'center'
        }}>
          <Box sx={{ 
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(100% - 16px)',
              md: '1 1 calc(50% - 16px)',
            },
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "#331E22",
            minHeight: 250,
            border: "1px solid",
            borderColor: "inherit",
            borderRadius: 6,
            p: 5
          }}>
            <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white", mb: 2}}>
              Request CPU for Self
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', opacity: 0.8 }}>
              The system dynamically creates a price for the staked wax given the current supply,
              total loaned out, number of days, and amount user requests. 
              Then that wax is sent to a minion account and staked to the user for the given time.
            </Typography>
          </Box>

          <Box sx={{ 
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(50% - 16px)',
              md: '1 1 calc(25% - 16px)'
            },
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "#331E22",
            minHeight: 250,
            border: "1px solid",
            borderColor: "inherit",
            borderRadius: 6,
            p: 5
          }}>
            <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white", mb: 2}}>
              Request Free CPU
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', opacity: 0.8 }}>
              As long as this account has wax it will send in a specified
              amount to the main contract requesting cpu as if it was a regular user.
            </Typography>
          </Box>

          <Box sx={{ 
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(50% - 16px)',
              md: '1 1 calc(25% - 16px)'
            },
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "#331E22",
            minHeight: 250,
            border: "1px solid",
            borderColor: "inherit",
            borderRadius: 6,
            p: 5
          }}>
            <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white", mb: 2}}>
              Deposit to Earn
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', opacity: 0.8 }}>
              Users can also deposit wax to earn 70% of the total fees collected.
            </Typography>
          </Box>

          <Box sx={{ 
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(50% - 16px)',
              md: '1 1 calc(25% - 16px)'
            },
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "#4A1E2A",
            minHeight: 250,
            border: "1px solid",
            borderColor: "inherit",
            borderRadius: 6,
            p: 5
          }}>
            <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white", mb: 2}}>
              Request CPU for Others
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', opacity: 0.8 }}>
              Similar to requesting to yourself, 
              this does the first few steps but then directly stakes to the user specified.
              This can be sent from anyone for anyone else.
            </Typography>
          </Box>

          <Box sx={{ 
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(50% - 16px)',
              md: '1 1 calc(25% - 16px)'
            },
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "#4A1E2A",
            minHeight: 250,
            border: "1px solid",
            borderColor: "inherit",
            borderRadius: 6,
            p: 5
          }}>
            <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white", mb: 2}}>
              Update Collected Fees
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', opacity: 0.8 }}>
              This method is not required but will immediately update the table entry
              with how much wax the user has. 
              This function will update the fees in the contract table and
                show you how much you could withdraw in total.
            </Typography>
          </Box>

          <Box sx={{ 
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(100% - 16px)',
              md: '1 1 calc(50% - 16px)',
            },
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "#4A1E2A",
            minHeight: 250,
            border: "1px solid",
            borderColor: "inherit",
            borderRadius: 6,
            p: 5
          }}>
            <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white", mb: 2}}>
              Withdraw Deposited Wax
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', opacity: 0.8 }}>
              At any time a user can request to withdraw deposited wax.
              A user can make as many withdraw requests as they want up to the total wax they have deposited.
                If there is not enough liquid wax, 
                as more gets unstaked it will be sent in order to users in line to withdraw.
            </Typography>
          </Box>
        </Box>
      </Box>
      <CallToAction />
      <FAQSection />
    </Box>
  );
};

export default Dashboard;