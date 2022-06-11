const sectionNotes = document.querySelector("#notas");

const addNotes = (notas = []) => {
    notas.forEach(nota => {
        const p = document.createElement("p");
        p.innerHTML = nota.text;
        sectionNotes.appendChild(p);
    });
}


const xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://fiap-notes-api.herokuapp.com/notes");
xmlHttp.responseType = "json";

xmlHttp.onload = () => {
    addNotes(xmlHttp.response);
    // console.log(xmlHttp.response);
}

xmlHttp.send();