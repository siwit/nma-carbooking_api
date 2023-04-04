import Route from '@ioc:Adonis/Core/Route'
import CarDashboardsController from 'App/Controllers/Http/CarDashboardsController'


export default function CarDashBoardRoutes(){
    const carDashboards = new CarDashboardsController()
  Route.get('carbooking/getDashboardAll',carDashboards.getDashboardAll)
}