// Load blog posts from JSONPlaceholder API
async function loadBlogPosts() {
    try {
        // Fetch 6 fake posts
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
        const posts = await res.json();

        const container = document.getElementById("blog-container");
        container.innerHTML = ""; // Clear before adding

        posts.forEach((post, index) => {
            // Random image for each post
            const imageUrl = `https://picsum.photos/500/300?random=${index + 1}`;

            const card = `
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="${imageUrl}" class="card-img-top" alt="${post.title}">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body.substring(0, 100)}...</p>
                            <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });

    } catch (error) {
        console.error("Error loading blog posts:", error);
    }
}

// Load posts when page is ready
document.addEventListener("DOMContentLoaded", loadBlogPosts);
