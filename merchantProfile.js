import { Schema, model } from 'mongoose';

const MerchantProfileSchema = new Schema(
  {
    walletAddress: { type: String },
    contactName: { type: String },
    handleName: { type: String },
    primaryAddress: { type: String },
    secondaryAddress: { type: String },
    coverImage: { type: String },
    logo: { type: String },
    email: { type: String },
    mobile: { type: String },
    businessName: { type: String },
    businessType: { type: String },
    registrationDate: { type: Date, default: Date.now },
    website: { type: String },
    transactionLimit: { type: String },
    socialMedia: [{ type: String }],
    Pan: { type: String },
    url: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('merchantProfile', MerchantProfileSchema);
