import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Heiko Meyer für Lüneburg",
  description: "Datenschutzerklärung der Wahlkampfwebsite von Heiko Meyer, parteiloser OB-Kandidat für Lüneburg, OB-Wahl 13. September 2026.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://meyer-lueneburg.de/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-20">
      <div className="border-l-4 border-[#1a3eaf] pl-4">
        <h1 className="text-3xl font-black uppercase text-[#1a3eaf] md:text-4xl">
          Datenschutz&shy;erkl&auml;rung
        </h1>
      </div>

      <div className="prose prose-gray mt-10 max-w-none [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#1a1a2e] [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-[#1a1a2e] [&_h4]:mt-4 [&_h4]:text-sm [&_h4]:font-bold [&_h4]:text-[#1a1a2e] [&_p]:text-[#6b6b7b] [&_p]:leading-relaxed [&_li]:text-[#6b6b7b] [&_a]:text-[#1a3eaf] [&_a]:no-underline hover:[&_a]:underline">

        {/* 1 */}
        <h2>1. Datenschutz auf einen Blick</h2>

        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick
          dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
          denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
          Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgef&uuml;hrten
          Datenschutzerkl&auml;rung.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>

        <h4>
          Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
          Website?
        </h4>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
          &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
          Datenschutzerkl&auml;rung entnehmen.
        </p>

        <h4>Wie erfassen wir Ihre Daten?</h4>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.&thinsp;B. um Daten handeln, die Sie
          in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.&thinsp;B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>

        <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
          Analyse Ihres Nutzerverhaltens verwendet werden. Sofern &uuml;ber die
          Website Vertr&auml;ge geschlossen oder angebahnt werden k&ouml;nnen,
          werden die &uuml;bermittelten Daten auch f&uuml;r
          Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen
          verarbeitet.
        </p>

        <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
          Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
          Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen.
          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft
          widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten
          Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie
          sich jederzeit an uns wenden.
        </p>

        {/* 2 */}
        <h2>2. Hosting</h2>

        <p>Wir hosten die Inhalte unserer Website bei folgenden Anbietern:</p>

        <h3>Vercel Inc.</h3>
        <p>
          Diese Website wird &uuml;ber die Plattform Vercel gehostet. Anbieter ist die
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
        </p>
        <p>
          Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten
          auf den Servern von Vercel verarbeitet. Hierbei k&ouml;nnen
          insbesondere IP-Adressen, Zugriffszeiten und weitere technische Daten
          erhoben werden. Vercel betreibt ein Content Delivery Network (CDN) mit
          globalen Edge-Standorten, sodass Daten auch au&szlig;erhalb der
          EU/des EWR verarbeitet werden k&ouml;nnen.
        </p>
        <p>
          Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO. Wir haben ein berechtigtes Interesse an einer zuverl&auml;ssigen,
          schnellen und sicheren Bereitstellung unserer Website.
        </p>
        <p>
          Weitere Informationen finden Sie in der Datenschutzerkl&auml;rung von
          Vercel:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://vercel.com/legal/privacy-policy
          </a>
        </p>

        <h3>Konzeption, Entwicklung &amp; Hosting</h3>
        <p>
          Konzeption, Entwicklung und Hosting dieser Website erfolgen durch:
        </p>
        <p>
          <strong>becoss GmbH</strong>
          <br />
          Gesch&auml;ftsf&uuml;hrer: Lars Bertram
          <br />
          H&auml;cklinger Weg 61
          <br />
          21335 L&uuml;neburg
          <br />
          <a href="https://www.becoss.de" target="_blank" rel="noopener noreferrer">
            www.becoss.de
          </a>
        </p>

        {/* 3 */}
        <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>

        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen
          Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
          vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende
          Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben
          und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu
          welchem Zweck das geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
          (z.&thinsp;B. bei der Kommunikation per E-Mail)
          Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
          der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>
          Heiko Meyer
          <br />
          Friedenstra&szlig;e 17
          <br />
          21335 L&uuml;neburg
        </p>
        <p>
          Telefon: +49 160 747 17 00
          <br />
          E-Mail: heiko@meyer-lueneburg.de
        </p>
        <p>
          Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
          Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und
          Mittel der Verarbeitung von personenbezogenen Daten (z.&thinsp;B.
          Namen, E-Mail-Adressen o.&thinsp;&Auml;.) entscheidet.
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
          Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine
          Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
          gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen
          Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten
          haben (z.&thinsp;B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
          L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
        </p>

        <h3>
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
        </h3>
        <p>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir
          Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a
          DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle
          einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung
          au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern
          Sie in die Speicherung von Cookies oder in den Zugriff auf
          Informationen in Ihr Endger&auml;t (z.&thinsp;B. via
          Device-Fingerprinting) eingewilligt haben, erfolgt die
          Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1
          TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher
          Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage
          des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre
          Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung
          erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
          Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
          Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
        </p>

        <h3>Empf&auml;nger von personenbezogenen Daten</h3>
        <p>
          Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit
          verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine
          &Uuml;bermittlung von personenbezogenen Daten an diese externen
          Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
          externe Stellen weiter, wenn dies im Rahmen einer
          Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu
          verpflichtet sind (z.&thinsp;B. Weitergabe von Daten an
          Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6
          Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige
          Rechtsgrundlage die Datenweitergabe erlaubt.
        </p>

        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
          ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die
          Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
        </p>

        <h3>
          Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
          sowie gegen Direktwerbung (Art. 21 DSGVO)
        </h3>
        <p className="!font-bold !uppercase !text-[#1a1a2e]">
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
          ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
          GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN
          DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN;
          DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES
          PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG
          BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE
          WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN
          DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
          SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN,
          DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE
          VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER
          VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21
          ABS. 1 DSGVO).
        </p>
        <p className="!font-bold !uppercase !text-[#1a1a2e]">
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
          BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
          DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING,
          SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
          WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
          ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
          (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
        </p>

        <h3>
          Beschwerde&shy;recht bei der zust&auml;ndigen
          Aufsichts&shy;beh&ouml;rde
        </h3>
        <p>
          Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
          Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
          insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts,
          ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen
          Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet
          anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </p>

        <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
          sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
          Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
          &Uuml;bertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </p>

        <h3>Auskunft, Berichtigung und L&ouml;schung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
        </p>

        <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
          jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
          Verarbeitung besteht in folgenden F&auml;llen:
        </p>
        <ul>
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel
            Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der
            Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten
            unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der
            L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
            verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie
            sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von
            Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der
            L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der
            Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>

        <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
          &Uuml;bertragung vertraulicher Inhalte eine SSL- bzw.
          TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung
          erkennen Sie daran, dass die Adresszeile des Browsers von
          &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>

        {/* 4 */}
        <h2>
          4. KI-Sprachassistent (ElevenLabs Conversational AI)
        </h2>

        <h3>Beschreibung und Umfang der Datenverarbeitung</h3>
        <p>
          Auf dieser Website setzen wir einen KI-basierten Sprachassistenten
          ein (&bdquo;Heiko Digital&ldquo;). Dieser Assistent erm&ouml;glicht es
          Ihnen, per Spracheingabe oder Texteingabe Fragen zum Wahlprogramm von
          Heiko Meyer zu stellen. Die Nutzung des Sprachassistenten ist
          freiwillig und erfordert Ihre ausdr&uuml;ckliche Einwilligung.
        </p>

        <h3>Anbieter</h3>
        <p>
          Der Sprachassistent wird betrieben mit der Technologie von:
          <br />
          <strong>ElevenLabs Inc.</strong>
          <br />
          1441 Broadway, 6th Floor, New York, NY 10018, USA
          <br />
          Datenschutzerkl&auml;rung:{" "}
          <a
            href="https://elevenlabs.io/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://elevenlabs.io/privacy
          </a>
        </p>

        <h3>Art der verarbeiteten Daten</h3>
        <p>Bei Nutzung des Sprachassistenten werden folgende Daten verarbeitet:</p>
        <ul>
          <li>
            <strong>Audiodaten / Sprachaufnahmen:</strong> Wenn Sie die
            Sprachfunktion nutzen, wird Ihre Spracheingabe &uuml;ber Ihr
            Mikrofon erfasst und in Echtzeit an die Server von ElevenLabs
            &uuml;bertragen, um eine KI-generierte Antwort zu erzeugen.
          </li>
          <li>
            <strong>Texteingaben:</strong> Wenn Sie die Textfunktion nutzen,
            werden Ihre Textnachrichten an die Server von ElevenLabs
            &uuml;bertragen.
          </li>
          <li>
            <strong>Transkripte:</strong> Ihre Spracheingaben werden von
            ElevenLabs in Text umgewandelt (Speech-to-Text), um die Anfrage
            verarbeiten zu k&ouml;nnen.
          </li>
          <li>
            <strong>Technische Daten:</strong> IP-Adresse, Browser-Typ,
            Ger&auml;teinformationen und Verbindungsdaten.
          </li>
          <li>
            <strong>Sitzungsdaten:</strong> Gespr&auml;chsverlauf innerhalb
            einer Sitzung zur Kontextverarbeitung.
          </li>
        </ul>

        <h3>Zweck der Datenverarbeitung</h3>
        <p>
          Die Verarbeitung erfolgt ausschlie&szlig;lich zum Zweck der
          Bereitstellung des KI-Sprachassistenten, d.&thinsp;h. zur
          Verarbeitung Ihrer Anfrage und Generierung einer passenden Antwort auf
          Basis des Wahlprogramms von Heiko Meyer.
        </p>

        <h3>Rechtsgrundlage</h3>
        <p>
          Die Verarbeitung erfolgt auf Grundlage Ihrer ausdr&uuml;cklichen
          Einwilligung gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO. Sie erteilen
          Ihre Einwilligung, indem Sie vor Nutzung des Sprachassistenten die
          Checkbox &bdquo;Ich akzeptiere die Datenschutzrichtlinie&ldquo;
          aktivieren und den Assistenten starten. Die Einwilligung umfasst
          ausdr&uuml;cklich auch die &Uuml;bermittlung der Daten an ElevenLabs
          Inc. in die USA (Art. 49 Abs. 1 lit. a DSGVO).
        </p>

        <h3>Daten&uuml;bermittlung in Drittl&auml;nder</h3>
        <p>
          ElevenLabs Inc. hat seinen Sitz in den USA. Bei Nutzung des
          Sprachassistenten werden Ihre Daten (insbesondere Audiodaten und
          Texteingaben) an Server in den USA &uuml;bertragen. Die USA gelten
          als Drittland ohne angemessenes Datenschutzniveau im Sinne der DSGVO.
          Die Daten&uuml;bermittlung erfolgt auf Grundlage Ihrer
          ausdr&uuml;cklichen Einwilligung gem. Art. 49 Abs. 1 lit. a DSGVO.
        </p>
        <p>
          <strong>Hinweis:</strong> Es besteht das Risiko, dass
          US-Beh&ouml;rden auf Grundlage US-amerikanischer Gesetze (z.&thinsp;B.
          FISA 702, Executive Order 12333) auf die &uuml;bermittelten Daten
          zugreifen k&ouml;nnen, ohne dass Ihnen gleichwertige Rechtsbehelfe wie
          in der EU zur Verf&uuml;gung stehen. Mit Ihrer Einwilligung
          akzeptieren Sie dieses Risiko ausdr&uuml;cklich.
        </p>

        <h3>Speicherdauer und L&ouml;schung</h3>
        <p>
          Audiodaten und Transkripte werden von ElevenLabs nur f&uuml;r die
          Dauer der jeweiligen Sitzung verarbeitet. Nach Beendigung des
          Gespr&auml;chs werden die Audiodaten nicht dauerhaft gespeichert.
          Details zur Speicherdauer entnehmen Sie bitte der
          Datenschutzerkl&auml;rung von ElevenLabs:{" "}
          <a
            href="https://elevenlabs.io/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://elevenlabs.io/privacy
          </a>
        </p>

        <h3>Widerruf der Einwilligung</h3>
        <p>
          Sie k&ouml;nnen Ihre Einwilligung jederzeit mit Wirkung f&uuml;r die
          Zukunft widerrufen, indem Sie die Nutzung des Sprachassistenten
          beenden und die Seite verlassen. Bereits &uuml;bermittelte Daten
          k&ouml;nnen nach Beendigung der Sitzung nicht mehr zur&uuml;ckgerufen
          werden. Die Rechtm&auml;&szlig;igkeit der aufgrund der Einwilligung
          bis zum Widerruf erfolgten Verarbeitung bleibt unber&uuml;hrt.
        </p>

        <h3>Mikrofon-Zugriff</h3>
        <p>
          F&uuml;r die Sprachfunktion wird Zugriff auf Ihr Mikrofon
          ben&ouml;tigt. Ihr Browser wird Sie vor dem ersten Zugriff um
          Erlaubnis bitten. Sie k&ouml;nnen die Mikrofon-Berechtigung jederzeit
          in den Browsereinstellungen widerrufen. Alternativ k&ouml;nnen Sie den
          Assistenten auch ausschlie&szlig;lich per Texteingabe nutzen.
        </p>

        <h3>Hinweis gem&auml;&szlig; EU AI Act</h3>
        <p>
          Der auf dieser Website eingesetzte Sprachassistent ist ein
          KI-System im Sinne der EU-Verordnung &uuml;ber K&uuml;nstliche
          Intelligenz (AI Act). Wir weisen Sie hiermit transparent darauf hin,
          dass Sie mit einem KI-System und nicht mit einer nat&uuml;rlichen
          Person kommunizieren. Die Antworten des Assistenten basieren auf dem
          ver&ouml;ffentlichten Wahlprogramm von Heiko Meyer und stellen
          KI-generierte Zusammenfassungen dar. Sie sind keine verbindlichen
          Zusagen oder rechtsverbindlichen Erkl&auml;rungen.
        </p>

        {/* 5 */}
        <h2>5. Newsletter und E-Mail-Benachrichtigungen</h2>

        <h3>Art der verarbeiteten Daten</h3>
        <p>
          Wenn Sie sich f&uuml;r unseren Newsletter anmelden, erheben wir
          folgende Daten:
        </p>
        <ul>
          <li>
            <strong>E-Mail-Adresse</strong> (Pflichtfeld)
          </li>
          <li>
            <strong>Name</strong> (freiwillig)
          </li>
          <li>
            <strong>Interessenschwerpunkte</strong> (freiwillig, z.&thinsp;B.
            Flyer verteilen, Infostand betreuen)
          </li>
          <li>
            <strong>Zeitpunkt der Anmeldung</strong>
          </li>
        </ul>

        <h3>Zweck der Datenverarbeitung</h3>
        <p>
          Die erhobenen Daten werden ausschlie&szlig;lich zur Zusendung von
          Wahlkampf-Updates, Veranstaltungshinweisen und Informationen zum
          Wahlprogramm von Heiko Meyer verwendet.
        </p>

        <h3>Rechtsgrundlage</h3>
        <p>
          Die Verarbeitung erfolgt auf Grundlage Ihrer ausdr&uuml;cklichen
          Einwilligung gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO. Die
          Einwilligung erteilen Sie durch die aktive Anmeldung &uuml;ber das
          Formular auf dieser Website.
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Ihre Daten werden gespeichert, bis Sie Ihre Einwilligung widerrufen
          oder der Wahlkampf von Heiko Meyer endet. Nach Ablauf der Kampagne
          werden alle gespeicherten E-Mail-Adressen und zugeh&ouml;rigen Daten
          gel&ouml;scht.
        </p>

        <h3>Abmelderecht</h3>
        <p>
          Sie k&ouml;nnen Ihre Einwilligung jederzeit widerrufen und sich vom
          Newsletter abmelden. Senden Sie hierf&uuml;r eine formlose E-Mail an{" "}
          <a href="mailto:heiko@meyer-lueneburg.de">
            heiko@meyer-lueneburg.de
          </a>
          . Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
          Verarbeitung bleibt unber&uuml;hrt.
        </p>

        {/* 6 */}
        <h2>6. Plugins und Tools</h2>

        <h3>YouTube mit erweitertem Datenschutz</h3>
        <p>
          Diese Website bindet Videos der Website YouTube ein. Betreiber der
          Website ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon
          House, Barrow Street, Dublin 4, Irland.
        </p>
        <p>
          Wenn Sie eine dieser Seiten besuchen, auf denen YouTube eingebunden
          ist, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei
          wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht
          haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind,
          erm&ouml;glichen Sie YouTube, Ihr Surfverhalten direkt Ihrem
          pers&ouml;nlichen Profil zuzuordnen. Dies k&ouml;nnen Sie verhindern,
          indem Sie sich aus Ihrem YouTube-Account ausloggen.
        </p>
        <p>
          Wir nutzen YouTube im erweiterten Datenschutzmodus. Die Nutzung von
          YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer
          Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von
          Art. 6 Abs. 1 lit. f DSGVO dar.
        </p>
        <p>
          Weitere Informationen &uuml;ber Datenschutz bei YouTube finden Sie in
          deren Datenschutzerkl&auml;rung unter:{" "}
          <a
            href="https://policies.google.com/privacy?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy?hl=de
          </a>
        </p>

        <p className="mt-10 text-xs !text-[#aaa]">
          Quelle (Basis):{" "}
          <a
            href="https://www.e-recht24.de"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-[#aaa]"
          >
            https://www.e-recht24.de
          </a>
          {" "}&ndash; erweitert um ElevenLabs und Vercel.
        </p>
      </div>
    </article>
  );
}
