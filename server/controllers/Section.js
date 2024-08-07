const Section = require("../models/Section");
const Course = require("../models/Course");
const SubSection = require("../models/SubSection");
// create section handler
exports.createSection = async function (req, res) {
  try {
    // get data
    const { sectionName, courseId } = req.body;
    // validate data
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "All fields are compulsory",
      });
    }
    //create new section
    const newSection = await Section.create({ sectionName });
    // add this section to course
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          courseContent: newSection._id,
        },
      },
      {
        new: true,
      },
    )
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();
    // IMPORTANT -> populate this updated course with the section and subsection fields
    return res.status(200).json({
      success: true,
      message: "Section created successfully",
      data: updatedCourse,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while creating new section, please try again",
      error: error.message,
    });
  }
};

// update section handler
exports.updateSection = async function (req, res) {
  try {
    // get data
    const { sectionName, courseId, sectionId } = req.body;
    // validate
    if (!sectionId || !sectionName) {
      return res.status(400).json({
        success: false,
        message: "All fields are compulsory",
      });
    }
    // update the section
    const updatedSection = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName },
      { new: true },
    );
    // find the course and populate it
    const course = await Course.findById(courseId).populate({
      path: "courseContent",
      populate: {
        path: "subSection",
      },
    });
    // return response
    return res.status(200).json({
      success: true,
      message: "Section updated successfully",
      data: course,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while updating section, please try again",
      error: error.message,
    });
  }
};

// delete section handler
exports.deleteSection = async function (req, res) {
  try {
    // get ID
    const { sectionId, courseId } = req.body;
    // remove the section from the course
    await Course.findByIdAndUpdate(courseId, {
      $pull: {
        courseContent: sectionId,
      },
    });
    // Validate if section exists or not
    const section = await Section.findById(sectionId);
    if (!section) {
      return res.status(404).json({
        success: false,
        message: "Section not found",
      });
    }
    // Now delete all the subsections present in that section
    await SubSection.deleteMany({ _id: { $in: section.subSection } });
    // delete the section
    await Section.findByIdAndDelete(sectionId);

    // Now find the updated course
    const course = await Course.findById(courseId).populate({
      path: "courseContent",
      populate: {
        path: "subSection",
      },
    });
    // return response
    return res.status(200).json({
      success: true,
      message: "Successfully deleted the section",
      data: course,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while deleting section, please try again",
      error: error.message,
    });
  }
};
