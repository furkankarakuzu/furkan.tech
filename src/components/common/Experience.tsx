import { Step, Stepper } from "../helpers/Stepper";
import InfoCard from "../helpers/InfoCard";
const experiences = [
    {
      position: "Frontend Developer",
      companyName: "feature/mind",
      dateStart: "August 2022",
      dateEnd: "Current",
      description: `I take on the role of a front-end developer in a team who builds e-commerce websites with Salesforce.

      Some developments I made:
      - Writing or modifying storefront pages
      - Fixing bugs or adding new features related to product pages
      - GTM integrations
      - New payment option integration
      `,
      stack: ["Salesforce.com", "JavaScript", "React.js", "Jquery", "Bootstrap", "SCSS"],
      image: { path: "/featuremind-logo.jpg", alt: "featuremind Logo", width: 36, height: 36 },
      link: "https://featuremind.com/",
    },
    {
        position: "Frontend Developer",
        companyName: "Observer Technology",
        dateStart: "March 2021",
        dateEnd: "August 2022",
        description: `I used Vue.js and Nuxt.js on this company. I worked respectively as a frontend developer, 
        frontend team leader and project manager in CRM and ERP projects. We developed our projects with the Scrum agile method. 
        I also took part in the company's main project, obifi, which provides hotspot services.`,
        stack: ["JavaScript", "Vue.js", "Nuxt.js", "Bootstrap", "SCSS"],
        image: { path: "/observer-logo.png", alt: "Oberserver Teknoloji Logo", width: 36, height: 36 },
        link: "https://www.observer.com.tr/",
    },
    {
        position: "IT Support Technician",
        companyName: "The Bodrum by Paramount Hotels",
        dateStart: "July 2019",
        dateEnd: "October 2019",
        description: `I did access point and router installations, ip phone installation, reception program installations, 
        staff computers installations and connections, hotel management programs installations.`,
        stack: [],
        image: { path: "/paramount-logo.jpg", alt: "The Bodrum by Paramount Hotel Logo", width: 36, height: 36 },
        link: "https://www.linkedin.com/company/the-bodrum-by-paramount-hotels/",
      }
  ];

export default function Experience() {
    return (
        <section>
            <h2 className="mb-4 fw-bold">Experience</h2>
            <Stepper className="ms-3">
            {experiences.map((experience, index) => {
                return (
                <Step key={index} icon={experience.image}>
                    <InfoCard
                    title={experience.position}
                    subTitle={experience.companyName}
                    list={experience.stack}
                    listName={experience.stack.length>0 ? 'Stack(s)' : ''}
                    dateStart={experience.dateStart}
                    dateEnd={experience.dateEnd}
                    description={experience.description}
                    subTitleLink={experience.link}
                    />
                </Step>
                );
            })}
            </Stepper>
      </section>
    );
  }
  