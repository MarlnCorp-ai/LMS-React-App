import hexagon from "../../images/LandingPage/hexagon.png";

function LearningStructure() {
  return (
    <div className="flex flex-col items-center mt-52">
      <h2 className=" text-5xl tracking-wide w-84 text-center font-medium mb-20">
        An all-in-one <br />
        learning experience
      </h2>
      <div className="flex gap-12 items-center mt-12 mb-40">
        <aside className="flex flex-col gap-20 max-w-80 tracking-wide">
            <section className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Seamless Administration</h3>
                <p className="text-lg text-gray-700 leading-8">Effortless Management - Quick onboarding, course assignments, and easy tracking</p>
            </section>
            <section className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">AI-Powered Learning</h3>
                <p className="text-lg text-gray-700 leading-8">AI-powered course suggestions, instant feedback, and 24/7 chatbot support for learners.</p>
            </section>
            <section className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Personalized Learning Paths</h3>
                <p className="text-lg text-gray-700 leading-8">AI-driven, role-based training with personalized progress tracking and smart recommendations.</p>
            </section>
        </aside>
        <main>
          <img
            src={hexagon}
            alt="Learning Structure"
            className="w-[35rem] h-[35rem] mx-auto"
          />
        </main>
        <aside className="flex flex-col gap-20 max-w-72 tracking-wide">
            <section className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Powerful Analytics</h3>
                <p className="text-lg text-gray-700 leading-8">In-Depth Insights – Track progress, monitor trends, and optimize performance.</p>
            </section>
            <section className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Career-Focused Skill Development</h3>
                <p className="text-lg text-gray-700 leading-8">Skill-Based Growth – Empower employees with targeted, career-oriented training.</p>
            </section>
            <section className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Accessible Anytime, Anywhere</h3>
                <p className="text-lg text-gray-700 leading-8">Mobile Learning – Access training on any device, anytime, anywhere.</p>
            </section>
        </aside>
      </div>
    </div>
  );
}

export default LearningStructure;
