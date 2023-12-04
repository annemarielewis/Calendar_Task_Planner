//purpose = create schemas (set of rules) for task collection

const { Schema } = require("mongoose");

const TaskSchema = new Schema(
  {
    name: { type: String, required: true },
    duration: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = TaskSchema;