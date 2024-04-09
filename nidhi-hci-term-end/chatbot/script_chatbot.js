// Database of responses
const responses = {
  1: "https://igram.ignou.ac.in/",
  2: "https://gradecard.ignou.ac.in/gradecard/",
  3: "https://studentaccount.ignou.ac.in/StudentAccount/",
  4: "https://www.ignou.ac.in/student-support/course-information",
  5: "https://gradecard.ignou.ac.in/gradecard/",
  6: "https://www.ignou.ac.in/student-support/result/term-end-result",
  7: "https://www.ignou.ac.in/student-support/international-students",
  8: "https://www.ignou.ac.in/student-support/study-material-status",
  9: "https://www.ignou.ac.in/student-support/regional-centers-websites",
  10: "https://www.ignou.ac.in/content/common-prospectus-english-hindi",
  11: "https://www.ignou.ac.in/content/e-study-material",
  12: "https://www.ignou.ac.in/student-support/download-id-card-july-2019-and-earlier-batches",
  13: "https://www.ignou.ac.in/student-support/revised-fee-change-programme-medium-elective-credit-transfer",
  14: "https://www.ignou.ac.in/student-support/online-payment-miscellaneous-fee-direct-link-new",
  15: "https://www.ignou.ac.in/student-support/migration-certificate-form-and-details",
  16: "https://www.ignou.ac.in/student-support/credit-transfer-scheme",
  17: "https://www.ignou.ac.in/student-support/assignments-download",
  18: "https://www.ignou.ac.in/student-support/list-study-centre-regional-centre-wise",
  19: "https://www.ignou.ac.in/student-support/student-registration-details",
  20: "https://www.ignou.ac.in/student-support/akashdeep-gyandeep",
  21: "https://www.ignou.ac.in/student-support/duplicate-marksheet-form",
  22: "https://www.ignou.ac.in/student-support/degree-delivery-portal35",
  23: "https://www.ignou.ac.in/student-support/issuing-duplicate-diploma-degree-form",
  24: "https://www.ignou.ac.in/student-support/issuing-transcript-wes-verification",
  25: "https://www.ignou.ac.in/student-support/name-correction-info-after-prog-completion",
  26: "https://www.facebook.com/IndiraGandhiNationalOpenUniversity/",
  27: "https://www.ignou.ac.in/student-support/recognition-ignou-programmes",
  28: "https://www.ignou.ac.in/content/forms",
};

// Function to handle user input
function handleInput() {
  const input = document.getElementById("chatInput").value.trim();
  const chatMsgs = document.getElementById("chatMsgs");

  // Check if input matches any response in the database
  if (responses[input]) {
    const responseMsg = `<div class="chatMsg botMsg"><a href="${responses[input]}" target="_blank">${responses[input]}</a></div>`;
    chatMsgs.innerHTML += `<div class="chatMsg userMsg">${input}</div>`;
    chatMsgs.innerHTML += responseMsg;
  } else {
    const errorMessage =
      "<div class='chatMsg botMsg'>Invalid input. Please enter a valid number.</div>";
    chatMsgs.innerHTML += `<div class="chatMsg userMsg">${input}</div>`;
    chatMsgs.innerHTML += errorMessage;
  }

  // Clear input field
  document.getElementById("chatInput").value = "";

  // Scroll to bottom of chat container
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

// Toggle chatbot container visibility
document.getElementById("chatBtn").addEventListener("click", function () {
  const chatContainer = document.getElementById("chatContainer");
  if (chatContainer.style.display === "none") {
    chatContainer.style.display = "block";
  } else {
    chatContainer.style.display = "none";
  }
});

// Event listener for Enter key press
document.getElementById("chatInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    handleInput();
  }
});

// // Database of responses
// const responses = {
//   1: "https://igram.ignou.ac.in/",
//   2: "https://gradecard.ignou.ac.in/gradecard/",
// };

// // Function to handle user input
// function handleInput() {
//   const input = document.getElementById("chatInput").value.trim();
//   const chatMsgs = document.getElementById("chatMsgs");

//   // Check if input matches any response in the database
//   if (responses[input]) {
//     const responseMsg = `<div class="chatMsg botMsg"><a href="${responses[input]}" target="_blank">${responses[input]}</a></div>`;
//     chatMsgs.innerHTML += `<div class="chatMsg userMsg">${input}</div>`;
//     chatMsgs.innerHTML += responseMsg;
//   } else {
//     const errorMessage =
//       "<div class='chatMsg botMsg'>Invalid input. Please enter a valid number.</div>";
//     chatMsgs.innerHTML += `<div class="chatMsg userMsg">${input}</div>`;
//     chatMsgs.innerHTML += errorMessage;
//   }

//   // Clear input field
//   document.getElementById("chatInput").value = "";

//   // Scroll to bottom of chat container
//   chatMsgs.scrollTop = chatMsgs.scrollHeight;
// }

// // Toggle chatbot container visibility
// document.getElementById("chatBtn").addEventListener("click", function () {
//   const chatContainer = document.getElementById("chatContainer");
//   if (chatContainer.style.display === "none") {
//     chatContainer.style.display = "block";
//   } else {
//     chatContainer.style.display = "none";
//   }
// });

// // Event listener for Enter key press
// document.getElementById("chatInput").addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     handleInput();
//   }
// });
