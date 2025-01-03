import React, { useEffect } from 'react';
import { themeList } from '../Utils/interdisciplinaryTheme';

const AboutJournal = () => {
  useEffect(() => {
    // Scroll to the top when the location changes (route change) or on component mount
    window.scrollTo(0, 0);

    // For additional support on mobile devices
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <div className="about_container page" style={{ textAlign: 'justify' }}>
        <div className="heading">
          <h2>About the Journal</h2>
        </div>
        <br />
        <div className="about_para">
          <p>
            <b>
              International Journal Of Scientific Research For Global Innovation
            </b>
            &nbsp;was founded in January 2024 and it is a leading international
            journal for publication of new ideas.The primary goal of the editors
            is to maintain high quality of publications on theoretical
            developments and practical applications. Original research papers,
            state-of-the-art reviews, and high quality technical notes are
            invited for publications. Authors should note that only original and
            previously unpublished manuscripts will be considered. The articles
            that are sent for reviews will have names of the authors deleted
            with a view towards enhancing the objectivity and fairness of the
            review process. Time to time, the Journal will publish review
            articles and bring out special issues on a specific field. Authors
            are encouraged to contact the Editors if they would like to submit a
            review article or bring out a special issue of the Journal.
            Submission of a manuscript is interpreted as a statement of
            certification that no part of the manuscript is copyrighted by any
            other publication nor is under review by any other formal
            publication. It is the primary responsibility of the author to
            obtain proper permission for the use of any copyrighted materials in
            the manuscript, prior to the submission of the manuscript to
            International Journal Of Scientific Research For Global Innovation.
          </p>
          <br />
          <p>
            The aim of this journal is to publish original and unpublished
            contributions that focus on both theoretical and applied research
            studies in multidisciplinary and related disciplines, offering
            diversity and variety to its readers. The journal in each issue
            through publishing different articles, case studies, and critical
            reviews intends to present its audience with interdisciplinary
            themes such as:
          </p>
          <br />
        </div>
        <ul className="interdisciplinaryTheme" style={{ marginLeft: '2rem' }}>
          {themeList.map((theme, index) => (
            <React.Fragment key={index}>
              <li style={{ textAlign: 'start' }}>{theme}</li>
            </React.Fragment>
          ))}
        </ul>
        <br />
        <div className="some_info">
          <h3>Peer Review Process</h3>
          <b>Frequency :</b> Half Yearly
          <br />
          <b>Mode :</b> Online publication <br />
          <b>Medium :</b> English <br />
          <b> Open Access </b> <br />
        </div>
        <br />
        <br />
        <div className="about_points" style={{ textAlign: 'justify' }}>
          <h2>Area Of Research</h2>
          <br />
          <b>
            {' '}
            International Journal Of Scientific Research For Global Innovation
          </b>
          , is a Multidisciplinary Journal focuses on critical and creative
          research. This journal aims to encourage unique research and foster
          meaningful conversations that bridge traditional and groundbreaking
          ideas.
          <br />
          <br />
          <b> Scope: </b> The journal advocates for original scholarly research
          across various disciplines, including Humanities, Culture, Comparative
          Education, Social Sciences, Rural Development, Engineering and
          Technology, Sciences, Art, Commerce, and Management. Its motto is to
          offer insights that can transform lives, enabling individuals to seize
          opportunities and navigate challenges in our evolving world.
        </div>
        <br />
        <br />
        <div className="about_objectives">
          <div className="general">
            <h3>General Objective : </h3>
            {/* <br /> */}
            <p>
              The Million Development Goal underscores a people-centered
              approach, prioritizing the acknowledgment of human and social
              capital for sustainable development. This encompasses various
              economic strategies and emerging trends.
            </p>
            <br />
            <ol>
              <li>
                <b>Sustainable Quality of Life:</b> The primary objective is to
                achieve a sustainable improvement in the quality of life for the
                common people, emphasizing lasting positive changes in their
                well-being.
              </li>
              <br />
              <li>
                <b>Stakeholder-Oriented Programs: </b>Implementing programs that
                are oriented towards stakeholders, aiming to facilitate an
                increase in the per capita income through individual facilities
                and initiatives.
              </li>
              <br />
              <li>
                <b>Empowerment in Key Areas:</b> The goal is to empower
                individuals in crucial domains including health, economy,
                polity, and education, recognizing the interconnectedness of
                these aspects in fostering overall development.
              </li>
              <br />
            </ol>
          </div>
          <br />
          <div className="specific">
            <h3>Specific Objective :</h3>
            <br />
            <ol>
              <li>
                <b>Academic Focus on Adult Education and Lifelong Learning: </b>
                <br />
                The primary objective is to publish original empirical research
                and theoretical studies that contribute to the fields of adult
                education, lifelong learning, extension, and economic relations
                studies. By fostering academic exploration in these areas, the
                goal is to advance knowledge and understanding, thereby
                promoting innovation and excellence in these crucial domains.
              </li>
              <br />
              <li>
                <b>Promotion of Awareness and Social Engagement: </b>
                <br />
                The aim is to generate interest and awareness in critical issues
                affecting society. This includes civil society movements,
                studies on democracy, challenges faced by marginalized sections,
                cross-border terrorism, human rights violations, ecological
                concerns, environmental issues, and governance challenges at
                both regional and national levels. By delving into these topics,
                the objective is to catalyze discussions, prompt informed
                action, and contribute to the betterment of society.
              </li>
              <br />
              <li>
                <b>
                  Integration of Technical Expertise for Practical Solutions:
                </b>
                <br />
                The third objective involves incorporating a technical
                perspective into the scholarly discourse. By emphasizing the
                integration of technical expertise, the goal is to explore
                practical solutions to contemporary challenges. This includes
                leveraging advancements in technology, data analytics, and
                innovative methodologies to address complex issues in fields
                such as adult education, lifelong learning, social engagement,
                and societal challenges. Through this technical lens, the
                objective is to not only deepen the academic understanding of
                these issues but also to propose viable solutions that can have
                a tangible impact on the ground.
              </li>
            </ol>
            <br />
            <p>
              The primary objective is to establish a platform for scholarly
              dialogue encompassing a broad range of topics relevant to
              contemporary times and cultures. This forum aims to facilitate
              intellectual discussions, allowing scholars to explore and
              exchange ideas on diverse subjects that hold significance in the
              context of our evolving world and varied cultures. By fostering
              this scholarly dialogue, the goal is to contribute to the
              collective understanding of pressing issues, encourage
              interdisciplinary perspectives, and promote the dissemination of
              knowledge that is pertinent to our dynamic and ever-changing
              global landscape.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutJournal;
