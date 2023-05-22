import { debug } from 'console'
import { createApplication } from './app'

const bootstrapApplication = async (): Promise<void> => {
  const app = await createApplication()

  await new Promise<void>((resolve, reject) => {
    const server = app.listen(
      process.env.port ?? 3000,
      (error?: Error) => { error == null ? resolve() : reject(error) }
    )

    const close = (signal: string): void => {
      debug(`${signal} signal received: closing HTTP server`)
      server.close(() => {
        debug('HTTP server closed')
        process.exit(1)
      })
    }

    process.on('SIGINT', close)
    process.on('SIGKILL', close)
    process.on('SIGTERM', close)
    process.on('SIGHUP', close)
    process.on('SIGABRT', close)
  })
}

bootstrapApplication()
  .then(() => { console.log('application ready') })
  .catch(error => { console.log('error occured', error.message) })
