import {Transport} from "./lab4";

const owner1: Transport.Owner = new Transport.OwnerClass(
    "Иванов",
    "Иван",
    "Иванович",
    "01.01.1991",
    Transport.DocumentsType.Passport,
    1234,
    567890
);

const car1: Transport.Car = new Transport.Automobile(
    "Toyota",
    "Nissan",
    2020,
    12345678901234567,
    123456,
    owner1,
    Transport.CarType.Sedan,
    Transport.CarClass.Business
);

const storage: Transport.StorageTV<Transport.Car> = new Transport.StorageTV<Transport.Car>();
storage.addVehicle(car1);

console.log(storage.getVehicles());