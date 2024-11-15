import Header from "../Header/Header.tsx";
import styles from "./App.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import ScrollToAnchor from "../helpers/ScrollToAnchor/ScrollToAnchor.tsx";

const App = () => {
  return (
    <div className={styles.page}>
      {/* <ScrollToAnchor /> */}
      <Header />
      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
