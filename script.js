var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (var tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (var tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");

  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  var menu = document.getElementById("sidemenu");
  menu.style.right = "0";
}

function closemenu() {
  var menu = document.getElementById("sidemenu");
  menu.style.right = "-200px"; // Adjust as per your initial off-screen position
}


//letter by letter

// Select the h1 element
let h1 = document.querySelector('h1');

// Get the text content of the h1
let text = h1.innerText;

// Split the text into individual words and letters
let newText = '';
let words = text.split(" ");  // Split by space

// Loop through each word
words.forEach(word => {
  // If the word is 'Keith', color it red
  if (word === 'Keith') {
    for (let char of word) {
      newText += `<span class="letter red">${char}</span>`;
    }
  } else {
    // For other words, just add the letters normally
    for (let char of word) {
      newText += `<span class="letter">${char}</span>`;
    }
  }
  newText += '<span class="letter">&nbsp;</span>'; // Add space after each word
});

// Set the modified HTML to the h1 element
h1.innerHTML = newText;

// Apply animation delay to each letter
let letters = document.querySelectorAll('.letter');
letters.forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.1}s`;  // Delay each letter
});
