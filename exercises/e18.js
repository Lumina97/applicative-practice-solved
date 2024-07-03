import { minBy } from "./e17";
import { maxBy } from "./e17";

/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  //Is this actually how we are supposed to solve this?
  //I did not come up with this myself and also seems very much like a big jump
  //in the knowledge that we should have at this point?

  const frequencyMap = data.asteroids.reduce((map, asteroids) => {
    let num = asteroids.discoveryYear;
    map[num] = (map[num] || 0) + 1;
    return map;
  }, {});

  const frequencyArray = Object.entries(frequencyMap).map(([num, count]) => ({
    num: Number(num),
    count,
  }));

  return maxBy(frequencyArray, (item) => item.count).num;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
