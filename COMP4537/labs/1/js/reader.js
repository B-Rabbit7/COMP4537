function loadNotes() {
  const notesContainer = document.getElementById("notesContainer");
  const notesSaved = JSON.parse(localStorage.getItem("notes")) || [];
  while (notesContainer.firstChild) {
      notesContainer.removeChild(notesContainer.firstChild);
  }
  notesSaved.forEach((noteData, index) => {
      const noteDiv = document.createElement("div");
      noteDiv.textContent = `Note ${index + 1}: ${noteData.content}`;
      notesContainer.appendChild(noteDiv);
  });
}
window.onload = function () {loadNotes();};
setInterval(() => {loadNotes();}, 2000);
function showTime(){
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector('#datetime').textContent = currentDateTime;
}
setInterval(() => {showTime();}, 1000);