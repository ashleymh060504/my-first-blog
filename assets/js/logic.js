// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle");
  const body = document.body;
  const circle = document.querySelector(".circle");

  const savedMode = localStorage.getItem("mode")
  if (savedMode) {
    body.classList.add(savedMode);
    circle.classList.add(savedMode);
  }

  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      circle.classList.remove("light");
      circle.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      circle.classList.remove("dark");
      circle.classList.add("light");
      localStorage.setItem("mode", "light");
    }
  });
});

const toggle = document.getElementById('toggle');
const toggleText = document.querySelector('.toggle-text');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        toggleText.textContent = 'Dark Mode';
    } else {
        toggleText.textContent = 'Light Mode';
    }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

