var button = document.getElementById("getTree");
button.onclick = sendData;

async function sendData() {
  data = await (await fetch("/.netlify/functions/api")).body;
  console.log(data);
}
