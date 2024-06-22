import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    const mongoURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
    console.log(`Connecting to MongoDB with URI: ${mongoURI}`);
    const connectionInstance = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Db is connected!! DB host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('Connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
