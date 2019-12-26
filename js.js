"use strict";

let btn1 = document.getElementById('task0'),
    btn2 = document.getElementById('task1'),
    btn3 = document.getElementById('task2')

//  0

let user1 = {
    name: 'User',
    email: 'user@mail.com',
    pass: 'qweqwe',
    id: 0
}

let user2 = new Object();
user2.name = 'User';
user2.email = 'user@mail.com';
user2.pass = "qweqwe";
user2.id = 0

function User(name, email, pass, id) {
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.id = id;
}
let user3 = new User('User', 'user@mail.com', 'qweqwe', 0)

btn1.addEventListener('click', () => {
    console.log(user1);
    console.log(user2);
    console.log(user3);
})


// 1

function Order(order, cart, users, emails) {
    this.order = order;
    this.cart = cart;
    this.users = users;
    this.emails = emails;
    this.getOrderInfo = function () {
        return `User name:  ${this.users[this.order.userIndex]} Order sum: ${this.cart.getSum()}`
    }
    this.closeOrder = function () {
        this.order.finishOrder();
        console.log(`Email was sent to ${this.emails[this.order.userIndex]}; Order Status: ${this.order.status}`)

    }

}

let order = {
    userIndex: 2,
    status: 'Delivery',
    getOrdrStatus: function () {
        console.log(this.status)
    },
    finishOrder: function () {
        this.status = 'Delivered'
    }

};

let cart = {
    price: 120,
    qty: 2,
    getTax: function () {
        return this.price * 0.2;
    },
    getSum: function () {
        return (this.price + this.getTax()) * this.qty
    }

}

let users = ['Alex', 'Mike', 'Joe', 'Ben'];

let emails = ['alex@gmail.com', 'mike@gmail.com', 'joe@gmail.com',];

let order1 = new Order(order, cart, users, emails);

btn2.addEventListener('click', () => {
    console.log(order1.getOrderInfo());
    order1.closeOrder();

})

// 2

function Calculator() {
    this.validation = function (num) {
        if (num.replace(/\d/g, '').length) return false;
        return true;
    }
    this.read = function () {
        let num1 = prompt('Enter number', '');
        if (this.validation(num1)) {
            this.num1 = +num1
        } else {
            num1 = prompt('Error!!! Please enter number', '');
        }
        let num2 = prompt('Enter number', '');
        if (this.validation(num2)) {
            this.num2 = +num2
        } else {
            num1 = prompt('Error!!! Please enter number', '');
        }
    }
    this.sum = function () {
        return this.num1 + this.num2
    }
    this.mul = function () {
        return this.num1 * this.num2
    }
    this.min = function () {
        return this.num1 - this.num2
    }
}

let calc = new Calculator();

btn3.addEventListener('click', () => {
    calc.read();
    console.log(`Sum ${calc.sum()}`);
    console.log(`Mul ${calc.mul()}`);
    console.log(`Min ${calc.min()}`);

})