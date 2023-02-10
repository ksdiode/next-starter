import mongoose, { Schema } from 'mongoose';
const mongoosePaginate = require('mongoose-paginate-v2');

const MODEL_NAME = 'Todo';

const schema = new Schema(
  {
    title: String,
    done: Boolean,
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema);
