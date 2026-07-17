/* Constants */
import navigationLinks from '../../constants/navigation-links';

/* Images */
import { epochTravelersImages } from '../../helpers/images-general';

function EpochTravelersScreen(): JSX.Element {
  const { urlBaisleyPond, urlPercentForArt, urlPs360Q } = navigationLinks;
  function renderImage(path: string, index: number): JSX.Element {
    return (
      <img
        key={`epochTravelersDetail${index + 1}`}
        className="m-4 mw-100 epoch-travelers-image"
        src={path}
        alt={`Detail #${index + 1} from Alec Thibodeau's Epoch Travelers installation in marble`}
      />
    );
  }

  return (
    <div>
      <h1 className="row justify-content-center mb-4">Epoch Travelers</h1>
      <div className="mx-auto max-width-lg-breakpoint">
        <span className="fst-italic">Epoch Travelers</span> by artist Alec Thibodeau is a large-scale work in marble
        permanently installed at an interior site in New York City.
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {epochTravelersImages.map(renderImage)}
      </div>
      <div className="mx-auto max-width-lg-breakpoint">
        <p>Title: <span className="fst-italic">Epoch Travelers</span></p>
        <p>Artist: Alec Thibodeau</p>
        <p>Year: 2015</p>
        <p>Materials: Incised marble with enamel</p>
        <p>Dimensions: 20 feet x 10 feet</p>
        <p>
          Location:&nbsp;
          <a href={urlPs360Q} target="_blank" rel="noreferrer">
            P.S. 360Q, 112th Avenue Campus, St. Albans, Queens, New York City, New York
          </a>
        </p>
        <p>
          Commissioning Agencies: The NYC Department of Education and the NYC School Construction Authority Public Art for Public Schools Program,
          in collaboration with the <a href={urlPercentForArt} target="_blank" rel="noreferrer">NYC Department of Cultural Affairs Percent for Art Program</a>
        </p>
        <p>Fabricator: Exquisite Glass &#38; Stone</p>
        <p>
          The bones of an extinct mastodon surfaced during a 19th century dredging by New York City workers at <a href={urlBaisleyPond} target="_blank" rel="noreferrer">Baisley Pond</a> in the City's Queens borough.
          This mastodon had roamed the Pleistocene landscape, shaping its habitat while browsing for honey locust seed pods and socializing
          with other members of its group. <span className="fst-italic">Epoch Travelers</span> depicts an imagined version of this animal at life size and accompanied by honey locust branches.
          The artwork is permanently installed at a public school in the St. Albans neighborhood of Queens &mdash; just a few miles away from Baisley Pond &mdash; as a tribute to the area's former ecosystem.
        </p>
        <p>
          Photographs of <span className="fst-italic">Epoch Travelers</span> by Scott Lapham and Debora Dormody
        </p>
      </div>
    </div>
  );
}

export default EpochTravelersScreen;
