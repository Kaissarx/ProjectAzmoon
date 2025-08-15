async function basicFetch() {
  const output = document.getElementById("basicOutput");
  try {
    console.log(
      "Hello from our first try-catch block in the Fetch API Session"
    );
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    // const data= await response.json();

    response.products.forEach(products => {
    output.innerHTML += `<div class="card">
    <img src="${products.images[0]}" alt="${products.title}"> 
    <p> ${products.brand ?`<h5>${products.brand}</h5>` : ''}</p>
    <h2> ${products.title}</h2>
    <p>🌟 ${products.rating}</p>
    <p class="price"> £ ${products.price}</p>
    </div>`});

  } catch (err) {
    console.log(err);
  }
}

document.addEventListener('DOMContentLoaded', basicFetch);
