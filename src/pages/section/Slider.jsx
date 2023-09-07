import * as React from "react";
import { BoxSlider, ContainerSlider, AnimatedSlide } from "./slider.styled";
import dataToSlider from "./data";

const Slider = () => {
  const [currentDataIndex, setCurrentdataIndex] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const length = Object.keys(dataToSlider[0]).length;

      setCurrentdataIndex((prevData) =>
        prevData == length ? (prevData = 1) : (prevData += 1)
      );
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ContainerSlider>
        <BoxSlider>
          <h1>Cortes</h1>
          <>
            {dataToSlider &&
              dataToSlider.map((item, index) => {
                return (
                  <AnimatedSlide key={currentDataIndex}>
                    <span>
                      <h2>{item[currentDataIndex].name}</h2>
                      <p>{item[currentDataIndex].description}</p>
                    </span>
                    <span></span>
                  </AnimatedSlide>
                );
              })}
          </>
        </BoxSlider>
      </ContainerSlider>
    </>
  );
};

export default Slider;
