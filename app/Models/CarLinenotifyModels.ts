import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
// import { DateTime } from 'luxon'

export default class CarModel extends BaseModel {

  public static table = 'car_linenotify'
  @column()
  public hopscode : string
  @column({isPrimary: true})
  public linetoken_id : number
  @column()
  public token : string

}
