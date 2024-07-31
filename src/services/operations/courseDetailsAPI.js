import { courseEndpoints } from "../APIs";
import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";
const {
  GET_ALL_COURSE_API,
  COURSE_CATEGORIES_API,
  COURSE_DETAILS_API,
  CREATE_COURSE_API,
  CREATE_RATING_API,
  CREATE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUBSECTION_API,
  GET_ALL_INSTRUCTOR_COURSES_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  LECTURE_COMPLETION_API,
  DELETE_SECTION_API,
  DELETE_SUBSECTION_API,
  DELETE_COURSE_API,
  EDIT_COURSE_API,
} = courseEndpoints;

// Get all categories
export const fetchCourseCategories = async function () {
  try {
    // Step 1 -> Make the request
    const response = await apiConnector("GET", COURSE_CATEGORIES_API);
    // Step 2 -> Check response
    if (!response.data.success) {
      throw new Error("Cannot fetch course categories");
    }
    // Step 3 -> Return categories
    return response.data.data;
  } catch (error) {
    // Step 4 -> Handle errors and toast
    console.log(error.response.data.message);
    console.log(error);
    toast.error("Cannot fetch categories");
  }
};

// Add new Course
export const addCourseDetails = async function (token, data) {
  let result = null;
  const toastId = toast.loading("Uploading course details...");
  try {
    // Step 1-> Make request to endpoint
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    });

    // Step 2-> Check if request was successful
    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    // Step 3 -> Set result
    result = response.data.data;
  } catch (error) {
    console.log(
      "Error occurred in addCourseDetails function in COURSE Details API",
    );
    console.log(error);
  }
  toast.dismiss(toastId);
  return result;
};

// Edit course details
export const editCourseDetails = async function (token, data) {
  let result = null;
  // Step 1 -> Set toast
  const toastId = toast.loading("Updating course details...");
  try {
    // Step 2 -> Make the api request
    const response = await apiConnector("POST", EDIT_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });
    // Step 3 -> Handle unsuccessful request
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // Step 4 -> Set response equals result
    result = response.data.data;
  } catch (error) {
    // Step 5 -> Handle errors
    console.log(
      "Cannot edit course in EDIT_COURSE_DETAILS in COURSE_DETAILS_API",
    );
    console.log(error);
  }
  // Step 6 -> return the result
  toast.dismiss(toastId);
  return result;
};

// Fetch instructor courses
export const fetchInstructorCourses = async function (token) {
  let result = null;
  //Step 1 -> Set up loading toast
  const toastId = toast.loading("Loading courses...");
  try {
    //Step 2 -> Make API request
    const response = await apiConnector(
      "GET",
      GET_ALL_INSTRUCTOR_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      },
    );
    // Step 3 -> Check request status
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // Step 4 -> Set result
    result = response.data.data;
  } catch (error) {
    // Step 5 -> Handle errors
    console.log(
      "Cannot fetch instructor courses in FETCH_INSTRUCTOR_COURSES IN COURSE_DETAILS_API",
    );
    console.log(error);
  }
  // Return response
  toast.dismiss(toastId);
  return result;
};

// Delete course
export const deleteCourse = async function (token, courseId) {
  const toastId = toast.loading("Deleting course...");
  try {
    // Step 1 -> Send the request
    const response = await apiConnector(
      "DELETE",
      DELETE_COURSE_API,
      { courseId },
      {
        Authorization: `Bearer ${token}`,
      },
    );

    // STEP 2 -> Check request status
    if (!response.data.success) {
      throw new Error(response?.data?.message);
    }
    // STEP 3 -> Show success toast
    toast.success("Course Deleted");
  } catch (error) {
    // Step 4 -> Handle any errors
    console.log(
      "Error occurred while deleting course in DELETE_COURSE in COURSE_DETAIL_API",
    );
    console.log(error);
    toast.error("Cannot delete course");
  }

  toast.dismiss(toastId);
};

// get full course details
export const getFullDetailsOfCourse = async function (token, courseId) {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    // Step 1 -> Make request
    const response = await apiConnector(
      "POST",
      GET_FULL_COURSE_DETAILS_AUTHENTICATED,
      {
        courseId,
      },
      {
        Authorization: `Bearer ${token}`,
      },
    );
    console.log("COURSE_FULL_DETAILS_API API RESPONSE............", response);
    // Step 2 -> Check request status
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // Step 3 -> Set result
    result = response?.data?.data;
  } catch (error) {
    // Step 4 -> handle error
    console.log("COURSE_FULL_DETAILS_API API ERROR............", error);
    result = error.response.data;
    toast.error(error.response.data.message);
  }
  toast.dismiss(toastId);
  return result;
};

