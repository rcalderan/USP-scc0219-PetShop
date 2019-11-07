/* eslint-disable no-unused-vars */
class NotImplementedException extends Error {
  constructor() {
    super('Not Implemented Exception');
  }
}
//interface
class IDb {
  create(item) {
    throw new NotImplementedException();
  }
  read(item) {
    throw new NotImplementedException();
  }
  update(id, item) {
    throw new NotImplementedException();
  }
  delete(id) {
    throw new NotImplementedException();
  }
  last() {
    throw new NotImplementedException();
  }
  count(){
    throw new NotImplementedException();
  }
  distinct(collumn){
    throw new NotImplementedException();
  }
  aggregate(query){
    throw new NotImplementedException();
  }
  isConnected(id) {
    throw new NotImplementedException();
  }
}

module.exports = IDb;
