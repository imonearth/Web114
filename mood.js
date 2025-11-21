//Lex Williams 11.21
//Mood Changer using event delegation 


// Step 1: Selects moodDisplay, from HTML page
const moodDisplay = document.getElementById('moodDisplay');

//Step 2: Declares style for each mood and defines the different moods
const moods = {

  happy: {
    bg: '#f7d736',
    text: '#2b5ce3',
    message: 'So Super Smiley'
  },

  calm: {
    bg: '#237296',
    text: '#aed8eb',
    message: 'Peaceful, bird watching on the ocean.'
  },

  excited: {
    bg: '#fc0303',
    text: '#f59505',
    message: 'Carpe Diem! YOLO. Its Gameday!'
  },

  chill: {
    bg: '#95bac4',
    text: '#75915c',
    message: 'Zzz.. Netflix'
  },

  mysterious: {
    bg: '#2e3e42',
    text: '#a2a5a6',
    message: 'Dark and Secretive'
  }
};

// Step 3: Java checks when and where clicks are happening, and waits for mood button
document.addEventListener('click', function (event) {

  if (event.target.classList.contains('mood-btn')) {

    // Step 4: Converts the page to mood clicked

    const mood = event.target.getAttribute('data-mood');

    const config = moods[mood];

    // Step 5: Changes the style of page based on mood clicked
    document.body.style.backgroundColor = config.bg;

    document.body.style.color = config.text;

    moodDisplay.textContent = config.message;
  }
});