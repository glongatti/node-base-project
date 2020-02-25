function clone(obj) {
  if (!obj) return obj;
  return JSON.parse(JSON.stringify(obj));
}

function keepProps(obj, keep) {
  Object.keys(obj).forEach((prop) => {
    if (keep.indexOf(prop) === -1) {
      delete obj[prop];
    }
  });
}
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function getProps(obj, props) {
  const newObj = {};
  props.forEach((prop) => {
    newObj[prop] = obj[prop];
  });
  return newObj;
}

function shuffleArray(arrayToShuffle, start = 0, end = arrayToShuffle.length - 1) {
  if (end > arrayToShuffle.length - 1) end = arrayToShuffle.length - 1;
  if (start < 0) start = 0;
  if (start > arrayToShuffle.length - 1) start = arrayToShuffle.length - 1;
  for (let i = end; i > start; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const itemAtIndex = arrayToShuffle[randomIndex];
    arrayToShuffle[randomIndex] = arrayToShuffle[i];
    arrayToShuffle[i] = itemAtIndex;
  }
  return arrayToShuffle;
}

function includes(target, pattern) {
  let value = 0;
  pattern.forEach((word) => {
    value += target.includes(word);
    value += target.includes(word.toUpperCase());
  });
  return (value === 1);
}

function findCaseInsensitive(array, pattern) {
  let found;
  found = array.find(item => pattern.includes(item));
  if (found) return found;
  found = array.find(item => pattern.includes(item.toUpperCase()));
  return found.toUpperCase() || '';
}

export default {
  clone,
  getProps,
  keepProps,
  shuffleArray,
  includes,
  findCaseInsensitive,
  isEmpty,
};
