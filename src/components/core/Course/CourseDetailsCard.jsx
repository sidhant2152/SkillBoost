import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import { cartActions } from "../../../slices/cartSlice";
import { toast } from "react-hot-toast";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import copy from "copy-to-clipboard";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";
import { useState } from "react";
function CourseDetailsCard({ course, handleBuyCourse }) {
  // Local state for login modal
  const [open, setOpen] = useState(false);

  // global states
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    thumbnail: ThumbnailImage,
    price: CurrentPrice,
    _id: courseId,
  } = course;

  // share button handler
  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link copied to clipboard");
  };

  // Buy course handler
  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.");
      return;
    }
    if (token) {
      console.log("ADDING TO CART", course);
      dispatch(cartActions.addToCart(course));
      return;
    }
    setOpen(true);
  };

  return (
    <>
      <div
        className={`flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5`}
      >
        {/* Course Image */}
        <img
          src={ThumbnailImage}
          alt={course?.courseName}
          className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full"
        />

        <div className="px-4">
          <div className="space-x-3 pb-4 text-3xl font-semibold">
            Rs. {CurrentPrice}
          </div>
          <div className="flex flex-col gap-4">
            {/* BUY NOW BUTTON */}
            <Button
              variant="yellow"
              onClick={
                user && course?.studentsEnrolled?.includes(user?._id)
                  ? () => navigate("/dashboard/enrolled-courses")
                  : handleBuyCourse
              }
              className="w-full"
            >
              {user && course?.studentsEnrolled?.includes(user?._id)
                ? "Go To Course"
                : "Buy Now"}
            </Button>
            {/* ADD TO CART BUTTON */}
            {(!user || !course?.studentsEnrolled?.includes(user?._id)) && (
              <Button
                onClick={handleAddToCart}
                className="normal"
                variant="normal"
              >
                Add to Cart
              </Button>
            )}
          </div>
          <div>
            <p className="pb-3 pt-6 text-center text-sm text-richblack-25">
              30-Day Money-Back Guarantee
            </p>
          </div>

          <div className={``}>
            <p className={`my-2 text-xl font-semibold `}>
              This Course Includes :
            </p>
            <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
              {course?.instructions?.map((item, i) => {
                return (
                  <p className={`flex gap-2`} key={i}>
                    <BsFillCaretRightFill />
                    <span>{item}</span>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="text-center">
            <button
              className="mx-auto flex items-center gap-2 py-6 text-yellow-100 "
              onClick={handleShare}
            >
              <FaShareSquare size={15} /> Share
            </button>
          </div>
        </div>
      </div>
      <LoginModal
        open={open}
        setOpen={setOpen}
        para="Please login to add the course to the cart"
      />
    </>
  );
}

export default CourseDetailsCard;
