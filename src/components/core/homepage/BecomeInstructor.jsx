import image from "../../../assets/Images/Instructor.png";
import { Button } from "@/components/ui/button";
import HighlightText from "./HighlightText";
function BecomeInstructor() {
  return (
    <div className="mx-auto mt-[5.62rem] flex w-9/12 items-center justify-center gap-[6rem]">
      {/* Image */}
      <div className="shadow-[-20px_-20px_0px_0px_#F5F5F5]">
        <img src={image} alt="image" className="w-full" />
      </div>
      {/* Body */}
      <div className="w-[40%] space-y-12 ">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            Become an <br /> <HighlightText>instructor</HighlightText>
          </h1>
          <p className="text-richblack-400">
            Instructors from around the world teach millions of students on
            Skillboost. We provide the tools and skills to teach what you love.
          </p>
        </div>
        <Button variant="yellow">Start Teching Today</Button>
      </div>
    </div>
  );
}

export default BecomeInstructor;
