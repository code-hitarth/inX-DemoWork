const mesu = function tempmeasurement() {
  const celsius = {
    type: "temp",
    unit: "celsius",
    value: 10,
  };

  console.log(celsius);

  const kelvin = celsius.value + 273;
  return kelvin;
};

console.log(mesu());
