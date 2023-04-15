import { useEffect, useRef, useState } from 'react';

export const useVisibility = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [refIsVisible, setRefIsVisible] = useState<boolean>(false);

  useEffect(() => {
    ref.current?.focus();
    const aboutObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setRefIsVisible(entry.isIntersecting);
    });
    if (ref.current) aboutObserver.observe(ref.current);
  }, []);

  return {
    ref,
    refIsVisible,
  };
};
