import React from 'react';
import { Typography, Card, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const DashboardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

const BalanceContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  marginBottom: theme.spacing(4),
  flexWrap: 'wrap', // Allow items to wrap on smaller screens
}));

const BalanceCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  minWidth: '200px',
  marginBottom: theme.spacing(2),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  width: '100%',
  marginBottom: theme.spacing(4),
  flexWrap: 'wrap', // Allow buttons to wrap on smaller screens
}));

const InfoCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const InfoCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  minWidth: '200px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
}));

const Account = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <DashboardContainer>
      <Typography variant="h4" color="primary" gutterBottom>
        Dashboard
      </Typography>

      {/* Balance Section */}
      <BalanceContainer>
        <BalanceCard>
          <Typography variant="h6">Total WAX Balance</Typography>
          <Typography variant="h4">6.12354672</Typography>
        </BalanceCard>
        <BalanceCard>
          <Typography variant="h6">Total USD Balance</Typography>
          <Typography variant="h4">$1.9321245</Typography>
        </BalanceCard>
      </BalanceContainer>

      {/* Button Section */}
      <ButtonContainer>
        <Button variant="contained" color="primary">
          Request Free CPU
        </Button>
        <Button variant="outlined" color="secondary">
          Update Collected Fees
        </Button>
      </ButtonContainer>

      {/* Info Cards Section */}
      <InfoCardContainer>
        <InfoCard>
          <Typography variant="h6">Requested CPU for self total:</Typography>
          <Typography variant="h4">6.12354</Typography>
        </InfoCard>
        <InfoCard>
          <Typography variant="h6">Update Collected Fees</Typography>
          <Typography variant="h4">6.12354</Typography>
        </InfoCard>
        <InfoCard>
          <Typography variant="h6">Total Free CPU</Typography>
          <Typography variant="h4">6.12354</Typography>
          <Typography variant="body2">1 Day Earning 6.12354</Typography>
          <Typography variant="body2">15 Days Earning 6.12354</Typography>
          <Typography variant="body2">30 Days Earning 6.12354</Typography>
        </InfoCard>
        <InfoCard>
          <Typography variant="h6">Requested CPU for other total:</Typography>
          <Typography variant="h4">6.12354</Typography>
        </InfoCard>
        <InfoCard>
          <Typography variant="h6">Deposited WAX to earn:</Typography>
          <Typography variant="h4">6.12354</Typography>
        </InfoCard>
      </InfoCardContainer>

      {/* Navigation Buttons Section */}
      <ButtonContainer>
        <Button variant="contained" color="secondary">
          Go to Cpu4Sale &gt;
        </Button>
        <Button variant="contained" color="secondary">
          Go to LimitlessWAX &gt;
        </Button>
      </ButtonContainer>
    </DashboardContainer>
  );
};

export default Account;