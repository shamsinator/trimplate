import { lazy } from "react";

const Home = lazy(() => import("@/components/pages/home"));
const BookOnline = lazy(() => import("@/components/book-online"));
const About = lazy(() => import("@/components/pages/about"));
const Contact = lazy(() => import("@/components/pages/contact"));
const Gallery = lazy(() => import("@/components/pages/gallery"));
const Shop = lazy(() => import("@/components/pages/shop"));
const Blog = lazy(() => import("@/components/pages/blog"));
const BlogDetail = lazy(() => import("@/components/pages/blog-detail"));
const Login = lazy(() => import("@/components/pages/login"));
const Register = lazy(() => import("@/components/pages/register"));
const History = lazy(() => import("@/components/pages/history"));
const Typography = lazy(() => import("@/components/pages/typography"));
const NotFound = lazy(() => import("@/components/pages/404"));

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/book-online", element: <BookOnline /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/shop", element: <Shop /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <BlogDetail /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/history", element: <History /> },
  { path: "/typography", element: <Typography /> },
  { path: "*", element: <NotFound /> },
];
