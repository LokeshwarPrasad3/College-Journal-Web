import React, { useEffect } from 'react';
import { themeList } from '../Utils/interdisciplinaryTheme';

const AboutJournal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <div className="max_width_content_page px-5 flex flex-col justify-start items-start gap-2 text-justify py-8 ">
        <div className="heading mb-1">
          <h2 className="text-2xl font-bold">About the Journal</h2>
        </div>
        <div className="flex gap-2 justify-center flex-col text-justify">
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
          <p>
            The aim of this journal is to publish original and unpublished
            contributions that focus on both theoretical and applied research
            studies in multidisciplinary and related disciplines, offering
            diversity and variety to its readers. The journal in each issue
            through publishing different articles, case studies, and critical
            reviews intends to present its audience with interdisciplinary
            themes such as:
          </p>
        </div>
        <ul className="interdisciplinaryTheme list-disc ml-8">
          {themeList.map((theme, index) => (
            <React.Fragment key={index}>
              <li className="text-left">{theme}</li>
            </React.Fragment>
          ))}
        </ul>
        <div className="some_info">
          <h3 className="text-xl font-bold">Peer Review Process</h3>
          <b>Frequency :</b> Half Yearly
          <br />
          <b>Mode :</b> Online publication <br />
          <b>Medium :</b> English <br />
          <b> Open Access </b> <br />
        </div>
        <div className="about_points text-justify flex flex-col justify-start items-start gap-2">
          <h2 className="text-xl font-bold relative -z-20 top-1">
            Area Of Research
          </h2>
          <p>
            <b>
              International Journal Of Scientific Research For Global Innovation
            </b>{' '}
            , is a Multidisciplinary Journal focuses on critical and creative
            research. This journal aims to encourage unique research and foster
            meaningful conversations that bridge traditional and groundbreaking
            ideas.
          </p>
          <p>
            <b> Scope: </b> The journal advocates for original scholarly
            research across various disciplines, including Humanities, Culture,
            Comparative Education, Social Sciences, Rural Development,
            Engineering and Technology, Sciences, Art, Commerce, and Management.
            Its motto is to offer insights that can transform lives, enabling
            individuals to seize opportunities and navigate challenges in our
            evolving world.
          </p>
        </div>
        <div className="about_objectives">
          <div className="general flex mt-2 flex-col justify-start items-start gap-1">
            <h3 className="text-xl font-bold ">General Objective : </h3>
            <div className="content flex flex-col gap-2">
              <p>
                The Million Development Goal underscores a people-centered
                approach, prioritizing the acknowledgment of human and social
                capital for sustainable development. This encompasses various
                economic strategies and emerging trends.
              </p>
              <ol className="list-decimal flex flex-col justify-start items-start gap-2 ml-4">
                <li>
                  <b>Sustainable Quality of Life:</b> The primary objective is
                  to achieve a sustainable improvement in the quality of life
                  for the common people, emphasizing lasting positive changes in
                  their well-being.
                </li>
                <li>
                  <b>Stakeholder-Oriented Programs: </b>Implementing programs
                  that are oriented towards stakeholders, aiming to facilitate
                  an increase in the per capita income through individual
                  facilities and initiatives.
                </li>
                <li>
                  <b>Empowerment in Key Areas:</b> The goal is to empower
                  individuals in crucial domains including health, economy,
                  polity, and education, recognizing the interconnectedness of
                  these aspects in fostering overall development.
                </li>
              </ol>
            </div>
          </div>
          <div className="specific flex flex-col mt-4 justify-start items-start gap-1 ">
            <h3 className="text-xl font-bold">Specific Objective :</h3>
            <div className="content flex flex-col gap-2">
              <ol className="list-decimal flex flex-col justify-start items-start gap-2 ml-4">
                <li>
                  <b>
                    Academic Focus on Adult Education and Lifelong Learning:{' '}
                  </b>
                  <br />
                  The primary objective is to publish original empirical
                  research and theoretical studies that contribute to the fields
                  of adult education, lifelong learning, extension, and economic
                  relations studies. By fostering academic exploration in these
                  areas, the goal is to advance knowledge and understanding,
                  thereby promoting innovation and excellence in these crucial
                  domains.
                </li>
                <li>
                  <b>Promotion of Awareness and Social Engagement: </b>
                  <br />
                  The aim is to generate interest and awareness in critical
                  issues affecting society. This includes civil society
                  movements, studies on democracy, challenges faced by
                  marginalized sections, cross-border terrorism, human rights
                  violations, ecological concerns, environmental issues, and
                  governance challenges at both regional and national levels. By
                  delving into these topics, the objective is to catalyze
                  discussions, prompt informed action, and contribute to the
                  betterment of society.
                </li>
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
                  these issues but also to propose viable solutions that can
                  have a tangible impact on the ground.
                </li>
              </ol>
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
      </div>
    </>
  );
};

export default AboutJournal;
