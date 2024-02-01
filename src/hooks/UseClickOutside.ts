import { RefObject, useEffect } from "react";

// accepts Ref object and callback funtion than will be executed when clicked outside the Ref element.

const useClickOutside = (
  containerRef: RefObject<HTMLDivElement>,
  outsideClickCallbackFn: any
) => {
  useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        outsideClickCallbackFn();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [containerRef, outsideClickCallbackFn]);
};

export default useClickOutside;
