// 6-sky_high.js
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  toString() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
