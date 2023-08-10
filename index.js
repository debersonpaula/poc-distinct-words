const sample = "abcc";

/**
 *
 * @param {string} value
 * @param {number} k
 * @returns
 */

// O (2*n + 2)
function checkDistinct(value, k) {
  let distinct = 0;

  for (let i = 0; i < value.length; i++) {
    const validateString = value.substring(i, i + k);
    if (validateString.length < k) {
      return distinct;
    }

    const obj = validateString.split("").reduce((previous, current) => {
      return { ...previous, [current]: 1 };
    }, {});

    const distinctInTest = Object.keys(obj).length;
    if (distinctInTest === k) {
      distinct++;
    }
  }

  return distinct;
}

console.log(checkDistinct("abcc", 2));
console.log(checkDistinct("aabab", 3));
