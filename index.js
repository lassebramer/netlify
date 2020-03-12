var button = document.getElementById("getTree");
button.onclick = sendData;

const sendData = async () => {
  await await (await fetch("/.netlify/functions/api")).json();
};

sendData().then(data => {
  console.log(data);
});
