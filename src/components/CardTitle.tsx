const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-grey100 font-scdream text-[20px] font-medium">
      {children}
    </p>
  );
};

export default CardTitle;
