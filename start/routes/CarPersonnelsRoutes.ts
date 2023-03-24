import Route from '@ioc:Adonis/Core/Route'
import CarPersonnelsConntroller from 'App/Controllers/Http/CarPosonnelsControllers'

export default function CarPersonnelListRoutes(){
    const carPersonnelsConntroller = new CarPersonnelsConntroller()
 Route.get('carbooking/getCarPersonnelList',carPersonnelsConntroller.getCarPersonnelList)
}