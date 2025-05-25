import { useNavigate } from "react-router-dom";

export function useSmartNavigate() {
  const navigate = useNavigate();

  return (to: string, from?: string) => {
    navigate(to, {
      state: from ? { from } : undefined
    });
  };
}
