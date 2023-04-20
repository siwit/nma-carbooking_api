import Route from '@ioc:Adonis/Core/Route'
import CarMembersControllers from 'App/Controllers/Http/CarMembersControllers'

export default function CarMemberRoutes(){

    const carMembersController = new CarMembersControllers()
    
    Route.get('carmember/getCarMemberList',carMembersController.getCarMemberList)

    Route.get('carmember/getCarMemberById/:car_id',carMembersController.getCarMemberById)

    Route.post('carmember/postCarMember', carMembersController.postCarMember)

    Route.patch('carmember/editCarMember', carMembersController.editCarMember)

    Route.delete('carmember/deleteCarMember', carMembersController.deleteCarMember)
}


