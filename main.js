function convertToCelsius() {
  var celsiusInput = document.getElementById("celsiusInput").value;

  if (celsiusInput !== "") {
    var fahrenheitOutput = (celsiusInput * 9 / 5) + 32;
    document.getElementById("fahrenheitInput").value = fahrenheitOutput.toFixed(2);
    document.getElementById("result").innerText = celsiusInput + "°C = " + fahrenheitOutput.toFixed(2) + "°F";
  } else {
    document.getElementById("result").innerText = "Please enter a value.";
  }
}

function convertToFahrenheit() {
  var fahrenheitInput = document.getElementById("fahrenheitInput").value;

  if (fahrenheitInput !== "") {
    var celsiusOutput = (fahrenheitInput - 32) * 5 / 9;
    document.getElementById("celsiusInput").value = celsiusOutput.toFixed(2);
    document.getElementById("result").innerText = fahrenheitInput + "°F = " + celsiusOutput.toFixed(2) + "°C";
  } else {
    document.getElementById("result").innerText = "Please enter a value.";
  }
}
