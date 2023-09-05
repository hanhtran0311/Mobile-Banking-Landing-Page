var sports = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];

function getTotalGold(arr) {
  var totalMedal = arr.reduce(function (a, b) {
    return a + b.gold;
  }, 0);
  return totalMedal;
}

// Expected results:
console.log(getTotalGold(sports)); // Output: 23

var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "React JS",
    coin: 500,
  },
];
