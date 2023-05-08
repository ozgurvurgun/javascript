class Database {
  constructor(data) {
    this._data = data;
  }
  getData() {
    return this._data;
  }
  setData(value) {
    this._data = value;
  }
}

class DataController extends Database {
  constructor(data) {
    super(data);
  }
  getData() {
    return `Data ${super.getData()}`;
  }
}

let databaseOBJ = new Database("ozgur");
let dataControllerOBJ = new DataController("ece");
console.log(databaseOBJ._data);
dataControllerOBJ.setData("ela");
console.log(dataControllerOBJ._data);
