// const votes = ["Alice", "Bob", "Alice", "Mike", "Bob", "Alice"];

// countVotes(votes)
// // → { Alice: 3, Bob: 2, Mike: 1 }

function countVotes(arrOfVotes) {
  let result = {};
  for (let key of arrOfVotes) {
    result[key] = (result[key] || 0) + 1;
  }
  return result;
}

const votes = ['Alice', 'Bob', 'Alice', 'Mike', 'Bob', 'Alice'];
console.log(countVotes(votes));
