import 'colors'

const logger = {
  info: (msg: any) => console.log(msg.bgBlue),
  log: (msg: any) => console.log(msg.yellow),
  err: (err: any) => console.log(err.message.bgRed),
}

export default logger
