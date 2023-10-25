const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const result = document.getElementById("result");

celsiusInput.addEventListener("input", function () {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9) / 5 + 32;
  fahrenheitInput.value = fahrenheit;
  result.textContent = `${celsius}°C is equal to ${fahrenheit}°F`;
});

fahrenheitInput.addEventListener("input", function () {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = ((fahrenheit - 32) * 5) / 9;
  celsiusInput.value = celsius;
  result.textContent = `${fahrenheit}°F is equal to ${celsius}°C`;
});
