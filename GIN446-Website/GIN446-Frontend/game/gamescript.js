let words = [];
let randomWord = '';


fetch('/GIN446-Website/GIN446-Frontend/needs/words.txt') // Adjust the path to the correct location
    .then(response => response.text())
    .then(data => {
        words = data.split('\n').map(word => word.trim()); // Split by line and trim spaces
        wordsLoaded = true; // Set the flag
        randomWord = words[Math.floor(Math.random() * words.length)];
        console.log('Word list loaded:', words.length, 'words'); // Confirm loading
        let span = document.getElementById('nbWords');
        span.innerHTML = words.length;
    })
    .catch(error => {
        console.error('Error loading word list:', error);
    });

//window.alert(randomWord);

let currentWordLetters = 0;
let currentWordIndex = 1;
let guessedLetters = 0;
let gameEnd = false;

const letters = document.querySelectorAll('.letter');

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const letter = key.textContent;
        if (letter === "Enter") {
            handleEnter();
        }
        else if (letter === "⌫") {
            handleBackspace();
        }
        else {
            handleLetterInput(letter); // For regular letter keys
        }
    });
});

//if the user types from the keyboard
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleEnter();
    } else if (event.key === "Backspace") {
        handleBackspace();
    } else if (/[a-zA-Z]/.test(event.key) && event.key.length === 1) {
        handleLetterInput(event.key.toUpperCase());
    }
});


//any letter
function handleLetterInput(letter) {
    if (!gameEnd) {
        if (currentWordLetters < 5) {
            const letterToAdd = letters[((currentWordIndex - 1) * 5) + currentWordLetters];
            letterToAdd.innerHTML = letter;
            letterToAdd.classList.add('show');
            currentWordLetters++;
        }
    }
}

//backspace key
function handleBackspace() {
    //if there is a letter to remove
    if (!gameEnd) {
        if (currentWordLetters > 0) {
            const letterToRemove = letters[((currentWordIndex - 1) * 5) + currentWordLetters - 1];
            letterToRemove.innerHTML = ``;
            letterToRemove.classList.remove('show');
            currentWordLetters--;
        }
        else {
            handleError();
        }
    }
}

//enter key
function handleEnter() {
    if (!wordsLoaded || !randomWord) {
        displayMessage('Word list is still loading. Please wait.');
        return;
    }

    if (!gameEnd) {
        if (currentWordLetters == 5) {
            let guessedWord = '';
            for (let i = 0; i < 5; i++) {
                guessedWord += letters[((currentWordIndex - 1) * 5) + i].innerHTML.toLowerCase();
            }

            if (words.includes(guessedWord)) {
                handleGuess(randomWord);
                currentWordLetters = 0;
            } else {
                handleError();
                displayMessage('Not a valid word!');
            }
        }
        else {
            handleError();
            displayMessage('Word incomplete!');
        }
    }
}



//to handle the guess
function handleGuess(word) {
    guessedLetters = 0;

    // Step 1: Count occurrences of each letter in the word
    const letterCounts = {};
    for (let i = 0; i < word.length; i++) {
        letterCounts[word[i]] = (letterCounts[word[i]] || 0) + 1;
    }

    // Step 2: First pass - mark correct letters
    for (let i = 0; i < 5; i++) {
        const guessedLetter = letters[((currentWordIndex - 1) * 5) + i].innerHTML.toLowerCase();

        if (guessedLetter === word[i]) {
            letters[((currentWordIndex - 1) * 5) + i].classList.add('correct');
            findKey(guessedLetter, 'correct');
            guessedLetters++;
            letterCounts[guessedLetter]--; // Decrease count for correct letters
        }
    }

    // Step 3: Second pass - mark elsewhere and absent letters
    for (let i = 0; i < 5; i++) {
        const guessedLetter = letters[((currentWordIndex - 1) * 5) + i].innerHTML.toLowerCase();

        // Skip if already marked as correct
        if (!letters[((currentWordIndex - 1) * 5) + i].classList.contains('correct')) {
            // Check if the guessed letter exists in the word and has available counts
            if (word.includes(guessedLetter) && letterCounts[guessedLetter] > 0) {
                letters[((currentWordIndex - 1) * 5) + i].classList.add('elsewhere');
                findKey(guessedLetter, 'elsewhere');
                letterCounts[guessedLetter]--; // Decrease count for elsewhere letters
            } else {
                letters[((currentWordIndex - 1) * 5) + i].classList.add('absent');
                findKey(guessedLetter, 'absent');
            }
        }
    }

    currentWordIndex++;
    checkGameEnd();
}



