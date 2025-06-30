import { useNavigate } from "react-router-dom";

export const useSukjoonNavigation = () => {
  const navigate = useNavigate();
  return {
    goToAboutMe: () => navigate("/me"),
    goToCareer: () => navigate(`/career`),
    goToExp: () => navigate(`/experience`),
    goBack: () => navigate(-1),
  };
};
