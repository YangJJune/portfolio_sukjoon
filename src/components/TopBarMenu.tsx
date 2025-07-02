const TopBarMenu = ({
  isSelected,
  onClick,
  index,
  children,
}: {
  isSelected: boolean;
  onClick: (i: number) => void;
  index: number;
  children: React.ReactNode;
}) => {
  return (
    <div onClick={() => onClick(index)}>
      {isSelected ? (
        <div className="text-yellow font-scdream font-medium text-[24px] hover:bg-menuhover p-4 cursor-pointer">
          {children}
        </div>
      ) : (
        <div className="text-white font-scdream font-medium text-[24px] hover:bg-menuhover p-4 cursor-pointer">
          {children}
        </div>
      )}
    </div>
  );
};

export default TopBarMenu;
