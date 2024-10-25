// TODO: Create a variable that selects the form element
const form = document.getElementById('blogForm');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  const errorElement = document.getElementById('error');
  if (!username || !title || !content) {
    errorElement.textContent = "Please complete the form."; 
    return;
  }
  const blogPost = {
    username: username,
    title: title,
    content: content
  };
  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  redirectPage(`./blog.html`);
}  



// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmission);

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle");
  const body = document.body;
  const circle = document.querySelector(".circle");
  const toggleText = document.querySelector('.toggle-text');

  const savedMode = localStorage.getItem("mode")
  if (savedMode) {
    body.classList.add(savedMode);
    circle.classList.add(savedMode);
    toggleText.textContent = savedMode === "dark" ? 'Light Mode' : 'Dark Mode';
  }

  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      circle.classList.remove("light");
      circle.classList.add("dark");
      localStorage.setItem("mode", "dark");
      toggleText.textContent = 'Light Mode';
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      circle.classList.remove("dark");
      circle.classList.add("light");
      localStorage.setItem("mode", "light");
      toggleText.textContent = 'Dark Mode';
    }
  });
});