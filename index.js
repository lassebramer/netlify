var button = document.getElementById("getTree");

async function sendData() {
  await (await fetch("./netlify/functions/api")).json();
}

sendData().then(data => {
  console.log(data);
});

button.onclick = sendData;
