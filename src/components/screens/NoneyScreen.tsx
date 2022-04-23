/* Images */
import noneyArtichokeCrane from '../..//assets/images/work/noney/noney-artichoke-crane.jpg';
import noneyCulturalTender from '../..//assets/images/work/noney/noney-cultural-tender.jpg';
import noneyFrontAnimation from '../..//assets/images/work/noney/noney-front-animation.gif';
import noneyNoteBack from '../..//assets/images/work/noney/noney-note-back.gif';
import noneyPeoplesCurrency from '../..//assets/images/work/noney/noney-peoples-currency.jpg';
import noneyUncutSheetBack from '../..//assets/images/work/noney/noney-uncut-sheet-back.gif';
import noneyUncutSheetFront from '../..//assets/images/work/noney/noney-uncut-sheet-front.gif';

function NoneyScreen() {
  return (
    <div className="row">
      <div className="col d-flex flex-column align-items-center">
        <img className="noney-front-animation" src={noneyFrontAnimation} alt="Scrolling sequence of Noney's ten note faces" />
        <img src={noneyCulturalTender} alt="Noney note's back detail: scroll with hand-drawn text" />
        <p>
          Noney entered circulation when artist Alec Thibodeau began distributing its supply of 10,000 notes through various release events. Noney notes have since made their way into dozens of countries and every state in the USA.
        </p>
        <p className="noney-rule"></p>
        <p>
          Over the course of human history, various materials have served as money, from stones and shells to grains and molasses. Precious metals &mdash; in the form of coins &mdash; were early trading instruments due to their consistent weight. Paper currency was another development. Originating as individual legal agreements, paper notes guaranteed specific amounts of precious metal in reserve, even though the notes themselves had no intrinsic value. They merely represented something else that did.
        </p>
        <p>
          The value of currency progressively became more abstract, as banks and governments began issuing more paper notes than their metal reserves could back. This practice established a situation with unfortunate consequences, like bank panics.
        </p>
        <p>
          Currency today is more abstract than ever. Guaranteed standards are gone, with all reserve currencies now functioning as fiat money. Money, whether in your pocket or bank account, only has value because you believe it does.
        </p>
        <p>
          Noney returns a standard to currency notes. Instead of metal, tobacco or rum, Noney's standard is the aesthetic value of the note itself. It's an economic system backed by art &mdash; art that also serves as the system's form.
        </p>
        <p>
          While Noney notes have the same basic dimension, look and feel of government-issued money, Noney has a unique design. Ten different faces show people with their favorite bird and favorite vegetable. These individuals represent a variety of lives and professions. Among them are a librarian, a photographer, a waiter and a trio of musicians.
        </p>
        <p>
          Through the process of screen printing, Noney notes are represented in violet and yellow ink on archival sheets of polyethylene fiber, a material that's lighter and tougher than paper. Each note is numbered by hand and signed with "Obadiah Eelcut". Noney's total print run is 10,000 notes (1,000 of each face).
        </p>
        <p>
          Each Noney note has the same denomination: zero. This doesn't mean each note has no value... just relative value. There's no fixed exchange rate or area of operation. Noney's worth as both art and currency is to be determined through personal contemplation and negotiated transactions &mdash; anywhere.
        </p>
        <p>
          In addition to the supply of cut Noney notes, there exists a limited edition of 200 uncut sheets, also on polyethylene fiber. These sheets feature Noney's standard ink colors on the front, but with red ink &mdash; not violet &mdash; on the back. Each sheet is numbered, signed and dated in pencil on the front.
        </p>
        <img src={noneyArtichokeCrane} alt="Noney note's front detail: artichoke and crane illustration" />
      </div>
      <div className="col d-flex flex-column align-items-center">
        <img src={noneyPeoplesCurrency} alt="Noney note's front detail: The People's Currency illustration" />
        <p>
          Noney is a limited edition currency, with each note being hand-drawn, hand-printed and hand-signed. Like other money, Noney is for people to circulate through trades. Unlike other money, Noney addresses the subjectivity of its own value. The result is a combination of printmaking, public art and performance. Click the animated image to see the shared back of Noney's ten front faces: Bexca, Stephen, Frances, Ryan, Ursula, Tha Streets, Cynthia, Tucci, Jennifer and William.
        </p>
        <img className="noney-sheet" src={noneyUncutSheetFront} alt="Noney uncut sheet front" />
        <img className="noney-sheet" src={noneyUncutSheetBack} alt="Noney uncut sheet back" />
      </div>
    </div>
  );
}

export default NoneyScreen;
