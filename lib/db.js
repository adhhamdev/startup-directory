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
    const query = await Startup.find({})
    const startups = query.map(doc => {
        const startup = doc.toObject()
        delete startup.__v
        delete startup._doc
        startup._id = startup._id.toString()
        return startup
    })
    return startups
}

export const getAllIndustries = async () => {
    "use server"
    const industries = await Startup.distinct('IndustryVertical');
    return industries
}

export const getAllInvestmentTypes = async () => {
    "use server"
    const investmentTypes = await Startup.distinct('InvestmentType');
    return investmentTypes
}

export const searchQuery = async (searchTerm) => {
    "use server"
    const res = await Startup.search({ search: searchTerm })
    return res
}

