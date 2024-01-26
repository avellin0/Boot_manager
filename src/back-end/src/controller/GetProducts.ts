import {Request,Response} from 'express'
import { client } from '../Database/database'

export class CreatProducts{
  async handle(req:Request,res:Response){
    const {id, name,marca,quantidade} = req.body

    let user = {
      id,
      name,
      marca,
      quantidade
    }

    try{
      
      const data = await client.query('INSERT INTO products (id , name, marca, quantidade) VALUES ( $1, $2, $3 , $4)', [id ,name, marca, quantidade])
      return res.send(data.rows)
    }catch(erro){

    }


    return res.send(user)
  }
}

