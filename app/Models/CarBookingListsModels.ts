//import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CarBookingModel extends BaseModel {

  public static table = 'car_booking'
  @column({ isPrimary: true })
  public booking_id: string

  @column({ isPrimary: true })
  public hospcode: string

  @column()
  public startdate: Date
  @column()
  public starttime: Date
  @column()
  public enddate: Date
  @column()
  public endtime: Date
<<<<<<< HEAD
=======
  @column()
  public lengthdate: Date
  @column()
  public subject_type: Date
>>>>>>> f66c8972653d4eee0cc06b4cf15949e815e5a1b6

}
