import '../public/Vector.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="¿Qué quieres ver en tu ciudad?" />
      <div className="icon"></div>
    </div>
  );
};

export default SearchBar;
