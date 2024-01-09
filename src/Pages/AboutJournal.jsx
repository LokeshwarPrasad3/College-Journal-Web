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
          <b>Plagiarism Checker:</b> Plagiarism X <br />
        </div>
        <br />
        <div className="about_points">
          <b> IJSRGI </b> , is a Multidisciplinary Journal focuses on critical
          and creative research. This journal seeks to promote original research
          and cultivate fruitful dialogues between previous and innovative
          thoughts.
          <br />
          <br />
          <b> Scope: </b> The journal promotes original academic research in
          Humanities, Culture, Comparative Education, Social Sciences, Rural
          Development, Engineering and Technology, Sciences, Art, Commerce and
          Management. Providing an insight, to transform lives is the motto. One
          can utilize the opportunities and face challenges of this changing
          world.
        </div>
        <br />
        <div className="about_objectives">
          <div className="general">
            <h3>General : </h3>
            <br />
            <p>
              The million-development goal laid its emphasis on a people-centred
              approach to recognize human and social capital for sustainable
              development. These include economic strategies and many other
              emerging trends.
            </p>
            <ol>
              <li>
                Goal is to create sustainable improvement in the quality of life
                among the common people.
              </li>
              <li>
                Stake holder-oriented programs, to facilitate increase in per
                capita income of individual facilities
              </li>
              <li>
                To empower people in the areas of health, economy, polity and
                education.
              </li>
            </ol>
          </div>
          <br />
          <div className="specific">
            <h3>Specific :</h3>
            <br />
            <ol>
              <li>
                To publish original empirical research and theoretical studies
                on adult education, lifelong learning, extension, and economic
                relations studies.
              </li>
              <li>
                To generate interest in civil society movements, studies on
                democracy, problems of marginalized sections, cross border
                terrorism, violation of human rights, ecology, environment and
                issues in governance at the regional and national level.
              </li>
            </ol>
            <br />
            <b>
              The object is simple and that is to provide a forum for scholarly
              dialogue on a broad range of topics significant to our times and
              cultures.
            </b>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutJournal;
