import styled from 'styled-components';
import ItemHeading from './components/ItemHeading';
import athletesImageDesktop from './assets/athletes-desktop.png';
import playerImageDesktop from './assets/players-desktop.png';
// import athletesImageTablet from '/assets/athletes-tablet.png';
// import playerImageTablet from '/assets/players-tablet.png';

const QUERIES = {
  tabletAndSmaller: '(max-width: 1300px)',
  mobileAndSmaller: '(max-width: 768px)',
};

const Section = styled.section`
  position: relative;
`;

const AthletesImage = styled.img`
  position: absolute;
  top: 50px;
  left: 9.11%;
  max-width: 42%;
  max-height: calc(100% + 20px);

  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const PlayersImage = styled.img`
  position: absolute;
  top: 10px;
  right: 6.51%;
  max-width: 51.6%;
  max-height: 93.5%;

  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
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

function App() {
  return (
    <>
      <Section>
        <Heading side="right">ATHLETES</Heading>
        <ol>
          <Item side="right">
            <ItemHeading number="01">CONNECTION</ItemHeading>
            <Text side="right">
              Connect with coaches directly, you can ping coaches to view
              profile.
            </Text>
          </Item>
          <Item backgroundColor="#f5f4f9" side="right">
            <ItemHeading number="02">COLLABORATION</ItemHeading>
            <Text side="right">
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </Text>
          </Item>
          <Item backgroundColor="#5e3db3" side="right">
            <ItemHeading number="03" numberUnderlineColor="white">
              GROWTH
            </ItemHeading>
            <Text color="white" side="right">
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc
            </Text>
          </Item>
        </ol>
        <AthletesImage src={athletesImageDesktop} />
      </Section>
      <Section>
        <Heading side="left">PLAYERS</Heading>
        <ol>
          <Item side="left">
            <ItemHeading number="01">CONNECTION</ItemHeading>
            <Text side="left">
              Connect with talented athlete directly, you can watch their skills
              through video showreels directly from Surface 1.
            </Text>
          </Item>
          <Item backgroundColor="#f5f4f9" side="left">
            <ItemHeading number="02">COLLABORATION</ItemHeading>
            <Text side="left">
              Work with recruiter to increase your chances of finding talented
              athlete.
            </Text>
          </Item>
          <Item backgroundColor="#090c35" side="left">
            <ItemHeading
              number="03"
              numberColor="purple"
              numberUnderlineColor="white"
            >
              GROWTH
            </ItemHeading>
            <Text color="white" side="left">
              Save your time, recruit proper athlets for your team.
            </Text>
          </Item>
          <PlayersImage src={playerImageDesktop} />
        </ol>
      </Section>
    </>
  );
}

export default App;
