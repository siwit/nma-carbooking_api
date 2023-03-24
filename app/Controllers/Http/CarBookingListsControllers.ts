import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CarBookingLists from 'App/Models/CarBookingListsModels'

export default class CarBookingListsController {
    public async getCarBookingList({response}:HttpContextContract){
        const carBookingList = await CarBookingLists.all()
        return response.ok(carBookingList)
    }
    public async getCarBookingById({params,response}:HttpContextContract){
        const carBookingList = await CarBookingLists.findBy('booking_id',params.id)
        //const carBookingList = await CarBookingLists.find(params.id)
        return response.ok(carBookingList)
    }
}
