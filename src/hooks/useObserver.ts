import { useEffect, useRef } from "react";

export const useObserver = (ref: React.MutableRefObject<HTMLDivElement>, canLoad: boolean, isLoading: boolean, callback: Function) => {

  const observer = useRef<null | IntersectionObserver>(null);
  
  useEffect(() => {
    if(isLoading) return;
    if(observer.current) observer.current.disconnect()
    var cb = function(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
      if(entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current)
  }, [isLoading])
}