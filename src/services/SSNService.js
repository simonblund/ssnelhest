/* eslint-disable no-case-declarations */
import { FinnishSSN } from 'finnish-ssn';
import * as Isikukood from 'isikukood';

class SSN {
  #sex;

  #birthdate;

  #ssn;

  constructor(birthdate, sex) {
    this.#sex = sex;
    this.#birthdate = birthdate.split('-');
  }

  get sex() {
    return this.#sex;
  }

  get birthdate() {
    return this.#birthdate;
  }

  get year() {
    return parseInt(this.#birthdate[0], 10);
  }

  get month() {
    return parseInt(this.#birthdate[1], 10);
  }

  get day() {
    return parseInt(this.#birthdate[2], 10);
  }

  set ssn(ssn) {
    this.#ssn = ssn;
  }

  get ssn() {
    return this.#ssn;
  }
}

export default function generateSSN(country, sex, birthdate) {
  switch (country.country) {
    case 'sweden':
      return '20001212-1234';
    case 'finland':
      return FinnishSSN.createWithAge(20);
    case 'estonia':
      const ssn = new SSN(birthdate, sex);
      console.log(sex);
      ssn.ssn = Isikukood.generate({
        gender: ssn.sex,
        birthDay: ssn.day,
        birthMonth: ssn.month,
        // eslint-disable-next-line comma-dangle
        birthYear: ssn.year
      });
      return ssn.ssn;
    case 'latvia':
      return '20001212-1234';
    default:
      return FinnishSSN.createWithAge(20);
  }
}
