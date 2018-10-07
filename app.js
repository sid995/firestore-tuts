const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");

// create element and render cafe
function renderCafe(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = "x";

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  cafeList.appendChild(li);

  // deleting data
  cross.addEventListener("click", e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
<<<<<<< HEAD
    // using .doc() to find single document and delete() to delete the document
=======
    // using .doc() to find single document
>>>>>>> c46988f224c3a7b8af81ca3696ce43d79a63aa2f
    db.collection("cafes")
      .doc(id)
      .delete();
  });
}

// Getting data

db.collection("cafes")
  .get()
  .then(snapshot => {
    // get data in snapshot
    snapshot.docs.forEach(doc => {
      renderCafe(doc);
    }); // cycle through each data in snapshot
  });

// Saving data
form.addEventListener("submit", e => {
  e.preventDefault();
  db.collection("cafes").add({
    name: form.name.value,
    city: form.city.value
  });
  form.name.value = "";
  form.name.city = "";
});
