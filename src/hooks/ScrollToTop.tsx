import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = ({ children }: { children?: ReactNode }) => {
  const location = useLocation();
  const { pathname, state } = location;

  const scrollRoutes = ["/projects/:slug", "/projects"];

  useEffect(() => {
    if (state?.scrollTo) {
      /* Scroll to a specific element by ID */
      setTimeout(() => {
        const el = document.getElementById(state.scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (typeof state?.scrollY === "number") {
      /* Restore exact scroll position */
      setTimeout(() => {
        window.scrollTo({ top: state.scrollY, behavior: "instant" });
      }, 0);
    } else if (scrollRoutes.some((r) => pathname === r || pathname.startsWith(r.replace(":slug", "")))) {
      /* Scroll to top for known detail/full-page routes */
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, state]);

  return <>{children}</>;
};
