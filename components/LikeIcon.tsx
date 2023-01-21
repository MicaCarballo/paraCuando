interface props {
  classname?: string;
}

const LikeIcon = ({ classname }: props) => {
  return (
    <div className={`like-icon ${classname}`}>
      <button>
        <div className="icon"></div>
      </button>
    </div>
  );
};

export default LikeIcon;
