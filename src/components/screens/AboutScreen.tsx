import { useState } from 'react';
import { Link } from 'react-router-dom';

/* Components */
import ContactForm from '../ContactForm';

/* Config */
import config from '../../config.json';

/* Images */
import selfPortrait from '../../assets/images/main/alec-thibodeau-self-portrait.jpg';
import InfoModal from '../InfoModal';
import Loader from '../Loader';

function AboutScreen(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(false);

  function handleSuccessfulSubmission(): void {
    setIsLoading(false);
    setIsModalDisplayed(true);
  }

  return (
    <div className="max-width-lg-breakpoint">
      {isLoading ? <Loader /> : null }
      {
        isModalDisplayed ?
          <InfoModal
            isModalDisplayed={isModalDisplayed}
            onClickCloseButton={() => setIsModalDisplayed(false)}
          /> :
        null
      }
      <img className="self-portrait" src={selfPortrait} alt="Alec Thibodeau self portrait" />
      <div>
        <p>
          Alec Thibodeau is a visual artist. This website is a portfolio for his
          early explorations in drawing, printmaking and related work. Visit
          Alec's <a href="https://huetown.com"> Huetown</a> site to see recent projects.
        </p>
        <p>
          Alec's <Link to={`/${config.epochTravelersRoute}`}><span className="fst-italic">
          Epoch Travelers</span></Link> is a large-scale drawing incised into marble
          that's permanently installed at an interior site in New York City. This
          piece was commissioned by the NYC Department of Education and the NYC School
          Construction Authority Public Art for Public Schools Program in collaboration with
          the <a href="https://www1.nyc.gov/site/dclapercentforart/projects/projects-detail.page?recordID=241" target="_blank" rel="noreferrer">NYC
          Department of Cultural Affairs Percent for Art Program</a>.
          Alec is also the recipient of funding from the <a href="https://lef-foundation.org" target="_blank" rel="noreferrer">LEF
          Foundation</a>, which awarded him a project grant to print <Link to={`/${config.noneyRoute}`}>Noney
          </Link>, an experimental currency which has circulated internationally.
        </p>
        <p>
          Galleries that have shown Alec's work include Tomato House (New York City),
          Secret Project Robot (New York City), Spudnik Press Cooperative (Chicago),
          Cade Tompkins Projects (Providence), World's Fair Gallery (Providence), the University of Tennessee's Ewing Gallery (Knoxville),
          Boston Center for the Arts Mills Gallery and the University of Alabama at Birmingham's Visual Arts Gallery.
        </p>
      </div>
      <ContactForm
        onSubmitForm={() => setIsLoading(true)}
        onSuccessfulSubmission={handleSuccessfulSubmission}
      />
    </div>
  );
}

export default AboutScreen;
