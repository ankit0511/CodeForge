const { Schema, models, model } = require("mongoose");
const ProfileSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true, // Ensure one profile per Google user
},
    linkedin: {
      type: String,
      
    },
    github: {
      type: String,
     
    },
    leetcode: {
      type: String,
     
    },
    stackoverflow: {
      type: String,
      
    },
    twitter:{
      type: String
    },
   
  })
  
  export const Profile = models.Profile || model("Profile", ProfileSchema);