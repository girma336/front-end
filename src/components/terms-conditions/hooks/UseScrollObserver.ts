import { useRef, useEffect } from "react";

const useScrollObserver = () => {
  const observerRef = useRef<HTMLDivElement>(null);

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    const currentElement = observerRef.current;

    if (currentElement && entry.isIntersecting) {
      if (currentElement.dataset.itemId) {
        document
          .getElementById(currentElement.dataset.itemId)
          ?.classList.add("active-link");
      }
    }
  };

  useEffect(() => {
    const options = {
      root: document.getElementById("terms-conditions-wrapper"),
      rootMargin: "0px",
      threshold: 0.5,
    };

    const intersectionObserver = new IntersectionObserver(
      intersectionCallback,
      options
    );

    const currentElement = observerRef.current;

    if (currentElement) {
      intersectionObserver.observe(observerRef.current);
    }

    return () => {
      if (currentElement) {
        intersectionObserver.unobserve(currentElement);
      }
    };
  }, [observerRef]);

  return observerRef;
};

export default useScrollObserver;
