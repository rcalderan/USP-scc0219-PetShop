/**
 * 3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

    database class 
 */

class Database{
    constructor(connection){
        this.connection=connection;
    }

    read(){
        throw Error('not implemented!');
    }
    update(){
        throw Error('not implemented!');
    }
    create(){
        throw Error('not implemented!');
    }
    delete(){
        throw Error('not implemented!');
    }

    //justo for tests
    customers(){
        throw Error('not implemented!');

    }
    pet(){
        throw Error('not implemented!');
    }
    product(){
        throw Error('not implemented!');
    }
    service(){        
        throw Error('not implemented!');
    }
       

}

export default Database;