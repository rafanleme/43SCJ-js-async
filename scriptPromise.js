const sectionNotes = document.querySelector("#notas");

const addNotes = (notas = []) => {
    notas.forEach(nota => {
        const p = document.createElement("p");
        p.innerHTML = nota.text;
        sectionNotes.appendChild(p);
    });
}

const doRequestAjax = () => {
    
}

const showError = (err) => {
    const p = document.createElement("p");
    p.textContent = err;
    p.style.color = "red";
    sectionNotes.appendChild(p);
}

