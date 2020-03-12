var button = document.getElementById("getTree");

async function sendData() {
  await fetch("/.netlify/functions/api");
}

sendData().then(data => {
  console.log(data);
});

button.onclick = sendData;
