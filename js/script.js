document.getElementById("temperatureForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const tempInput = document.getElementById("temperature").value;
  const scale = document.getElementById("scale").value;
  const resultDiv = document.getElementById("result");
  const explanationDiv = document.getElementById("explanation");

  if (isNaN(tempInput) || tempInput === "") {
    resultDiv.textContent = "Masukkan suhu yang valid.";
    explanationDiv.textContent = "";
    return;
  }

  const temp = parseFloat(tempInput);
  let result;
  let explanation;

  if (scale === "celsius") {
    result = (temp - 32) * 5/9;
    explanation = result > 37 ? "Ini suhu demam." : result < 0 ? "Ini suhu beku." : "Ini suhu normal.";
    resultDiv.textContent = `${temp}°F = ${result.toFixed(2)}°C`;
  } else {
    result = (temp * 9/5) + 32;
    explanation = result > 100 ? "Ini suhu sangat panas." : result < 32 ? "Ini suhu beku." : "Ini suhu sedang.";
    resultDiv.textContent = `${temp}°C = ${result.toFixed(2)}°F`;
  }

  explanationDiv.textContent = explanation;
});
