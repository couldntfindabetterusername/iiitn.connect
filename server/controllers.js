import Student from "./model.js";
import mongoose from "mongoose";

export const getStudentData = async (req, res) => {
  try {
    const data = await Student.find();

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const postStudentData = async (req, res) => {
  const student = req.body;

  try {
    const newStudent = new Student({
      ...student,
      timestamp: new Date().toISOString(),
    });

    await newStudent.save();

    res.status(200).json(newStudent);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const updateStudentData = async (req, res) => {
  const student = req.body;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with this id");

  const updatedStudent = { ...student, _id: id };

  await Student.findByIdAndUpdate(id, updatedStudent, {
    new: true,
  });

  res.status(200).json(updatedStudent);
};
