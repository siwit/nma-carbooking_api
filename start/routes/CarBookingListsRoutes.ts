import Route from '@ioc:Adonis/Core/Route'
import CarBookingListsController from 'App/Controllers/Http/CarBookingListsControllers'

export default function CarBookingListRoutes(){
    const carBookingListsController = new CarBookingListsController()
 Route.get('carbooking/getCarBookingList',carBookingListsController.getCarBookingList)
 Route.get('carbooking/getCarBookingById/:id',carBookingListsController.getCarBookingById)
}