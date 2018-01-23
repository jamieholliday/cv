import React from 'react';

const IndexPage = () => (
  <div>
    <section style={styles.section}>
      <h1>Jamie Holliday - CV</h1>
      <p>Sawbridgeworth, Herts</p>

      <p style={styles.contact}>
        <strong>E:</strong> info AT jamieholliday.com
      </p>
      <p style={styles.contact}>
        <strong>W:</strong>{' '}
        <a href="http://jamieholliday.com">jamieholliday.com</a>
      </p>
      <p style={styles.contact}>
        <strong>PDF:</strong>{' '}
        <a href="/jamieholliday.pdf">Text version of this page</a>
      </p>
    </section>

    <section style={styles.section}>
      <h2>Experience</h2>
      <div>
        <h3 style={styles.h3}>Lead Front End Developer</h3>
        <div>
          <p style={styles.company}>MyJobMatcher</p>
          <p style={styles.duration}>March 2017 – Present | Remote</p>
        </div>
        <h4 style={styles.subheading}>Duties:</h4>
        <p>
          Leading the front end team, (remote and in house) to build and
          maintain modern, responsive, mobile first, single page web apps built
          upon a stack of React, React Native, Redux, ES6, Webpack, Jest against
          a RESTful / GraphQL APIs. Responsible for front end architecture,
          Agile process &amp; mentoring junior developers. SCRUM Master
        </p>
        <h4 style={styles.subheading}>Tools &amp; Tech including:</h4>
        <p>
          ES6 - Javascript, React, Redux, Node, Webpack, PostCSS, Sass, Angular,
          Gulp
        </p>
      </div>
      <div>
        <h3 style={styles.h3}>Senior Front End Developer</h3>
        <div>
          <p style={styles.company}>MyJobMatcher</p>
          <p style={styles.duration}>June 2015 – Match 2017 | Remote</p>
        </div>
        <h4 style={styles.subheading}>Duties:</h4>
        <p>
          Build &amp; transition current legacy site over to a new universally
          rendered, API driven stack, implemented in React, Redux &amp; Node.{' '}
          <br />Develop suite of React components as a UI library to be used in
          various projects. <br />Development of internal, modular, email
          builder tool based on React &amp; Redux.<br /> Build and maintenance
          of legacy Angular, PHP job matching site. <br />Mentoring junior
          developer.
        </p>
        <h4 style={styles.subheading}>Tools &amp; Tech including:</h4>
        <p>
          ES6 - Javascript, React, Redux, Node, Webpack, PostCSS, Sass, Angular,
          Gulp
        </p>
      </div>
      <div>
        <h3 style={styles.h3}>Front End Developer</h3>
        <div>
          <p style={styles.company}>Vaimo</p>
          <p style={styles.duration}>
            November 2013 – June 2015 (1.5 years) | London
          </p>
        </div>
        <h4 style={styles.subheading}>Duties:</h4>
        <p>
          Front End development (HTML, CSS, JS, PHP) of e-commerce websites for
          a range of companies of all sizes. Creating responsive websites from
          PSD designs, amendments and enhancements to existing sites, as well as
          maintenance bug fixing.<br />Work in small Agile teams, distributed
          across the various company sites in Europe, in a SCRUM / KANBAN style.
          Also acted as SCRUM Master for the team. Mentoring junior developers.
        </p>
        <h4 style={styles.subheading}>Tools / Tech including:</h4>
        <p>
          Responsive Web design, Cross Browser Development, Magento, Murcurial,
          Jira, Grunt
        </p>
        <h4 style={styles.subheading}>Certifications:</h4>
        <p>Certified SCRUM Master. Magento Certified Front End Developer</p>
      </div>
      <div>
        <h3 style={styles.h3}>Web Developer</h3>
        <div>
          <p style={styles.company}>Ignition</p>
          <p style={styles.duration}>
            March 2010 – October 2013 (3.5 years) | Bishop's Stortford,
            Hertfordshire
          </p>
        </div>
        <h4 style={styles.subheading}>Duties:</h4>
        <p>
          Development of websites and e-learning for desktop and mobile. <br />{' '}
          Mentoring junior developer.{' '}
        </p>
        <p>
          Clients included world leading brands such as: Toyota, Lexus, Nissan,
          Yamaha, Nokia, L’Oreal, Rezidor &amp; Honda.
        </p>
        <h4 style={styles.subheading}>Tools / Tech including:</h4>
        <p>HTML, CSS, JS, Backbone.js, ActionScript, Flash, Photoshop</p>
      </div>
      <div>
        <h3 style={styles.h3}>Web Designer / Developer (freelance)</h3>
        <div>
          <p style={styles.company}>Archipelago</p>
          <p style={styles.duration}>
            October 2009 – February 2010 (5 months) | Hertford, Hertfordshire
          </p>
        </div>
        <h4 style={styles.subheading}>Duties:</h4>
        <p>Design and build websites, Flash animations and print projects.</p>
      </div>
      <div>
        <h3 style={styles.h3}>Small Business Owner</h3>
        <div>
          <p style={styles.company}>
            Krav Maga UK - (Self Defence Training Provider)
          </p>
          <p style={styles.duration}>
            {' '}
            April 2005 – December 2010 (5 years 9 months) | Bishop's Stortford,
            Hertfordshire
          </p>
        </div>
        <h4 style={styles.subheading}>Duties:</h4>
        <p>
          Included design, build and maintenance of company website and online
          training portal.{' '}
        </p>
        <h4 style={styles.subheading}>Tools / Tech including:</h4>
        <p>Wordpress, payment processors, video editing</p>
      </div>
    </section>

    <section style={styles.section}>
      <h2>Skills</h2>
      <p>
        ES6 Javascript, React, Redux, HTML5, CSS, SASS, jQuery, Git, Webpack,
        Grunt, Gulp, Node, GraphQL
      </p>
    </section>

    <section style={styles.section}>
      <h2>Study</h2>
      <p>
        In my free I try to keep up with the changing Front End tech landscape
        by learning new skills and trying out various libraries / frameworks.
      </p>
    </section>

    <section style={styles.section}>
      <h2>Hobbies / Interests</h2>
      <p>Calisthenics, Mountain Biking, Snowboarding</p>
    </section>
  </div>
);

const styles = {
  section: {
    marginBottom: '2rem',
  },
  contact: {
    marginBottom: 0,
  },
  company: {
    marginBottom: 0,
    color: '#666',
    fontSize: '1em',
  },
  duration: {
    fontSize: '0.8em',
    color: '#666',
  },
  h3: {
    fontWeight: 'normal',
  },
  subheading: {
    marginBottom: 0,
    fontSize: '1em',
  },
};

export default IndexPage;
