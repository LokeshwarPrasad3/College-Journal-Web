import { useEffect } from 'react';

const InstructionAuthor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <div className="max_width_content_page px-5 flex flex-col justify-start items-start gap-2 text-justify py-8 ">
        <h2 className="text-2xl mb-1 font-bold">Instructions to Author</h2>
        <div className="flex gap-2 justify-center flex-col w-full text-justify">
          <p>
            The journal operates on a biannual schedule, following the
            continuous publication model, and welcomes submissions from
            researchers worldwide in various multidisciplinary fields.
            Submissions undergo initial screening by the Editorial Board,
            followed by a blind peer-review conducted by experts in the relevant
            field. Authors are encouraged to familiarize themselves with our
            editorial policies to grasp the intricacies of our review process.
            Acceptance of papers is contingent upon editorial considerations.
          </p>
          <div className="sections w-full flex flex-col justify-start items-start gap-2 text-justify">
            <h3 className="text-xl mt-2 font-bold">Authorship</h3>
            <p>
              All person designated as authors should qualify for authorship.
              Authorship credit should be based only on significant
              contributions to
              <ol className="list-decimal flex flex-col justify-start items-start gap-0 ml-4">
                <li>
                  Conception and design, or analysis and interpretation of data.
                </li>
                <li>
                  Drafting the article or revising it critically for important
                  intellectual content.
                </li>
                <li>Final approval of the version to be published.</li>
              </ol>
            </p>
          </div>
          <div className="sections w-full flex flex-col justify-start items-start gap-2 text-justify">
            <h3 className="text-xl mt-2 font-bold">Submission of manuscript</h3>
            <p>
              All manuscripts are reviewed by an editor and members of the
              Editorial Board or Qualified outside reviewers. Decisions will be
              made as rapidly as possible.
            </p>
          </div>
          <p>
            <b>Preparation of the Manuscript:</b>
            <br />
            The manuscript should be composed in clear and concise English, with
            either British or American spelling accepted. Please submit the
            manuscript in Microsoft Word format (.doc or .docx). The general
            format for research papers should adhere to the provided template,
            which includes the following sections:
            <ol className="list-disc flex flex-col justify-start items-start gap-0 ml-6 my-3 w-full">
              <li>Title </li>
              <li>Abstract</li>
              <li>Keywords</li>
              <li>Introduction</li>
              <li>Research Materials and Methods</li>
              <li>Results including Tables and/or Figures</li>
              <li>Discussion</li>
              <li>Conclusion</li>
              <li>Acknowledgement (if any) </li>
              <li>References</li>
              <li>Appendixes (if necessary)</li>
              <li>Abbreviations used (if necessary)</li>
            </ol>
          </p>
          <div className="sections w-full flex flex-col justify-start items-start gap-2 text-justify">
            <b>Title Page</b>
            <p>
              The article title should be brief and informative. The list of
              authors, limited to six, must include Name of each author in full.
              Following the authors&apos; names, provide their affiliations,
              including department, institution, city, pin code, and country. In
              cases where multiple departments or institutions are involved,
              link authors&apos; names to the appropriate
              institutions/departments by inserting consecutive superscript
              numbers after the relevant names to attribute the work
              accordingly. Additionally, include the names and mailing addresses
              of the authors.
            </p>
          </div>
          <p>
            <b>Abstract:</b>
            <br />
            The abstract should adhere to a structured format and be confined to
            a maximum of 250 words. Provide a concise overview of the research,
            organizing the content into subheadings such as Introduction,
            Methods, Results, and Conclusions.
            <br />
            <br />
            <b>Keywords:</b>
            <br />
            Below the abstract, provide keywords (minimum three but not more
            than six) in alphabetical orders separated by a comma.
            <br />
            <br />
            <b> Introduction:</b> <br />
            This section should encompass an exploration of the research area,
            relevant background details, and the hypotheses examined in the
            study. It is essential for the introduction to furnish ample
            background information, allowing a scientifically literate reader to
            comprehend and value the forthcoming work. While an exhaustive
            literature review is unnecessary in this section, it is imperative
            to clearly articulate the project&apos;s specific objectives and
            provide a rationale for the conducted experiments and related work.
            The introduction must incorporate in-text citations, including
            pertinent references that contribute to the background and
            justification of the study.
            <br />
            <br />
            <b> Research Materials and Methods::</b> <br />
            This section outlines the materials and/or subjects employed in the
            study, along with the procedures undertaken to execute the work. The
            methods should be articulated in comprehensive detail to enable
            replication by a proficient researcher. The origins of all
            significant instruments and reagents utilized, including kits,
            drugs, etc., must be explicitly provided within parentheses. For
            intricate equipment or detailed procedures, the use of illustrations
            and/or tables is recommended. Additionally, the statistical tool
            employed for data analysis should be specified. Any procedures
            involving experimental animals or human subjects must be accompanied
            by a statement confirming ethical approval obtained from the
            relevant ethics committee.
            <br />
            <br />
            <b> Tables: </b> <br />
            Tables should be numbered with Roman numerals according to their
            sequence in the text, and have a short self-explanatory heading. Use
            SI units.
            <br />
            <br />
            <b> Table and Figure captions: </b> <br />
            Figure captions/legends should include a statement at the end of
            each caption/legend about reproduction size (e.g. at full page
            width, at column width). They should be single spaced and typed in
            the journal format. Explanations should be brief and authors should
            keep in mind that captions/legends will be placed below figures.
            <br />
            <br />
            <b>Discussion/Conclusion: </b> <br /> This section serves to connect
            the findings outlined in the results section with the current
            understanding of scientific issues within the field of
            investigation. It includes a description of pertinent references to
            other works in the same field. Moreover, the author has the
            opportunity to delve into the significance of the results, examining
            whether the data aligns with the initially proposed hypotheses. The
            conclusion of this section should encompass new answers or questions
            that arise as a consequence of the author&apos;s work.
            <br />
            <br />
            <b> Acknowledgements: </b> <br />
            Those who have helped the authors carry out the study and/or prepare
            the manuscript but have not made significant intellectual
            contribution to deserve authorship must be acknowledged. Mention all
            applicable grants and other funding that supported the work.
            <br />
            <br />
          </p>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <b>References should be in the following format</b>
            <div className="flex flex-col justify-start items-start gap-1">
              {/* <a
                className="text-link_text text-base underline"
                href="./Formats/IJSRGI-paper-Template-2025.docx"
              >
                Paper-Template
              </a> */}
              <a
                className="text-link_text text-base underline"
                href="./Formats/Copyright-form.docx"
              >
                Copyright-Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructionAuthor;
