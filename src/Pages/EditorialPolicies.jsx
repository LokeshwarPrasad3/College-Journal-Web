import { useEffect } from "react";

const EditorialPolicies = () => {
  
  useEffect(() => {
    // Scroll to the top when the location changes (route change) or on component mount
    window.scrollTo(0, 0);

    // For additional support on mobile devices
    document.body.scrollTop = 0;
  }, []);
  
  return (
    <>
      <div className="editorial_policies_container page">
        <h2>Editorial Policies</h2>
        <br />
        <p>
          <b>
            International Journal Of Scientific Research For Global Innovation
          </b>{" "}
          is an open access peer-reviewed journal which considers manuscripts
          which comply our instruction with authors. The manuscripts are
          initially screened by the editorial members for its scientific
          content, format and relevance of the topic to International Journal Of Scientific Research For Global Innovation . Once the
          manuscript is selected for peer review, the manuscript goes through a
          blind peer review by competent individuals in the concerned specialty.
          All communications will be through e-mail.
        </p>
        <br />
        <p>
          Strict confidentiality will be maintained by the editorial board
          during review process with regards to identity of the authors and
          reviewers. Authors are expected to mention about all conflicts of
          interest related to the manuscript during initial and final
          submission. Any act of the author which may bias the content of the
          manuscript in a direct or indirect way like receiving consultation
          fees from companies marketing a particular product mentioned in the
          manuscript, partnership in a company selling the product etc. needs
          detailed mention and the same will be published as part of the article
          in the journal. Details of approval by institutional review board have
          to be produced by the authors if requested by the editorial board.
        </p>
        <br />
        <p>
          Once accepted for publication the authors will have to sign the
          copyright agreement with the journal indicating authors willingness to
          give the first publication rights to International Journal Of Scientific Research For Global Innovation, and permit the journal to
          share the article with global database and libraries. The author
          retains the copyright of the material and will be acknowledged when
          utilized by the journal after the initial publication.
        </p>
        <br />
        <p>
          <b>
            International Journal Of Scientific Research For Global Innovation
          </b>{" "}
          follows a continuous publication model in which article will be
          published as and when they are accepted. Articles published in a
          calendar year will then be submitted for indexing purposes. All
          articles published in International Journal Of Scientific Research For Global Innovation can be utilized by the scientific
          community without any need for obtaining permission for off-prints
          from the journal.
        </p>
      </div>
    </>
  );
}

export default EditorialPolicies
