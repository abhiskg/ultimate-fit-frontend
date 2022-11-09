import { useEffect } from "react";

const useDocTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Service`;
  }, []);
};

export default useDocTitle;
