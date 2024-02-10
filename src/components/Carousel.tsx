import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ItemHeading from './ItemHeading';

const Wrapper = styled.div`
  --swiper-pagination-bullet-inactive-color: #d8d8d8;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-size: 10px;
  --swiper-pagination-color: #5c3caf;
  --swiper-pagination-bullet-horizontal-gap: 6px;
  --swiper-pagination-bottom: 25px;
  background-color: #f5f4f9;
`;

const SlideWrapper = styled.div`
  background-color: #f5f4f9;
  padding: 60px 20px 25px 20px;
  min-height: 258px;
`;

const Text = styled.p`
  font-size: 15px;
  line-height: 18px;
`;

type Props = {
  items: {
    number: string;
    heading: string;
    text: string;
  }[];
};

function Carousel(props: Props) {
  return (
    <Wrapper>
      <Swiper pagination={true} modules={[Pagination]}>
        {props.items.map((item) => (
          <SwiperSlide>
            <SlideWrapper key={item.number}>
              <ItemHeading number={item.number}>{item.heading}</ItemHeading>
              <Text>{item.text}</Text>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}

export default Carousel;
