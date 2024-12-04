const fetch = require("node-fetch");

const FILE_KEY = "2z8ERvVuHVoV5jfAYl4vRw"; // Replace with your file key
const FIGMA_TOKEN = "YOUR_PERSONAL_ACCESS_TOKEN"; // Replace with your Figma token

async function fetchFigmaFile() {
  const url = `https://api.figma.com/v1/files/${FILE_KEY}`;

  const response = await fetch(url, {
    headers: {
      "X-Figma-Token": FIGMA_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching file: ${response.statusText}`);
  }

  const data = await response.json();
  console.log(data); // This will include all node and design information
}

fetchFigmaFile().catch(console.error);
function findNode(node, id) {
    if (node.id === id) {
      return node;
    }
  
    if (node.children) {
      for (const child of node.children) {
        const result = findNode(child, id);
        if (result) return result;
      }
    }
  
    return null;
  }
  
  // After fetching the Figma file:
  const node = findNode(data.document, "0-1");
  console.log(node);
  