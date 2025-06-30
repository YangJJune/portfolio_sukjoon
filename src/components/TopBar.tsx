import { useEffect, useState } from "react";
import TopBarMenu from "./TopBarMenu";
import { TopMenuList } from "../constants";
import { useSukjoonNavigation } from "../hooks/useSukjoonNavigate";

const TopBar = () => {
  const [selected, setSelected] = useState<Number>(0);
  const { goToAboutMe, goToCareer, goToExp } = useSukjoonNavigation();

  useEffect(() => {
    switch (selected) {
      case 0:
        goToAboutMe();
        break;
      case 1:
        goToCareer();
        break;
      case 2:
        goToExp();
        break;
      case 3:
        window.location.href = "https://github.com/yangjjune";
        break;
    }
  }, [selected]);
  const onMenuClick = (i: number) => {
    setSelected(i);
  };
  return (
    <div className="bg-dark flex flex-row gap-[40px] pt-[26px] pl-[71px] pb-[13px] select-none">
      {TopMenuList.map((value, index) => (
        <TopBarMenu
          isSelected={selected === index}
          onClick={onMenuClick}
          key={index}
          index={index}
        >
          {value}
        </TopBarMenu>
      ))}
    </div>
  );
};

export default TopBar;
