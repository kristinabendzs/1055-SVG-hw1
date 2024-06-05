console.log("JS file is connected");

const printIcons = document.querySelectorAll("#icons-display object");
console.log(printIcons)

function logId() {
    console.log(this.id);
}

printIcons.forEach(function(icon) {
    icon.addEventListener("click" , logId);
})