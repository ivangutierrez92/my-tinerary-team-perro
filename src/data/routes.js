export const routes = [
  { name: "Cities", link: "/cities" },
  { name: "Hotels", link: "/hotels" },
];
export const guestRoutes = [
  { name: "Sign in", link: "/signin" },
  { name: "Sign up", link: "/signup" },
];
export const userRoutes = [
  {
    name: "My Shows",
    link: "/myshows",
    className: "user-link border-bottom-white border-round-top",
  },
  {
    name: "My Tineraries",
    link: "/mytineraries",
    className: "user-link border-bottom-white border-round-bottom",
  },
];
export const adminRoutes = [
  {
    name: "New City",
    link: "/newcity",
    className: "user-link border-bottom-white border-round-top",
  },
  {
    name: "New Hotel",
    link: "/newhotel",
    className: "user-link border-bottom-white border-round-top",
  },
  {
    name: "My Cities",
    link: "/mycities",
    className: "user-link border-bottom-white border-round-top",
  },
  {
    name: "My Hotels",
    link: "/myhotels",
    className: "user-link border-bottom-white border-round-top",
  },
];
