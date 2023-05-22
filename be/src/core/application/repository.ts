export interface Repository<T> {
  save: (data: T) => Promise<void>
  getById: (id: string) => Promise<T | undefined>
  getAll: () => Promise<T[]>
}
