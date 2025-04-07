import { Link } from 'react-router-dom';

/* Components */
import Contact from '../Contact';

/* Config */
import config from '../../config.json';

/* Images */
import selfPortrait from '../../assets/images/main/alec-thibodeau-self-portrait.jpg';

function AboutScreen(): JSX.Element {
  return (
    <div className="max-width-lg-breakpoint">
      <img className="self-portrait" src={selfPortrait} alt="Alec Thibodeau self portrait" />
      <div>
        <p>
          Alec Thibodeau is a visual artist. This website is a portfolio for his
          early explorations in drawing, printmaking and related work. Visit
          Alec's <a href="https://huetown.com"> Huetown</a> site to see more current projects.
        </p>
        <p>
          Alec's <Link to={`/${config.epochTravelersRoute}`}><span className="fst-italic">
          Epoch Travelers</span></Link> is a large-scale drawing incised into marble
          that's permanently installed at an interior site in New York City. This
          piece was commissioned by the NYC Department of Education and the NYC School
          Construction Authority Public Art for Public Schools Program in collaboration with
          the <a href="https://www1.nyc.gov/site/dclapercentforart/projects/projects-detail.page?recordID=241">NYC
          Department of Cultural Affairs Percent for Art Program</a>.
          Alec is also the recipient of a project grant from the LEF Foundation to
          print <Link to={`/${config.noneyRoute}`}><span className="fst-italic">Noney
          </span></Link>, an experimental currency which has circulated internationally.
        </p>
        <p>
          Galleries that have shown Alec's work include Tomato House (New York City),
          Secret Project Robot (New York City), Spudnik Press Cooperative (Chicago),
          Cade Tompkins Projects (Providence), the University of Tennessee's Ewing Gallery (Knoxville),
          Boston Center for the Arts Mills Gallery and the University of Alabama at Birmingham's Visual Arts Gallery.
        </p>
      </div>
      <Contact />
    </div>
  );
}

export default AboutScreen;
