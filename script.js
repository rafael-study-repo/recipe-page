// Create a set to store unique class names
const classNames = new Set();

// Function to collect class names from an element
function collectClassNames(element) {
  if (element.classList.length > 0) {
    element.classList.forEach((className) => classNames.add(className));
  }
  // Recursively collect class names from child elements
  element.childNodes.forEach((child) => collectClassNames(child));
}

// Start collecting from the document body
collectClassNames(document.body);

// Convert the set to an array and log the class names
console.log(Array.from(classNames));