// fetch course details
export const fetchCourseDetails = async function (courseId) {
  let result = null;
  const toastId = toast.loading("Loading course details....");
  try {
    // STEP 1 -> Make the request
    const response = await apiConnector("POST", COURSE_DETAILS_API, {
      courseId,
    });
    // Step 2 -> Check the response
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // Step 3 -> Set result
    result = response.data;
    console.log("This is response: ", result);
  } catch (error) {
    // Step 4 -> Handle errors
    console.log(
      "Something went wrong while fetching results in fetchCourseDetails in courseDetailsAPI",
      error,
    );
    result = error.response.data;
  }
  toast.dismiss(toastId);
  return result;
};

/****************** ALL SECTION RELATED FUNCTIONS ***********************************/

// create section
export const createSection = async function (token, data) {
  // Step 1 -> Set loading
  let result = null;
  const toastId = toast.loading("Creating section....");
  try {
    // Step 2 -> Make request to endpoint
    const response = await apiConnector("POST", CREATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    // Step 3 -> Check reponse
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // Step 4 -> Set response
    result = response.data.data;
  } catch (error) {
    // Step 5 -> Handle errors
    console.log("Cannot create section in CREATE_SECTION in COURSE_DETAIL_API");
    console.log(error);
    toast.error("Cannot create section");
  }
  toast.dismiss(toastId);
  return result;
};

// update section
export const updateSection = async function (token, data) {
  let result = null;
  const toastId = toast.loading("Updating section");
  try {
    // Step 1 -> Make request
    const response = await apiConnector("POST", UPDATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    // Step 2 -> Check response
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // Step 3 -> Set result
    result = response.data.data;
  } catch (error) {
    // Step 4 -> Handle error
    console.log("Cannot update the section in COURSE_DETAIL_API");
    console.log(error);
    toast.error("Cannot update section");
  }
  toast.dismiss(toastId);
  return result;
};

// Delete section
export const deleteSection = async function (token, data) {
  let result = null;
  const toastId = toast.loading("Deleting section..");
  try {
    // STEP 1 -> Make request
    const response = await apiConnector("POST", DELETE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    // STEP 2 -> CHECK RESPONSE
    if (!response.data.success) {
      throw new Error(response?.data?.message);
    }
    // Step 3 -> Set response
    result = response.data.data;
  } catch (error) {
    // Step 4 -> Handle error
    console.log("Cannot delete section in COURSE_DETAIL_APi");
    console.log(error);
    toast.error("Cannot delete section");
  }
  toast.dismiss(toastId);
  return result;
};

/****************** ALL SUBSECTION RELATED FUNCTIONS ***********************************/

// create subsection
export const createSubSection = async function (token, data) {
  let result;
  toast.loading("Creating new subsection....");
  try {
    // Step 1 -> Make request
    const response = await apiConnector("POST", CREATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    // Step 2 -> Check response
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // Step 3 -> Set result
    result = response.data.data;
  } catch (error) {
    // Step 4 -> Handle error
    console.log("Cannot create subsection in COURSE_DETAIL_API");
    console.log(error);
    toast.error("Cannot create subsection");
  }
  toast.dismiss();
  return result;
};
// update subsection
export const updateSubSection = async function (token, data) {
  let result;
  toast.loading("Updating subsection....");
  try {
    // Step 1 -> Make request
    const response = await apiConnector("POST", UPDATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    // Step 2 -> Check response
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // Step 3 -> Set result
    result = response.data.data;
  } catch (error) {
    // Step 4 -> Handle error
    console.log("Cannot update subsection in COURSE_DETAIL_API");
    console.log(error);
    toast.error("Cannot update subsection");
  }
  toast.dismiss();
  return result;
};
// delete subsection
export const deleteSubSection = async function (token, data) {
  let result;
  toast.loading("Deleting subsection....");
  try {
    // Step 1 -> Make request
    const response = await apiConnector("POST", DELETE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    // Step 2 -> Check response
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    // Step 3 -> Set result
    result = response.data.data;
  } catch (error) {
    // Step 4 -> Handle error
    console.log("Cannot delete subsection in COURSE_DETAIL_API");
    console.log(error);
    toast.error("Cannot delete subsection");
  }
  toast.dismiss();
  return result;
};

// mark the video as complete
export const markLectureAsComplete = async (token, data) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", LECTURE_COMPLETION_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("MARK THE LECTURE AS COMPLETE API RESPONSE", response);
    if (!response.data.message) {
      throw new Error(response.data.message);
    }
    toast.success("Lecture completed");
    result = true;
  } catch (error) {
    console.log("Mark the LECTURE as COMPLETE API Error", error);
    toast.error(error.message);
    result = false;
  }
  toast.dismiss(toastId);
  return result;
};

// add create review function
export const createRating = async (token, data) => {
  const toastId = toast.loading("Creating review...");
  let success = false;
  try {
    const response = await apiConnector("POST", CREATE_RATING_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error("Could not create rating");
    }

    toast.success("Rating created");
    success = true;
  } catch (error) {
    console.log("Create rating API error: ", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return success;
};
