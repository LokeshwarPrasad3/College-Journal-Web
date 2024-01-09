import { useEffect } from "react";

const InstructionAuthor = () => {


  useEffect(() => {
    // Scroll to the top when the location changes (route change) or on component mount
    window.scrollTo(0, 0);

    // For additional support on mobile devices
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <div className="author_container page">
        <h2>Instructions to Author</h2>
        <br />
        <p>
          The Journal is published monthly adopting the continuous publication
          model and submission is open to researchers in the field of
          medicalsubjects areas across the globe. All papers are subject to
          screening by the Editorial Board followed by a blinded peer-review by
          experts in the concerned field. Authors are advised to read our
          editorial policies to understand our review process. All papers are
          accepted subject to editorial change
        </p>
        <br />
        <h3>Authorship</h3>
        <p>
          All person designated as authors should qualify for authorship.
          Authorship credit should be based only on significant contributions to
        </p>
        <ol>
          <li>
            Conception and design, or analysis and interpretation of data.
          </li>
          <li>
            Drafting the article or revising it critically for important
            intellectual content.
          </li>
          <li>Final approval of the version to be published.</li>
        </ol>
        <br />
        <h3>Submission of manuscript</h3>
        <br />
        <p>
          All manuscripts are reviewed by an editor and members of the Editorial
          Board or Qualified outside reviewers. Decisions will be made as
          rapidly as possible.
        </p>
        <br />
        <p>
          Preparation of the Manuscript: Manuscript must be written in clear and
          concise English. Either British or American spelling is acceptable. It
          must be sent in Microsoft Word format (.doc or .docx). General format
          of the research papers should be as follows in given template:
        </p>
        <br />
        <ol>
          <li>Title page</li>
          <li>Abstractand keywords</li>
          <li>Introduction</li>
          <li>Materials and methods</li>
          <li>Results</li>
          <li>Discussion</li>
          <li>Conclusion</li>
          <li>Acknowledgement (if any) </li>
          <li>References</li>
        </ol>
        <br />
        <h3>Title Page</h3>
        <p>
          The title page should include: The title of the article, should be
          concise and informative. Name of all the authors limited to 6 authors
          (with one forename of each author in full) followed by their
          affiliations: department, institution, city, pin code and country. If
          more than one department or institution is involved, authors name
          should be linked to appropriate institutions/departments by inserting
          consecutive numbers in superscript after relevant names to which the
          work should be attributed. Name, mailing address, fax, phone number
          and e-mail ID of the corresponding author. Running title-containing
          not more than 50 characters.
        </p>
        <p>
          <br />
          <b>Abstract:</b>
          The second page should carry an abstract of not more than 250 words.
          For full research paper, the abstract should be structured into four
          components-
          <br />
          <br />
          <b> Keywords: </b>
          Below the abstract, provide keywords (minimum three but not more than
          six) in alphabetical orders separated by a comma.
          <br />
          <br />
          <b> Introduction:</b>
          Clearly state the purpose of the study. Briefly summarize the
          rationale of the study and clearly indicate the lacunae or
          deficiencies in previous studies for which present study has been
          taken up. Give only pertinent references. Do not review the subject
          extensively.
          <br />
          <br />
          <b>Research Methods or Methodology:</b>
          The paper must clearly define the research methods or methodologies
          used in it. (Mandatory for research articles)
          <br />
          <br />
          <b> Results:</b>
          Include number of observations and the statistical significance of the
          findings appropriately. Detailed statistical analyses, mathematical
          derivations, and the like may sometimes be suitably presented in the
          form of one or more appendices. Present your results in logical
          sequence in the text, tables and illustrations. Do not repeat in the
          text all the data already given in tables, illustrations or both.
          Emphasize and summarize only important observations. Each table should
          be typed continuously with the text. Legends for illustrations/figures
          should be typed continuously with the text (as shown in the template).
          <br />
          <br />
          <b>Discussion </b> Emphasize the new and important aspects of the
          study and conclusions derived from them. Do not repeat in details data
          given in the results section. Include in the discussion the
          implications of the findings and their limitations and relate the
          research topics. Link the conclusion with the goals of the study but
          avoid unqualified statements and conclusions not completely supported
          by your data. Discussion should be relevant and an unnecessary lengthy
          presentation should be avoided.
          <br />
          <br />
          <b>Conclusion: </b> A very brief summary note of the work with a
          concluding remark should be given. This should include the novelty and
          implication of the work and its contribution to the upliftment of the
          present scientific knowledge in general.
          <br />
          <br />
          <b> References should be in the following format</b>
        </p>
      </div>
    </>
  );
};

export default InstructionAuthor;
