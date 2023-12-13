import mongoose from 'mongoose';
import Startup from './startupSchema';
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB.");
    }
    );
    mongoose.connection.on("error", (error) => {
        console.error(`Error: ${error.message}`);
    }
    );
}

export const getAllStartups = async () => {
    const startups = await Startup.find().limit(5)
    return startups
}
