import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class CarMemberModel extends BaseModel {

  public static table = 'car_member'
  @column({ isPrimary: true })
  public car_id: number

  @column({ isPrimary: true })
  public hospcode: string

  @column()
  public car_number: string

  @column()
  public model: string

  @column()
  public brand: string

  @column()
  public color: string

  @column()
  public year: DateTime

  @column()
  public type_id: string

  @column()
  public regist_num: string

  @column()
  public detail: string

  @column()
  public car_img : Blob | null 

  @column()
  public color_label : string

  @column()
  public active: string

}
