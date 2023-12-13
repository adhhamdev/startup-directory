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
    const query = await Startup.find().limit(5)
    const startups = query.map(doc => {
        const startup = doc.toObject()
        delete startup.__v
        delete startup._doc
        startup._id = startup._id.toString()
        return startup
    })
    return startups
}

const filterByIndustry = async (industry) => {
    const query = await Startup.find({ industry: industry }).limit(5)
    const startups = query.map(doc => {
        const startup = doc.toObject()
        delete startup.__v
        delete startup._doc
        startup._id = startup._id.toString()
        return startup
    })
    return startups
}

export const search = async (search) => {
    const query = await Startup.find({ $text: { $search: search } }).limit(5)
    const startups = query.map(doc => {
        const startup = doc.toObject()
        delete startup.__v
        delete startup._doc
        startup._id = startup._id.toString()
        return startup
    })
    return startups
}