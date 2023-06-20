// Global variable to store the enrolled course
var enrolledCourse = '';

// Function to load the enrollment form
function loadEnrollmentForm(course) {
  enrolledCourse = course;
  document.getElementById('enrollment-details').style.display = 'block';
}

// Function to capture the form submission and display entered information
document.getElementById('confirm-enrollment').addEventListener('click', function (event) {
  var name = document.getElementById('enrollment-name').value;
  var email = document.getElementById('enrollment-email').value;
  var phone = document.getElementById('enrollment-phone').value;

  // Basic validation - check if fields are not empty
  if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
    alert('Please enter all the details.');
    return;
  }

  // Display the entered information in the biodata format
  var biodata = `
    <h3>Biodata</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  `;
  document.getElementById('biodata').innerHTML = biodata;

  // Ask for confirmation
  var confirmation = confirm('Confirm enrollment?');
  if (confirmation) {
    alert('Enrollment confirmed!');
  } else {
    alert('Enrollment canceled.');
  }

  // Clear the form fields and hide the enrollment details section
  document.getElementById('enrollment-form').reset();
  document.getElementById('enrollment-details').style.display = 'none';
});

// Add event listeners to enroll buttons dynamically
var enrollButtons = document.getElementsByClassName('enroll-button');
for (var i = 0; i < enrollButtons.length; i++) {
  enrollButtons[i].addEventListener('click', function (event) {
    var course = event.target.getAttribute('data-course');
    loadEnrollmentForm(course);
  });
}
// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Function to create the puzzle pieces
  function createPuzzlePieces() {
    const puzzleContainer = document.getElementById('puzzle-container');
    puzzleContainer.innerHTML = '';
  
    const numbers = Array.from(Array(9).keys()).map((num) => num + 1);
    const shuffledNumbers = shuffleArray(numbers);
  
    shuffledNumbers.forEach((number) => {
      const puzzlePiece = document.createElement('div');
      puzzlePiece.classList.add('puzzle-piece');
      puzzlePiece.textContent = number;
      puzzlePiece.addEventListener('click', movePuzzlePiece);
      puzzleContainer.appendChild(puzzlePiece);
    });
  }
  
  // Function to handle puzzle piece movement
  function movePuzzlePiece() {
    const emptyPiece = document.querySelector('.empty-piece');
    const clickedPiece = this;
  
    // Check if the clicked piece is adjacent to the empty piece
    if (
      (emptyPiece.dataset.row === clickedPiece.dataset.row &&
        Math.abs(emptyPiece.dataset.col - clickedPiece.dataset.col) === 1) ||
      (emptyPiece.dataset.col === clickedPiece.dataset.col &&
        Math.abs(emptyPiece.dataset.row - clickedPiece.dataset.row) === 1)
    ) {
      // Swap the positions of the clicked piece and the empty piece
      const tempRow = emptyPiece.dataset.row;
      const tempCol = emptyPiece.dataset.col;
      emptyPiece.dataset.row = clickedPiece.dataset.row;
      emptyPiece.dataset.col = clickedPiece.dataset.col;
      clickedPiece.dataset.row = tempRow;
      clickedPiece.dataset.col = tempCol;
  
      // Update the CSS classes for the pieces
      emptyPiece.classList.remove('empty-piece');
      clickedPiece.classList.add('empty-piece');
      clickedPiece.style.order = `${emptyPiece.dataset.row}${emptyPiece.dataset.col}`;
  
      // Check if the puzzle is solved
      checkPuzzleSolved();
    }
  }
  
  // Function to check if the puzzle is solved
  function checkPuzzleSolved() {
    const puzzlePieces = document.getElementsByClassName('puzzle-piece');
    const pieceOrder = Array.from(puzzlePieces).map((piece) => parseInt(piece.textContent));
  
    // Check if the puzzle pieces are in ascending order
    if (pieceOrder.every((num, index) => index === num - 1)) {
      alert('Congratulations! Puzzle solved!');
    }
  }
  
  // Event listener for the "Start Puzzle" button
  document.getElementById('start-puzzle').addEventListener('click', createPuzzlePieces);
  
  // Function to move puzzle pieces
function movePuzzlePiece() {
    const emptyPiece = document.querySelector('.empty-piece');
    const clickedPiece = this;
  
    // Check if the clicked piece is adjacent to the empty piece
    if (
      (emptyPiece.dataset.row === clickedPiece.dataset.row &&
        Math.abs(emptyPiece.dataset.col - clickedPiece.dataset.col) === 1) ||
      (emptyPiece.dataset.col === clickedPiece.dataset.col &&
        Math.abs(emptyPiece.dataset.row - clickedPiece.dataset.row) === 1)
    ) {
      // Swap the positions of the clicked piece and the empty piece
      const tempRow = emptyPiece.dataset.row;
      const tempCol = emptyPiece.dataset.col;
      emptyPiece.dataset.row = clickedPiece.dataset.row;
      emptyPiece.dataset.col = clickedPiece.dataset.col;
      clickedPiece.dataset.row = tempRow;
      clickedPiece.dataset.col = tempCol;
  
      // Update the CSS classes for the pieces
      emptyPiece.classList.remove('empty-piece');
      clickedPiece.classList.add('empty-piece');
      clickedPiece.style.order = `${emptyPiece.dataset.row}${emptyPiece.dataset.col}`;
  
      // Check if the puzzle is solved
      checkPuzzleSolved();
    }
  }
  
  // Event listener for puzzle piece movement
  const puzzlePieces = document.getElementsByClassName('puzzle-piece');
  Array.from(puzzlePieces).forEach((piece) => {
    piece.addEventListener('click', movePuzzlePiece);
  });
  
