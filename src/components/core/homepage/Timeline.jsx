import timeline from "../../../assets/Images/TimelineImage.png";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
function Timeline() {
  return (
    <div className="mx-auto mt-[3.25rem] flex w-9/12 flex-row ">
      {/* body */}
      <article className="flex w-[40%] items-center justify-center">
        <div className="space-y-8">
          <article className="flex items-center gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1">
              <img src={logo1} alt="logo" />
            </div>
            <div>
              <h2 className="text-[1.125rem] font-bold text-richblack-800">
                Leadership
              </h2>
              <p>Fully committed to the success company</p>
            </div>
          </article>
          <article className="flex items-center gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <img src={logo2} alt="logo" />
            </div>
            <div>
              <h2 className="text-[1.125rem] font-bold text-richblack-800">
                Responsibility
              </h2>
              <p>Students will always be our top priority</p>
            </div>
          </article>
          <article className="flex items-center gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <img src={logo3} alt="logo" />
            </div>
            <div>
              <h2 className="text-[1.125rem] font-bold text-richblack-800">
                Flexibility
              </h2>
              <p>The ability to switch is an important skills</p>
            </div>
          </article>
          <article className="flex items-center gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <img src={logo4} alt="logo" />
            </div>
            <div>
              <h2 className="text-[1.125rem] font-bold text-richblack-800">
                Solve the problem
              </h2>
              <p>Code your way to a solution</p>
            </div>
          </article>
        </div>
      </article>
      {/* Image */}
      <div className="w-[60%]">
        <img src={timeline} alt="timeline" className="w-full" />
      </div>
    </div>
  );
}

export default Timeline;
