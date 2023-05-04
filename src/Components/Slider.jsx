import { Box, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
    "https://via.placeholder.com/800x400?text=Slide+4",
  ];
  const intervalTime = 3000; // 3 seconds

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, intervalTime);

    return () => clearInterval(intervalId);
  }, [slideIndex]);

  return (
    <Box>
       <Image src={slides[slideIndex]} alt={`Slide ${slideIndex + 1}`} w="100%" />
      <Box style={{ display: "flex", justifyContent: "center" }}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            style={{
              margin: "0 5px",
              borderRadius: "50%",
              width: "15px",
              height: "8px",
              backgroundColor: slideIndex === idx ? "blue" : "gray",
            }}
          />
        ))}
      </Box>
     
    </Box>
  );
};

export default Slider;
