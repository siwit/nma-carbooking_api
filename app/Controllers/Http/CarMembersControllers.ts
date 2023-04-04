import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CarMemberLists from 'App/Models/CarMemberModels'
const fs = require('fs/promises');

export default class CarMemberController {

    public async getCarMemberList({response}: HttpContextContract){
       
        try {
            const carMemberList = await CarMemberLists.all()   
            
        var image;
        let jsonData: any = [];

        for(let i=0; i<carMemberList.length; i++){
            image = carMemberList[i]?.car_img
            jsonData.push(
                {
                    hospcode: carMemberList[i].hospcode,
                    car_id: carMemberList[i].car_id,
                    car_number: carMemberList[i].car_number,
                    model: carMemberList[i].model,
                    brand: carMemberList[i].brand,
                    color: carMemberList[i].color,
                    year: carMemberList[i].year,
                    type_id: carMemberList[i].type_id,
                    regist_num: carMemberList[i].regist_num,
                    detail: carMemberList[i].detail,
                    active: carMemberList[i].active,
                    car_img: carMemberList[i].car_img == null? 'NA': Buffer.from(image,).toString('base64')
                }
            )
            }

            // return response.ok(jsonData)
            return response.status(200).json({ ok: true, results: jsonData, code: 200 })
        } catch (error) {
            return response.status(500).json({ ok: false, error: 'Internal Server Error', code: 500 })
        }
    }

    public async getCarMemberById({params,response}:HttpContextContract){
       
        try {
            const carMemberList = await CarMemberLists //.findBy('car_id',params.id)      
            .query()
            .where({ car_id: params.id})
            .select('hospcode', 'car_id', 'car_number', 'regist_num', 'detail', 'year', 'active','car_img')

        var image;
        let jsonData: any = [];

        for(let i=0; i<carMemberList.length; i++){
            image = carMemberList[i]?.car_img
            jsonData.push(
                {
                    hospcode: carMemberList[i].hospcode,
                    car_id: carMemberList[i].car_id,
                    car_number: carMemberList[i].car_number,
                    model: carMemberList[i].model,
                    brand: carMemberList[i].brand,
                    color: carMemberList[i].color,
                    year: carMemberList[i].year,
                    type_id: carMemberList[i].type_id,
                    regist_num: carMemberList[i].regist_num,
                    detail: carMemberList[i].detail,
                    active: carMemberList[i].active,
                    car_img: carMemberList[i].car_img == null? 'NA': Buffer.from(image,).toString('base64')
                }
            )
            }

            return response.status(200).json({ ok: true, results: jsonData, code: 200 })
        } catch (error) {
            return response.status(500).json({ ok: false, error: 'Internal Server Error', code: 500 })
        }
    }
    
    public async postCarMember({ request,response}:HttpContextContract){
       
        const carmember = new CarMemberLists()
        const data = request.only(['hospcode', 'car_number', 'model', 'brand', 'color', 'year', 'type_id', 'regist_num', 'detail', 'active'])   

        let image = request.file('car_img') == undefined ? null : request.file('car_img');

        try {
            const buffer = await fs.readFile(image?.tmpPath)
                carmember.car_img = buffer == null ? null : buffer
                carmember.merge(data).save()
                return response.status(200).json({ok:true,message: 'Save CarMember : '+request.input('car_number')+' Success ',code:200})
            } catch (error) {
                return response.status(500).json({ok:false,error:'Internal Server Error',code:500})
            }
    }
 
    public async deleteCarMember({ response, params}: HttpContextContract){

        const carmember = await CarMemberLists.findBy('car_id', params.id)
        
        try {
            carmember?.delete()
            return response.status(200).json({ok:true,message: 'Delete CarMember : '+ carmember?.car_number+' Success ',code:200})
        } catch (error) {
            return response.status(500).json({ok:false,error:'Internal Server Error',code:500})
        }
    }

    public async editCarMember({ request, response }: HttpContextContract) {

        const carmember = await CarMemberLists.findOrFail(request.input('car_id'))

        const data = request.only(['hospcode', 'car_number', 'model', 'brand', 'color', 'year', 'type_id', 'regist_num', 'detail', 'active'])

        let image = request.file('car_img') == undefined ? null :  request.file('car_img');

       try {
        const buffer = await fs.readFile(image?.tmpPath)
        carmember.car_img = buffer == null ? null : buffer
        carmember?.merge(data).save()
         return response.status(200).json({ok:true,message: 'Edit CarMember : '+request.input('car_number')+' Success ',code:200})
     } catch (error) {
         return response.status(500).json({ok:false,error:'Internal Server Error',code:500})
     }
    }

}
