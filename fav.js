let favArr = JSON.parse(localStorage.getItem("fav")) || [];
const favList = document.getElementById("favList");

function displayFavs() {
  favList.innerHTML = "";
  if (favArr.length === 0) {
    favList.innerHTML = "<p style='text-align:center; font-size:18px;'>No favourites yet ❤️</p>";
    return;
  }

  favArr.forEach((el, i) => {
    const card = document.createElement("div");
    card.className = "task-card";

    const title = document.createElement("div");
    title.className = "task-title";
    title.innerText = el.taskName;

    const pr = document.createElement("div");
    pr.className = "priority " + (el.taskpriority.toLowerCase());
    pr.innerText = el.taskpriority;

    const actions = document.createElement("div");
    actions.className = "actions";

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.innerText = "❌ Remove";
    removeBtn.onclick = function () {
      favArr.splice(i, 1);
      localStorage.setItem("fav", JSON.stringify(favArr));
      displayFavs();
    };

    actions.append(removeBtn);
    card.append(title, pr, actions);
    favList.append(card);
  });
}

displayFavs();
