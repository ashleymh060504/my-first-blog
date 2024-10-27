// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.getElementById(`blogContainer`);
const backButton = document.getElementById(`back`);
// TODO: Create a function that builds an element and appends it to the DOM
function createAndAppendElement() {
    const newArticle = document.createElement('article');
    document.main.appendChild(newArticle);
}
createAndAppendElement();
// TODO: Create a function that handles the case where there are no blog posts to display
function noPostsFunction() {
    const messageElement = document.createElement('div');
    messageElement.textContent = "No Blog posts yet...";
    document.getElementById('blogContainer').appendChild(messageElement);
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    if (blogPosts.length > 0) {
        blogPosts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML =
                `<h2>${post.title}</h2>
                    <p> By: ${post.username}</p>
                    <p>${post.content}</p>`  
            ;
            document.getElementById('blogContainer').appendChild(postElement); 
        });
    } else {
        noPostsFunction(); 
    }
}

// TODO: Call the `renderBlogList` function
renderBlogList(blogPosts);
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener(`click`, function() {
    redirectPage(`./index.html`);
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle");
    const body = document.body;
    const toggleText = document.querySelector('.toggle-text');
  
    const savedMode = localStorage.getItem("mode")
    if (savedMode) {
      body.classList.add(savedMode);
      toggleText.textContent = savedMode === "dark" ? 'Light Mode' : 'Dark Mode';
    }
  
    toggleButton.addEventListener("click", () => {
      if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("mode", "dark");
        toggleText.textContent = 'Light Mode';
      } else {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("mode", "light");
        toggleText.textContent = 'Dark Mode';
      }
    });
  });