import Route from '@ioc:Adonis/Core/Route'
import CarMembersControllers from 'App/Controllers/Http/CarMembersControllers'

export default function CarMemberRoutes(){
    const carMembersController = new CarMembersControllers()
 Route.get('carbooking/getCarMemberlList',carMembersController.getCarMemberList)
 Route.get('carbooking/getCarMemberById/:id',carMembersController.getCarMemberById)
}


