// Output target is the output-target element.
let outputTarget = document.getElementById("output-target");

let sections = document.getElementsByClassName("article-section");
console.log(sections);

let addMessageWhenClicked = () => outputTarget.innerHTML = `You clicked on the ${event.target.innerHTML} section`;

for (let i=0; i<sections.length; i++){
    sections[i].addEventListener("click", addMessageWhenClicked)
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
let h1tag = document.getElementById("page-title");
h1tag.addEventListener("mouseover" , () => outputTarget.innerHTML = `You moved your mouse over the header`);

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1tag.addEventListener("mouseout", function(){
    outputTarget.innerHTML = `You left me!!`
});

// When you type characters into the input field, the output element should mirror the text in the input field.
let inputField = document.getElementById("keypress-input");
inputField.addEventListener("input", () => outputTarget.innerHTML = inputField.value);

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
document.getElementById("add-color").addEventListener("click", () => document.getElementById("guinea-pig").style.color="purple");

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener("click", () => document.getElementById("guinea-pig").style.fontSize="10em");

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener("click", () => document.getElementById("guinea-pig").classList.toggle("border"));


// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener("click", () => document.getElementById("guinea-pig").classList.toggle("rounded-border"));