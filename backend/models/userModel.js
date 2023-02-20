const mongoose=require("mongoose");

// mongodb user schema
const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    yearOfGraduation: {type: Number, min: 2000, max: 9000},
    createdAt: {type:Date, default: Date.now},
    isDeleted: {type:Boolean, default: false}
});

module.exports = mongoose.model("user", userSchema);

// todo list schema
const taskSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    isCompleted: {type: Boolean, default: false},
    isDeleted: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("task", taskSchema);