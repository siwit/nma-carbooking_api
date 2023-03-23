// import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CarBookingModel extends BaseModel {

  public static table = 'car_booking'
  @column({ isPrimary: true })
  public booking_id: string

  @column({ isPrimary: true })
  public hospcode: string

  @column()
  public startdate: Date
  
}
