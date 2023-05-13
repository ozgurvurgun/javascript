/* 
  async function getData() {
  const RESPONSE = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await RESPONSE.json();
  console.log(data);
}
getData(); 
*/

//arrow function kullanimi
const GET_DATA = async () => {
  try {
    const RESPONSE = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await RESPONSE.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
GET_DATA();
