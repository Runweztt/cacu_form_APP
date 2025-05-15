class MainData {
  constructor(firstname, lastname, email, password, address) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.address = address;
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  hidePassword() {
    return '*'.repeat(this.password.length);
  }

  toJSON() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      address: this.address,
    };
  }

  isEmailValid() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(this.email);
  }

  updateField(key, value) {
    if (this.hasOwnProperty(key)) {
      this[key] = value;
    }
  }

  isStrongPassword() {
    return this.password.length >= 8 && /\d/.test(this.password);
  }
}

export default MainData;
