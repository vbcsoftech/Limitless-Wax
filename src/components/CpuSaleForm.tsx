import React, { useState } from 'react';
import { Box, Button, List } from '@mui/material';

import CpuSaleFormRquest from './CpuSaleFormRquest';
import CpuSaleFormStake from './CpuSaleFormStake';
import CpuSaleFormDeposit from './CpuSaleFormDeposit';
import CpuSaleFormWithdraw from './CpuSaleFormWithdraw'

const saleListItems = [
  { label: 'Request CPU for Self' },
  { label: 'Stake for you' },
  { label: 'Deposit and Earn' },
  { label: 'Withdraw' },
] as const;

const Cpu: React.FC = () => {

  const [ openForm, setOpenForm ] = useState(0);
  const CpuSaleComponent = () => {
    switch (openForm) {
      case 0:
        return (
          <CpuSaleFormRquest />
        );
      case 1:
        return (
          <CpuSaleFormStake />
        );
      case 2:
        return (
          <CpuSaleFormDeposit />
        );
      case 3:
        return (
          <CpuSaleFormWithdraw />
        );
        
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        bgcolor: "#4A1E2A",
        borderRadius: 2,
        boxShadow: 3,
        m: { xs: 1, sm: 2 }
      }}
    >
      {/* Left Menu */}
      <Box width='30%' pb={7} bgcolor="#831F3F">
        <List sx={{ p: 0 }}>          
          {saleListItems.map((listItem, index) => (          
            <Button 
              sx={{
                width: '100%',
                p: 2,
                fontSize: "18px",
                color: 'white',
                textAlign: 'left',
                justifyContent: 'flex-start',
                textTransform: 'none',
                borderRadius: 0,
                '&:focus': {
                  bgcolor: "#391E24"
                }
              }}
              onClick={() => setOpenForm(index)}
            >
              {listItem.label}
            </Button>
          ))}
        </List>
      </Box>

      {/* Right Content */}
      <Box 
        width='70%'
        display="flex" 
        flexDirection={{ xs: 'column', sm: 'row' }}
        p={{ xs: 2, sm: 3 }} 
        pb={{ xs: 4, sm: 6 }} 
        gap={4}
        justifyContent="space-between"
      >
        <CpuSaleComponent />
      </Box>
    </Box>
  );
};

export default Cpu;