/**
 * 3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
 * 
 * Use this classe as crud adapter.
 * 
 * program in indexedDb for second delivery assignment, and just chose the database for the last delivery
 */
class Crud{
    constructor(database){
        this.database = database;
    }

    read(){
        return this.database.read();
    }
    update(){
        return this.database.update();
    }
    create(){
        return this.database.create();
    }
    delete(){
        return this.database.delete();
    }
}

export default Crud;