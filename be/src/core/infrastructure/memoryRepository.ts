import { type Repository } from '../application/repository'

export class MemoryRepository <DataModel extends { id: string }> implements Repository<DataModel> {
  private readonly store = [] as DataModel[]

  async save (data: DataModel): Promise<void> {
    this.store.push(data)
  }

  async getById (id: string): Promise<DataModel | undefined> {
    return this.store.find(item => item.id === id)
  }

  async getAll (): Promise<DataModel[]> { return this.store }
}
