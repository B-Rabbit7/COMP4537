function loadNotes() {
  const notesContainer = document.getElementById("notesContainer");
  const notesSaved = JSON.parse(localStorage.getItem("notes")) || [];
  // Clear existing child elements
  while (notesContainer.firstChild) {
      notesContainer.removeChild(notesContainer.firstChild);
  }
  notesSaved.forEach((noteData, index) => {
      const noteDiv = document.createElement("div");
      noteDiv.textContent = `Note ${index + 1}: ${noteData.content}`;
      notesContainer.appendChild(noteDiv);
  });
}

// Load and display notes when the page loads
window.onload = function () {
  loadNotes();
};
setInterval(() => {
      loadNotes();
    }, 2000);


function showTime(){
  const now = new Date();
  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  document.querySelector('#datetime').textContent = currentDateTime;
}

setInterval(() => {
  showTime();
}, 1000);


