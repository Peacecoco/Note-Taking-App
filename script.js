document.addEventListener('DOMContentLoaded', function() {
    // Find the input box, add button, and notes container
    const newNoteInput = document.getElementById('newNote');
    const createNoteButton = document.getElementById('createNote');
    const notesContainer = document.getElementById('notesContainer');
    let noteId = 0; 

    // Function to create a new note element
    function createNoteElement(noteText, id) {
        // Create a new note div
        const note = document.createElement('div');
        note.classList.add('note');
        note.dataset.id = id;

        // Create an input box for the note text
        const input = document.createElement('input');
        input.type = 'text';
        input.value = noteText;
        input.disabled = true;

        // Create an edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            input.disabled = !input.disabled;
            editButton.textContent = input.disabled ? 'Edit' : 'Save';
        });

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            notesContainer.removeChild(note);
        });

        // Put the input box, edit button, and delete button into the note div
        note.appendChild(input);
        note.appendChild(editButton);
        note.appendChild(deleteButton);

        return note;
    }

    // When we click the add button
    createNoteButton.addEventListener('click', function() {
        const noteText = newNoteInput.value.trim();
        if (noteText !== '') {
            // Create a new note and add it to the container
            const noteElement = createNoteElement(noteText, noteId);
            notesContainer.appendChild(noteElement);
            newNoteInput.value = ''; // Clear the input box
            noteId++; // Increment note ID for the next note
        }
    });
});
