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
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmission);