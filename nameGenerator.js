(function generator(numberOfNames) {
  const chars = ['a', 'e', 'i', 'o', 'u', 'y', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'z'],
    result = [],
    getRandom = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
  let counter = 0;
  (function generateName(numberOfNames) {
    while (counter < numberOfNames) {
      let name = '', i = 0;
      while (i < getRandom(3, 10)) {
        (function getChar() {
          const char = chars[getRandom(0, chars.length - 1)];
          (char !== 't' && char === name[name.length - 1]) ||
          (/[aeiou]/.test(char) && /[aeiou]/.test(name[name.length - 1])) ||
          (/[bcdfghjklmnprsvwxz]/.test(char) && /[bcdfghjklmnprsvwxz]/.test(name[name.length - 1]))
            ? getChar()
            : (name += char && i++);
        })();
      }
      counter++;
      result.push(name[0].toUpperCase() + name.slice(1));
    }
  })(numberOfNames);
  console.log(result);
})(5);
