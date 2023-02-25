import styled from 'styled-components';

interface BannerProps {
  imgUrl: string;
}

export const Container = styled.div<BannerProps>`
  display: flex;
  width: 100%;
  height: 26rem;
  background: url(${props => props.imgUrl}) no-repeat bottom;
  background-size: cover;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
`;
