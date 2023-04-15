import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export const useScrollableRef = (
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  index: number,
  setScrolledSections: Dispatch<SetStateAction<number>>,
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [refIsVisible, setRefIsVisible] = useState<boolean>(false);

  useEffect(() => {
    ref.current?.focus();
    const handleScroll = (e: Event) => {
      if (
        containerRef?.current &&
        containerRef.current?.scrollTop >= 0 &&
        containerRef.current?.scrollTop <=
          containerRef.current?.scrollHeight / 64
      ) {
        setRefIsVisible(false);
      } else if (
        containerRef?.current &&
        ref.current &&
        ref.current.offsetTop <
          containerRef.current?.scrollTop +
            containerRef?.current?.clientHeight / 2.5
      ) {
        setScrolledSections(index);
        setRefIsVisible(true);
      } else {
        setRefIsVisible(false);
      }
    };
    if (containerRef?.current)
      containerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      if (containerRef?.current)
        containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef]);

  return {
    ref,
    refIsVisible,
  };
};
