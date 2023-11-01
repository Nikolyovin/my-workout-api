import { Request, Response } from 'express'
import WeightService from '../services/WeightService'
import { URIParams, WeightCreateType, WeightResponseType, WeightUpdateType } from '../models'
import { RequestWithBody, RequestWithParams, RequestWithParamsAndBody } from '../models/types'

// в контроллерах только логика с req res
class WeightController {
    async getAll(req: Request, res: Response<WeightResponseType[]>) {
        try {
            const weightAll = await WeightService.getAll()
            res.json(weightAll)
        } catch (e: any) {
            res.status(500).json(e)
        }
    }

    async getOne(req: RequestWithParams<URIParams>, res: Response<WeightResponseType>) {
        try {
            const weight = await WeightService.getOne(req.params.id)
            if (weight) {
                res.json(weight)
            }
        } catch (e: any) {
            res.status(500).json(e)
        }
    }

    async create(req: RequestWithBody<WeightCreateType>, res: Response<WeightResponseType>) {
        try {
            console.log('req.body', req.body)
            const weight = await WeightService.create(req.body)
            console.log('weight', weight)
            res.json(weight)
        } catch (e: any) {
            res.status(500).json(e)
        }
    }

    async update(req: RequestWithParamsAndBody<URIParams, WeightUpdateType>, res: Response<WeightResponseType>) {
        try {
            console.log('req:', req.params.id, req.body)
            const updatedWeight = await WeightService.update(req.params.id, req.body) //{new: true} чтобы вернулся обновленный пост
            console.log('updatedWeight:', updatedWeight)
            if (updatedWeight) {
                res.json(updatedWeight)
            }
        } catch (e: any) {
            res.status(500).json(e.message)
        }
    }

    async delete(req: RequestWithParams<URIParams>, res: Response) {
        try {
            const weight = await WeightService.delete(req.params.id)

            return res.json(weight)
        } catch (e: any) {
            res.status(500).json(e)
        }
    }
}

export default new WeightController()
