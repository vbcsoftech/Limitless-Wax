import React from "react";
import { Box, Button, Typography } from "@mui/material";

const AccounDashboard: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2} p={2}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
        <Box width={{ xs: '100%', md: '30%' }} display="flex" flexDirection="column" gap={2}>
          <Box boxShadow="10px 10px 5px #00000026" bgcolor="#4A1E2A" p={2} borderRadius={5}>
            <Typography variant="h6">Requested CPU for self total:</Typography>
            <Typography variant="h4" sx={{textAlign: "center", py: "35px"}}>6.12354</Typography>
          </Box>
          <Box boxShadow="10px 10px 5px #00000026" bgcolor="#4A1E2A" p={2} borderRadius={5}>
            <Typography variant="h6">Requested CPU for other total:</Typography>
            <Typography variant="h4" sx={{textAlign: "center", py: "35px"}}>6.12354</Typography>
          </Box>
        </Box>
        <Box width={{ xs: '100%', md: '30%' }} display="flex" flexDirection="column" gap={2}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box boxShadow="10px 10px 5px #00000026" bgcolor="#391E24" p={2} borderRadius={5} sx={{fontWeight:"bold"}} textAlign="center">
              <Typography variant="h6" sx={{fontWeight:"bold"}}>Update Collected<br />Fees</Typography>
            </Box>
            <Box boxShadow="10px 10px 5px #00000026" bgcolor="#391E24" p={2} borderRadius={5} sx={{fontWeight:"bold"}} textAlign="center">
              <Typography variant="h6" sx={{fontWeight:"bold"}}>Request Free<br /> CPU</Typography>
            </Box>
          </Box>
          <Box boxShadow="10px 10px 5px #00000026" bgcolor="#4A1E2A" p={2} borderRadius={5}>
            <Typography variant="h6">Deposited WAX to earn:</Typography>
            <Typography variant="h4" sx={{textAlign: "center", py: "35px"}}>6.12354</Typography>
          </Box>
        </Box>
        <Box 
          width={{ xs: '100%', md: '40%' }} 
          boxShadow="10px 10px 5px #00000026" 
          textAlign="center" 
          sx={(theme) => ({
            bgcolor: "#831F3F",
            color: theme.palette.text.primary,
            p: { xs: 2, sm: 3 }
          })}
          borderRadius={5}
        >
          <Typography variant="h6">Total Free CPU</Typography>          
          <Typography variant="h3">6.12354</Typography>
          <Typography variant="h6">1 Day Earning</Typography>          
          <Typography variant="h3">6.12354</Typography>
          <Typography variant="h6">15 Days Earning</Typography>          
          <Typography variant="h3">6.12354</Typography>
          <Typography variant="h6">30 Days Earning</Typography>          
          <Typography variant="h3">6.12354</Typography>
        </Box>
      </Box>
      
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', sm: 'row' }} 
        gap={2} 
        sx={{width: "100%"}}
      >
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: "#5C2736", 
            color: "#fff",
            width: { xs: '100%', sm: '50%' },
            p: { xs: 2, sm: 4 },
            borderRadius: 5,
            fontSize: { xs: '16px', sm: '18px' },
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          Go to Cpu4Sale
          <Typography variant="h4" fontWeight="700">&#62;</Typography>
        </Button>
        <Button
          variant="contained"
          sx={{ 
            backgroundColor:"#5C2736", 
            color:"#fff",
            width: { xs: '100%', sm: '50%' },
            p: { xs: 2, sm: 4 },
            borderRadius: 5,
            fontSize: { xs: '16px', sm: '18px' },
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          Go to LimitlessWAX
          <Typography variant="h4" fontWeight="700">&#62;</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default AccounDashboard;