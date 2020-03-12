var button = document.getElementById("getTree");
button.onabort = sendData;

const sendData = async () => {
  await await (await fetch("/.netlify/functions/api")).json();
};

sendData().then(data => {
  console.log(data);
});
