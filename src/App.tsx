import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const Heading = styled.h1<{ $side: 'left' | 'right' }>`
  color: #e7e7e7;
  font-size: 90px;
  font-weight: 400;
  line-height: 105.47px;
  ${(props) => props.$side === 'left' && 'padding-left: 16.77%;'}
  ${(props) => props.$side === 'right' && 'padding-left: 52.5%;'}
  padding-top: 100px;
`;

const Item = styled.li<{ $backgroundColor?: string; $side: 'left' | 'right' }>`
  background-color: ${(props) => props.$backgroundColor || '#ffffff'};
  padding: 60px 0;
  ${(props) => props.$side === 'left' && 'padding-left: 16.77%;'}
  ${(props) => props.$side === 'right' && 'padding-left: 52.5%;'}
`;

const ItemHeading = styled.h2`
  color: #c2c2c2;
  font-size: 36px;
  font-weight: 400;
  line-height: 42.19px;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
`;

const Text = styled.p<{ $color?: 'white'; $side: 'left' | 'right' }>`
  color: ${(props) => props.$color || 'black'};
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  max-width: 717px;
  margin-right: 48px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <section id="athletes">
        <div>
          <Heading $side="right">ATHLETS</Heading>
        </div>
        <ol>
          <Item $side="right">
            <ItemHeading>CONNECTION</ItemHeading>
            <Text $side="right">
              Connect with coaches directly, you can ping coaches to view
              profile.
            </Text>
          </Item>
          <Item $backgroundColor="#f5f4f9" $side="right">
            <ItemHeading>COLLABORATION</ItemHeading>
            <Text $side="right">
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </Text>
          </Item>
          <Item $backgroundColor="#5e3db3" $side="right">
            <ItemHeading>GROWTH</ItemHeading>
            <Text $color="white" $side="right">
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc
            </Text>
          </Item>
        </ol>
      </section>
      <section id="players">
        <div>
          <Heading $side="left">PLAYERS</Heading>
        </div>
        <ol>
          <Item $side="left">
            <ItemHeading>CONNECTION</ItemHeading>
            <Text $side="left">
              Connect with talented athlete directly, you can watch their skills
              through video showreels directly from Surface 1.
            </Text>
          </Item>
          <Item $backgroundColor="#f5f4f9" $side="left">
            <ItemHeading>COLLABORATION</ItemHeading>
            <Text $side="left">
              Work with recruiter to increase your chances of finding talented
              athlete.
            </Text>
          </Item>
          <Item $backgroundColor="#090c35" $side="left">
            <ItemHeading>GROWTH</ItemHeading>
            <Text $color="white" $side="left">
              Save your time, recruit proper athlets for your team.
            </Text>
          </Item>
        </ol>
      </section>
    </>
  );
}

export default App;
