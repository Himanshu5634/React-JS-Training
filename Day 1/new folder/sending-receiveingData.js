// Sending Data
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => console.log("Post created:", data))
    .catch(error => console.error("Error:", error));
  
  // Receiving Data
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log("Fetched posts:", data))
    .catch(error => console.error("Error:", error));
  