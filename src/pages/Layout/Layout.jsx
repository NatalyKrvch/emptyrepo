import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Main, Wrapper } from "./LayoutStyled";

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <Suspense>
            <Outlet />
          </Suspense>
        </Main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
