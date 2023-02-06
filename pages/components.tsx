import React from 'react';
import ButtonNext from '../components/ButtonNext';
import ButtonTextNext from '../components/ButtonTextNext';
import Component1 from '../components/Component1';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LikedIcon from '../components/LikedIcon';

import SearchBar from '../components/SearchBar';

export default function Components() {
  const [isLogged, setIsLogged] = React.useState(true);
  return (
    <div>
      <h1 className="text-5xl">Components</h1>
      <h2>1. ButtonNext.tsx (Apparently doesnt work)</h2>
      <ButtonNext />
      <br />
      <br />
      <h2>2. ButtonTextNext.tsx</h2>
      <ButtonTextNext />
      <br />
      <br />
      <h3>3. Component1.tsx</h3>
      <Component1 text="texto modificable" /> <Component1 text="test123" />
      <Component1 text="Marcas cinematográficas" />
      <br />
      <br />
      <h3>4. Footer</h3>
      <Footer />
      <br />
      <br />
      <h3>5. Header</h3>
      <button
        className="border p-2 rounded-xl"
        onClick={() => setIsLogged(!isLogged)}
      >
        Press to change login status
      </button>
      <Header isLogged={isLogged} />
      <br />
      <br />
      <br />
      <br />
      <h3>7. LikedIcon.tsx</h3>
      <LikedIcon />
      <br />
      <br />
      <br />
      <h3>9. SearchBar.tsx</h3>
      <SearchBar />
      <br />
      <br />
      <br />
      <h3>10. Slider.tsx </h3>
      {/* <Slider /> */}
    </div>
  );
}
