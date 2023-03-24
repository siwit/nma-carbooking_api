import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CarMemberLists from 'App/Models/CarMemberModels'

export default class CarMemberController {

    public async getCarMemberList({response}:HttpContextContract){
        const carMemberList = await CarMemberLists.all()
        return response.ok(carMemberList)
    }
}
