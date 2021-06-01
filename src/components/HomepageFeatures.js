import React from "react";
import clsx from "clsx";
import Icon from "@material-ui/core/Icon";
import styles from "./HomepageFeatures.module.css";

const MustHaveSkillsList = {
  title: "How do we start?",
  skills: [
    {
      title: "Learn Software Engineering",
      Svg: require("../../static/img/s-e.svg").default,
      description: (
        <>
          Build basic foundation with Software Engineering, SDLC, Software
          Process and Practises.
        </>
      ),
    },
    {
      title: "Project Tools with Techniques",
      Svg: require("../../static/img/jira.svg").default,
      description: (
        <>
          Explore project and productivity tools like JIRA, Confluence, Draw.IO,
          Miro, Evernote, InOffice, Trello, Agile, Kanban.
        </>
      ),
    },
    {
      title: "Design & Visualization",
      Svg: require("../../static/img/draw-io.svg").default,
      description: (
        <>
          Understand how to gather client requirement &amp; design a solution
          before coding it..
        </>
      ),
    },
  ],
};

const TechSkillsList = {
  title: "Start Technical Skills",
  skills: [
    {
      title: "Kickstart with Web Principles",
      Svg: require("../../static/img/web.svg").default,
      description: (
        <>
          Understand building blocks of web technolgies &amp; Comfortable
          yourself with Browsers, Dev Tools, JS Engine &amp; important tools.
        </>
      ),
    },
    {
      title: "Master HTML & CSS",
      Svg: require("../../static/img/html.svg").default,
      description: (
        <>
          Learn &amp; Practise HTML, CSS &amp; SASS to design UI pages &amp;
          layouts like a pro.
        </>
      ),
    },
    {
      title: "Master JavaScript with ES6",
      Svg: require("../../static/img/js.svg").default,
      description: (
        <>
          Learn JavaScript core from scratch &amp; Practise it beyond the basics
          to build world class applications.
        </>
      ),
    },
    {
      title: "Master GIT (Version Control)",
      Svg: require("../../static/img/git.svg").default,
      description: (
        <>
          Learn &amp; how to work in teams and Understand code sharing, review
          and team collaborations.
        </>
      ),
    },
    {
      title: "Explore ReactJS with Redux",
      Svg: require("../../static/img/react.svg").default,
      description: (
        <>
          Learn ReactJS &amp; Redux from the core &amp; implement it to beyond
          the basics to develop your own front-end app.
        </>
      ),
    },
    {
      title: "Explore NodeJS",
      Svg: require("../../static/img/nodejs.svg").default,
      description: (
        <>
          Learn NodeJS &amp; from the core &amp; build your own backend server
          &amp; API's with CRUD inclduing Authentication to develop world class
          applications.
        </>
      ),
    },
    {
      title: "Explore MongoDB",
      Svg: require("../../static/img/mongodb.svg").default,
      description: (
        <>
          Learn MongoDB &amp; from the core &amp; understand how to design a
          database to build your server &amp; for scalable applications.
        </>
      ),
    },
    {
      title: "Explore System Design",
      Svg: require("../../static/img/architect.svg").default,
      description: (
        <>
          Learn &amp; implement scalable system using MERN Stack &amp; AWS.
          You'll be learning building applications like a pro to scale upto next
          level
        </>
      ),
    },
    {
      title: "Deploy your application",
      Svg: require("../../static/img/aws.svg").default,
      description: (
        <>
          Deploy your application to the cloud with automation &amp; showcase it
          to the world &amp; hiring managers.
        </>
      ),
    },
  ],
};

const WinningSkills = {
  title: "Important Skills",
  skills: [
    {
      title: "Strong Interview Preperation",
      Svg: require("../../static/img/communication.svg").default,
      description: (
        <>
          A rigrous practise and hands-on interview preperation to enable you
          cracking your dream company. Weekly/Monthly &amp; timely based
          interviews practises.
        </>
      ),
    },
    {
      title: "Strong Communication Practises",
      Svg: require("../../static/img/interview.svg").default,
      description: (
        <>
          Communication is the key hence you'll get a rigrous practise and
          vocabulary based interview preperation to enable you cracking your
          dream company.
        </>
      ),
    },
    {
      title: "Hackathons & Coding Challenges",
      Svg: require("../../static/img/hackathon.svg").default,
      description: (
        <>
          We have attended 38 Hackathons &amp; won 17 so far &amp; actively
          participating. You'll also get an opportunity to be the part with our
          team to get recogniton infront of leading organizations.
        </>
      ),
    },
  ],
};

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <h1 className="">{MustHaveSkillsList.title}</h1>
          </div>
          <div className="row">
            {MustHaveSkillsList.skills.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className="container">
          <h1 className="">{TechSkillsList.title}</h1>
          <div className="row">
            {TechSkillsList.skills.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className="container">
          <h1 className="">{WinningSkills.title}</h1>
          <div className="row">
            {WinningSkills.skills.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
