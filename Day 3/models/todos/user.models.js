import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    // normal Schema
    // {
    //     username: String,
    //     email: String,
    //     isActive: Boolean
    // }

    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,

        },
         email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "password must be required"]
        }
    },{timestamps: true} //created at, updated at ==> Time milega
)

export const User = mongoose.model("User", userSchema);