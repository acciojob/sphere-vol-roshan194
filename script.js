function volume_sphere(event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  const radiusInput = document.getElementById('radius').value;
  const radius = parseFloat(radiusInput);

  let volume;

  // Validate: check if radius is a number and non-negative
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    // V = (4/3) * π * r^3
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4); // Round to 4 decimal places
  }

  // Set the result
  document.getElementById('volume').value = volume;
}

// Attach the function to the form submit event
document.getElementById('MyForm').addEventListener('submit', volume_sphere);
