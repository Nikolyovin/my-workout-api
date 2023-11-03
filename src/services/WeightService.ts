import { WeightCreateType, WeightUpdateType } from '../models/weightType'
import WeightMeasurement from '../scheme/WeightMeasurement'

//сервис работает только с базой данных; от req res не зависим
class weightService {
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

    async create(weight: WeightCreateType) {
        const createWeight = await WeightMeasurement.create(weight)
        return createWeight
    }

    async update(id: string, weight: WeightUpdateType) {
        if (!id) {
            throw new Error('не указан Id')
        }
        const updatedWeight = await WeightMeasurement.findByIdAndUpdate(id, weight, {
            new: true
        }) //{new: true} чтобы вернулся обновленный пост
        return updatedWeight
    }

    async delete(id: string) {
        if (!id) {
            throw new Error('не указан Id')
        }
        const weight = await WeightMeasurement.findByIdAndDelete(id)
        return weight
    }
}

export default new weightService()
