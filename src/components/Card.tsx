const Card = ({ content, bgColor }: { content: string; bgColor: string }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`pl-2 pr-2 pt-1 pb-1 rounded text-white mr-1 w-fit`}
    >
      {content}
    </div>
  );
};

export default Card;
