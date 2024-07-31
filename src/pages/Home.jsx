import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HighlightText from "../components/core/homepage/HighlightText";
import banner from "../assets/Images/banner.mp4";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import AnimatedCode from "../components/core/homepage/AnimatedCode";
import Timeline from "../components/core/homepage/Timeline";
import RotatedImages from "../components/core/homepage/RotatedImages";
import BecomeInstructor from "../components/core/homepage/BecomeInstructor";
import TabSection from "../components/core/homepage/TabSection";
import ReviewSlider from "../components/common/ReviewSlider";
function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-richblack-900 pt-10 font-inter">
      {/* SECTION - 1 */}
      <section className="w-full bg-richblack-900 text-richblack-5">
        {/* PART ONE */}
        <div className="mx-auto mb-14 w-[70%] space-y-[2rem] pt-5 text-center">
          <button className="mx-auto flex flex-row items-center gap-1 rounded-full border-2 border-richblack-800 bg-richblack-800 px-[1.1rem] py-[.4rem] text-lg text-richblack-200 transition-all duration-200 hover:bg-transparent">
            <div>Become an instructor</div>
            <div className="text-sm">
              <ArrowRight />
            </div>
          </button>
          <div className="space-y-[1rem]">
            <h1 className="text-4xl font-semibold">
              Empower Your Future with{" "}
              <HighlightText>Coding Skills</HighlightText>
            </h1>
            <p className="text-lg text-richblack-300">
              With our online coding courses, you can learn at your own pace,
              from anywhere in the world, and get access to a wealth of
              resources, including hands-on projects, quizzes, and personalized
              feedback from instructors.{" "}
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="yellow" size="lg">
              Learn more
            </Button>
            <Button variant="normal" size="lg">
              Book a demo
            </Button>
          </div>
        </div>
        {/* PART TWO ->  VIDEO SECTION */}
        <div className="mx-auto w-[60%] shadow-[0px_-10px_70px_0px_#118ab2a8]">
          <AspectRatio
            ratio={16 / 9}
            className=" w-full shadow-[20px_20px_0px_0px_#F5F5F5] "
          >
            <video src={banner} loop autoPlay></video>
          </AspectRatio>
        </div>

        {/* PART THREE -> ANIMATED CODING BLOCKS */}
        <div className="mx-auto flex w-[65%] flex-row gap-[6.125rem] py-[6rem]">
          {/* Card */}
          <div className="flex w-1/2 flex-col justify-between gap-10">
            {/* body */}
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold">
                Unlock your <HighlightText>coding potential</HighlightText> with
                our online courses.
              </h1>
              <p className=" text-richblack-300">
                Our courses are designed and taught by industry experts who have
                years of experience in coding and are passionate about sharing
                their knowledge with you.
              </p>
            </div>
            {/* Actions */}
            <div className="space-x-5">
              <Button variant="yellow">Try it Yourself</Button>
              <Button variant="normal">Learn More</Button>
            </div>
          </div>
          <AnimatedCode color="#FFD60A" />
        </div>

        {/* PART FOUR -> ANIMATED CODING BLOCK */}
        <div className="mx-auto flex w-[65%] flex-row gap-[6.125rem]  py-[6rem]">
          <AnimatedCode color="#118ab2" bgColor="blue" />
          {/* Card */}
          <div className="flex w-1/2 flex-col  gap-10">
            {/* body */}
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold">
                Start{" "}
                <HighlightText>
                  coding
                  <br /> in seconds
                </HighlightText>
              </h1>
              <p className=" text-richblack-300">
                Go ahead, give it a try. Our hands-on learning environment means
                you&apos;ll be writing real code from your very first lesson.
              </p>
            </div>
            {/* Actions */}
            <div className="space-x-5">
              <Button variant="yellow">Continue Lesson</Button>
              <Button variant="normal">Learn More</Button>
            </div>
          </div>
        </div>

        {/* Tabs section */}
        <TabSection />
      </section>

      {/* SECTION - 2 */}
      <section className=" w-full bg-pure-greys-5 pb-[5rem] text-richblack-700 ">
        {/* BG - IMAGE SECTION */}
        <div className="crossImage flex h-[20rem] w-full items-center justify-center bg-[url('../src/assets/Images/bghome.svg')]">
          <div className="translate-y-10 space-x-8">
            <Button variant="yellow">Explore Full Catalog </Button>
            <Button variant="normal">Learn more</Button>
          </div>
        </div>
        {/* JOB IN DEMAND SECTION */}
        <div className="mx-auto mt-[5.62rem] flex w-9/12  justify-between  text-[1rem]">
          <div className="w-[45%]">
            <h1 className="text-4xl font-semibold">
              Get the skills you need for a{" "}
              <HighlightText>job that is in demand.</HighlightText>
            </h1>
          </div>
          <div className="w-[50%] space-y-12">
            <p>
              The modern Skillboost is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
            </p>
            <Button variant="yellow">Learn more</Button>
          </div>
        </div>
        {/* TimeLine Section */}
        <Timeline />
        {/* Rotated Images Section */}
        <RotatedImages />
      </section>

      {/* SECTION - 3 */}
      <section className="w-full bg-richblack-900  text-richblack-5">
        {/* Become Instructor */}
        <BecomeInstructor />
        {/* REVIEWS <Carousel></Carousel> */}
        <h1 className="mt-12 text-center text-4xl font-semibold">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </section>
    </div>
  );
}

export default Home;
