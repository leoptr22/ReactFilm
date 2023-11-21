import  { useState, useEffect } from 'react';

const Header = () => {
  const [bannerImage, setBannerImage] = useState('');
  const bannerImages = [
"https://i0.wp.com/brooo.tv/wp-content/uploads/2023/04/mario-BANNER-WP-FORMS.jpg?fit=960%2C540&ssl=1"  ,
"https://etb.com/play/Imagenes/principales/banner3.jpg",
"https://4.bp.blogspot.com/-2gm3id3z8bM/T9kIprtCMUI/AAAAAAAAAqc/TnjHIk53qGY/s1600/LosVengadoresposter.jpg"  
  ];

  useEffect(() => {
    const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];

    setBannerImage(randomImage);

    const intervalId = setInterval(() => {
      const newRandomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];
      setBannerImage(newRandomImage);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      <nav className="navbar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HsiKwWmxCuENy2KrJnTmZaWMZN9kkm-SC0oW7dc1Qtq30k3-zabZ54EI0_cRsDUNkwg&usqp=CAU"
          alt="Netflix Logo"
          className="logo"
        />
        <ul className="nav-links">
          <li>Inicio</li>
          <li>Series</li>
          <li>Películas</li>
          <li>Mi lista</li>
          <li>Populares mas vistas </li>
        </ul>
      </nav>
      <img src={bannerImage} alt="Banner Image" className="banner-image" />
    </div>
  );
};

export default Header;
