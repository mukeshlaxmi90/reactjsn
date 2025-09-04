import React, { useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SESSION_MS = 5 * 60 * 1000; // 5 minutes
const ACTIVITY_EVENTS = ["mousemove", "mousedown", "keydown", "touchstart", "click"];

const ProtectedRoute = ({ children, allowedRoles }) => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("authToken");
  const userRole = localStorage.getItem("role");
  const timerRef = useRef(null);

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    navigate("/", { replace: true });
  };
  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(logout, SESSION_MS);
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    resetTimer();
    ACTIVITY_EVENTS.forEach(event =>
      window.addEventListener(event, resetTimer)
    );
    window.history.pushState(null, null, window.location.pathname);
    const handleBackButton = () => {
      logout();
    };
    window.addEventListener("popstate", handleBackButton);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      ACTIVITY_EVENTS.forEach(event =>
        window.removeEventListener(event, resetTimer)
      );
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [isAuthenticated]);

  // ✅ अगर allowedRoles दिया है तो role match होना चाहिए
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
