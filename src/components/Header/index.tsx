import { useEffect, useState } from 'react';
import { NavLink } from './NavLink';
import { Container } from './styles';

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 1) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  return (
    <Container isActive={navbar}>
      <svg
        width="198"
        height="55"
        viewBox="0 0 198 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M92.0332 15.9941L88.5176 35.6816C88.4395 36.0723 88.2637 36.4092 87.9902 36.6924C87.7168 36.9756 87.3848 37.1562 86.9941 37.2344C86.5938 37.3027 86.2129 37.2588 85.8516 37.1025C85.5 36.9463 85.2217 36.7021 85.0166 36.3701L78.0439 24.915L71.0566 36.3701C70.8906 36.6533 70.6611 36.873 70.3682 37.0293C70.085 37.1855 69.7773 37.2637 69.4453 37.2637C68.9863 37.2637 68.5811 37.1172 68.2295 36.8242C67.8779 36.5312 67.6631 36.1504 67.585 35.6816L64.04 15.9941H67.9072L70.4268 29.8662L76.4326 20.2861C76.5986 20.0029 76.8232 19.7832 77.1064 19.627C77.3994 19.4707 77.7119 19.3926 78.0439 19.3926C78.376 19.3926 78.6836 19.4707 78.9668 19.627C79.25 19.7832 79.4844 20.0029 79.6699 20.2861L85.6465 29.8662L88.166 15.9941H92.0332ZM111.501 26.4092C111.501 26.9365 111.408 27.5078 111.223 28.123C111.037 28.7285 110.734 29.2949 110.314 29.8223C109.904 30.3398 109.362 30.7744 108.688 31.126C108.024 31.4775 107.214 31.6533 106.257 31.6533H99.3867V28.0352H106.257C106.774 28.0352 107.175 27.8789 107.458 27.5664C107.741 27.2441 107.883 26.8486 107.883 26.3799C107.883 25.8818 107.722 25.4912 107.399 25.208C107.087 24.9248 106.706 24.7832 106.257 24.7832H99.3867C98.8691 24.7832 98.4688 24.9443 98.1855 25.2666C97.9023 25.5791 97.7607 25.9697 97.7607 26.4385V31.7559C97.7607 32.2637 97.917 32.6592 98.2295 32.9424C98.5518 33.2256 98.9473 33.3672 99.416 33.3672H106.257V37H99.3867C98.8594 37 98.2881 36.9072 97.6729 36.7217C97.0674 36.5361 96.501 36.2383 95.9736 35.8281C95.4561 35.4082 95.0215 34.8662 94.6699 34.2021C94.3184 33.5283 94.1426 32.7129 94.1426 31.7559V26.4092C94.1426 25.8818 94.2354 25.3154 94.4209 24.71C94.6064 24.0947 94.9043 23.5283 95.3145 23.0107C95.7344 22.4834 96.2764 22.0439 96.9404 21.6924C97.6143 21.3408 98.4297 21.165 99.3867 21.165H106.257C106.784 21.165 107.351 21.2578 107.956 21.4434C108.571 21.6289 109.138 21.9316 109.655 22.3516C110.183 22.7617 110.622 23.3037 110.974 23.9775C111.325 24.6416 111.501 25.4521 111.501 26.4092ZM121.022 37H119.323C118.776 37 118.19 36.9072 117.565 36.7217C116.95 36.5361 116.374 36.2334 115.837 35.8135C115.3 35.3838 114.855 34.832 114.504 34.1582C114.152 33.4746 113.977 32.6396 113.977 31.6533V14.4707H117.785V31.6533C117.785 32.1221 117.932 32.498 118.225 32.7812C118.518 33.0547 118.884 33.1914 119.323 33.1914H121.022V37ZM130.427 37H128.728C128.181 37 127.595 36.9072 126.97 36.7217C126.354 36.5361 125.778 36.2334 125.241 35.8135C124.704 35.3838 124.26 34.832 123.908 34.1582C123.557 33.4746 123.381 32.6396 123.381 31.6533V14.4707H127.189V31.6533C127.189 32.1221 127.336 32.498 127.629 32.7812C127.922 33.0547 128.288 33.1914 128.728 33.1914H130.427V37ZM148.834 15.94C151.054 15.94 152.994 16.38 154.654 17.26C156.314 18.14 157.594 19.38 158.494 20.98C159.414 22.56 159.874 24.39 159.874 26.47C159.874 28.53 159.414 30.36 158.494 31.96C157.594 33.56 156.304 34.8 154.624 35.68C152.964 36.56 151.034 37 148.834 37H140.944V15.94H148.834ZM148.504 32.56C150.444 32.56 151.954 32.03 153.034 30.97C154.114 29.91 154.654 28.41 154.654 26.47C154.654 24.53 154.114 23.02 153.034 21.94C151.954 20.86 150.444 20.32 148.504 20.32H146.074V32.56H148.504ZM178.521 28.36C178.521 28.84 178.491 29.34 178.431 29.86H166.821C166.901 30.9 167.231 31.7 167.811 32.26C168.411 32.8 169.141 33.07 170.001 33.07C171.281 33.07 172.171 32.53 172.671 31.45H178.131C177.851 32.55 177.341 33.54 176.601 34.42C175.881 35.3 174.971 35.99 173.871 36.49C172.771 36.99 171.541 37.24 170.181 37.24C168.541 37.24 167.081 36.89 165.801 36.19C164.521 35.49 163.521 34.49 162.801 33.19C162.081 31.89 161.721 30.37 161.721 28.63C161.721 26.89 162.071 25.37 162.771 24.07C163.491 22.77 164.491 21.77 165.771 21.07C167.051 20.37 168.521 20.02 170.181 20.02C171.801 20.02 173.241 20.36 174.501 21.04C175.761 21.72 176.741 22.69 177.441 23.95C178.161 25.21 178.521 26.68 178.521 28.36ZM173.271 27.01C173.271 26.13 172.971 25.43 172.371 24.91C171.771 24.39 171.021 24.13 170.121 24.13C169.261 24.13 168.531 24.38 167.931 24.88C167.351 25.38 166.991 26.09 166.851 27.01H173.271ZM188.757 32.2L192.387 20.26H197.847L191.907 37H185.577L179.637 20.26H185.127L188.757 32.2Z"
          fill="white"
        />
        <circle cx="27.5" cy="27.5" r="27.5" fill="#007CED" />
        <path
          d="M25.5735 9.02058C21.2344 9.41505 17.3461 11.2264 14.2951 14.2774C11.0106 17.5619 9.19928 21.7078 9.01413 26.3608C8.82092 31.2232 10.6161 35.9326 13.9972 39.4505C16.8068 42.3728 20.365 44.2163 24.366 44.8442C25.7828 45.0696 28.4796 45.0455 29.9206 44.8039C34.4932 44.0311 38.5183 41.6161 41.3359 37.9693C45.9406 31.988 46.2787 23.5513 42.1731 17.264C39.3072 12.8686 34.8474 9.97051 29.7194 9.17354C28.9385 9.05278 26.298 8.95618 25.5735 9.02058ZM29.4779 11.7496C33.7284 12.4902 37.182 14.6638 39.6775 18.1576C40.3216 19.0512 41.3278 21.0316 41.6659 22.062C43.6624 28.1963 41.835 34.7331 36.9646 38.8226C32.3035 42.735 25.815 43.5642 20.365 40.9398C18.6905 40.1268 17.4105 39.2171 16.0661 37.8807C14.6413 36.4558 13.6028 34.9182 12.8219 33.0989C9.54544 25.435 12.9104 16.612 20.4616 13.0296C21.967 12.3212 23.4321 11.8945 25.171 11.6611C26.2256 11.5242 28.4716 11.5725 29.4779 11.7496Z"
          fill="#F5F5F5"
        />
        <path
          d="M19.4151 20.5968C18.8837 20.8303 18.5698 21.4502 18.6825 22.0378C18.7147 22.2149 19.3265 23.1005 20.4616 24.6139L22.1924 26.9243L20.4938 29.1865C19.56 30.4342 18.763 31.5532 18.7147 31.6901C18.5134 32.2617 18.8274 32.9459 19.407 33.2116C19.8256 33.3967 20.051 33.3967 20.4777 33.2035C20.7755 33.0747 21.0895 32.6883 22.9089 30.2571C25.1066 27.3268 25.1951 27.1819 25.0422 26.6023C24.9456 26.2723 20.9285 20.8786 20.6226 20.6773C20.3408 20.4922 19.721 20.4519 19.4151 20.5968Z"
          fill="#F5F5F5"
        />
        <path
          d="M24.5431 31.0863C24.3982 31.1588 24.1808 31.3439 24.0601 31.4969C23.883 31.7304 23.8427 31.8672 23.8427 32.2456C23.8427 32.7447 23.9796 33.0023 24.3982 33.3163C24.6155 33.4853 24.696 33.4853 29.5986 33.4853C34.5012 33.4853 34.5817 33.4853 34.7991 33.3163C35.5639 32.7527 35.588 31.7706 34.8474 31.2071L34.5656 30.9897L29.6872 30.9736C25.2837 30.9495 24.7846 30.9656 24.5431 31.0863Z"
          fill="#F5F5F5"
        />
      </svg>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Sobre mim" path="/about" />
        <NavLink title="Habilidades" path="/skills" />
        <NavLink title="Projetos" path="/projects" />
      </ul>
    </Container>
  );
}
