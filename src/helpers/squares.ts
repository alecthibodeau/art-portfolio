const filePath = '../assets/images/squares/';

const squaresImages = {
  thibodeauSquareDrawingAerodynamicsTribute: require(`${filePath}thibodeau-square-drawing-ahem.jpg`),
  thibodeauSquareDrawingAhem: require(`${filePath}thibodeau-square-drawing-ahem.jpg`),
  thibodeauSquareDrawingBasil: require(`${filePath}thibodeau-square-drawing-basil.jpg`),
  thibodeauSquareDrawingBaskingWithTheStars: require(`${filePath}thibodeau-square-drawing-basking-with-the-stars.jpg`),
  thibodeauSquareDrawingClarice: require(`${filePath}thibodeau-square-drawing-clarice.jpg`),
  thibodeauSquareDrawingConversion: require(`${filePath}thibodeau-square-drawing-conversion.jpg`),
  thibodeauSquareDrawingDistraction: require(`${filePath}thibodeau-square-drawing-distraction.jpg`),
  thibodeauSquareDrawingDoYouHaveAMoment: require(`${filePath}thibodeau-square-drawing-do-you-have-a-moment.jpg`),
  thibodeauSquareDrawingFriendshipsPath: require(`${filePath}thibodeau-square-drawing-friendships-path.jpg`),
  thibodeauSquareDrawingGrackle: require(`${filePath}thibodeau-square-drawing-grackle.jpg`),
  thibodeauSquareDrawingInfinityWithYou: require(`${filePath}thibodeau-square-drawing-infinity-with-you.jpg`),
  thibodeauSquareDrawingInvoluntaryInvestment: require(`${filePath}thibodeau-square-drawing-involuntary-investment.jpg`),
  thibodeauSquareDrawingJubilance: require(`${filePath}thibodeau-square-drawing-jubilance.jpg`),
  thibodeauSquareDrawingMirageBash: require(`${filePath}thibodeau-square-drawing-mirage-bash.jpg`),
  thibodeauSquareDrawingMsSock: require(`${filePath}thibodeau-square-drawing-ms-sock.jpg`),
  thibodeauSquareDrawingNemo: require(`${filePath}thibodeau-square-drawing-nemo.jpg`),
  thibodeauSquareDrawingNoOneLikesATwit: require(`${filePath}thibodeau-square-drawing-no-one-likes-a-twit.jpg`),
  thibodeauSquareDrawingPeregrineFalcon: require(`${filePath}thibodeau-square-drawing-peregrine-falcon.jpg`),
  thibodeauSquareDrawingPostcardToWilliamSchaff: require(`${filePath}thibodeau-square-drawing-postcard-to-william-schaff.jpg`),
  thibodeauSquareDrawingQuimby: require(`${filePath}thibodeau-square-drawing-quimby.jpg`),
  thibodeauSquareDrawingSonsAndDaughters: require(`${filePath}thibodeau-square-drawing-sons-and-daughters.jpg`),
  thibodeauSquareDrawingSwanAndAnchor: require(`${filePath}thibodeau-square-drawing-swan-and-anchor.jpg`),
  thibodeauSquareDrawingTemporaryChemicalFactory: require(`${filePath}thibodeau-square-drawing-temporary-chemical-factory.jpg`),
  thibodeauSquareDrawingTrust: require(`${filePath}thibodeau-square-drawing-trust.jpg`),
  thibodeauSquareDrawingZeke: require(`${filePath}thibodeau-square-drawing-zeke.jpg`)
};

export function getSquareByKey(key: string) {
  return squaresImages[key as keyof typeof squaresImages];
};
