const sectionNotes = document.querySelector("#notas");
const newNote = document.querySelector("#novaNota");

const addNotes = (notas = []) => {
    notas.forEach(nota => {
        const p = document.createElement("p");
        p.innerHTML = nota.text;
        sectionNotes.appendChild(p);
    });
}

const getNotes = () => {
    fetch("https://fiap-notes-api.herokuapp.com/notes")
        .then(response => response.json())
        .then(json => addNotes(json))
        .catch(err => {
            if (err.response) {
                return alert("Bad Request")
            }
            alert("Verifique a internet")
        });
}

const createNote = (event) => {
    event.preventDefault();

    const body = JSON.stringify({ text: newNote.value });

    fetch("https://fiap-notes-api.herokuapp.com/notes", {
        method: "POST",
        body,
        headers: {
            "Content-type": "application/json",
        }
    })
    .then(response => response.json())
    .then(json => { 
        addNotes([json]);
        event.target.reset();
    });

}

getNotes();

