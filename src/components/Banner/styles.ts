import styled from 'styled-components';

interface BannerProps {
  imgUrl: string;
}

export const Container = styled.div<BannerProps>`
  display: flex;
`;
