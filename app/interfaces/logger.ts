export enum LogLevel {
  Debug,
  Info,
  Warn,
  Error,
  Fatal,
}

interface Logger {
  /**
   * Logs a message at the specified level.
   * @param level The log level.
   * @param msg The message to log.
   * @param color - color property for customization
   */
  custom(level: LogLevel, msg: string, color: any): void

  /**
   * Logs a message at the Default level
   * @param msg The message to log
   */
  log(msg: string): void

  /**
   * Logs a message at the Warn level
   * @param msg The message to log
   */
  warn(msg: string): void

  /**
   * Logs a message at the Info level
   * @param msg The message to log
   */
  info(msg: string): void
  /**
   * Logs a message at the Debug level
   * @param msg The message to log
   */
  debug(msg: string): void

  /**
   * Logs the message at the Error level
   * @param msg The message to log
   */
  error(msg: string): void

  /**
   * Logs the message at the Fatal level
   * @param msg The message to log
   */
  fatal(msg: string): void

  /**
   * Logs the status of the database connection
   * @param db - connection call
   * @param isConnected - send the status of the connection to the db
   */
  db(db: any, isConnected: Boolean): void
}

export default Logger
