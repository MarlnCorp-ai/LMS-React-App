import banner1 from "../images/Certifications/Paths/banner-1.png";
import banner2 from "../images/Certifications/Paths/banner-2.png";
import banner3 from "../images/Certifications/Paths/banner-3.png";
import banner4 from "../images/Certifications/Paths/banner-4.png";
import banner5 from "../images/Certifications/Paths/banner-5.png";
import logo from "../images/Certifications/Paths/logo.png";
import SideBar from "../components/common/SideBar";
import { Link } from "react-router-dom";

function CertificationPath() {
  const parts = [
    {
      heading: "MICROSOFT SECURITY",
      images: [
        {
          source: banner1,
          width: "[35rem]",
          height: "[30rem]",
        },
        {
          source: banner2,
          width: "[30rem]",
          height: "",
        },
        {
          source: banner3,
          width: "80",
          height: "80",
        },
      ],
    },
    {
      heading: "MICROSOFT 365",
      images: [
        {
          source: banner4,
          width: "[50rem]",
          height: "",
        },
        {
          source: banner5,
          width: "64",
          height: "",
        },
      ],
    },
  ];
  return (
    <div className="absolute">
      <section className="fixed top-0 left-0">
        <SideBar />
      </section>
      <div className="ml-96">
        <header className="flex items-center pb-40 mt-20 gap-6 border-b">
            <img src={logo} alt="Logo" />
            <section>
                <h1 className="text-3xl mb-4">Microsoft Certification Prep</h1>
                <p className="text-lg">Prep for 17 certification exams below.</p>
            </section>
        </header>
        <main className="flex flex-col gap-20 divide-y">
          {parts.map(({ heading, images }, idx) => (
            <section key={idx} className="pt-4">
              <h2 className="text-2xl font-medium mb-8">{heading}</h2>
              <section className="flex gap-10">
                {images.map(({ source, width, height }, index) => (
                  <Link to="/courses?search=python">
                  <img
                    src={source}
                    alt={`Banner ${index}`}
                    className={`w-${width} h-${height}`}
                    key={index}
                  />
                  </Link>
                ))}
              </section>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default CertificationPath;
