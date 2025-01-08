export default class ALXClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // Override the default valueOf method for number conversion
  valueOf() {
    return this._size;
  }

  // Override the default toString method for string conversion
  toString() {
    return this._location;
  }
}
