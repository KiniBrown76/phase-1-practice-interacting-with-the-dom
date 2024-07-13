// Selecting elements
const timerDisplay = document.getElementById('timer');
const counterDisplay = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const likeButton = document.getElementById('like');
const pauseButton = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const likesList = document.getElementById('likes');
const commentsList = document.getElementById('comments');

// Timer variables
let timerCounter = 0;
let timerInterval;

// Counter variables
let counter = 0;

// Update timer function
function updateTimer() {
    timerCounter++;
    timerDisplay.textContent = timerCounter;
}

// Increment counter function
function incrementCounter() {
    counter++;
    counterDisplay.textContent = counter;
}

// Decrement counter function
function decrementCounter() {
    counter--;
    counterDisplay.textContent = counter;
}

// Like button function
function likeCounter() {
    let likeItem = document.getElementById(`like-${counter}`);
    if (likeItem) {
        let likesCount = likeItem.querySelector('span');
        likesCount.textContent = parseInt(likesCount.textContent) + 1;
    } else {
        likeItem = document.createElement('li');
        likeItem.id = `like-${counter}`;
        likeItem.innerHTML = `${counter} has been liked <span>1</span> time`;
        likesList.appendChild(likeItem);
    }
}

// Pause button function
function pauseTimer() {
    if (!pauseButton.dataset.paused) {
        clearInterval(timerInterval);
        pauseButton.textContent = 'Resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        commentInput.disabled = true;
        commentForm.querySelector('button').disabled = true;
        pauseButton.dataset.paused = true;
    } else {
        timerInterval = setInterval(updateTimer, 1000);
        pauseButton.textContent = 'Pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        commentInput.disabled = false;
        commentForm.querySelector('button').disabled = false;
        pauseButton.dataset.paused = false;
    }
}

// Submit comment function
function submitComment(event) {
    event.preventDefault();
    const commentText = commentInput.value.trim();
    if (commentText) {
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentsList.appendChild(commentItem);
        commentForm.reset();
    }
}

// Event listeners
plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', decrementCounter);
likeButton.addEventListener('click', likeCounter);
pauseButton.addEventListener('click', pauseTimer);
commentForm.addEventListener('submit', submitComment);

// Start the timer interval
timerInterval = setInterval(updateTimer, 1000);