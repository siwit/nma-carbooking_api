import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CarMemberLists from 'App/Models/CarMemberModels'

export default class CarMemberController {

    public async getCarMemberList({response}:HttpContextContract){
       
        try {
            const carMemberList = await CarMemberLists.all()          
            return response.status(200).json({ ok: true, results: carMemberList, code: 200 })
        } catch (error) {
            return response.status(500).json({ ok: false, error: 'Internal Server Error', code: 500 })
        }
    }
    public async getCarMemberById({params,response}:HttpContextContract){
       
        try {
            const carMemberList = await CarMemberLists.findBy('id',params.id)           
            return response.status(200).json({ ok: true, results: carMemberList, code: 200 })
        } catch (error) {
            return response.status(500).json({ ok: false, error: 'Internal Server Error', code: 500 })
        }
    }


}
