// fetch("link")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error"));
/*
const getBtn = document.getElementById("btn");
const list = document.getElementById("list");

getBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(res => res.json())
        .then(data => {
            list.innerHTML = ""; 
            data.forEach(post => {
                const li = document.createElement("li");
                li.textContent = post.title; 
                list.appendChild(li);
            });
        })
        .catch(arr => console.error(arr))
})
*/
/*

const title = document.getElementById("title");
const addBtn = document.getElementById("btn");
const txt = document.getElementById("txt");

addBtn.addEventListener("click", () => {
  const post = {
    title: title.value,
    body: "text",
    userId: 1,
  };
  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      result.textcontent = `Post add whis ID ${data.id}`;
    })
    .catch((err) => console.error(err));
});
*/
/*
const title = document.getElementById("title");
const addBtn = document.getElementById("btn");
const txt = document.getElementById("txt");

addBtn.addEventListener("click", () => {
  fetch("", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
          title: "New title", 
          body: "new text", 
          userId: 1
    })
  })
    .then((res) => res.json())
    .then(data => console.log(data))
    .catch((err) => console.error(err));
});
*/
/*
const addBtn = document.getElementById("btn");

addBtn.addEventListener("click", () => {
    fetch('', {
        method: "DELETE"
    })
    .then(() => console.log("all gone"))
})
*/
/*
const addBtn = document.getElementById("btn");

addBtn.addEventListener("click", () => {
  fetch("", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({ title: 'New title' }),
  })
    .then((res) => res.json())
    .then((data) => console.log("new", data))
    .catch((err) => console.error(err));
});
*/

fetch('')
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById("list"); 
        list.innerHTML = ""; 
        data.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.email; 
            list.appendChild(li)
        });
    })