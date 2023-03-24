// import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CarPersonnel extends BaseModel {
  public static table = 'car_personnel'
  @column({ isPrimary: true })
  public personnel_id: number

  @column()
  public hospcode: string

  @column()
  public hr_cid: string
  
  @column()
  public position_id: string
  
  @column()
  public active: string
}
