import mongoose from "mongoose";

const ContactSubmissionSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
  organization: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  mobileNo: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
  },
  agreeToPrivacy: {
    type: Boolean,
    required: true,
    default: false,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactSubmission = mongoose.model("ContactSubmission", ContactSubmissionSchema);

export default ContactSubmission;
