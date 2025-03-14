const { Schema, models, model } = require("mongoose");
const ProfileSchema = new Schema({
    linkedin: {
      type: Schema.Types.Mixed,
      
    },
    github: {
      type: String,
     
    },
    leetcode: {
      type: String,
      required: true
    },
    stackoverflow: {
      type: Date,
      default: Date.now
    },
    twitter:{
      type: String
    },
   
  })
  
  export const Profile = models.Profile || model("Profile", ProfileSchema);