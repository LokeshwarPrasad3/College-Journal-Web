import { useEffect } from "react";

const AboutJournal = () => {

 
  useEffect(() => {
    // Scroll to the top when the location changes (route change) or on component mount
    window.scrollTo(0, 0);

    // For additional support on mobile devices
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <div className="about_container page">
        <div className="heading">
          <h2>About the Journal</h2>
        </div>
        <br />
        <div className="about_para">
          <b>
            International Journal of Scientific research for global Innovation
          </b>{" "}
          is designed to publish research articles in Engineering & Technology,
          Mathematics, Management, Medical Sciences, Medicine, Social Science,
          Education, Agriculture, Geography, Advertising, Accounting & Finance,
          Botany, Business Research, Chemistry, Commerce, Computer Application,
          Consumer Behaviour & Relationship Management, Corporate Governance,
          Earth Sciences, Economics, E-commerce, Bioscience, Entrepreneurship,
          Fisheries, History, Human Resources Management, Information
          Technology, Library Science, International Business, Law /
          Criminology, Life Sciences, Logistics and Supply Chain Management,
          Performing Arts, Physics, Psychology, Health Care, Fine Art,
          Industrial Relations, Architecture, Marketing communication, Marketing
          Management, Microbiology, Nursing / Pharmacy, Nutraceuticals, Physical
          Education, Philosophy, Political Sciences, Psychology, Population
          Studies, Selling and Marketing techniques, Strategic Management, Total
          Quality Management Training and Development, Sociology, English,
          Veterinary Sciences, Apiology, Arachnology, Arthropodology, Cetology,
          Conchology, Mosquito Taxonomical Studies, Vector (Mosquito) Biology,
          Vector Ecology, Prevention and Control of Mosquito/Vector-Borne
          Diseases, Vector Competence of Vector-Borne Diseases, Renewable
          Energy, Biopesticides/Botanical Insecticides in Vector Control and
          Management, Biological Control of Vector Mosquitoes, Epidemiology,
          Parasitology, Surveillance and Control Technology of Vectors, Applied
          Fields of Mosquito Research, Entomology, Helminthology, Herpetology,
          Ichthyology, Malacology, Myrmecology, Nematology, Neuroethology,
          Ornithology, Paleozoology, Planetology, Primatology, Zooarchaeology,,
          Vector Molecular Biology, Molecular Endocrinology, Parasitology and
          Immunobiology, etc.
        </div>
        <br />
        <div className="some_info">
          <h3>Peer Review Process</h3>
          <b>Frequency of Publication:</b> Biannually [2 issues per year] <br />
          <b>Languages:</b> English <br />
          <h4> Refereed Journalbr </h4>
          <b>Accessibility:</b> Open Access <br />
        </div>
        <br />
          <br />
        <div className="about_points">
          <h2>Area Of Reasearch</h2>
          <br />
          <b> IJSRGI </b> , is a Multidisciplinary Journal focuses on critical
          and creative research. This journal aims to encourage unique research
          and foster meaningful conversations that bridge traditional and
          groundbreaking ideas.
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
            <p>The primary objective is to establish a platform for scholarly
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
 