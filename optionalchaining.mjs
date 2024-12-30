let user = [
  {
    name: "shital",
    location: {
      country: "nepal",
      city: "ktm",
    },
  },
  {
    name: "soobin",
  },
  {
    name: "beomgyu",
    location: {
      country: "korea",
      city: "daegu",
    },
  },
];

user.map((value, index) => {
  console.log(value.location?.city); //ktm undefined daegu
});

//location ma city euta ma xaina so ? ma lagayera jun jun ma city xa tyo display
