let mybutton = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

function scrolltoTop(){
    window.scrollTo(0, 0);
}


//Select Person
const person = document.querySelector(".person"),
personBtn = person.querySelector(".personBtn"),
options = person.querySelector(".options");

//array some person
let personNum = ["Person 1", "Person 2", "Person 3", "Person 4"];

function addPerson() {
  personNum.forEach(num => {
    let li = `<li onclick="updatePerson(this)">${num}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  }); 
}
addPerson();

function updatePerson(selectedLi) { 
  person.classList.remove("active");
  personBtn.firstElementChild.innerText = selectedLi.innerText;
}

personBtn.addEventListener("click", () => {
  person.classList.toggle("active");
});

//Toggle Hamberger menu
const hamberger = document.querySelector(".hamberger");
const show = document.querySelector(".menu");

hamberger.addEventListener("click", () => {
  show.classList.toggle('isactive');
})

//Toggle contentDropdown
const showDropdown = document.querySelector(".showDropdown");
const contentDropdown = document.querySelector(".content-dropdown");

showDropdown.addEventListener("click", () => {
  contentDropdown.classList.toggle('active');
})