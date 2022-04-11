import thibodeauSquareDrawingAerodynamicsTribute from '../assets/images/squares/thibodeau-square-drawing-aerodynamics-tribute.jpg';
import thibodeauSquareDrawingAhem from '../assets/images/squares/thibodeau-square-drawing-ahem.jpg';
import thibodeauSquareDrawingBasil from '../assets/images/squares/thibodeau-square-drawing-basil.jpg';
import thibodeauSquareDrawingBaskingWithTheStars from '../assets/images/squares/thibodeau-square-drawing-basking-with-the-stars.jpg';
import thibodeauSquareDrawingClarice from '../assets/images/squares/thibodeau-square-drawing-clarice.jpg';
import thibodeauSquareDrawingConversion from '../assets/images/squares/thibodeau-square-drawing-conversion.jpg';
import thibodeauSquareDrawingDistraction from '../assets/images/squares/thibodeau-square-drawing-distraction.jpg';
import thibodeauSquareDrawingDoYouHaveAMoment from '../assets/images/squares/thibodeau-square-drawing-do-you-have-a-moment.jpg';
import thibodeauSquareDrawingFriendshipsPath from '../assets/images/squares/thibodeau-square-drawing-friendships-path.jpg';
import thibodeauSquareDrawingGrackle from '../assets/images/squares/thibodeau-square-drawing-grackle.jpg';
import thibodeauSquareDrawingInfinityWithYou from '../assets/images/squares/thibodeau-square-drawing-infinity-with-you.jpg';
import thibodeauSquareDrawingInvoluntaryInvestment from '../assets/images/squares/thibodeau-square-drawing-involuntary-investment.jpg';
import thibodeauSquareDrawingJubilance from '../assets/images/squares/thibodeau-square-drawing-jubilance.jpg';
import thibodeauSquareDrawingMirageBash from '../assets/images/squares/thibodeau-square-drawing-mirage-bash.jpg';
import thibodeauSquareDrawingMsSock from '../assets/images/squares/thibodeau-square-drawing-ms-sock.jpg';
import thibodeauSquareDrawingNemo from '../assets/images/squares/thibodeau-square-drawing-nemo.jpg';
import thibodeauSquareDrawingNoOneLikesATwit from '../assets/images/squares/thibodeau-square-drawing-no-one-likes-a-twit.jpg';
import thibodeauSquareDrawingPeregrineFalcon from '../assets/images/squares/thibodeau-square-drawing-peregrine-falcon.jpg';
import thibodeauSquareDrawingPostcardToWilliamSchaff from '../assets/images/squares/thibodeau-square-drawing-postcard-to-william-schaff.jpg';
import thibodeauSquareDrawingQuimby from '../assets/images/squares/thibodeau-square-drawing-quimby.jpg';
import thibodeauSquareDrawingSonsAndDaughters from '../assets/images/squares/thibodeau-square-drawing-sons-and-daughters.jpg';
import thibodeauSquareDrawingSwanAndAnchor from '../assets/images/squares/thibodeau-square-drawing-swan-and-anchor.jpg';
import thibodeauSquareDrawingTemporaryChemicalFactory from '../assets/images/squares/thibodeau-square-drawing-temporary-chemical-factory.jpg';
import thibodeauSquareDrawingTrust from '../assets/images/squares/thibodeau-square-drawing-trust.jpg';
import thibodeauSquareDrawingZeke from '../assets/images/squares/thibodeau-square-drawing-zeke.jpg';

export const drawingsSquaresImages = {
  thibodeauSquareDrawingAerodynamicsTribute,
  thibodeauSquareDrawingAhem,
  thibodeauSquareDrawingBasil,
  thibodeauSquareDrawingBaskingWithTheStars,
  thibodeauSquareDrawingClarice,
  thibodeauSquareDrawingConversion,
  thibodeauSquareDrawingDistraction,
  thibodeauSquareDrawingDoYouHaveAMoment,
  thibodeauSquareDrawingFriendshipsPath,
  thibodeauSquareDrawingGrackle,
  thibodeauSquareDrawingInfinityWithYou,
  thibodeauSquareDrawingInvoluntaryInvestment,
  thibodeauSquareDrawingJubilance,
  thibodeauSquareDrawingMirageBash,
  thibodeauSquareDrawingMsSock,
  thibodeauSquareDrawingNemo,
  thibodeauSquareDrawingNoOneLikesATwit,
  thibodeauSquareDrawingPeregrineFalcon,
  thibodeauSquareDrawingPostcardToWilliamSchaff,
  thibodeauSquareDrawingQuimby,
  thibodeauSquareDrawingSonsAndDaughters,
  thibodeauSquareDrawingSwanAndAnchor,
  thibodeauSquareDrawingTemporaryChemicalFactory,
  thibodeauSquareDrawingTrust,
  thibodeauSquareDrawingZeke
};

export function getDrawingsSquareByKey(key: string) {
  return drawingsSquaresImages[key as keyof typeof drawingsSquaresImages];
};
