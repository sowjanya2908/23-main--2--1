import { Schema, model } from "mongoose";

const doctorSchema = new Schema(

  {

    Firstname:{type:String}
    ,Lastname:{type:String}
    ,Address:{type:String}
    ,email:{type:String}
    ,phonenumber:{type:String}

  },

  {

    timestamps: {

      createdAt: "created_at",

      updatedAt: "updated_at",

    },

  }

);
 


export const DoctorModel = model("doctor", doctorSchema, "doctor");