import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import ProductsCataloguePage from "./pages/ProductsCatalogPage/ProductsCataloguePage";
import Authorization from "./pages/AuthorizationPage";
import Authors from "./pages/AuthorsPage/AuthorsPage";
import EditCatalogueCard from "./pages/EditCatalogueCardPage/EditCatalogueCardPage";
import EditProductCard from "./pages/EditProductCardPage/EditProductCardPage";
import PaymentDetails from "./pages/PaymentDetailsPage/PaymentDetailsPage";
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";
import QrCodeGeneration from "./pages/QrCodeGenerationPage/QrCodeGenerationPage";
import SelectCardPage from "./pages/SelectCardPage/SelectCardPage";
import NotFound from "./pages/NotFoundPage";
import Feedback from "./pages/FeedbackPage/FeedbackPage";
import PreorderCataloguePage from "./pages/PreorderCataloguePage/PreorderCataloguePage";
import CreateCardPage from "./pages/CreateCardPage/CreateCardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductsCataloguePage />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/preordercatalogue" element={<PreorderCataloguePage />} />
        <Route path="/selectcreatecard" element={<SelectCardPage />} />
        <Route path="/createcard" element={<CreateCardPage />} />
        <Route path="/editcatauloguecard/:id" element={<EditCatalogueCard />} />
        <Route path="/editproductcard/:id" element={<EditProductCard />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="/productcard/:id" element={<ProductCardPage />} />
        <Route path="/qrcodegeneration" element={<QrCodeGeneration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
