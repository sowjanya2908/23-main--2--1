
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name:{type:String}
    ,phone:{ type :String}
    ,email:{type:String}
    ,address:{type:String}
    ,password:{type:String}
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
export const UserModel = model("User1", userSchema, "users2");
