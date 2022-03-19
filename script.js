/* 
Project: Generate a random message generator
1. Come up with a topic to generate messages
2. Store messages in array (use API later on?)
3. Generate random number to access random message in messages array
4. Select random message from array 
5. Print to console
*/

// Random number generator that takes in num (length of the factsArray)
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// Array to store messages
const factsArray = [
  '42 is the result given by the web search engines Google, Wolfram Alpha and Bing when the query "the answer to life the universe and everything" is entered as a search.',
  '7175 is a centered octahedral number.',
  '8548 is the sum of the squares of 4 consecutive primes.',
  '2737 is a strong Friedman number.',
  "1923 is the smallest number whose cube contains 5 consecutive 1's.",
];

// Function
function generateFact() {
  const factsArrayLength = factsArray.length;
  const randomNum = generateRandomNumber(factsArrayLength);
  const randomFact = factsArray[randomNum];
  console.log(`Your random math trivia: ${randomFact}`);
}

// Initialise function 
generateFact();
