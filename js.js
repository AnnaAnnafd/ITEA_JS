class Car {

    _engineСapacity = [];

    constructor(props) {
        this._owner = props.name
    }

    get owner() {
        return this._owner
    }

    set owner(name) {
        this._owner = name
    }

    set engineСapacity(val){
        this._engineСapacity.push(val)
    }

    get engineСapacity(){
        return this._engineСapacity.join(' ');
    }

}

class GermanyCar extends Car {

    constructor(props) {
        super(props);
        this.country = "Germany";
    }

    startCar(){
        console.log('Your GermanyCar car was started')
    }

}

class Audi extends GermanyCar {

    constructor(props) {
        super(props);
        this.model = props.model;
    }

    startCar(){
        console.log('Your Audi car was started')
    }
    
    visitAudiServece(){
        return "You've been arrived to Audi service center"
    }

}

class AudiA4 extends Audi {

    #pass = '123456';

    constructor(props) {
        super(props);
        this.color = props.color;
        this._year = props.year
        this._vinCode = function () { return props.vinCode }
    }

    static getPass(){
        return 'Call static method'
    }

    get vinCode(){
        return this._vinCode();
    }

    get year() {
        return this._year
    }


    incrementYear() {
        this._year++
    }

    decrementYear() {
        this._year--
    }
}

console.log(AudiA4.getPass());

let carOps = {
    name: 'anna',
    model: 'a4',
    color: "white",
    year: 2011,
    vinCode: 'D4545N128'
}

const car1 = new AudiA4(carOps);
const car2 = Object.assign(car1);






