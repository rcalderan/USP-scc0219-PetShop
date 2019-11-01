import Database from "../database";

class IndexDb extends Database{

    constructor() {
        super();
        // In the following line, you should include the prefixes of implementations you want to test.
        window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        // DON'T use "var indexedDB = ..." if you're not in a function.
        // Moreover, you may need references to some window.IDB* objects:
        window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" }; // This line should only be needed if it is needed to support the object's constants for older browsers
        window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
        // (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)
        this.connection = window.indexedDB;
    }

    isSuported() {
        if (!this.connection)
            return false;
        else
            return true;
    }

    connect(){
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
        return[
            {_id:0,type:"cli",name:"unknown"},
            {_id:1,type:"adm",name:"administer",photo:"",phone:"(16) 99721-2588",email:"admin@smartpet.com"},
            {_id:2,type:"cli",name:"Xing xong",photo:"",phone:"(16) 85799-1154",email:"xing@tinglong.com"},
            {_id:3,type:"cli",name:"Jonas",photo:"",phone:"(16) 33333-1333",email:"jonas@hotmail.com"},
            {_id:4,type:"cli",name:"Natalia",photo:"",phone:"(16) 4444-1144",email:"nat@gmail.com"},
            {_id:5,type:"cli",name:"John Doe",photo:"",phone:"(16) 55555-5555",email:"JD@nada.com"},
            {_id:6,type:"cli",name:"Picadilhaloca",photo:"",phone:"(16) 66666-6666",email:"pica@comom.com"},
            {_id:7,type:"cli",name:"Richard",photo:"",phone:"(16) 77777-7777",email:"richardcck@usp.br"},
        ]

    }
    pet(){
        return [
            {_id:0,name:"unknown"},
            {_id:1,owner:7,type:"cat",race:"SnowShoe",name:"Miaka",photo:"",age:22},
            {_id:2,owner:7,type:"dog",race:"bodercolie",name:"Pipoca",photo:"",age:1},
            {_id:3,owner:2,type:"dog",race:"viralata",name:"Food",photo:"",age:3},
            {_id:4,owner:5,type:"cat",race:"Siames",name:"Fluffy",photo:"",age:6},
            {_id:5,owner:4,type:"dog",race:"poodle",name:"snowwhite",photo:"",age:4},
            {_id:6,owner:6,type:"dog",race:"Cheewawa",name:"Demon",photo:"",age:10},
            {_id:7,owner:3,type:"dog",race:"bodercolie",name:"Mr. Picles",photo:"",age:11},
        ]
    }
    product(){
        return[
            {_id:0,name:"unknown"},
            {_id:1,name:"Arranhador",description:"Arranhador toca",photo:"src/assets/arranhador_toca.jpg",price:35.5,stock:22,sold:3},
            {_id:2,name:"Tapete Higienico",description:"Tapete mega higienico",photo:"src/assets/tapete_higienico_lavavel_1.jpg",price:20.0,stock:18,sold:2},
            {_id:3,name:"Comedouro de Aluminio",description:"Comedouro de Aluminio fodão",photo:"src/assets/comedouro_aluminio_pesado_1.jpg",price:56.99,stock:50,sold:10},
            {_id:4,name:"Ração de Gato",description:"Ração de gato Cat finissimo 8kg",photo:"src/assets/kets_finissimo_8kg.jpg",price:35.5,stock:22,sold:3},
            {_id:5,name:"Ração de Gato (renal)",description:"Ração de gato para tratamento de gato com rin zoado",photo:"src/assets/renal--2-.png",price:35.5,stock:22,sold:3},
            {_id:6,name:"Ração de Cachorro",description:"Ração de Cachorro fedida",photo:"src/assets/arranhador_toca.jpg",price:35.5,stock:22,sold:3},
            {_id:7,name:"Vacina top",description:"Vacina topVacina topVacina topVacina top",photo:"src/assets/arranhador_toca.jpg",price:35.5,stock:22,sold:3},
            {_id:8,name:"Brinquedo",description:"BrinquedoBrinquedoBrinquedoBrinquedoBrinquedoBrinquedo",photo:"src/assets/arranhador_toca.jpg",price:35.5,stock:22,sold:3},
            {_id:9,name:"Outro brinquedo",description:"Outro brinquedoOutro brinquedoOutro brinquedoOutro brinquedo",photo:"src/assets/arranhador_toca.jpg",price:35.5,stock:22,sold:3},
        ]
    }
    service(){        
        return[
            {_id:0,name:"unknown"},
            {_id:1,name:"Consulta",description:"Consulta veterinária para seu pet e pra você...",photo:"",price:120.0},
            {_id:2,name:"Grooming",description:"Tosa para seu bixinho! ele vai ficar fofo",photo:"",price:60.0},
            {_id:3,name:"Vacina",description:"Vacine seu animal!!!!",photo:"",price:150.0},
        ]
    }
    finance(){        
        return[
            {_id:0,name:"unknown"},
            {_id:1,customer:1,type:"service",date:new Date(2019,5,5,12,30),value:120.0},
            {_id:1,customer:1,type:"product",date:new Date(2019,5,15,12,30),value:120.0},
            {_id:1,customer:1,type:"service",date:new Date(2019,5,21,12,30),value:150.0},
            {_id:1,customer:1,type:"product",date:new Date(2019,6,1,9,0),value:35.50},
            {_id:1,customer:1,type:"product",date:new Date(2019,7,12,12,0),value:56.99},
            {_id:1,customer:1,type:"service",date:new Date(2019,8,29,15,33),value:150.0},
        ]
    }

}




export default new IndexDb();