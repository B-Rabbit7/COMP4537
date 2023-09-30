function NoteManager() {
    this.notes = [];
    // Load notes
    this.loadNotes = function () {
        const notesSaved = JSON.parse(localStorage.getItem("notes")) || [];
        notesSaved.forEach((noteValues) => {
            const note = new Note();
            note.createTextBox(this.notes.length);
            this.notes.push(note);
            note.textBox.value = noteValues.content;
        });
    }
    // Create a new note and add it to the notes array
    this.createNote = function () {
        const note = new Note();
        note.createTextBox(this.notes.length);
        this.notes.push(note);
        note.textBox.addEventListener("change", () => {
            this.saveNotes();
        });
        this.saveNotes();
    };
    // Remove a note
    this.removeThisNote = function (noteID) {
        const indexToRemove = this.notes.findIndex(note => Number(note.textBox.id) === noteID);
        if (indexToRemove !== -1) {
            this.notes[indexToRemove].removeTextBox();
            this.notes.splice(indexToRemove, 1);
            this.saveNotes();
        }
    };
    // Save notes
    this.saveNotes = function () {
        const notesData = this.notes.map((savedNote) => ({
            content: savedNote.textBox.value
        }));
        localStorage.setItem("notes", JSON.stringify(notesData));
    }
    setInterval(() => {this.saveNotes();}, 2000);

    this.loadNotes();
}
// Note Object
function Note() {
    this.textBox = document.createElement("input");
    this.textBox.type = "text";
    this.textBox.name = "note";
    this.textBox.placeholder = "Enter your note here...";
    this.removeButton = document.createElement("button");
    this.removeButton.type = "submit";
    this.removeButton.textContent = "remove";

    // Method to create an HTML unit of div, input, and remove button
    this.createTextBox = function (index) {
        const section = document.getElementById("textContainer");
        section.appendChild(this.textBox);
        section.appendChild(this.removeButton);
        this.removeButton.id= index
        this.textBox.id = index
    };
    // Method to remove this created note from the page
    this.removeTextBox = function () {
        let textContainer = this.textBox.parentElement;
        textContainer.removeChild(this.textBox);
        textContainer.removeChild(this.removeButton);
    };
}
const noteManager = new NoteManager();
const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
    noteManager.createNote();
});
const textContainer = document.getElementById("textContainer");
textContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const noteId = event.target.id;
        if (noteId) {
            noteManager.removeThisNote(Number(noteId));
        }
    }
});
// Show time on page
function showTime(){
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('#datetime').textContent = currentDateTime;
  }
  setInterval(() => {showTime();}, 1000);