import mongoose from 'mongoose';

const schema = mongoose.Schema({
  SNo: {
    type: Number,
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
  },
  AmountInUSD: {
    type: Number,
    required: true,
  },
});

schema.pre('save', function (next) {
  let doc = this;
  mongoose.models.Startup.find({})
    .sort({ SNo: -1 })
    .limit(1)
    .then((startups) => {
      if (startups.length > 0) {
        doc.SNo = startups[0].SNo + 1;
      } else {
        doc.SNo = 1;
      }
      next();
    })
    .catch((err) => {
      next(err);
    });
});

const Startup = mongoose.models.Startup || mongoose.model('Startup', schema);

export default Startup;
