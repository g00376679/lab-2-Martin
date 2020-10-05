class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model =model;
        this.year = year;
    }



Information(){
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
}
}

let myVehicle = new Vehicle('VW', 'Golf', 2008);
let info = myVehicle.Information();

//create a new class and extends the class from superclass
class Cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model ,year );
        //door is not in superclass so we describing here in as a constructor
        this.doors = doors;

    }


    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
//creating new object and passing rest of four arguments .Access information about Vehicle
 let myCar = new Cars('VW', 'Golf', 2011, 5);
 myCar.Information();