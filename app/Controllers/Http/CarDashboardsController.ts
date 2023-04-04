import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CarDashboard from 'App/Models/CarDashboard'


export default class CarDashboardsController {   
     public async getDashboardAll({response}:HttpContextContract){
    const getDashboardStat = await CarDashboard.all()
    return response.ok(getDashboardStat)
}}

