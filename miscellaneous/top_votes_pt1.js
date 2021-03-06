let candidates = [
  {name: 'Ben', time: 10},
  {name: 'Jen', time: 5},
  {name: 'Ben', time: 9},
  {name: 'Jen', time: 6},
  {name: 'Ben', time: 2},
];

// 6 -> 'Jen'
// 10 -> 'Ben'

// console.log(getTopVote(candidates, 6)); // Jen
console.log(getTopVote(candidates, 10)); // Ben

function getTopVote(candidates, time) {

  // let histogram = {
  //   Ben: 1,
  //   Jen: 2
  // };

  let count = {};

  // add to histogram
  candidates.forEach(function(candidate) {
    if (candidate.time <= time) {
      if (count[candidate.name]) {
        count[candidate.name] += 1;
      } else {
        count[candidate.name] = 1;
      }
    }
  });

  // get highest count
  let highestCount = 0;
  let highestName;

  for (let name in count) {
    if (count[name] > highestCount) {
      highestName = name;
      highestCount = count[name];
    }
  }
  return highestName;
}