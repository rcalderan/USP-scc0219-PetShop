/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable mocha/max-top-level-suites */
const assert = require('assert').strict
const MongoDb = require('../database/strategies/mongodb/mongoDb')

const ProductSchema = require('../database/strategies/mongodb/mongodb/schemas/productSchemma')
const Context = require('../database/strategies/base/contextStrategy')

let mock = {
    _id: 1,
    name: "Arranhador",
    description: "Arranhador toca",
    photo: '/assets/arranhador_toca.jpg',
    price: 35.5,
    stock: 22,
    sold: 3
}
let gotId = -1, lastId = -1;
describe('Testar produtos', function () {
    this.beforeAll(async () => {
        const connection = MongoDb.connect()
        context = new Context(new MongoDb(connection, ProductSchema))

    })
    it('Cadastrar produto', async function () {


        const resultado = await context.create(mock)
        gotId = await context.lastId()
        lastId = gotId._id;

        assert.ok(resultado._id === lastId)
    })

    it('Listar produto', async function () {
        const [result] = await context.read({ _id: mock._id }, 0, 10)

        assert.ok(result._id == lastId)
    })

    it('Atualizar produto', async function () {
        var rand = Math.random()
        const result = await context.update(lastId, {
            name: mock.name + rand.toString()
        })
        assert.deepEqual(result.nModified, 1)
    })
    it('Remover produto', async function () {
        if (!lastId)
            console.log('Não pode exluir id=0')

        const result = await context.delete(lastId)
        assert.deepEqual(result.n, 1)
    })
});