import { Step, Stepper } from "../helpers/Stepper";
import InfoCard from "../helpers/InfoCard";
const educations = [
    {
      position: "Computer Engineering",
      companyName: "Balikesir University",
      dateStart: "September 2019",
      dateEnd: "July 2023",
      description: `Bachelor Degree`,
      stack: [],
      image: { path: "/balikesir-universitesi-logo.png", alt: "Balikesir Universitesi Logo", width: 36, height: 36 },
      link: "https://balikesir.edu.tr/",
    },
    {
        position: "Computer Programming",
        companyName: "Mediterranean University",
        dateStart: "September 2017",
        dateEnd: "July 2019",
        description: `Associate Degree`,
        stack: [],
        image: { path: "/akdeniz-universitesi-logo.gif", alt: "Akdeniz Universitesi Logo", width: 36, height: 36 },
        link: "https://www.akdeniz.edu.tr/",
    }
  ];

export default function Education() {
    return (
        <section className={`mt-5`}>
            <h2 className="mb-4 fw-bold text-light">Education</h2>
            <Stepper className="ms-3">
            {educations.map((education, index) => {
                return (
                <Step key={index} icon={education.image}>
                    <InfoCard
                    title={education.position}
                    subTitle={education.companyName}
                    list={education.stack}
                    listName={education.stack.length>0 ? 'Stack(s)' : ''}
                    dateStart={education.dateStart}
                    dateEnd={education.dateEnd}
                    description={education.description}
                    subTitleLink={education.link}
                    />
                </Step>
                );
            })}
            </Stepper>
      </section>
    );
  }
  