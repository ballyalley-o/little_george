import 'colors'
// @interfaces
import Logger, { LogLevel } from '@interfaces/logger'

const logger: Logger = {
  custom: (level: LogLevel, msg: string, color: any) =>
    console.log(level, msg[color]),

  info: (msg: string) => console.log(msg.bgBlue),

  log: (msg: string) => console.log(msg.yellow),

  warn: (msg: string) => console.log(msg.bgYellow),

  debug: (msg: string) => console.log(msg.bgWhite),

  error: (msg: string) => console.log(msg.bgRed),

  fatal: (msg: string) => console.log(msg.bgRed),

  db: (db: any, isConnected: Boolean) => {
    console.log('DB HOST: '.bgGreen, db.connection.host.yellow)
    console.log('DB NAME: '.bgGreen, db.connection.name.yellow)
    if (isConnected) {
      console.log('DB STATUS: '.bgGreen, 'CONNECTED'.green)
    } else {
      console.log('DB STATUS: '.bgGreen, 'NO CONNECTION'.red)
    }
  },
}

export default logger
