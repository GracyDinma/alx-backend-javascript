class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CloneConstructor = Object.getPrototypeOf(this).constructor;
    const newCar = new CloneConstructor();
    newCar._brand = this._brand;
    newCar._motor = this._motor;
    newCar._color = this._color;
    return newCar;
  }
}

export default Car;
