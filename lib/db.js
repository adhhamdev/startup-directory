import mongoose from 'mongoose';
import atlasSearchPlugin from 'mongoose-atlas-search';
import Startup from './startupSchema';

mongoose.plugin(atlasSearchPlugin);

atlasSearchPlugin.initialize({
    model: Startup,
    searchFunction: query => {
        return {
            'wildcard': {
                'query': `${query}*`,
                'path': ['StartupName', 'IndustryVertical', 'SubVertical', 'CityLocation', 'InvestorsName', 'InvestmentType', 'AmountInUSD'],
                'allowAnalyzedField': true
            }
        }
    }
});

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
connectDB();

export const getAllStartups = async () => {
    const query = await Startup.find({}).limit(5)
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