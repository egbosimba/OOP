// classes
class Car {
    constructor (name,model,year){
        this.name =  name
        this.model = model
        this.year = year
    }
    displayinfo (){
        return (`this is a ${this.name},model of ${this.model}, developed in ${this.year} `)
    }
}



class User {
    constructor (Fullname, phone, email, password){
        this.Fullname = Fullname
        this.phone = phone
        this.email = email
        this.password = password
    }
    login (){
        return (`${this.email} has logged in successfully`)
    }
    logout (){
        return (`${this.email} has logged out successfully`)
    }
}

class BankAccount{
    #balance
    constructor(Fullname, phone, email, initialBalance,){
        this.Fullname = Fullname
        this.phone = phone
        this.email = email
        this.accNumber=phone
        this.#balance = initialBalance
    }
    deposit(amount){
        if(amount>50){
            this.#balance += amount
        }
    }
    withdrawal(amount){
        if(amount>50 && amount <=this.#balance){
            this.#balance -= amount
        }else{
            console.log("insufficient funds")
        }
    }
    getbalance(){
        return this.#balance;
    }

}

// abstraction

const myCar = new Car(`Lexus`,`supersport`,2026)
console.log(myCar);

const myCar1 = new Car(`BMW`,`x16`,2027)
console.log(myCar1);

const myUser = new User(`Lee`,`123@email.com`,`000999223`,`00000`)
console.log(myUser);


const myBankAcct = new BankAccount (`Techlion`,`0099223388`,`@Techlion`,1000000000)
console.log(myBankAcct);


myBankAcct.deposit(5000000)
myBankAcct.withdrawal(15000000)
console.log(myBankAcct.getbalance());


// inheritance
class SavingsAcct extends BankAccount{
    constructor(Fullname,phone,email, initialBalance, InterestRate){
        super(Fullname,email,phone,initialBalance)
        this.InterestRate = InterestRate 
    }

    applyInterest(){
        const interest = this.getbalance() * this.InterestRate/100
        this.deposit(interest)
        console.log(`interest of ${interest} added successfully`)
    }
}




const mySavingsAcct = new SavingsAcct (`CM`,8877990021,`@cm2000`,10000,2)
console.log(mySavingsAcct);
mySavingsAcct.deposit(10000)
mySavingsAcct.applyInterest()
console.log(mySavingsAcct.getbalance())



class FixedDepositAcct extends BankAccount{
    constructor(Fullname,email,phone,initialBalance,InterestRate,LockPeriod){
    super(Fullname,email,phone,initialBalance)
    this.InterestRate = InterestRate
    this.LockPeriod = LockPeriod
}
applyInterest(){
    const interest = this.getbalance() * this.InterestRate/100
    this.deposit(interest)
    console.log(`interest of ${interest} will be added successfully after ${this.LockPeriod} months`)
}
withdrawal(amount){
    console.log(`withdrawals not allowed during LockPeriod of ${this.LockPeriod} months`)
}
}

const myFixedAccount = new FixedDepositAcct (`Mars`,11228894003,`mars12345@kgmail.com`,10000,12,12)
myFixedAccount.deposit(5000)
myFixedAccount.applyInterest()
myFixedAccount.withdrawal(3000)
console.log(myFixedAccount.getbalance())


