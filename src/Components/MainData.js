class MainData {
    constructor(firstname, lastname, email, password, address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.address = address;
    }

    get Firstname() {
        return this.firstname;
    }
    get Lastname() {
        return this.lastname;
    }
    get Email() {
        return this.email;
    }
    get Password() {
        return this.password;
    }
    get Address() {
        return this.address;
    }
}

const maindata = new MainData("Emmanuel", "Amarikwa", "Amarikwa@gmail.com", "4673u2yvtt", "1234, Lagos, Nigeria");
console.log(maindata);

// ✅ Fix export typo
export default MainData;
