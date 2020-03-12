var button = document.getElementById("getTree");

const sendData = async () => {
  await await (await fetch("/.netlify/functions/api")).json();
};

sendData().then(data => {
  console.log(data);
});

button.onclick = sendData;
