interface Props {
  classname?: string;
}

const SearchBar = ({ classname }: Props) => {
  return (
    <div className={`search-bar border top-2/3 ${classname}`}>
      <input type="text" placeholder="¿Qué quieres ver en tu ciudad?" />
      <div className="icon"></div>
    </div>
  );
};

export default SearchBar;
