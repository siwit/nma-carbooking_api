import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class CarBookingModel extends BaseModel {

  public static table = 'car_booking'
  @column({ isPrimary: true })
  public booking_id: number

  @column({ isPrimary: true })
  public hospcode: string

  @column.date()
  public startdate: DateTime

  @column()
  public starttime: any

  @column.date()
  public enddate: DateTime

  @column()
  public endtime: any

  @column()
  public lengthdate: number

  @column()
  public subject_type: string

  @column()
  public subject_detail: string

  @column()
  public destination_hospcode: string

  @column()
  public destination_other: string

  @column()
  public official_num: string

  @column()
  public qty: number

  @column()
  public appoint_location: string

  @column()
  public car_member: string

  @column()
  public status: string

  @column.dateTime()
  public statusdate: DateTime

  @column()
  public reason: string

  @column()
  public length: number

  @column()
  public driver_id: string

  @column()
  public startmileage: number

  @column()
  public endmileage: number

  @column()
  public priority: string

  @column.dateTime()
  public lastupdate: DateTime
}
