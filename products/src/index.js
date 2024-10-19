import {products} from './data'

const pdtListRoot = document.getElementById('pdt-list')
console.log("hello from remote")
products.forEach(i=>{
     // Create a new HTML element (e.g., a paragraph)
     const newElement = document.createElement('p');
     newElement.textContent = `${i.name}`;
     // Append the new element to the div
     pdtListRoot.appendChild(newElement);
})
