import { Fragment } from "react";
import styles from "./styles/RevolvingPosters.module.css";
import automation_anywhere from "../../images/LandingPage/automation-anywhere.png";
import aws_certification from "../../images/LandingPage/AWS-certification.png";
import azure_ai_certification from "../../images/LandingPage/azure-ai-certification.webp";
import cisco_certification from "../../images/LandingPage/cisco CCNA.jpg";
import google_partner from "../../images/LandingPage/google-partners.jpg";
import microsoft_partner from "../../images/LandingPage/microsoft-partner.png";
import oracle_partner from "../../images/LandingPage/Orcale-partner.png";
import pmi_logo from "../../images/LandingPage/pmi-logo.png";
import python_logo from "../../images/LandingPage/python logo.jpg";
import snowflake from "../../images/LandingPage/snowflake.png";
import aws_partner from "../../images/LandingPage/AWS-partner.png";
import databricks_partner from "../../images/LandingPage/Databricks-partner.png";

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
        source: cisco_certification,
        altText: "Cisco Certification"
    },
    {
        source: pmi_logo,
        altText: "PMI Certification"
    },
    {
        source: snowflake,
        altText: "Snowflake certification"
    },
    {
        source: python_logo,
        altText: "Python Certification"
    }];

    const partners = [{
        source: automation_anywhere,
        altText: "AUTOMATION ANYWHERE"
    },
    {
        source: google_partner,
        altText: "Google"
    },
    {
        source: oracle_partner,
        altText: "ORACLE "
    },
    {
        source: microsoft_partner,
        altText: "Microsoft"
    },
    {
        source: aws_partner,
        altText: "AWS"
    },
    {
        source: databricks_partner,
        altText: "Databricks"
    }];

  return (
    <Fragment>
      <div className={styles["revolving-posters"]}>
        <header>
          <h2 className="text-lg font-semibold">Meet partners that are already using Nexus Hive</h2>
        </header>
        <main>
          <div className={styles["image-container"]}>
            <div className={styles["image-scroll-wrapper"]}>
              {courses.map(({source, altText}, idx) => (
                <img key={idx} src={source} alt={altText}/>
              ))}
            </div>
          </div>
          <div className={styles["image-container"]}>
            <div className={styles["image-scroll-wrapper"]}>
            {partners.map(({source, altText}, idx) => (
                <img key={idx} src={source} alt={altText}/>
              ))}
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

// #F4F7FA
export default RevolvingPosters;
