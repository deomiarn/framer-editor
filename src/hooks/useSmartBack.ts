import { useLocation, useNavigate } from "react-router-dom";

export function useSmartBack() {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    const from = location.state?.from;
    if (from) {
      navigate(`${from}`);
    } else {
      navigate(-1); // fallback, normal back navigation
    }
  };
}
