// eslint-disable-next-line import/no-extraneous-dependencies
import { useSnapCarousel } from 'react-snap-carousel';

const CarouselProject = () => {
  const { scrollRef } = useSnapCarousel();
  return (
    <ul
      ref={scrollRef}
      style={{
        display: 'flex',
        overflow: 'auto',
        scrollSnapType: 'x mandatory'
      }}
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <li
          style={{
            backgroundColor: 'aqua',
            fontSize: '50px',
            width: '250px',
            height: '250px',
            flexShrink: 0,
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Item {i}
        </li>
      ))}
    </ul>
  );
};

export default CarouselProject;
