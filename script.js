document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("featuredItemsContainer");
      data.featuredItems.forEach((item) => {
        const itemElement = createFeaturedItem(item);
        container.appendChild(itemElement);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

function createFeaturedItem(itemData) {
  const item = document.createElement("div");
  item.className = "featured-item";

  const img = document.createElement("img");
  img.src = itemData.imageUrl;
  img.alt = itemData.name;
  item.appendChild(img);

  const name = document.createElement("h3");
  name.innerText = itemData.name;
  item.appendChild(name);

  const description = document.createElement("p");
  description.innerText = itemData.description;
  item.appendChild(description);

  const price = document.createElement("span");
  price.innerText = `$${parseFloat(itemData.price).toFixed(2)}`;
  item.appendChild(price);

  return item;
}
