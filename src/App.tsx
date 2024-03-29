import styled from 'styled-components';
import ItemHeading from './components/ItemHeading';
import athletesImageDesktop from './assets/athletes-desktop.png';
import playersImageDesktop from './assets/players-desktop.png';
import athletesImageTablet from './assets/athletes-tablet.png';
import playersImageTablet from './assets/players-tablet.png';
import athletesImageMobile from './assets/athletes-mobile.png';
import playersImageMobile from './assets/players-mobile.png';
import Carousel from './components/Carousel';
import { ATHLETES_ITEMS, PLAYERS_ITEMS, QUERIES } from './constant';

const Section = styled.section`
  position: relative;
  overflow-x: clip;
  min-width: 320px;
`;

const AthletesImage = styled.picture`
  position: absolute;
  top: 50px;
  left: 9.11%;
  width: 678px;
  & img {
    width: 100%;
  }

  @media (max-width: 1550px) {
    top: 70px;
    left: 7%;
    width: 45%;
  }

  @media (${QUERIES.tabletAndSmaller}) {
    width: 360px;
    top: 70px;
    left: 0;
  }

  @media (${QUERIES.mobileAndSmaller}) {
    z-index: 30;
    top: 94px;
    left: 50%;
    transform: translateX(-50%);
    width: 218px;
  }
`;

const PlayersImage = styled.picture`
  position: absolute;
  top: 10px;
  right: 6.51%;
  width: 991px;
  & img {
    width: 100%;
  }

  @media (max-width: 1700px) {
    right: auto;
    left: 50%;
  }

  @media (${QUERIES.tabletAndSmaller}) {
    top: 31px;
    left: auto;
    right: 0;
    width: 437px;
  }

  @media (${QUERIES.mobileAndSmaller}) {
    z-index: 30;
    top: 94px;
    left: 50%;
    transform: translateX(-50%);
    width: 302px;
  }
`;

const Heading = styled.h1<{ side: 'left' | 'right' }>`
  color: #e7e7e7;
  font-size: 90px;
  font-weight: 400;
  line-height: 105.47px;
  padding-top: 100px;
  padding-left: ${(props) => (props.side === 'left' ? '16.77%' : '52.5%')};
  margin-bottom: ${(props) => (props.side === 'left' ? '20px' : '10px')};

  @media (${QUERIES.tabletAndSmaller}) {
    padding-top: 50px;
    padding-left: ${(props) => (props.side === 'left' ? '30px' : '37.89%')};
    margin-bottom: 15px;
  }

  @media (${QUERIES.mobileAndSmaller}) {
    font-size: 50px;
    line-height: 59px;
    padding-top: 20px;
    padding-left: 20px;
    margin-bottom: 0;
  }
`;

const DesktopItems = styled.ol`
  @media (${QUERIES.mobileAndSmaller}) {
    display: none;
  }
`;

const Item = styled.li<{ backgroundColor?: string; side: 'left' | 'right' }>`
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
  padding: 60px 0;
  padding-left: ${(props) => (props.side === 'left' ? '16.77%' : '52.5%')};

  @media (${QUERIES.tabletAndSmaller}) {
    padding: 30px 0;
    padding-left: ${(props) => (props.side === 'left' ? '30px' : '37.89%')};
  }
`;

const Text = styled.p<{ color?: 'white'; side: 'left' | 'right' }>`
  color: ${(props) => props.color || 'black'};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  max-width: 717px;
  margin-right: 30px;

  @media (${QUERIES.tabletAndSmaller}) {
    font-size: 18px;
    letter-spacing: 0px;
    max-width: ${(props) => (props.side === 'left' ? '58.2%' : 'none')};
  }
`;

const MobileItems = styled.div`
  display: none;
  @media (${QUERIES.mobileAndSmaller}) {
    display: revert;
  }
`;

const MobileAthletesImagePlaceholder = styled.div`
  height: 251px;
`;

const MobilePlayersImagePlaceholder = styled.div`
  height: 220px;
`;

function App() {
  return (
    <>
      <Section>
        <Heading side="right">ATHLETES</Heading>
        <DesktopItems>
          <Item side="right">
            <ItemHeading number={ATHLETES_ITEMS[0].number}>
              {ATHLETES_ITEMS[0].heading}
            </ItemHeading>
            <Text side="right">{ATHLETES_ITEMS[0].text}</Text>
          </Item>
          <Item backgroundColor="#f5f4f9" side="right">
            <ItemHeading number={ATHLETES_ITEMS[1].number}>
              {ATHLETES_ITEMS[1].heading}
            </ItemHeading>
            <Text side="right">{ATHLETES_ITEMS[1].text}</Text>
          </Item>
          <Item backgroundColor="#5e3db3" side="right">
            <ItemHeading
              number={ATHLETES_ITEMS[2].number}
              numberUnderlineColor="white"
            >
              {ATHLETES_ITEMS[2].heading}
            </ItemHeading>
            <Text color="white" side="right">
              {ATHLETES_ITEMS[2].text}
            </Text>
          </Item>
        </DesktopItems>
        <MobileItems>
          <MobileAthletesImagePlaceholder />
          <Carousel items={ATHLETES_ITEMS} />
        </MobileItems>
        <AthletesImage>
          <source media={QUERIES.tabletOnly} srcSet={athletesImageTablet} />
          <source
            media={QUERIES.mobileAndSmaller}
            srcSet={athletesImageMobile}
          />
          <img src={athletesImageDesktop} />
        </AthletesImage>
      </Section>
      <Section>
        <Heading side="left">PLAYERS</Heading>
        <DesktopItems>
          <Item side="left">
            <ItemHeading number={PLAYERS_ITEMS[0].number}>
              {PLAYERS_ITEMS[0].heading}
            </ItemHeading>
            <Text side="left">{PLAYERS_ITEMS[0].text}</Text>
          </Item>
          <Item backgroundColor="#f5f4f9" side="left">
            <ItemHeading number={PLAYERS_ITEMS[1].number}>
              {PLAYERS_ITEMS[1].heading}
            </ItemHeading>
            <Text side="left">{PLAYERS_ITEMS[1].text}</Text>
          </Item>
          <Item backgroundColor="#090c35" side="left">
            <ItemHeading
              number={PLAYERS_ITEMS[2].number}
              numberColor="purple"
              numberUnderlineColor="white"
            >
              {PLAYERS_ITEMS[2].heading}
            </ItemHeading>
            <Text color="white" side="left">
              {PLAYERS_ITEMS[2].text}
            </Text>
          </Item>
        </DesktopItems>
        <MobileItems>
          <MobilePlayersImagePlaceholder />
          <Carousel items={PLAYERS_ITEMS} />
        </MobileItems>
        <PlayersImage>
          <source media={QUERIES.tabletOnly} srcSet={playersImageTablet} />
          <source
            media={QUERIES.mobileAndSmaller}
            srcSet={playersImageMobile}
          />
          <img src={playersImageDesktop} />
        </PlayersImage>
      </Section>
    </>
  );
}

export default App;
