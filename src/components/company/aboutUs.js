import React from "react";
import pic1 from "../../images/about/img1.jpeg";
import pic2 from "../../images/about/img2.jpeg"
import pic3 from "../../images/about/img3.jpeg";
import pic4 from "../../images/about/img4.jpeg";

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

<section
      className="relative bg-cover bg-center bg-no-repeat py-20 text-center px-6"
      style={{ backgroundImage: `url(${pic4






        
      })` }}
    >

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 max-w-3xl mx-auto leading-tight">
          Transforming Learning Experiences with AI-powered Innovation
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-white">
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
    <h2 className="text-black text-xl font-semibold">Our Mission</h2> 
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
      src={pic1}
      alt="AI Learning Illustration"
      className="rounded-xl shadow-lg"
    />
  </div>
</section>


<section className="bg-white text-gray-800 py-20 px-6">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold">NexusHive at a Glance</h2>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center max-w-7xl mx-auto">
    <div className="bg-indigo-100 text-indigo-600 p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-bold">1,000+</h3>
      <p className="text-sm">corporate users onboarded</p>
    </div>
    <div className="bg-blue-100 text-blue-600 p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-bold">95%</h3>
      <p className="text-sm">satisfaction rate from learners</p>
    </div>
    <div className="bg-cyan-100 text-cyan-600 p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-bold">20+</h3>
      <p className="text-sm">industries served</p>
    </div>
    <div className="bg-sky-100 text-sky-600 p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-bold">4</h3>
      <p className="text-sm">global delivery hubs</p>
    </div>
    <div className="bg-emerald-100 text-emerald-600 p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-bold">300+</h3>
      <p className="text-sm">active enterprise learners daily</p>
    </div>
    <div className="bg-pink-100 text-pink-600 p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">
      <h3 className="text-3xl font-bold">100%</h3>
      <p className="text-sm">client retention last year</p>
    </div>
  </div>
</section>



      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-6 max-w-7xl mx-auto">
        <div>
          <img
            src={pic2}
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

   


<section className="bg-[#f7f9fc] text-gray-800 py-20 px-6">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4 text-gray-900">In the News</h2>
    <p className="text-sm text-gray-600">Recent press releases, news coverage, and more.</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {newsArticles.map((article, idx) => (
      <div key={idx} className="transition-transform transform hover:scale-105 hover:shadow-xl">
        <NewsCard {...article} />
      </div>
    ))}
  </div>
  <div className="text-center mt-10">
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-full transition duration-300 transform hover:scale-105">
      Visit the newsroom
    </button>
  </div>
</section>

    </div>
  );
};

export default AboutUs;
