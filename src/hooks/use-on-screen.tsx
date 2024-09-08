import { RefObject, useEffect, useRef, useState } from "react";

export function useOnScreen<T extends Element>(
  intersectionObserverOptions: IntersectionObserverInit,
): [RefObject<T>, boolean] {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const refValue = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, intersectionObserverOptions);

    if (refValue) {
      observer.observe(refValue);
    }

    return () => {
      if (refValue) {
        observer.unobserve(refValue);
      }
    };
  }, [intersectionObserverOptions]);

  return [ref, isIntersecting];
}
