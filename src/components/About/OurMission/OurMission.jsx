import whyImg from '../../assets/ourMission/why.webp';
import whatImg from '../../assets/ourMission/what.webp';
import howImg from '../../assets/ourMission/how.webp';

const OurMission = () => {
  return (
    <div className="bg-gradient-to-bl to-[#1a044d] from-[#080127] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
          Our Mission
        </h1>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          We are driven to make a difference in the world through innovation,
          sustainability, and education. Together, we are creating a more
          vibrant and inclusive future for everyone.
        </p>

        {/* Main Section */}
        <div className="text-white ">
          <div className="flex bg-gradient-to-bl to-[#0B1120] from-[#080127] p-8 justify-between">
            <div className="text-left w-2/4">
              <h2>WHY</h2>
              <p>
                We are passionate about empowering individuals to transform
                their lives through the power of coding. We believe that
                everyone should have access to high-quality, affordable coding
                education, regardless of their background or experience.
              </p>
            </div>
            <img src={whyImg} alt="" className="w-72 " />
          </div>
          {/*  */}
          <div className="flex gap-5 ">
            <div className="flex bg-gradient-to-bl to-[#0B1120] from-[#080127] px-8">
              <div className="text-left">
                <h2> what</h2>
                <p>
                  We provide a comprehensive range of online programming
                  courses, from beginner-level Web Development to advanced CSE
                  Fundamentals and Advanced Programming Courses. Our courses are
                  designed to be engaging, effective, and tailored to the needs
                  of today's learners.
                </p>
              </div>
              <img src={whatImg} alt="" className="w-52 h-52" />
            </div>
            <div className="flex bg-gradient-to-bl to-[#0B1120] from-[#080127] px-8">
              <div className="text-left">
                <h2>How</h2>
                <p>
                  We nurture our students in a personalized and supportive
                  environment that fosters confidence and success. Our friendly
                  and dedicated instructors are always available to guide and
                  mentor our students, ensuring they receive the support they
                  need to achieve their coding goals.
                </p>
              </div>
              <img src={howImg} alt="" className="w-52 h-52" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
