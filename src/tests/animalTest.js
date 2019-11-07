/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable mocha/max-top-level-suites */
const assert = require('assert').strict
const MongoDb = require('../database/strategies/mongodb/mongoDb')

const AnimalSchema = require('../database/strategies/mongodb/mongodb/schemas/animalSchemma')
const Context = require('../database/strategies/base/contextStrategy')

let mock = { 
    _id: 7, 
    owner: 3, 
    type: "dog", 
    race: "bodercolie", 
    name: "Mr. Picles", 
    photo: "imgsrc", 
    age: new Date()
}
let gotId = -1, lastId = -1;
describe('Testar animals', function () {
    this.beforeAll(async () => {
        const connection = MongoDb.connect()
        context = new Context(new MongoDb(connection, AnimalSchema))

    })
    it('Cadastrar animal', async function () {


        const resultado = await context.create(mock)
        gotId = await context.lastId()
        lastId = gotId._id;

        assert.ok(resultado._id === lastId)
    })

    it('Listar animal', async function () {
        const [result] = await context.read({ _id: mock._id }, 0, 10)

        //console.log(JSON.stringify(result))
        //assert.deepEqual(result, MOCK_CLIENTE_CADASTRAR)
        assert.ok(result._id == lastId)
    })

    it('Atualizar animal', async function () {
        var rand = Math.random()
        const result = await context.update(lastId, {
            name: mock.name + rand.toString()
        })
        assert.deepEqual(result.nModified, 1)
    })
    it('Remover animal', async function () {
        if (!lastId)
            console.log('Não pode exluir id=0')

        const result = await context.delete(lastId)
        assert.deepEqual(result.n, 1)
    })
});