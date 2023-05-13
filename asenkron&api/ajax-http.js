const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onload = () => {
  const RESPONSE = xhr.responseText;
  if (xhr.status === 200) {
    console.log(JSON.parse(RESPONSE));
  } else {
    console.log("hata oluştu:" + xhr.status);
  }
};
xhr.send();