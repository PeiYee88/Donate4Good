import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connect = () => {

    mongoose.connect("mongodb+srv://melissacheng15:melissacheng15@donate4good.hkncjwe.mongodb.net/?retryWrites=true&w=majority&appName=Donate4Good")
    .then(() => {
        console.log("MongoDB Srarted");
    })
    .catch((error) =>  console.log("Error", error));
};

export {connect};
