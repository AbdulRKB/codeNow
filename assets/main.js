var editor = ace.edit("editor");
const saveBtn = document.querySelector('#save');
editor.setValue(localStorage.getItem("code"))


function setLanguage(language){
    editor.setTheme("ace/theme/idle_fingers");
    editor.session.setMode(`ace/mode/${language}`);
}

function saveCode(){
    localStorage.setItem("code", editor.getValue());
}

setLanguage("python")
saveBtn.addEventListener('click', saveCode)
editor.commands.addCommand({
    name: 'save',
    bindKey: {win: "Ctrl-S", "mac": "Cmd-S"},
    exec: saveCode
})