//to find the key on the keyboard
function findKey(letter, classToAdd) {
    const upperLetter = letter.toUpperCase();
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        if (key.textContent === upperLetter) {
            // Check current class and only update if new class has higher priority
            if (classToAdd === 'correct') {
                key.classList.remove('elsewhere', 'absent');
                key.classList.add('correct');
            } else if (classToAdd === 'elsewhere' && !key.classList.contains('correct')) {
                key.classList.remove('absent');
                key.classList.add('elsewhere');
            } else if (classToAdd === 'absent' && !key.classList.contains('correct') && !key.classList.contains('elsewhere')) {
                key.classList.add('absent');
            }
        }
    });
}

function checkGameEnd() {
    // Check if all guessed letters in the current row are correct
    if (guessedLetters === 5) {
        gameEnd = true;
        displayGameStats(true);
    }
    else if (currentWordIndex > 6) {
        gameEnd = true;
        displayGameStats(false);
    }
}


//to shake the keyboard
function handleError() {
    // Get all keys in the keyboard
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.classList.add('shake'); // Add the shake class to each key
    });

    // Remove the shake class after the animation completes
    setTimeout(() => {
        keys.forEach(key => {
            key.classList.remove('shake');
        });
    }, 500); // Match this time with the animation duration
}



//to display a message on the screen
function displayMessage(message, color = "rgba(0, 0, 0, 0.8)") {
    // Check if a message box already exists
    if (document.getElementById("message-box")) {
        return; // Exit if a message is already being displayed
    }

    // Create a div element
    const messageBox = document.createElement("div");
    messageBox.id = "message-box"; // Set an id for easy checking

    // Set the message text
    messageBox.textContent = message;

    // Style the div to appear centered
    Object.assign(messageBox.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: color,
        color: "#fff",
        fontSize: "18px",
        textAlign: "center",
        borderRadius: "8px",
        zIndex: "1000",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)"
    });

    // Add the messageBox to the body
    document.body.appendChild(messageBox);

    // Remove the message after a few seconds
    setTimeout(() => {
        messageBox.remove();
    }, 2000); // Adjust the time as needed (3000 ms = 3 seconds)
}


function displayGameStats(isSuccess) {
    // Get current win streak and total guesses from local storage (or initialize them)
    let winStreak = localStorage.getItem('winStreak') || 0;

    // Check if the user won or lost and update win streak
    if (isSuccess) {
        winStreak++;
    } else {
        winStreak = 0; // Reset streak on failure
    }

    // Save updated values to local storage
    localStorage.setItem('winStreak', winStreak);

    // Create a div to display the stats
    const statsBox = document.createElement('div');
    statsBox.id = 'stats-box'; // For styling and identification

    // Set the message text (color based on success or failure)
    statsBox.innerHTML = `
        <h2 id="stats-title">${isSuccess ? 'You Won!' : 'You Lost!'}</h2>
        <p>The word was: <b><a href="https://www.dictionary.com/browse/${randomWord.toLowerCase()}" target="_blank">${randomWord.toUpperCase()}</a></b></p>
        <p>Win Streak: ${winStreak}</p>
        <button id="play-again">Play Again</button>
    `;

    // Style the stats box to appear centered
    Object.assign(statsBox.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "30px",
        backgroundColor: "#fff", // Set background to white
        border: `4px solid ${isSuccess ? "green" : "red"}`, // Conditional border color
        color: "#000", // Set text color to black for better contrast with white background
        textAlign: "center",
        borderRadius: "12px",
        zIndex: "1000",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    });

    // Add the statsBox to the body
    document.body.appendChild(statsBox);

    const statsTitle = document.getElementById('stats-title');
    statsTitle.style.color = isSuccess ? "green" : "red";

    // Add event listener for the "Play Again" button
    const playAgainBtn = document.getElementById('play-again');
    playAgainBtn.addEventListener('click', () => {
        // Check if statsBox exists and remove it
        const statsBoxElement = document.getElementById('stats-box');
        Object.assign(statsBox.style, {
            display: "none",
        })

        if (statsBoxElement) {
            statsBoxElement.remove();  // Ensure the stats box is removed from the DOM
        }
        // Reset game state and remove the stats box
        resetGame();
    });
}


function resetGame() {
    // Reset all game variables
    currentWordLetters = 0;
    currentWordIndex = 1;
    guessedLetters = 0;
    gameEnd = false;

    // Clear the letter grid
    document.querySelectorAll('.letter').forEach(letter => {
        letter.innerHTML = '';
        letter.classList.remove('correct', 'elsewhere', 'absent', 'show');
    });

    // Clear the keyboard
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('correct', 'elsewhere', 'absent');
    });

    // Remove any displayed message (if present)
    const messageBox = document.getElementById('message-box');
    if (messageBox) {
        messageBox.remove();
    }
    // Generate a new word
    randomWord = words[Math.floor(Math.random() * words.length)];
}


