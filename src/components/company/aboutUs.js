import React from "react";

const NewsCard = ({ source, title, date }) => (
  <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
    <p className="font-semibold text-sm text-gray-700 mb-1">{source}</p>
    <h3 className="font-bold text-md text-indigo-700">{title}</h3>
    <p className="text-xs text-gray-500 mt-2">{date}</p>
    <a href="#" className="text-sm text-pink-600 mt-2 inline-block">
      Read article →
    </a>
  </div>
);

const ClaimCard = ({ icon, alt, description }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center transition hover:shadow-lg">
    <img src={icon} alt={alt} className="w-12 h-12 mb-4" loading="lazy" />
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

const AboutUs = () => {
  
  const newsArticles = [
    {
      source: "Business Insider",
      title: "Inside Silicon Slopes: Utah’s Tech Boom and Workplace Trends",
      date: "Apr 17, 2025",
    },
    {
      source: "CIO",
      title: "85% of IT leaders are replacing headcount — others question that approach",
      date: "Apr 17, 2025",
    },
    {
      source: "CBS News",
      title: "Accelerating Innovation Through Tech Skills",
      date: "Apr 17, 2025",
    },
    {
      source: "CIO Dive",
      title: "Generative AI adoption stymied by tech & talent gaps",
      date: "Apr 17, 2025",
    },
    {
      source: "Computerworld",
      title: "Tech skills gap plagues industries, upskilling is key",
      date: "Apr 17, 2025",
    },
    {
      source: "Training Industry",
      title: "Bridging the AI skills gap with labs and simulations",
      date: "Apr 17, 2025",
    },
  ];
  return (
    
    <div className="bg-white text-gray-800">
      
      <section className="bg-[#1a1c2c] text-white py-20 text-center px-6">
  <div>
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 max-w-3xl mx-auto leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
      Transforming Learning Experiences with AI-powered Innovation
    </h1>
    <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
      NexusHive by Marln Corp — where intelligent automation meets intuitive design for enterprise learning.
      Empowering organizations with smart, scalable, and innovative solutions.
    </p>
    <div className="mt-8">
      <a
        href="#cta"
        className="inline-block bg-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-105"
      >
        Get Started
      </a>
    </div>
  </div>
</section>



      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-6 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-pink-600 font-semibold">Our Mission</h2>
          <h3 className="text-3xl font-bold">Empowering organizations through next-gen learning</h3>
          <p>
            NexusHive is an AI-powered Learning Management System (LMS) developed by Marln Corp Consulting, a
            women-owned IT consulting firm based in the San Francisco Bay Area. Designed to transform digital
            learning experiences, NexusHive combines intelligent automation with user-friendly design to streamline
            training, engagement, and knowledge delivery across organizations.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1000&q=80"
            alt="AI Learning Illustration"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section className="bg-[#151030] text-white py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">NexusHive at a Glance</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-red-400 text-2xl font-bold">1,000+</h3>
            <p className="text-sm">corporate users onboarded</p>
          </div>
          <div>
            <h3 className="text-blue-400 text-2xl font-bold">95%</h3>
            <p className="text-sm">satisfaction rate from learners</p>
          </div>
          <div>
            <h3 className="text-cyan-400 text-2xl font-bold">20+</h3>
            <p className="text-sm">industries served</p>
          </div>
          <div>
            <h3 className="text-sky-400 text-2xl font-bold">4</h3>
            <p className="text-sm">global delivery hubs</p>
          </div>
          <div>
            <h3 className="text-emerald-400 text-2xl font-bold">300+</h3>
            <p className="text-sm">active enterprise learners daily</p>
          </div>
          <div>
            <h3 className="text-pink-400 text-2xl font-bold">100%</h3>
            <p className="text-sm">client retention last year</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-6 max-w-7xl mx-auto">
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Consulting Team"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-purple-600 font-semibold">About Marln Corp</h2>
          <h3 className="text-3xl font-bold">Your Strategic IT Consulting Partner</h3>
          <p>
            Marln Corporation is a leading women-owned IT consulting firm based in Cupertino, California, in the
            heart of the San Francisco Bay Area. We specialize in delivering custom technology solutions that empower
            organizations to scale, streamline operations, and drive sustainable business growth.
          </p>
          <p>
            With deep experience in cloud transformation, AI consulting, cybersecurity, enterprise IT services, and
            digital strategy, our team partners with clients to bridge the gap between technology and business goals.
          </p>
          <p>
            We proudly operate from Cupertino with a global presence through offices in India, Singapore, Canada, and
            Germany.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Culture Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div>
            <h4 className="text-pink-600 font-bold mb-2">Customer Obsessed</h4>
            <p>
              We understand our customers’ needs and deliver value-driven solutions to exceed expectations.
            </p>
          </div>
          <div>
            <h4 className="text-red-600 font-bold mb-2">Aligned and Focused</h4>
            <p>
              Our strategies and actions align with our mission to deliver consistent, measurable impact.
            </p>
          </div>
          <div>
            <h4 className="text-blue-600 font-bold mb-2">Always Learning</h4>
            <p>
              We believe in growth through continuous learning, reflection, and innovation.
            </p>
          </div>
          <div>
            <h4 className="text-indigo-600 font-bold mb-2">Direct and Respectful</h4>
            <p>
              We share honest feedback and foster trust with clarity, empathy, and respect.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#1b1c44] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Claims to Fame</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <ClaimCard
            icon="https://img.icons8.com/color/48/fortune-cookie.png"
            alt="Fortune 100"
            description="Named a 2020 Fortune 100 Best Companies to Work For®"
          />
          <ClaimCard
            icon="https://img.icons8.com/color/48/computer-support.png"
            alt="Tech Workplace"
            description="Ranked No. 10 on FORTUNE's Best Workplaces in Technology 2020 List"
          />
          <ClaimCard
            icon="https://img.icons8.com/color/48/woman-profile.png"
            alt="Best for Women"
            description="Named a 2020 Best Workplace for Women by Great Place to Work® and FORTUNE"
          />
          <ClaimCard
            icon="https://img.icons8.com/color/48/family.png"
            alt="Best for Parents"
            description="Named a 2020 Best Workplace for Parents by Great Place to Work®"
          />
          <ClaimCard
            icon="https://img.icons8.com/color/48/millennial.png"
            alt="Best for Millennials"
            description="Named a 2020 Best Workplace for Millennials by Great Place to Work® and FORTUNE"
          />
        </div>
        <div className="mt-10">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition">
            View all our awards
          </button>
        </div>
      </section>

      <section className="bg-white text-gray-800 py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">In the News</h2>
          <p className="text-sm text-gray-500">Recent press releases, news coverage, and more.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {newsArticles.map((article, idx) => (
            <NewsCard key={idx} {...article} />
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition">
            Visit the newsroom
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;
