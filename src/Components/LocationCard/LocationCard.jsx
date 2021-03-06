import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const LocationCard = (props) => {
  const { location, image } = props;
  const [name, setName] = useState();
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();

  useEffect(() => {
    getLocationDetails(location);
  });

  const getLocationDetails = (location) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${location}&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d`
    )
      .then((result) => result.json())
      .then((result) => {
        return (
          setName(result.name),
          setTemperature(result.main.temp),
          setHumidity(result.main.humidity),
          setMaxTemp(result.main.temp_max),
          setMinTemp(result.main.temp_min)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Card style={{ width: "30vw", height: "40vh"  }} className="text-white">
        <Card.Img variant="top" src={image} style={{ width: "100%", height: "100%" }}/>
        <Card.ImgOverlay>
          <Card.Body style={{ width: "50%", height: "100%", backgroundColor: " rgba(112, 7, 7, 0.747)", padding: "8px" , borderRadius: "5px"}}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{`Temp ${temperature}°C`}</Card.Text>
            <Card.Text>{`Humidity ${humidity}%`}</Card.Text>
            <Card.Text>{`Max temp ${maxTemp}°C`}</Card.Text>
            <Card.Text>{`Max temp ${minTemp}°C`}</Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default LocationCard;
