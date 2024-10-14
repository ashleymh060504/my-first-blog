// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.querySelector('#back');
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
                <article>
                    <h2>${post.title}</h2>
                    <p> By: ${post.username}</p>
                    <p>${post.content}</p>
                </article>   
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
