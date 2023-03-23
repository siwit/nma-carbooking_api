import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CarBookingLists from 'App/Models/CarBookingListsModels'

export default class CarBookingListsController {

    public async getCarBookingList({response}:HttpContextContract){
        const carBookingList = await CarBookingLists.all()
        return response.ok(carBookingList)
    }
}
