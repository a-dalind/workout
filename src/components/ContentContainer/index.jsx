import clsx from 'clsx'
import { useEffect, useState } from 'react'
import style from './ContentContainer.module.scss'

const ContentContainer = ({
  className,
  children,
}) => {

  // const goScrollTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   })
  // }
  //
  // const [scrollY, setScrollY] = useState(0)
  //
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {setScrollY(window.scrollY)});
  // }, [])
  return (
    <main
      className={clsx(style.container, className)}
    >
      {children}
      {/*{scrollY > 1000 && (*/}
      {/*  <div onClick={goScrollTop} className={style.goScrollTop}>*/}
      {/*    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0144 12L12.0433 4L4.01445 12L0 12L12.0433 2.33459e-06L24 12L20.0144 12Z" fill="#23292D"/>*/}
      {/*    </svg>*/}
      {/*  </div>*/}
      {/*)}*/}
    </main>
  )
}

export default ContentContainer
