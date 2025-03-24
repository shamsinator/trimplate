import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation, useRoutes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { SkipLink } from "@/components/ui/skip-link";
import { Toaster } from "@/components/ui/toaster";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { routes } from "./routes";
import { RootLayout } from "./components/layout/RootLayout";
import tempoRoutes from "tempo-routes";

function App() {
  const location = useLocation();

  return (
    <>
      <SkipLink />
      <Helmet>
        <title>Trimplate - Premium Barbershop & Grooming Services</title>
        <meta
          name="description"
          content="Experience premium grooming services at BarberPress. Professional haircuts, beard trims, and styling by expert barbers."
        />
      </Helmet>
      <Suspense fallback={<p>Loading...</p>}>
        <AnimatePresence mode="wait">
          <RootLayout>
            <main id="main-content" tabIndex={-1}>
              <Routes location={location}>
                {routes.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
              </Routes>
              {import.meta.env.VITE_TEMPO === "true" && useRoutes(tempoRoutes)}
            </main>
          </RootLayout>
        </AnimatePresence>
        <Toaster />
      </Suspense>
      <CookieConsent />
    </>
  );
}

export default App;
