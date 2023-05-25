import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    timestamp: Date,
    name: String,
    collegeEmail: String,
    branch: String,
    year: Number,
    skills: [String],
    linkedIn: String,
    instagram: String,
    github: String,
    otherLink: String,
    projectLinks: [String],
    photoUrl: String,
    email: String,
});

const Student = mongoose.model("Student", studentSchema);

export default Student;