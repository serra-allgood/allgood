import { useEffect, useRef, useState } from 'react'

const useIntersect = () => {
  const [entry, setEntry]: any[] = useState({})
  const [node, setNode] = useState(null)
  const observer = useRef(null)

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new window.IntersectionObserver(([entry]) => setEntry(entry))

    const { current: currentObserver } = observer

    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node])

  return [setNode, entry]
}

export default useIntersect
