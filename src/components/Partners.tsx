import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: false,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1536, // xl breakpoint
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1200, // lg breakpoint
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 900, // md breakpoint
        settings: {
          slidesToShow: 4,
          speed: 6000, // slightly slower on medium screens
        }
      },
      {
        breakpoint: 600, // sm breakpoint
        settings: {
          slidesToShow: 3,
          speed: 5000,
        }
      },
      {
        breakpoint: 480, // xs breakpoint
        settings: {
          slidesToShow: 2,
          speed: 4000, // slower on mobile for better visibility
        }
      }
    ]
  };

  return (
    <Box 
      sx={{ 
        width: '100vw',
        position: 'relative',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        py: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        overflow: 'hidden'
      }}
    >
      <Typography 
        variant="h6" 
        component="h3" 
        textAlign="center" 
        mb={{ xs: 3, sm: 4, md: 5 }}
        sx={{
          fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
          color: "white"
        }}
      >
        Partners
      </Typography>
      <Box>
        <Slider {...settings}>
          {[...Array(7)].map((_, index) => (
            <Box 
              key={index} 
              sx={{ 
                px: { xs: 1, sm: 1.5, md: 2 },
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                  transition: 'opacity 0.3s'
                }
              }}
            >
              <Box 
                sx={{ 
                  width: { xs: '120px', sm: '150px', md: '174px' },
                  mx: 'auto'
                }}
              >
                <img 
                  src="images/image 2.png" 
                  style={{ 
                    width: "100%",
                    userSelect: 'none',
                    display: 'block', // Removes bottom space
                    maxWidth: '100%',
                    height: 'auto'
                  }} 
                  loading="lazy" 
                  alt={`Partner ${index + 1}`}
                  draggable="false"
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Partners;
