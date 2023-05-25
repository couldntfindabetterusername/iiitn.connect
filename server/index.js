import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// console.log(process.env);
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((err) => console.log(err.message));

app.use("/api/v2", routes);

// app.post("/post", async(req, res) => {
//     const { data } = req.body;

//     try {
//         data.map(async(student) => {
//             const newStudent = new Student({
//                 timestamp: new Date(student["Timestamp"] + "Z").getTime() > 0 ?
//                     new Date(student["Timestamp"] + "Z") :
//                     null,
//                 name: student["Name"],
//                 collegeEmail: student["College Email ID"],
//                 branch: student["Branch"],
//                 year: parseInt(student["College Year"][0]) || 0,
//                 skills: student["Mastered Skills"].split(", "),
//                 linkedIn: student["LinkedIn ID Link"],
//                 instagram: student["Instagram ID Link"],
//                 github: student["GitHub ID Link (Optional)"],
//                 otherLink: student["Other Social Links (Optional)"],
//                 projectLinks: student["Project Links (Optional)"].split("\n"),
//                 photoUrl: student["Profile Photo"],
//                 email: student["Email address"],
//             });

//             await newStudent.save();
//             console.log(newStudent.year || newStudent.name);
//         });
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(404).json(error);
//     }
// });
