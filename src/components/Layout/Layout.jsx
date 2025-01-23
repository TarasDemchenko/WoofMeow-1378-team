import css from "./Layout.module.css";
import Header from '../Header/Header';

import { Suspense } from "react";

export default function Layout ({ children }) {
  return (
      <div className={css.container}>
          <Header />
          <main>
            <Suspense fallback={<div></div>}>{children}</Suspense>
          </main>
          {/* <Footer /> */}
      </div>
  )
}