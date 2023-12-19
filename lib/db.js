import mongoose from 'mongoose';
import atlasSearchPlugin from 'mongoose-atlas-search';
import Startup from './startupSchema';


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

mongoose.plugin(atlasSearchPlugin);

/**
 * Connects to a MongoDB database using Mongoose and sets up event listeners for the connection status.
 */
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }

    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB.");
    });

    mongoose.connection.on("error", (error) => {
        console.error(`Error: ${error.message}`);
    });
};
connectDB();

export const getAllStartups = async () => {
    try {
        const query = await Startup.find({}).sort({Date: -1}).lean();
        const startups = query.map((doc) => {
            delete doc.__v;
            doc._id = doc._id.toString();
            return doc
        });
        return startups
    } catch (error) {
        console.error('Error retrieving startups:', error);
    }
}

export const getAllIndustries = async () => {
    try {
        const industries = await Startup.distinct('IndustryVertical');
        industries.unshift("All");
        return industries;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getAllInvestmentTypes = async () => {
    try {
        const investmentTypes = await Startup.distinct('InvestmentType');
        investmentTypes.unshift("All");
        return investmentTypes;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const searchQuery = async (searchTerm) => {
    "use server"
    const res = await Startup.search({ search: searchTerm }).sort({Date: -1}).limit(50)
    const startups = toPlainObject(res);
    return startups
}

const toPlainObject = (list) => {
    return list.map((doc) => {
        doc._id = doc._id.toString();
        return doc;
    });
}

export const newStartup = async (formData) => {
    "use server"
    const StartupName = formData.get("name")
    const InvestorsName = formData.get("investors")
    const IndustryVertical = formData.get("industry")
    const CityLocation = formData.get("city")
    const AmountInUSD = formData.get("amount")
    const date = new Date(formData.get("year"));
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const ISODate = `${day}/${month}/${year}`;
    try {
        const startup = await Startup.create({
            StartupName,
            InvestorsName,
            IndustryVertical,
            CityLocation,
            AmountInUSD,
            Date: ISODate
        });
    } catch (error) {
        console.error(error);
    }
}