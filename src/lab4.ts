
// transport.ts
export namespace Transport {
    export interface Owner {
        surname: string;
        name: string;
        patronymic: string;
        birthDate: string;
        documentType: DocumentsType;
        documentSerialNumber: number;
        documentNumber: number;
        displayOwnerDetails(): void;
    }

    export enum DocumentsType {
        Passport = "Паспорт",
        DriverLicense = "Водительская лицензия",
        IDCard = "ID карта",
        Other = "Другое"
    }

    export interface TransportVehicle {
        mark: string;
        model: string;
        productionYear: number;
        vinNumber: number;
        registrationNumber: number;
        aboutOwner: Owner;

        displayVehicleDetails(): void;
    }

    export class Transport implements TransportVehicle {
        private _mark: string;
        private _model: string;
        private _productionYear: number;
        private _vinNumber: number;
        private _registrationNumber: number;
        private _aboutOwner: Owner;

        constructor(
            mark: string,
            model: string,
            productionYear: number,
            vinNumber: number,
            registrationNumber: number,
            aboutOwner: Owner,
        ) {
            this._mark = mark;
            this._model = model;
            this._productionYear = productionYear;
            this._vinNumber = vinNumber;
            this._registrationNumber = registrationNumber;
            this._aboutOwner = aboutOwner;
        }

        get mark(): string {
            return this._mark;
        }

        set mark(value: string) {
            this._mark = value;
        }

        get model(): string {
            return this._model;
        }

        set model(value: string) {
            this._model = value;
        }

        get productionYear(): number {
            return this._productionYear;
        }

        set productionYear(value: number) {
            this._productionYear = value;
        }

        get vinNumber(): number {
            return this._vinNumber;
        }

        set vinNumber(value: number) {
            this._vinNumber = value;
        }

        get registrationNumber(): number {
            return this._registrationNumber;
        }

        set registrationNumber(value: number) {
            this._registrationNumber = value;
        }

        get aboutOwner(): Owner {
            return this._aboutOwner;
        }

        set aboutOwner(value: Owner) {
            this._aboutOwner = value;
        }

        displayVehicleDetails(): void {
            console.log(`Марка: ${this._mark}, Модель: ${this._model} VIN-номер: ${this._vinNumber} Регистрационный номер: ${this._registrationNumber}`);
        }
    }

    export class OwnerClass implements Owner {
        private _surname: string;
        private _name: string;
        private _patronymic: string;
        private _birthDate: string;
        private _documentType: DocumentsType;
        private _documentSerialNumber: number;
        private _documentNumber: number;

        constructor(
            surname: string,
            name: string,
            patronymic: string,
            birthDate: string,
            documentType: DocumentsType,
            documentSerialNumber: number,
            documentNumber: number,
        ) {
            this._surname = surname;
            this._name = name;
            this._patronymic = patronymic;
            this._birthDate = birthDate;
            this._documentType = documentType;
            this._documentSerialNumber = documentSerialNumber;
            this._documentNumber = documentNumber;
        }

        get surname(): string {
            return this._surname;
        }
        set surname(value: string) {
            this._surname = value;
        }
        get name(): string {
            return this._name;
        }
        set name(value: string) {
            this._name = value;
        }
        get patronymic(): string {
            return this._patronymic;
        }
        set patronymic(value: string) {
            this._patronymic = value;
        }
        get birthDate(): string {
            return this._birthDate;
        }
        set birthDate(value: string) {
            this._birthDate = value;
        }
        get documentType(): DocumentsType {
            return this._documentType;
        }
        set documentType(value: DocumentsType) {
            this._documentType = value;
        }
        get documentSerialNumber(): number {
            return this._documentSerialNumber;
        }
        set documentSerialNumber(value: number) {
            this._documentSerialNumber = value;
        }
        get documentNumber(): number {
            return this._documentNumber;
        }
        set documentNumber(value: number) {
            this._documentNumber = value;
        }

