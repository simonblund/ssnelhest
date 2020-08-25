/* eslint-disable no-case-declarations */
import { FinnishSSN } from 'finnish-ssn';
import * as Isikukood from 'isikukood';
import SwedishSSN from 'swedish-ssn-tool';
import lvSSNGenerator from './latvianSSN';

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
      return SwedishSSN.generateSSNWithParameters(new Date(birthdate), sex);
    case 'finland':
      const fissn = new SSN(birthdate, sex);
      return FinnishSSN.createWithAge(2020 - fissn.year);
    case 'estonia':
      const sessn = new SSN(birthdate, sex);
      sessn.ssn = Isikukood.generate({
        gender: sessn.sex,
        birthDay: sessn.day,
        birthMonth: sessn.month,
        // eslint-disable-next-line comma-dangle
        birthYear: sessn.year
      });
      return sessn.ssn;
    case 'latvia':
      const lvssn = new SSN(birthdate, sex);
      return lvSSNGenerator(lvssn.day, lvssn.month, lvssn.year);
    default:
      return FinnishSSN.createWithAge(20);
  }
}
