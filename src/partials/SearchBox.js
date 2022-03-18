import { useCallback, useRef, useState } from 'react'

import Link from '../Link'
import styles from './search.module.css'

export default function Search() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])
  const controller = new AbortController()
  const searchEndpoint = (query) => (process.env.NEXT_PUBLIC_API_URL + `/api/articles/?q=${query}`)

  const onChange = useCallback((event) => {
    controller.abort()
    controller = new AbortController()
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      fetch(searchEndpoint(query), {signal: controller.signal})
        .then(res => res.json())
        .then(res => {
          setResults(res)
        }).catch((e)=>null)
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div
      className={styles.container}
      ref={searchRef}
    >
      <input
        className={styles.search}
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search articles'
        type='text'
        value={query}
      />
      { active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ id, title }) => (
            <li className={styles.result} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
}