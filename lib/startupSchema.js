import mongoose from "mongoose";

const schema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  SNo: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
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
    type: Number,
    required: true,
  },
});

const Startup = mongoose.models.Startup || mongoose.model('Startup', schema);

export default Startup;