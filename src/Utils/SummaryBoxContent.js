import aboutUsImage from '../assets/Images/summary-card/about-us.png';
import reviewImage from '../assets/Images/summary-card/review.png';
import authorImage from '../assets/Images/summary-card/author.png';
import reviewPolicyImage from '../assets/Images/summary-card/review-policy.png';

export const mainPageSummaryBoxData = [
  {
    heading: 'About the Journal',
    content: `International Journal Of Scientific Research For Global Innovation
              is a leading international journal for publication of new
              ideas.The primary goal of the editors is to maintain high quality
              of publications on theoretical`,
    bg: '#4f5581',
    path: '/about',
    imagePath: aboutUsImage,
  },
  {
    heading: 'Editorial Policies',
    content: `International Journal Of Scientific Research For Global Innovation
              is an open access peer-reviewed journal which considers
              manuscripts which comply our instruction with authors. The
              manuscripts are initially screened by the editorial members for
              its scientific content, format`,
    bg: '#2C7A7B',
    path: '/policies',
    imagePath: reviewImage,
  },
  {
    heading: 'Instructions to Author',
    content: `The journal operates on a biannual schedule, following the
              continuous publication model, and welcomes submissions from
              researchers worldwide in various multidisciplinary fields.
              Submissions undergo initial`,
    bg: '#17b1cf',
    path: '/instruction-author',
    imagePath: authorImage,
  },
  {
    heading: 'Peer Review Policy',
    content: `Authors of original research should present an accurate account of
              the work performed and the results, followed by an objective
              discussion of the significance of the work. The manuscript should
              contain sufficient detail`,
    bg: '#1271bb',
    path: '/review-policy',
    imagePath: reviewPolicyImage,
  },
];
