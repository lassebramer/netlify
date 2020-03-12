var button = document.getElementById("getTree");
button.onclick = sendData;

async function sendData() {
  data = await (await fetch("/.netlify/functions/api")).text();
  console.log(data);
}
