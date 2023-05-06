let users = [
  {
    id: 0,
    name: "Ozgur",
    surname: "Vurgun",
    location: {
      city: "Izmir",
      county: "Buca",
      hobbys: ["computer", "science"],
    },
  },
  {
    id: "my heart",
    name: "Ece",
    surname: "Sensoz",
    location: {
      city: "Izmir",
      county: "Kemalpasa",
      hobbys: ["art", "history"],
    },
  },
  {
    id: 2,
    name: "Jessica",
    surname: "smith",
    location: {
      city: "United States",
      county: "Los Angeles",
      hobbys: ["cartoon", "tennis"],
    },
  },
];
console.log("user information:\n" + users[1].location.hobbys[0]);
