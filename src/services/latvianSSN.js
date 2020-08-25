function padWithZero(input) {
  const value = input.toString();
  return value.length === 1 ? '0'.concat(value) : value;
}

function getCheckDigit(pk) {
  const factor = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

  // eslint-disable-next-line radix
  const ssn = pk.split('').map((i) => parseInt(i));

  const reduce = ssn.reduce((prev, cur, i) => cur * factor[i] + prev);

  return (1101 - reduce) % 11;
}

function getSecondPart() {
  return `1${Math.floor((Math.random() * 899) + 100)}`;
}

export default function generate(day, month, year) {
  let ssn = '';
  const pDay = padWithZero(day);
  const pMonth = padWithZero(month);
  const shortYear = year.toString().substring(2);

  const firstPart = `${pDay}${pMonth}${shortYear}`;

  let checkDigit = '00';

  while (checkDigit.toString().length === 2) {
    ssn = firstPart + getSecondPart();
    checkDigit = getCheckDigit(ssn);
  }

  ssn += checkDigit;
  ssn = `${ssn.substring(0, 6)}-${ssn.substring(6)}`;

  return ssn;
}