        displayOwnerDetails(): void {
            console.log(
                `Фамилия: ${this._surname}, Имя: ${this._name} Отчество: ${this._patronymic} Дата рождения: ${this._birthDate} Тип документа: ${this._documentType} Серия документа: ${this._documentSerialNumber} Номер документа: ${this._documentNumber}`
            )
        }
    }

    export enum CarClass {
        Economy = "Economy",
        Business = "Comfort",
        Luxury = "Business"
    }

    export enum CarType {
        Sedan = "Sedan",
        SUV = "SUV",
        Hatchback = "Hatchback"
    }

    export interface Car extends TransportVehicle {
        carType: CarType;
        carClass: CarClass;
    }

    export class Automobile extends Transport implements Car {
        private _carType: CarType;
        private _carClass: CarClass;

        constructor(
            mark: string,
            model: string,
            productionYear: number,
            vinNumber: number,
            registrationNumber: number,
            aboutOwner: Owner,
            carType: CarType,
            carClass: CarClass
        ) {
            super(mark, model, productionYear, vinNumber, registrationNumber, aboutOwner);
            this._carType = carType;
            this._carClass = carClass;
        }

        get carType(): CarType {
            return this._carType;
        }

        set carType(value: CarType) {
            this._carType = value;
        }

        get carClass(): CarClass {
            return this._carClass;
        }

        set carClass(value: CarClass) {
            this._carClass = value;
        }

        displayVehicleDetails(): void {
            super.displayVehicleDetails();
            console.log(`Тип: ${this._carType}, Класс: ${this._carClass}`);
        }
    }

    export interface Motorbike extends TransportVehicle {
        frameType: string;
        isForSport: boolean;
    }

    export class MotorbikeImpl extends Transport implements Motorbike {
        private _frameType: string;
        private _isForSport: boolean;

        constructor(
            mark: string,
            model: string,
            productionYear: number,
            vinNumber: number,
            registrationNumber: number,
            aboutOwner: Owner,
            frameType: string,
            isForSport: boolean
        ) {
            super(mark, model, productionYear, vinNumber, registrationNumber, aboutOwner);
            this._frameType = frameType;
            this._isForSport = isForSport;
        }

        get frameType(): string {
            return this._frameType;
        }

        set frameType(value: string) {
            this._frameType = value;
        }

        get isForSport(): boolean {
            return this._isForSport;
        }

        set isForSport(value: boolean) {
            this._isForSport = value;
        }

        displayVehicleDetails(): void {
            super.displayVehicleDetails();
            console.log(`Тип рамы: ${this._frameType}, Для спорта: ${this._isForSport}`);
        }
    }

    export interface VehicleStorage<T extends TransportVehicle> {
        dateCreated: Date;
        storage: T[];

        addVehicle(vehicle: T): void;
        getVehicles(): T[];
    }

    export class StorageTV<T extends TransportVehicle> implements VehicleStorage<T> {
        dateCreated: Date;
        storage: T[];

        constructor() {
            this.dateCreated = new Date();
            this.storage = [];
        }

        addVehicle(vehicle: T): void {
            this.storage.push(vehicle);
        }

        getVehicles(): T[] {
            return this.storage;
        }
    }
}

const data: number[] = [12, 23, 34, 45];

function createLogger(message: string) {
    return function() {
        console.log(message);
    };
}

async function removeOddNumbers(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            const logMessage = createLogger(`Удаление числа: ${arr[i]}`);
            logMessage(); // Вызов функции для логирования
            await new Promise(resolve => setTimeout(resolve, 1000)); // Задержка 1 секунда
            arr.splice(i, 1); // Удаление нечетного числа
            i--; // Уменьшаем индекс, чтобы не пропустить следующий элемент
        }
    }
}

removeOddNumbers(data).then(() => {
    console.log("Остаток массива:", data);
});
