/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable mocha/max-top-level-suites */
const assert = require('assert').strict
const MongoDb = require('../database/strategies/mongodb/mongoDb')

const ServiceSchema = require('../database/strategies/mongodb/mongodb/schemas/serviceSchemma')
const Context = require('../database/strategies/base/contextStrategy')

let mock = {
    _id:1,
    name:"Consulta",
    description:"Consulta veterinária para seu pet e pra você...",
    photo:"src",
    price:120.0
}

let gotId = -1, lastId = -1;
describe('Testar serviços', function () {
    this.beforeAll(async () => {
        const connection = MongoDb.connect()
        context = new Context(new MongoDb(connection, ServiceSchema))

    })
    it('Cadastrar serviço', async function () {


        const resultado = await context.create(mock)
        gotId = await context.lastId()
        lastId = gotId._id;

        assert.ok(resultado._id === lastId)
    })

    it('Listar serviço', async function () {
        const [result] = await context.read({ _id: mock._id }, 0, 10)

        assert.ok(result._id == lastId)
    })

    it('Atualizar serviço', async function () {
        var rand = Math.random()
        const result = await context.update(lastId, {
            name: mock.name + rand.toString()
        })
        assert.deepEqual(result.nModified, 1)
    })
    it('Remover serviço', async function () {
        if (!lastId)
            console.log('Não pode exluir id=0')

        const result = await context.delete(lastId)
        assert.deepEqual(result.n, 1)
    })
});