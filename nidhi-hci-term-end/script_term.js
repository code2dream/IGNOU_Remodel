// Function to check if enrollment number is empty
function isEnrollmentNumberEmpty() {
  const enrolmentNumberInput = document.getElementById("enrolmentNumber");
  return !enrolmentNumberInput.value.trim();
}

// Function to enable or disable the submit button
function toggleSubmitButton() {
  const submitButton = document.getElementById("submitButton");
  submitButton.disabled = isEnrollmentNumberEmpty();
}

// Add event listener to enrollment number input
const enrolmentNumberInput = document.getElementById("enrolmentNumber");
enrolmentNumberInput.addEventListener("input", toggleSubmitButton);

// Call the function to disable the submit button initially
toggleSubmitButton();
