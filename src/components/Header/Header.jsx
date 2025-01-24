import css from "./Header.module.css";

import Navigation from "../Navigation/Navigation";

// import { useMedia } from "react-use";
// import { useState } from 'react';

export default function AppBar () {

  // const isTablet = useMedia("(max-width: 1279px)");
  // const isDesktop = useMedia("(min-width: 1280px)");
  
  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //     setIsOpen(true);
  // }

  // const closeModal = () => {
  //     setIsOpen(false)
  // }

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
      </div>
    </header>
  )
}