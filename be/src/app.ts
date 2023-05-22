import express from 'express'
import { type Application } from 'express-serve-static-core'

export const createApplication = async (): Promise<Application> => {
  const app = express()
  app.use(express.json())

  return app
}
