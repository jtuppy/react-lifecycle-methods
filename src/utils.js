export const printRed = (text) =>
  console.log(`%c  ${text}`, 'background: #DC143C; color: #FFFAF0; border: 1px solid #90EE90');

export const printBlack = (text) => console.log(`%c  ${text}`, 'background: #222; color: #FFFAF0');

export const printBlue = (text) =>
  console.log(`%c  ${text}`, 'background: #1E90FF; color: #FFFAF0');

export const memo = function memo(func) {
  let result = [];
  let argsKey = null;

  return function () {
    let key = JSON.stringify(arguments);
    if (argsKey === key) {
      return result;
    } else {
      result = func.apply(null, arguments);
      argsKey = key;
      return result;
    }
  };
};
