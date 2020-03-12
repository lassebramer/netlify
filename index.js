var button = document.getElementById("getTree");
button.onclick = sendData;

async function sendData() {
  data = await fetch("/.netlify/functions/api");
  console.log(data);
}
