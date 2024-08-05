const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    // id: { type: Number, required: true, unique: true },
    content: { type: String, required: true },
    isChecked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

todoSchema.statics.create = function (payload) {
  const todo = new this(payload);
  return todo.save();
};

todoSchema.statics.findAll = function () {
  return this.find({});
};

todoSchema.statics.findOneByTodoId = function (todoId) {
  return this.findOne({ todoId });
};

todoSchema.statics.updateByTodoId = function (todoId, payload) {
  return this.findOneAndUpdate({ todoId }, payload, { new: true });
};

todoSchema.statics.deleteByTodoId = function (todoId) {
  return this.remove({ todoId });
};

module.exports = mongoose.model("Todo", todoSchema);
