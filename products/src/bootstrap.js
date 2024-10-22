import { products } from "./data";

const mount = (el) => {
  products.forEach((i) => {
    // Create a new HTML element (e.g., a paragraph)
    const newElement = document.createElement("p");
    newElement.textContent = `${i.name}`;
    // Append the new element to the div
    el.appendChild(newElement);
  });
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-products");
  // used for running this MFE as a standalone app
  if (el) {
    mount(el);
  }
}

//this will be utilized the container
export { mount };
