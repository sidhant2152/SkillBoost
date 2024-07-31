import HighlightText from "./HighlightText";
import one from "../../../assets/Images/Know_your_progress.svg";
import two from "../../../assets/Images/Compare_with_others.svg";
import three from "../../../assets/Images/Plan_your_lessons.svg";
import { Button } from "@/components/ui/button";
function RotatedImages() {
  return (
    <div className="mx-auto mt-[5.62rem] w-9/12 space-y-8 ">
      {/* BODY */}
      <div className="mx-auto w-[60%] space-y-5  text-center">
        <h1 className="text-4xl font-semibold">
          Your swiss knife for{" "}
          <HighlightText>learning any language</HighlightText>
        </h1>
        <p className="px-8 text-[1rem]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </p>
      </div>
      {/* IMAGES */}
      <div className="flex items-center justify-center  ">
        <div className="-mr-[7rem] ">
          <img src={one} alt="images for page" />
        </div>
        <div className="">
          <img src={two} alt="images for page" />
        </div>
        <div className="-ml-[8rem] ">
          <img src={three} alt="images for page" />
        </div>
      </div>
      {/* BUTTON */}
      <div className="text-center">
        <Button variant="yellow" size="lg">
          Learn more
        </Button>
      </div>
    </div>
  );
}

export default RotatedImages;
