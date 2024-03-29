import styled from 'styled-components';
import { QUERIES } from '../constant';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media (${QUERIES.mobileAndSmaller}) {
    margin-bottom: 10px;
  }
`;

const HeadingNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const HeadingNumber = styled.h2<{ color?: 'purple' }>`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1.5px;
  margin-bottom: 4px;
  color: ${(props) => (props.color === 'purple' ? '#8f6be8' : '#000000')};

  @media (${QUERIES.mobileAndSmaller}) {
    font-size: 14px;
    line-height: 16px;
  }
`;

const Underline = styled.div<{ color?: 'white' }>`
  width: 22px;
  height: 5px;
  background-color: ${(props) => props.color || '#603ebe'};
  border-radius: 2.5px;

  @media (${QUERIES.mobileAndSmaller}) {
    width: 17.75px;
    height: 4px;
  }
`;

const HeadingText = styled.h2`
  color: #c2c2c2;
  font-size: 36px;
  font-weight: 400;
  line-height: 42.19px;
  letter-spacing: 1.5px;

  @media (${QUERIES.mobileAndSmaller}) {
    font-size: 28px;
    line-height: 33px;
  }
`;

type Props = {
  number: string;
  children: string;
  numberColor?: 'purple';
  numberUnderlineColor?: 'white';
};

function ItemHeading(props: Props) {
  return (
    <Wrapper>
      <HeadingNumberWrapper>
        <HeadingNumber color={props.numberColor}>{props.number}</HeadingNumber>
        <Underline color={props.numberUnderlineColor} />
      </HeadingNumberWrapper>
      <HeadingText>{props.children}</HeadingText>
    </Wrapper>
  );
}

export default ItemHeading;
