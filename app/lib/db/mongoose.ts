import mongoose from 'mongoose'
// @globals
import { GLOBAL } from '@config'
// @assets
import { logger } from '@utils'
// @constants
import { SNACKS } from '@constants'

let isConnected = false
const DB_URI = GLOBAL.db_uri
const DB_NAME = GLOBAL.db_name

const connectDb = async () => {
  mongoose.set('strictQuery', true)

  if (!DB_URI) return logger.error(SNACKS.error.db_uri)
  if (isConnected) return logger.warn(SNACKS.db.connecting(DB_NAME))

  try {
    const db = await mongoose.connect(DB_URI)
    isConnected = true
    logger.db(db, isConnected)
  } catch (error: any) {
    logger.error(error.message)
  }
}

export default connectDb
