import { useEffect } from "react"

/**
 * @returns {Function}
 * @param {RefObject<null>} ref 
 * @param {Function} callback 
 */
const useIntersectionObserver = (ref,callback) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            callback();
          }
        });
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => observer.disconnect();
      }, [ref,callback]);
}

export default useIntersectionObserver