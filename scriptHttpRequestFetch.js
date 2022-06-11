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
    
}

const createNote = (event) => {
    event.preventDefault();
    
}

getNotes();

