import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top when the location changes (route change) or on component mount
    window.scrollTo(0, 0);

    // For additional support on mobile devices
    document.body.scrollTop = 0;
    navigate('#navbar');
  }, []);

  return (
    <>
      <div className="peer_review_policy_container page">
        <h1>Peer Review Policy</h1>
        <p>
          <br />
          <b className="sub-heading">Duties of Authors</b>
          <br />
          <br />
          <b> Reporting standards</b>
          <br />
          Authors of original research should present an accurate account of the
          work performed and the results, followed by an objective discussion of
          the significance of the work. The manuscript should contain sufficient
          detail and references to permit others to replicate the work. Review
          articles should be accurate, objective and comprehensive, while
          editorial opinion or perspective pieces should be clearly identified
          as such. Fraudulent or knowingly inaccurate statements constitute
          unethical behaviour and are unacceptable.
        </p>
        <p>
          <br />
          <b> Data access and retention </b>
          <br />
          Authors may be asked to provide the raw data of their study together
          with the manuscript for editorial review and should be prepared to
          make the data publicly available if practicable. In any event, authors
          should ensure accessibility of such data to other competent
          professionals for at least 10 years after publication (preferably via
          an institutional or subject-based data repository or other data
          centre), provided that the confidentiality of the participants can be
          protected and legal rights concerning proprietary data do not preclude
          their release.
        </p>
        <p>
          <br />
          <b> Originality and plagiarism </b>
          <br />
          Authors should ensure that they have written and submit only entirely
          original works, and if they have used the work and/or words of others,
          that this has been appropriately cited. Publications that have been
          influential in determining the nature of the work reported in the
          manuscript should also be cited. Plagiarism takes many forms, from
          passing off anothers paper as the authors own, to copying or
          paraphrasing substantial parts of anothers paper (without
          attribution), to claiming results from research conducted by others.
          Plagiarism in all its forms constitutes unethical publishing behaviour
          and is unacceptable.
        </p>
        <p>
          <br />
          <b>
            Multiple, duplicate, redundant or concurrent submission/publication
          </b>
          <br />
          Papers describing essentially the same research should not be
          published in more than one journal or primary publication. Hence,
          authors should not submit for consideration a manuscript that has
          already been published in another journal. Submission of a manuscript
          concurrently to more than one journal is unethical publishing
          behaviour and unacceptable. The publication of some kinds of articles
          (such as clinical guidelines, translations) in more than one journal
          is sometimes justifiable, provided that certain conditions are met.
          The authors and editors of the journals concerned must agree to the
          secondary publication, which must reflect the same data and
          interpretation of the primary document. The primary reference must be
          cited in the secondary publication.
        </p>
        <p>
          <br />
          <b>Authorship of the manuscript </b>
          <br />
          Only persons who meet these authorship criteria should be listed as
          authors in the manuscript as they must be able to take public
          responsibility for the content: (i) made significant contributions to
          the conception, design, execution, data acquisition, or
          analysis/interpretation of the study; and (ii) drafted the manuscript
          or revised it critically for important intellectual content; and (iii)
          have seen and approved the final version of the paper and agreed to
          its submission for publication. All persons who made substantial
          contributions to the work reported in the manuscript (such as
          technical help, writing and editing assistance, general support) but
          who do not meet the criteria for authorship must not be listed as an
          author, but should be acknowledged in the Acknowledgements section
          after their written permission to be named as been obtained. The
          corresponding author should ensure that all appropriate coauthors
          (according to the above definition) and no inappropriate coauthors are
          included in the author list and verify that all coauthors have seen
          and approved the final version of the manuscript and agreed to its
          submission for publication.
        </p>
        <p>
          <br />
          <b> Disclosure and conflicts of interest </b>
          <br />
          Authors shouldat the earliest stage possible (generally by submitting
          a disclosure form at the time of submission and including a statement
          in the manuscriptdisclose any conflicts of interest that might be
          construed to influence the results or their interpretation in the
          manuscript. Examples of potential conflicts of interest that should be
          disclosed include financial ones such as honoraria, educational grants
          or other funding, participation in speakers bureaus, membership,
          employment, consultancies, stock ownership, or other equity interest,
          and paid expert testimony or patent-licensing arrangements, as well as
          non-financial ones such as personal or professional relationships,
          affiliations, knowledge or beliefs in the subject matter or materials
          discussed in the manuscript. All sources of financial support for the
          work should be disclosed (including the grant number or other
          reference number if any).
        </p>
        <p>
          <br />
          <b> Acknowledgement of sources</b>
          <br />
          Authors should ensure that they have properly acknowledged the work of
          others, and should also cite publications that have been influential
          in determining the nature of the reported work. Information obtained
          privately (from conversation, correspondence or discussion with third
          parties) must not be used or reported without explicit, written
          permission from the source. Authors should not use information
          obtained in the course of providing confidential services, such as
          refereeing manuscripts or grant applications, unless they have
          obtained the explicit written permission of the author(s) of the work
          involved in these services.
        </p>
        <p>
          <br />
          <b> Hazards and human or animal subjects</b>
          <br />
          If the work involves chemicals, procedures or equipment that have any
          unusual hazards inherent in their use, the authors must clearly
          identify these in the manuscript. If the work involves the use of
          animals or human participants, the authors should ensure that all
          procedures were performed in compliance with relevant laws and
          institutional guidelines and that the appropriate institutional
          committee(s) has approved them; the manuscript should contain a
          statement to this effect. Authors should also include a statement in
          the manuscript that informed consent was obtained for experimentation
          with human participants. The privacy rights of human participants must
          always be observed.
        </p>
        <p>
          <br />
          <b> Peer review </b>
          <br />
          Authors are obliged to participate in the peer review process and
          cooperate fully by responding promptly to editors requests for raw
          data, clarifications, and proof of ethics approval, patient consents
          and copyright permissions. In the case of a first decision of
          revisions necessary, authors should respond to the reviewers comments
          systematically, point by point, and in a timely manner, revising and
          re-submitting their manuscript to the journal by the deadline given.
        </p>
        <p>
          <br />
          <b> Fundamental errors in published works </b>
          <br />
          When authors discover significant errors or inaccuracies in their own
          published work, it is their obligation to promptly notify the journal
          editors or publisher and cooperate with them to either correct the
          paper in the form of an erratum or to retract the paper. If the
          editors or publisher learns from a third party that a published work
          contains a significant error or inaccuracy, then it is the authors
          obligation to promptly correct or retract the paper or provide
          evidence to the journal editors of the correctness of the paper. For
          guidelines on retracting or correcting articles.
        </p>
        <p>
          <br />
          <b className="sub-heading">Duties of Reviewers</b>
          <br />
          <br />
          <b>Contribution to editorial decisions</b> Peer review assists editors
          in making editorial decisions and, through editorial communications
          with authors, may assist authors in improving their manuscripts. Peer
          review is an essential component of formal scholarly communication and
          lies at the heart of scientific endeavour. AP-SMART shares the view of
          many that all scholars who wish to contribute to the scientific
          process have an obligation to do a fair share of reviewing.
        </p>
        <p>
          <br />
          <b> Promptness</b>
          <br />
          Any invited referee who feels unqualified to review the research
          reported in a manuscript or knows that its prompt review will be
          impossible should immediately notify the editors and decline the
          invitation to review so that alternative reviewers can be contacted.
        </p>
        <p>
          <br />
          <b> Confidentiality</b>
          <br />
          Any manuscripts received for review are confidential documents and
          must be treated as such; they must not be shown to or discussed with
          others except if authorized by the Editor-in-Chief (who would only do
          so under exceptional and specific circumstances). This applies also to
          invited reviewers who decline the review invitation.
        </p>
        <p>
          <br />
          <b> Standards of objectivity </b>
          <br />
          Reviews should be conducted objectively and observations formulated
          clearly with supporting arguments so that authors can use them for
          improving the manuscript. Personal criticism of the authors is
          inappropriate.
        </p>
        <p>
          <br />
          <b> Acknowledgement of sources</b>
          <br />
          Reviewers should identify relevant published work that has not been
          cited by the authors. Any statement that is an observation, derivation
          or argument that has been reported in previous publications should be
          accompanied by the relevant citation. A reviewer should also notify
          the editors of any substantial similarity or overlap between the
          manuscript under consideration and any other manuscript (published or
          unpublished) of which they have personal knowledge.
        </p>
        <p>
          <br />
          <b> Disclosure and conflicts of interest</b>
          <br />
          Any invited referee who has conflicts of interest resulting from
          competitive, collaborative, or other relationships or connections with
          any of the authors, companies or institutions connected to the
          manuscript and the work described therein should immediately notify
          the editors to declare their conflicts of interest and decline the
          invitation to review so that alternative reviewers can be contacted.
          Unpublished material disclosed in a submitted manuscript must not be
          used in a reviewers own research without the express written consent
          of the authors. Privileged information or ideas obtained through peer
          review must be kept confidential and not used for the reviewers
          personal advantage. This applies also to invited reviewers who decline
          the review invitation.
        </p>

        <p>
          <br />
          <b className="sub-heading"> Duties of Editors </b>
          <br />
          <br />
          <b> Fair play and editorial independence </b>
          <br />
          Editors evaluate submitted manuscripts exclusively on the basis of
          their academic merit (importance, originality, clarity) and its
          relevance to the journals scope, without regard to the authorsrace,
          gender, sexual orientation, ethnic origin, citizenship, religious
          belief, political philosophy or institutional affiliation. Decisions
          to edit and publish are not determined by the policies of governments
          or any other agencies outside of the journal itself. The
          Editor-in-Chief has full authority over the entire editorial content
          of the journal and the timing of publication of that content.
        </p>
        <p>
          <br />
          <b> Confidentiality</b>
          <br />
          Editors and editorial staff will not disclose any information about a
          submitted manuscript to anyone other than the corresponding author,
          reviewers, potential reviewers, other editorial advisers, and the
          publisher, as appropriate.
        </p>
        <p>
          <br />
          <b>Disclosure and conflicts of interest</b>
          <br />
          Editors and editorial board members will not use unpublished
          information disclosed in a submitted manuscript for their own research
          purposes without the authorsâ€™ explicit written consent. Privileged
          information or ideas obtained by editors as a result of handling the
          manuscript will be kept confidential and not used for their personal
          advantage. Editors will recuse themselves from considering manuscripts
          in which they have conflicts of interest resulting from competitive,
          collaborative, or other relationships/connections with any of the
          authors, companies or institutions connected to the papers; instead,
          they will ask another member of the editorial board to handle the
          manuscript.
        </p>
        <p>
          <br />
          <b>Publication decisions </b>
          <br />
          The editors ensure that all submitted manuscripts being considered for
          publication undergo peer-review by at least two reviewers who are
          expert in the field. The Editor-in-Chief is responsible for deciding
          which of the manuscripts submitted to the journal will be published,
          based on the validation of the work in question, its importance to
          researchers and readers, the reviewers comments, and such legal
          requirements as are currently in force regarding libel, copyright
          infringement and plagiarism. The Editor-in-Chief may confer with other
          editors or reviewers in making this decision.
        </p>
        <p>
          <br />
          <b>Involvement and cooperation in investigations Editors </b>
          <br />
          (in conjunction with the publisher and/or society) will take
          responsive measures when ethical concerns are raised with regard to a
          submitted manuscript or published paper. Every reported act of
          unethical publishing behaviour will be looked into, even if it is
          discovered years after publication. AP-SMART editors follow the COPE
          Flowcharts when dealing with cases of suspected misconduct. If, on
          investigation, the ethical concern is well-founded, a correction,
          retraction, expression of concern or other note as may be relevant,
          will be published in the journal.
        </p>
        <p>
          <br />
          <b className="sub-heading"> Duties of the Publisher </b>
          <br />
          <br />
          <b> Handling of unethical publishing behaviour </b>
          <br />
          In cases of alleged or proven scientific misconduct, fraudulent
          publication or plagiarism, the publisher, in close collaboration with
          the editors, will take all appropriate measures to clarify the
          situation and to amend the article in question. This includes the
          prompt publication of an erratum, clarification or, in the most severe
          case, the retraction of the affected work. The publisher, together
          with the editors, shall take reasonable steps to identify and prevent
          the publication of papers where research misconduct has occurred, and
          under no circumstances encourage such misconduct or knowingly allow
          such misconduct to take place.
        </p>
        <p>
          <br />
          <b> conflict of interest </b>
          <br />A conflict of interest can occur when you (or your employer or
          sponsor) have a financial, commercial, legal, or professional
          relationship with other organizations, or with the people working with
          them, that could influence your research. Full disclosure is required
          when you submit your paper to a journal. The journal editor will
          firstly use this information to inform his or her editorial decisions.
          They may then publish such disclosures to assist readers in evaluating
          the article. Or, instead, the editor may decide not to publish your
          article on the basis of any declared conflict. You can declare the
          conflict of interest on your cover letter or on the manuscript
          submission form in the journals online peer-review system.
        </p>
        <p>
          <br />
          <b>Personal conflicts of interest</b>
          <br />
          Potential conflicts of interest in relation to your submitted
          manuscript could include:
          <br />
          <ol>
            <li>Consultancies</li>
            <li>Employment</li>
            <li>Advocacy groups</li>
            <li>Grants</li>
            <li>Fees and honoraria</li>
            <li>Patents</li>
            <li> Royalties</li>
            <li>Stock or share ownership</li>
          </ol>
        </p>
        <p>
          <br />
          <b>Disclosure statement </b>
          <br />
          You should also include a relevant disclosure statement with the text
          of your article. You can do this in conjunction with any
          acknowledgments and details of funders.
          <br />
          <br />
          <b>Plagiarism Policy</b>
          <br />
          Plagiarism occurs if someone intentionally or knowingly copies others
          work or someone copies content without providing the appropriate
          references.
        </p>
        <p>
          <br />
          <b>Plagiarism before Publishing</b>
          <br />
          International Journal of Multidisciplinary Research and Growth
          Evaluation (IJMRGE) will judge any case of plagiarism on its limits.
          If plagiarism is detected by the editorial board member, reviewer,
          editor etc., in any stage of article process- before or after
          acceptance, during editing or at a page proof stage. We will alert the
          same to the author(s) and will ask them to rewrite the content or to
          cite the references from where the content has been taken. If more
          than 25% of the paper is plagiarized- the article may be rejected and
          the same is notified to the author.
        </p>
        <p>
          <br />
          <b>When Plagiarism Check Done?</b>
          <br />
          All the submitted manuscripts for publication are checked for
          plagiarism after submission and before starting review.
        </p>
        <p>
          <br />
          <b> Handling Plagiarism?</b>
          <br />
          The manuscripts or papers in which the plagiarism is detected are
          handled based on the extent of the plagiarism.
          <br />
          <br />
        </p>
        <ol>
          <li>
            <b> &lt;20 % Plagiarism:</b> The manuscript will be given an ID and
            They will be advised to wait for the next process through the mail.
          </li>
          <li>
            <b>20 - 30% Plagiarism:</b> The manuscript will not be given an ID
            and the manuscript will be sent back to author for content revision.
          </li>
          <li>
            <b>&gt;30% Plagiarism:</b>The manuscript will be rejected without
            the review. The authors will be advised to revise the manuscript and
            resubmit the manuscript as a new submission.
          </li>
        </ol>
        <p>
          <br />
          <b>Why manuscripts with &gt;30% Plagiarism is rejected?</b>
          <br />
          If the plagiarism is detected more than 30%,authors are unlikely to
          revise and resubmit the manuscript. Nevertheless, authors are
          encouraged to undertake necessary revisions and submit the improved
          manuscript as a new submission.
        </p>
        <p>
          <br />
          <b> What if Plagiarism detected after Publication?</b>
          <br />
          If plagiarism is detected after publication, the Journals will conduct
          an investigation. If plagiarism is found, the journal editorial office
          will contact the authors institute and funding agencies. The paper
          containing the plagiarism will be marked on each page of the PDF.
          Depending on the extent of the plagiarism, the paper may also be
          formally retracted.
        </p>
        <p>
          <br />
          <b>Originality</b>
          <br />
          By submitting Author(s) manuscript to the journal it is understood
          that it is an original manuscript and is unpublished work and is not
          under consideration elsewhere. Plagiarism, including duplicate
          publication of the authors own work, in whole or in part without
          proper citation is not tolerated by the journal. Manuscripts submitted
          to the journal may be checked for originality using anti-plagiarism
          software. Plagiarism misrepresents ideas, words, and other creative
          expression as one’s own. Plagiarism represents the violation of
          copyright law. Plagiarism appears in various forms.
        </p>
        <br />
        <p>
          <ol>
            <li>
              Copying the same content from the other source. Purposely using
              portions of another author’s paper or content.
            </li>
            <li>
              Copying elements of another author’s paper, such as figures,
              tables, equations or illustrations that are not common knowledge,
              or copying or purposely using sentences without citing the source.
            </li>
            <li> Using exact text downloaded from the internet.</li>
            <li>
              {' '}
              Copying or downloading figures, photographs, pictures or diagrams
              without acknowledging your sources.
            </li>
          </ol>
        </p>
        <p>
          <br />
          <b>Acknowledging Author(s) Sources</b>
          <br />
          Self-plagiarism is a related issue. In this document we define
          self-plagiarism as the verbatim or near-verbatim reuse of significant
          portions of one’s own copyrighted work without citing the original
          source. Note that self-plagiarism does not apply to publications based
          on the author’s own previously copyrighted work (e.g., appearing in a
          conference proceedings) where an explicit reference is made to the
          prior publication. Such reuse does not require quotation marks to
          delineate the reused text but does require that the source be cited.
        </p>
        <p>
          <br />
          <b> Accidental or Unintentional</b>
          <br />
          One may not even know that they are plagiarizing. It is the author(s)
          whose responsibility is to make certain that they understand the
          difference between quoting and paraphrasing, as well as the proper way
          to cite material.
        </p>
      </div>
    </>
  );
};

export default ReviewPolicy;
