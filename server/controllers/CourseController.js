import Course from "../models/CourseModel.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().exec();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  // console.log(req.params.id);
  try {
    const course = await Course.findById(req.params.id).exec();
    res.json(course);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTitle = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  // res.status(200).json("success");
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(500).json({
      message: "Course doesn't exist!",
    });
  } else {
    try {
      course.title = req.body.title;
      await course.save();
      console.log("Updated: " + course.title);
      res.status(200).json(course.title);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export const updateSubTitle = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  // res.status(200).json("success");
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(500).json({
      message: "Course doesn't exist!",
    });
  } else {
    try {
      course.subtitle = req.body.subtitle;
      await course.save();
      console.log("Updated: " + course.subtitle);
      res.status(200).json(course.subtitle);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export const updateFees = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  // res.status(200).json("success");
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(500).json({
      message: "Course doesn't exist!",
    });
  } else {
    try {
      course.fees = req.body.fees;
      await course.save();
      console.log("Updated: " + course.fees);
      res.status(200).json(course.fees);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export const updateDescription = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  // res.status(200).json("success");
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(500).json({
      message: "Course doesn't exist!",
    });
  } else {
    try {
      course.description = req.body.description;
      await course.save();
      console.log("Updated: " + course.description);
      res.status(200).json(course.description);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export const updateExpectations = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(500).json({
      message: "Course doesn't exist!",
    });
  } else {
    try {
      course.expectations = req.body.expectations;
      await course.save();
      console.log("Updated: " + course.expectations);
      res.status(200).json(course.expectations);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export const updatePrerequisites = async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  // res.status(200).json("success");
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(500).json({
      message: "Course doesn't exist!",
    });
  } else {
    try {
      course.prerequisites = req.body.prerequisites;
      await course.save();
      console.log("Updated: " + course.prerequisites);
      res.status(200).json(course.prerequisites);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};
