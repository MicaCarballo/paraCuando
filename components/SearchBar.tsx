interface Props {
  className?: string;
}

const SearchBar = ({ className }: Props) => {
  return (
    <div className={`search-bar border top-2/3 ${className}`}>
      <input type="text" placeholder="¿Qué quieres ver en tu ciudad?" />
      <div className="icon"></div>
    </div>
  );
};

export default SearchBar;
