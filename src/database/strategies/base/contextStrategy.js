const IDb = require('./interfaceDb');

class ContextStrategy extends IDb {
  constructor(database) {
    super();
    this._database = database;
  }
  isConnected() {
    return this._database.isConnected();
  }
  static connect() {
    return this._database.connect()
  }
  create(item) {
    return this._database.create(item);
  }
  read(item,skip,limit) {
    return this._database.read(item,skip,limit);
  }
  
  lastId() {
    return this._database.lastId();
  }
  count() {
    return this._database.count();
  }
  distinct(collumn) {
    return this._database.distinct(collumn);
  }
  aggregate(query) {
    return this._database.aggregate(query);
  }
  update(id, item) {
    return this._database.update(id, item);
  }
  delete(id) {
    return this._database.delete(id);
  }
}

module.exports = ContextStrategy;
