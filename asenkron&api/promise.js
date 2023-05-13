function getRandomNumber() {
  return new Promise((resolve, reject) => {
    const NUMBER = Math.floor(Math.random() * 100);
    if (NUMBER % 2 === 0) {
      resolve(NUMBER);
    } else {
      reject(`HATA: ${NUMBER} sayısı tek bir sayı`);
    }
  });
}
getRandomNumber()
  .then((NUMBER) => console.log(`${NUMBER} sayısı çift bir sayı`))
  .catch((error) => console.log(error));