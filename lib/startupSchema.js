import mongoose from "mongoose";

const schema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    SNo: {
        type: Number,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },
    StartupName: {
        type: String,
        required: true,
    },
    IndustryVertical: {
        type: String,
        required: true,
    },
    SubVertical: {
        type: String,
        required: true,
    },
    CityLocation: {
        type: String,
        required: true,
    },
    InvestorsName: {
        type: String,
        required: true,
    },
    InvestmentType: {
        type: String,
        required: true,
    },
    AmountInUSD: {
        type: String,
        required: true,
    },
})

let Startup;
try {
    Startup = mongoose.model("Startup");
}
catch {
    Startup = mongoose.model("Startup", schema);
}

export default Startup;