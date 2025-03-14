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
    <>
      <Box textAlign="center" sx={{ py: 4, ...sx }}>
        <Box>
          <Typography variant={isSmallScreen ? "h5" : "h3"} sx={{color: "white"}} gutterBottom>
            A new CPU renting system on the WAX blockchain
          </Typography>
          <Typography variant="h6" paragraph>
            Created with help from the WAX development team and community members.
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

        <Box display="flex" sx={{backgroundImage:"url('images/Rectangle - inverse.png')", mt: 4, borderRadius: 6 , color: "white"}}>
          <Box p={8}>
            <Typography variant="h5" gutterBottom>
              Allowing anyone to rent CPU or deposit wax and earn from renting to others.
            </Typography>
            <br />
            <Typography variant="body1" textAlign="left" paragraph>
              {/* Add the paragraph content here (from OCR or your own text) */}
              The price is dynamically set between a 1% and 10% fee and it changes everytime someone deposits/withdraws/rents/returns wax.<br/><br />
              Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available.
              There is also a free system implemented but it has limits too.
            </Typography>
          </Box>
          <img src="images/side1 1.png" style={{width: "60%"}}/>
        </Box>

        <Box mt={4}>
          <Typography variant={isSmallScreen ? "h5" : "h4"} sx={{color: "white"}} gutterBottom>
            Users can interact with the smart contract in a number of ways
          </Typography>
          <Typography variant="h6" paragraph>
            The system will be open for 1 week before allowing users to deposit their own wax to earn. If users find bugs there is a bug bounty program on discord.
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={6}> {/* Adjusted Grid for Responsiveness */}
            <Box 
              sx={{flexDirection: "column", justifyContent: "center"}}
              height="calc(100% - 48px)"
              border="1px solid" 
              borderColor="inherit" 
              borderRadius={6} 
              p={3}
              display="flex" 
              bgcolor="#331E22"
            >
              <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white"}} gutterBottom>
                Request CPU for Self
              </Typography>
              <Typography variant="body2" gutterBottom>
                The system dynamically creates a price for the staked wax given the current supply,
                total loaned out, number of days, and amount user requests. 
                Then that wax is sent to a minion account and staked to the user for the given time.            </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box 
              sx={{flexDirection: "column", justifyContent: "center"}}
              height="calc(100% - 48px)"
              border="1px solid" 
              borderColor="inherit" 
              borderRadius={6} 
              p={3}
              display="flex" 
              bgcolor="#331E22"
            >
              <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white"}} gutterBottom>
                Request Free CPU
              </Typography> 
              <Typography variant="body2" gutterBottom>
                As long as this account has wax it will send in a specified
                amount to the main contract requesting cpu as if it was a regular user.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box 
              sx={{flexDirection: "column", justifyContent: "center"}}
              height="calc(100% - 48px)"
              border="1px solid" 
              borderColor="inherit" 
              borderRadius={6} 
              p={3}
              display="flex" 
              bgcolor="#331E22"
            >
              <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white"}} gutterBottom>
                Deposit to Earn
              </Typography>
              <Typography variant="body2" gutterBottom>
                Users can also deposit wax to earn 70% of the total fees collected.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box 
              sx={{flexDirection: "column", justifyContent: "center"}}
              height="calc(100% - 48px)"
              border="1px solid" 
              borderColor="inherit" 
              borderRadius={6} 
              p={3}
              display="flex" 
              bgcolor="#4A1E2A"
            >
              <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white"}} gutterBottom>
                Request CPU for Others
              </Typography>
              <Typography variant="body2" gutterBottom>
                Similar to requesting to yourself, 
                this does the first few steps but then directly stakes to the user specified.
                This can be sent from anyone for anyone else.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box 
              sx={{flexDirection: "column", justifyContent: "center"}}
              height="calc(100% - 48px)"
              border="1px solid" 
              borderColor="inherit" 
              borderRadius={6} 
              p={3}
              display="flex" 
              bgcolor="#4A1E2A"
            >
              <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white"}} gutterBottom>
                Update Collected Fees
              </Typography>
              <Typography variant="body2" gutterBottom>
                This method is not required but will immediately update the table entry
                with how much wax the user has. 
                This function will update the fees in the contract table and
                  show you how much you could withdraw in total.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box 
              sx={{flexDirection: "column", justifyContent: "center"}}
              height="calc(100% - 48px)"
              border="1px solid" 
              borderColor="inherit" 
              borderRadius={6} 
              p={3}
              display="flex" 
              bgcolor="#4A1E2A"
            >
              <Typography variant={isSmallScreen ? "subtitle1" : "h5"} sx={{color: "white"}} gutterBottom>
                Withdraw Deposited Wax
              </Typography>
              <Typography variant="body2" gutterBottom>
                At any time a user can request to withdraw deposited wax.
                A user can make as many withdraw requests as they want up to the total wax they have deposited.
                  If there is not enough liquid wax, 
                  as more gets unstaked it will be sent in order to users in line to withdraw.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <CallToAction />
      <FAQSection />
    </>
  );
};

export default Dashboard;