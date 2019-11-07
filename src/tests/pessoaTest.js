/* eslint-disable mocha/no-mocha-arrows */
/* eslint-disable no-console */
/* eslint-disable mocha/max-top-level-suites */
/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable no-undef */
const assert = require('assert').strict
const MongoDb = require('../database/strategies/mongodb/mongoDb')

const PersonSchema = require('../database/strategies/mongodb/mongodb/schemas/personSchemma')
const Context = require('../database/strategies/base/contextStrategy')


describe('Testar MongoDb connection',  function() {
    this.beforeAll(async () => {
        const connection = MongoDb.connect()
        context = new Context(new MongoDb(connection, PersonSchema))
    })
    it('verificar conexao', async function () {
        const result = await context.isConnected()
        const expected = 'Conectado'

        assert.deepEqual(result, expected)
    })


})
let mock ={
    _id: 0, 
    type: "admin", 
    name: "Administer", 
    adress: "none2", 
    photo: "none2", 
    phone: "9999-9999", 
    email: "admin2@smartpet.com", 
    password: "admin"
}
let gotId=-1,lastId=-1;
describe('Testar pessoas',function () {
    this.beforeAll(async () => {
        //gotId = await context.lastId()
        //lastId = gotId ? gotId._id :0

    })
    it('Cadastrar pessoa', async function() {
        
        
        const resultado = await context.create(mock)
        gotId = await context.lastId()
        lastId = gotId._id;

        assert.ok( resultado._id === lastId)
    }) 
    
    it('Listar pessoa', async function () {
        const [result] = await context.read({ _id: mock._id},0,10)
        
        //console.log(JSON.stringify(result))
        //assert.deepEqual(result, MOCK_CLIENTE_CADASTRAR)
        assert.ok( result._id==lastId)
    })
    
    it('Atualizar pessoa', async () => {
        var rand = Math.random()
        const result = await context.update(lastId, {
            name: mock.name+rand.toString()
        })
        assert.deepEqual(result.nModified, 1)
    })
    it('Remover pessoa', async () => {
        if(!lastId)
        console.log('Não pode exluir id=0')
        
        const result = await context.delete(lastId)
        assert.deepEqual(result.n, 1)
    })
});