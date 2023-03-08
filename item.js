import { Schema, model } from 'mongoose';

const ItemSchema = new Schema(
    {
        merchantProfileId: { type: Schema.Types.ObjectId, ref: 'merchantProfile' },
        name: { type: String },
        description: { type: String },
        image: { type: String },
        price: { type: String },
        stockLimit: { type: Number },
        reference: { type: String },
        category: { type: String },
        status: { type: Boolean },
        loyalty: { type: Boolean },
    },
    {
        timestamps: true,
    },
);
export default model('item', ItemSchema);
