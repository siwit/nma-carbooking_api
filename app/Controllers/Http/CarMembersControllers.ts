import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CarMemberLists from 'App/Models/CarMemberModels'

export default class CarMemberController {

    public async getCarMemberList({response}:HttpContextContract){
        const carMemberList = await CarMemberLists.all()
        return response.ok(carMemberList)
    }
    public async getCarMemberById({params,response}:HttpContextContract){
        const carMemberList = await CarMemberLists.findBy('id',params.id)
        return response.ok(carMemberList)
    }


}
