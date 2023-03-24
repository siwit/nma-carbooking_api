import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CarPersonnels from 'App/Models/CarPersonnelsModels'

export default class CarPersonnelsController {

    public async getCarPersonnelList({response}:HttpContextContract){
const carPersonnelList = await CarPersonnels.all()
return response.ok(carPersonnelList)
    }
}
