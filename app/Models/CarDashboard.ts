import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class CarDashboard extends BaseModel {

  public static table = 'car_dashboard'
  @column({ isPrimary: true })
  public hospcode: string

  @column()
  public carmember: number

  @column()
  public drive_round: number

  @column()
  public wait_approved: number

  @column()
  public car_ready: number

  @column.dateTime()
  public lastupdate: DateTime

}
