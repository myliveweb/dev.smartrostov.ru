import { useEffect, useRef } from "react";

export default function useScroll(parentRef, childRef, callback) {

  const observer = useRef()

  useEffect(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    }
    observer.current = new IntersectionObserver(([target]) => {
      if(target.isIntersecting) {
        console.log('Intersecting')
        //callback()
      }
    }, options)
    observer.current.observe(childRef.current)

    return function() {
      observer.current.unobserve(childRef.current)
    }
  }, [childRef])
}