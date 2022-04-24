/* Images */
import epochTravelersImage01 from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-01.jpg';
import epochTravelersImage02 from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-02.jpg';
import epochTravelersImage03 from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-03.jpg';
import epochTravelersImage04 from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-04.jpg';
import epochTravelersImage05 from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-05.jpg';
import epochTravelersImage06 from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-06.jpg';
import epochTravelersImage07 from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-07.jpg';
import epochTravelersImage08 from '../../assets/images/work/site-specific/thibodeau-site-specific-epoch-travelers-08.jpg';

const images = [
  epochTravelersImage01,
  epochTravelersImage02,
  epochTravelersImage03,
  epochTravelersImage04,
  epochTravelersImage05,
  epochTravelersImage06,
  epochTravelersImage07,
  epochTravelersImage08
]

function renderImage(path: string, index: number) {
  return (
    <img
      key={`epochTravelersDetail${index + 1}`}
      className="m-4 mw-100"
      src={path}
      alt={`Detail #${index + 1} from Alec Thibodeau's Epoch Travelers installation in marble`}
    />
  )
}

function EpochTravelersScreen() {
  return (
    <div>
      <div className="mx-auto max-width-lg-breakpoint">
        <span className="fst-italic">Epoch Travelers</span> by artist Alec Thibodeau is a permanent installation in marble located at an interior site in New York City. It was commissioned by the NYC Department of Education and the NYC School Construction Authority Public Art for Public Schools Program in collaboration with the <a href="https://www1.nyc.gov/site/dclapercentforart/projects/projects-detail.page?recordID=241">NYC Department of Cultural Affairs Percent for Art Program</a>.
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {images.map(renderImage)}
      </div>
      <div className="mx-auto max-width-lg-breakpoint">
        <p>Title: <span className="fst-italic">Epoch Travelers</span></p>
        <p>Artist: Alec Thibodeau</p>
        <p>Year: 2015</p>
        <p>Materials: Incised marble with enamel</p>
        <p>Dimensions: 20 feet x 10 feet</p>
        <p>
          Location: <a href="https://www.google.com/maps/place/P.S.+360Q/@40.7019531,-73.7578773,18z/data=!4m13!1m7!3m6!1s0x89c26145f6828d65:0x16ff1276a0fbebb4!2sSt.+Albans,+Queens,+NY!3b1!8m2!3d40.6894086!4d-73.7654367!3m4!1s0x0:0xba787b86bdebd9f9!8m2!3d40.7023517!4d-73.7563833">P.S. 360Q, 112th Avenue Campus, St. Albans, Queens, New York City, New York</a>
        </p>
        <p>
          Commissioning Agencies: The NYC Department of Education and the NYC School Construction Authority Public Art for Public Schools Program, in collaboration with the <a href="https://www1.nyc.gov/site/dclapercentforart/projects/projects-detail.page?recordID=241">NYC Department of Cultural Affairs Percent for Art Program</a>
        </p>
        <p>Fabricator: Exquisite Glass &#38; Stone</p>
        <p>
          The bones of an extinct mastodon surfaced during a 19th century dredging by New York City workers of Baisley Pond in the City's Queens borough. This mastodon roamed the Pleistocene landscape, shaping its habitat while browsing for honey locust seed pods and socializing with other members of its group. <span className="fst-italic">Epoch Travelers</span>, permanently installed at a public school in the St. Albans neighborhood of Queens, depicts a life-size mastodon and accompanying honey locust branches as a tribute to the area's former ecosystem.
        </p>
        <p>
          Photographs of <span className="fst-italic">Epoch Travelers</span> by Scott Lapham and Debora Dormody
        </p>
      </div>
    </div>
  );
}

export default EpochTravelersScreen;
