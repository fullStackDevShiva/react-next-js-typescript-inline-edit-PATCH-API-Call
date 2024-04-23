import mongoose from "mongoose";

const courseModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    prerequisites: {
      type: String,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    // image: {
    //   type: String,
    //   required: true,
    // },
    // faqs: [
    //   {
    //     question: {
    //       type: String,
    //     },
    //     answer: {
    //       type: String,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseModel);
