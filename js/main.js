let pageTitle = document.querySelector('title').textContent;
let sidebarTitles = document.querySelectorAll('.sidebar ul li');
let sidebarLinks = document.querySelectorAll('.sidebar ul li a');
let arrayOfLi = Array.prototype.slice.call(sidebarTitles);

for (var i = 0; i < arrayOfLi.length; i++) {
  if (arrayOfLi[i].innerText === pageTitle) {
    sidebarLinks.forEach(link => {
      link.classList.remove("active");
    });

    sidebarLinks[i].classList.add("active");
  }
}