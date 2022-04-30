import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* Images */
import noneyArtichokeCrane from '../../assets/images/work/noney/noney-artichoke-crane.jpg';
import noneyCulturalTender from '../../assets/images/work/noney/noney-cultural-tender.jpg';
import noneyNoteFrontAnimation from '../../assets/images/work/noney/noney-front-animation.gif';
import noneyNoteBack from '../../assets/images/work/noney/noney-note-back.gif';
import noneyPeoplesCurrency from '../../assets/images/work/noney/noney-peoples-currency.jpg';
import noneyUncutSheetBack from '../../assets/images/work/noney/noney-uncut-sheet-back.gif';
import noneyUncutSheetFront from '../../assets/images/work/noney/noney-uncut-sheet-front.gif';

function NoneyScreen() {

  const [isFront, setNoneyNoteFaceIsFront] = useState(true);

  useEffect(() => {
    if (!isFront) {
      setTimeout(() => setNoneyNoteFaceIsFront(true), 10000);
    }
  });

  return (
    <div className="row justify-content-center max-width-xxl-breakpoint">
      <div className="col d-flex flex-column align-items-center">
        <img
          className="mb-3 noney-image noney-front-animation"
          src={isFront ? noneyNoteFrontAnimation : noneyNoteBack}
          alt={isFront ? "Noney note's ten front faces as an animated sequence" : "Noney note's back illustration"}
          onClick={() => setNoneyNoteFaceIsFront(!isFront)}
        />
        <img
          className="mt-2 mb-3 noney-image"
          src={noneyCulturalTender}
          alt="Noney note's back detail: scroll with hand-drawn text"
        />
        <p>
          Noney entered circulation when artist <Link to="/">Alec Thibodeau</Link> began distributing its supply of 10,000 notes through various release events. Noney notes have since made their way into dozens of countries and every state in the USA.
        </p>
        <p className="noney-rule"></p>
        <p>
          Over the course of human history, various materials have served as money, from stones and shells to grains and molasses. Precious metals &mdash; in the form of coins &mdash; were early trading instruments due to their consistent weight. Paper currency was another development. Originating as individual legal agreements, paper notes guaranteed specific amounts of precious metal in reserve, even though the notes themselves had no intrinsic value. They merely represented something else that did.
        </p>
        <p>
          The value of currency progressively became more abstract, as banks and governments began issuing more paper notes than their metal reserves could back. This practice of fractional-reserve banking established a situation with unfortunate consequences, like bank panics.
        </p>
        <p>
          Currency today is more abstract than ever. Guaranteed standards are gone, with all reserve currencies now functioning as fiat money. Money, whether in your pocket or bank account, only has value because you believe it does.
        </p>
        <p>
          Noney returns a standard to currency notes. Instead of metal, tobacco or rum, Noney's standard is the aesthetic value of the note itself. It's an economic system backed by art &mdash; art that also serves as the system's form.
        </p>
        <p>
          While Noney notes have the same basic dimensions, look and feel of government-issued money Noney has a unique design. Ten different faces show people of Rhode Island with their favorite bird and vegetable. These individuals represent a variety of lives and professions. Among them are a librarian, a photographer, a waiter and a trio of musicians.
        </p>
        <p>
          Through the process of screen printing, Noney notes are represented in violet and yellow ink on archival sheets of polyethylene fiber, a material that's lighter and tougher than paper. Each note is numbered by hand and signed with "Obadiah Eelcut" &mdash; an anagramatic pseudonym. Noney's total print run is 10,000 notes (1,000 of each face).
        </p>
        <p>
          Each Noney note has the same denomination: zero. This doesn't mean each note has no value&hellip; just relative value. There's no fixed exchange rate or area of operation. Noney's worth as both art and currency is to be determined through personal contemplation and negotiated transactions &mdash; anywhere.
        </p>
        <p>
          In addition to the supply of cut Noney notes, there exists a limited edition of 200 uncut sheets, also on polyethylene fiber. These sheets feature Noney's standard ink colors on the front, but with red ink (instead of violet) on the back. Each sheet is numbered, signed and dated in pencil on the front.
        </p>
        <img
          className="mb-3 noney-image"
          src={noneyArtichokeCrane}
          alt="Noney note's front detail: artichoke and crane illustration"
        />
      </div>
      <div className="col d-flex flex-column align-items-center">
        <img
          className="mb-3 noney-image"
          src={noneyPeoplesCurrency}
          alt="Noney note's front detail: The People's Currency illustration"
        />
        <p>
          Noney is a limited edition currency, with each note being hand-drawn, hand-printed and hand-signed. Like other money, Noney is for people to circulate through trades. Unlike other money, Noney addresses the subjectivity of its own value. The result is a combination of printmaking, public art and performance. Click the animated image to see the shared back of Noney's ten front faces: Bexca, Stephen, Frances, Ryan, Ursula, Tha Streets, Cynthia, Tucci, Jennifer and William.
        </p>
        <img
          className="my-3 noney-image noney-sheet"
          src={noneyUncutSheetFront}
          alt="Noney uncut sheet front"
        />
        <img
          className="my-3 noney-image noney-sheet"
          src={noneyUncutSheetBack}
          alt="Noney uncut sheet back"
        />
      </div>
    </div>
  );
}

export default NoneyScreen;
