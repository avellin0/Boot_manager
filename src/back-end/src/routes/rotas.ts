import {CreatProducts} from '../controller/GetProducts'
import {Router} from 'express'

const route = Router()

const products = new CreatProducts()

route.post('/products', products.handle)


export {route}