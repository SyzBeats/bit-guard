import React from 'react';
import styled from 'styled-components';

import { LayoutMain } from '~/components/layout/landing/layoutMain';
import { BaseContainer } from '~/components/ui/containers/BaseContainer';
import { SectionBase } from '~/components/ui/styled/sections';

const Imprint = () => {
  return (
    <LayoutMain>
      <Content>
        <SectionBase>
          <BaseContainer>
            <p>
              <strong>
                <i>Kontakt-Adresse</i>
              </strong>
            </p>
            <p>
              Simeon Zimmermann SZ WEB DEVELOPMENT
              <br />
              Simeon Zimmermann
              <br />
              R&uuml;schlistrasse 2<br />
              2502 Biel
              <br />
              Schweiz
            </p>
            <p>
              E-Mail:
              <br />
              business@sz-development.com
            </p>
            <br />
            <br />
            <p>
              <strong>
                <i>Vertretungsberechtigte Person(en)</i>
              </strong>
            </p>
            Simeon Zimmermann, CEO
            <br />
            <br />
            <p>
              <strong>
                <i>Handelsregister-Eintrag</i>
              </strong>
            </p>
            Eingetragener Firmenname:
            <br />
            <strong>Simeon Zimmermann SZ WEB DEVELOPMENT</strong>
            <br />
            <br />
            Unternehmens-Nr (UID):
            <br />
            <strong>CHE-205.977.624</strong>
            <br />
            <br />
            <p>
              Mehrwertsteuer-Nummer
              <br />
              <strong>CHE-205.977.624 MWST</strong>
              <br />
              <br />
              <br />
              <p>
                <strong>
                  <i>Haftungsausschluss</i>
                </strong>
              </p>
              Der Autor &uuml;bernimmt keinerlei Gew&auml;hr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
              Aktualit&auml;t,
              Zuverl&auml;ssigkeit und Vollst&auml;ndigkeit der Informationen.
            </p>
            <p>
              Haftungsanspr&uuml;che gegen den Autor wegen Sch&auml;den materieller oder immaterieller Art, welche aus
              dem Zugriff oder der
              Nutzung bzw. Nichtnutzung der ver&ouml;ffentlichten Informationen, durch Missbrauch der Verbindung oder
              durch technische
              St&ouml;rungen entstanden sind, werden ausgeschlossen.
            </p>
            <p>
              Alle Angebote sind unverbindlich. Der Autor beh&auml;lt es sich ausdr&uuml;cklich vor, Teile der Seiten
              oder das gesamte
              Angebot ohne besondere Ank&uuml;ndigung zu ver&auml;ndern, zu erg&auml;nzen, zu l&ouml;schen oder die
              Ver&ouml;ffentlichung
              zeitweise oder endg&uuml;ltig einzustellen.
            </p>
            <br />
            <br />
            <p>
              <strong>
                <i>Haftungsausschluss f&uuml;r Links</i>
              </strong>
            </p>
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird
              jegliche Verantwortung
              f&uuml;r solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene
              Gefahr des jeweiligen
              Nutzers.
            </p>
            <br />
            <br />
            <p>
              <strong>
                <i>Urheberrechte</i>
              </strong>
            </p>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website,
              geh&ouml;ren
              ausschliesslich <strong>Simeon Zimmermann</strong> oder den speziell genannten Rechteinhabern. F&uuml;r
              die Reproduktion
              jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtstr&auml;gers im Voraus einzuholen.
            </p>
            <br />
            Quelle:{' '}
            <a href='https://www.swissanwalt.ch' target='_blank' rel='noopener noreferrer nofollow'>
              SwissAnwalt
            </a>
          </BaseContainer>
        </SectionBase>
      </Content>
    </LayoutMain>
  );
};

// --- Styled components ---
const Content = styled.main`
  background: #f9f9f9;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin: 2rem 0 1rem 0;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;

export { Imprint };
