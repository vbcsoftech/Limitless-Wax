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
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
        py: '3rem',
        overflow: 'hidden'
      }}
    >
      <Typography variant="h6" component="h3" textAlign="center" mb={5}>
        Partners
      </Typography>
      <Box>
        <Slider {...settings}>
          {[...Array(7)].map((_, index) => (
            <Box 
              key={index} 
              sx={{ 
                px: 2,
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                  transition: 'opacity 0.3s'
                }
              }}
            >
              <Box sx={{ width: '174px', mx: 'auto' }}>
                <img 
                  src="images/image 2.png" 
                  style={{ 
                    width: "100%",
                    userSelect: 'none'
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
