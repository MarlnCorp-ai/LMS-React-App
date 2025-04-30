import aws_certification from "../../images/LandingPage/AWS-certification.png";
import azure_ai_certification from "../../images/LandingPage/azure-ai-certification.webp";
import microsoft_partner from "../../images/LandingPage/microsoft-partner.png";
import oracle_partner from "../../images/LandingPage/Orcale-partner.png";
import snowflake from "../../images/LandingPage/snowflake.png";
import googleCloud from "../../images/LandingPage/logos/1.png";
import comptiaA from "../../images/LandingPage/logos/2.png";
import comptiaCASP from "../../images/LandingPage/logos/3.png";
import comptiaCloud from "../../images/LandingPage/logos/4.png";
import ibm from "../../images/LandingPage/logos/5.png";
import kubernetes from "../../images/LandingPage/logos/6.png";
import azureDevOps from "../../images/LandingPage/logos/7.png";
import DevOps from "../../images/LandingPage/logos/8.png";
import github from "../../images/LandingPage/logos/9.png";
import styles from "./styles/RevolvingPosters.module.css";
import React, { Fragment } from 'react';



function RevolvingPosters() {

    const courses = [{
        source: aws_certification,
        altText: "AWS Certification"
    },
    {
        source: azure_ai_certification,
        altText: "AZURE AI Certification"
    },
    {
        source: snowflake,
        altText: "Snowflake certification"
    },
    {
        source: googleCloud,
        altText: "Google Cloud"
    },
    {
        source: comptiaA,
        altText: "CompTIA A+"
    },
    {
        source: comptiaCASP,
        altText: "CompTIA CASP+"
    },
    {
        source: comptiaCloud,
        altText: "CompTIA Cloud+"
    },
    {
        source: ibm,
        altText: "IBM"
    },
    {
        source: kubernetes,
        altText: "Kubernetes"
    },
    {
        source: azureDevOps,
        altText: "Azure DevOps"
    },
    {
        source: DevOps,
        altText: "DevOps"
    },
    {
        source: github,
        altText: "GitHub"
    }
];

    const partners = [
    {
        source: oracle_partner,
        altText: "ORACLE "
    },
    {
        source: microsoft_partner,
        altText: "Microsoft"
    }
];

  return (
    <Fragment>
      <div className="bg-[#F5F7FA] h-96">
        <header>
          <h2 className="text-3xl font-semibold text-center mb-20 pt-10">Meet Our Partners</h2>
        </header>
        <main>
          <div className={styles["image-container"]}>
          <div className={styles["image-scroll-wrapper"]}>
            {[...partners, ...courses, ...partners, ...courses].map(({ source, altText }, idx) => (
                <img key={idx} src={source} alt={altText} />
              )
            )}
      </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}


export default RevolvingPosters;