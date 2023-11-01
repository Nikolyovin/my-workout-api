import { WeightRequestType } from '../models'
import WeightMeasurement from '../scheme/WeightMeasurement'

//сервис работает только с базой данных; от req res не зависим
class WeightService {
    async getAll() {
        const WeightMeasurements = await WeightMeasurement.find()
        return WeightMeasurements
    }

    async getOne(id: string) {
        if (!id) {
            throw new Error('не указан Id')
        }
        const weight = await WeightMeasurement.findById(id)
        return weight
    }

    async create(weight: WeightRequestType) {
        const createWeight = await WeightMeasurement.create(weight)
        return createWeight
    }
}

export default new WeightService()
