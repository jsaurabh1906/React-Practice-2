//Note:The Fetch API uses Request and Response objects (and other things involved with network requests),
//Note: as well as related concepts such as CORS and the HTTP Origin header semantics.

//Note: For making a request and fetching a resource, use the fetch() method.

//Info: 1. GET : fetch data from api

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    console.log("User Data:", data);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

// getUser();

//Info: 2. POST : send data to api

async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //Note: JSON.stringify() to send the body in JSON format.
      body: JSON.stringify({
        title: "New Post",
        body: "Hello, Today is 3rd Feb.",
        userId: 1,
      }),
    });
    const data = await response.json();
    console.log("Created Post Data:", data);
  } catch (error) {
    console.log("Error crating post:", error);
  }
}

// createPost();
//logger: Created Post Data: {title: 'New Post', body: 'Hello, Today is 3rd Feb.', userId: 1, id: 101}

//Info: 3. PUT : update data to api (full update)

async function updatePost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Updated Post",
          body: "Hello, Today is 3rd Feb 2025.",
          userId: 1,
        }),
      }
    );
    const data = await response.json();
    console.log("Updated Post Data:", data);
  } catch (error) {
    console.log("Error updating post:", error);
  }
}

updatePost();

//Info: 4. PATCH : update data to api (partial update)

async function patchPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Partially Updated Post",
          body: "Hello, Today is 3rd Feb 2025.",
        }),
      }
    );
    const patchedData = await response.json();
    console.log("Partially Updated Post Data:", patchedData);
  } catch (error) {
    console.log("Error updating post:", error);
  }
}

patchPost();

//Info: 5. DELETE : delete data from api

async function deletePost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("Post Deleted:", response.status);
    } else {
      console.error("Failed to delete the tpost");
    }
  } catch (error) {
    console.log("Error deleting post:", error);
  }
}

deletePost();
