


const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () =>{
    const notes =document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )

    localStorage.setItem("notes",JSON.stringify(data));
}

addBtn.addEventListener(
    "click",
function() {
    addNote()
}
)


// Logic to add Multiple NOtes by using JS
const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML= `
    <div class="tool">
    <i class="save fa fa-floppy-disk"></i>
    <i class="trash fa fa-trash"></i>
 
    </div>
    <textarea></textarea>
    `;
    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove()
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function() {
            saveNotes()
        }
    )
    

    note.querySelector(".save").addEventListener
    main.appendChild(note);
    saveNotes()
}