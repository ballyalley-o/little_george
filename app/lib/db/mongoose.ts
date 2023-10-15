import mongoose from 'mongoose'
// @globals
import { GLOBAL } from '@config'
// @assets
import { logger } from '@utils'

let isConnected = false
const DB_URI = GLOBAL.db_uri

const connectDb = async () => {
  mongoose.set('strictQuery', true)

  if (!DB_URI) return logger.error('INVALID MONGO DB URI')
  if (isConnected)
    return logger.warn('Attempting to Connect to the Database.. .')

  try {
    const db = await mongoose.connect(DB_URI)
    isConnected = true
    logger.db(db, isConnected)
  } catch (error: any) {
    logger.error(error.message)
  }
}

export default connectDb
