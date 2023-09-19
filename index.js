let myNotes = []
const noteInput = document.getElementById("note-input")
const ulEl= document.getElementById("note-list")
const saveBtn = document.getElementById("save-button")
const textareaEl = document.getElementById("note-input")
let notesFromLocalStorage = JSON.parse(localStorage.getItem("myNotes"))
const deleteBtn = document.getElementById("delete-btn")

if (notesFromLocalStorage){
    myNotes = notesFromLocalStorage
    render(myNotes)
}
saveBtn.addEventListener("click", function(){
    
    myNotes.push(textareaEl.value)
    localStorage.setItem("myNotes", JSON.stringify(myNotes))
    render(myNotes)
    textareaEl.value = ""


})
function render(allNotes){
    let noteItems = ""
    for (const notes of allNotes){
        noteItems += `<li>
                         ${notes}
                    </li>`
    }
    ulEl.innerHTML = noteItems
}
deleteBtn.addEventListener ("dblclick", function(){
    localStorage.clear()
    myNotes = []
    render(myNotes)
    
})

