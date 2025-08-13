import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WidgetCard from './WidgetCard';
import ChartSection from './ChartSection';

const Dashboard = () => {
  const navigate = useNavigate();
   const userRole = localStorage.getItem("role") || "user"; // ✅ get role

  useEffect(() => {
    // ✅ Auth check on mount
    const isAuthenticated = localStorage.getItem('authToken');
    if (!isAuthenticated) {
      navigate('/', { replace: true });
      return;
    }
    // ✅ Push a new history state so back button won't go to login page
    window.history.pushState(null, null, window.location.pathname);

    const handleBack = () => {
      // Logout and go to login
      localStorage.removeItem('authToken');
      navigate('/', { replace: true });
    };

    // ✅ Listen for back/forward navigation
    const popStateHandler = () => {
      handleBack();
    };
    window.addEventListener('popstate', popStateHandler);

    return () => {
      window.removeEventListener('popstate', popStateHandler);
    };
  }, [navigate]);

// ✅ Define widgets with roles
  const widgets = [
    { title: "Success Rate", value: "92%", change: "↑ 2%", colorFrom: "#fda085", colorTo: "#f6d365", roles: ["admin"] },
    { title: "Efficiency", value: "88%", change: "↑ 3%", colorFrom: "#42e695", colorTo: "#3bb2b8", roles: ["admin", "user"] },
    { title: "Accuracy", value: "75%", change: "↑ 5%", colorFrom: "#56ccf2", colorTo: "#2f80ed", roles: ["admin"] },
    { title: "Coverage", value: "67%", change: "↓ 2%", colorFrom: "#a18cd1", colorTo: "#fbc2eb", roles: ["admin","user"] }
  ];
  return (
    <>
      <div className="widget-grid">
        {widgets.filter(widget=>widget.roles.includes(userRole)).map((widget, index)=> (
         <WidgetCard
              key={index} title={widget.title} value={widget.value} change={widget.change} colorFrom={widget.colorFrom}
              colorTo={widget.colorTo} />
        ))}
        {/*<WidgetCard title="Success Rate" value="92%" change="↑ 2%" colorFrom="#fda085" colorTo="#f6d365" />
        <WidgetCard title="Efficiency" value="88%" change="↑ 3%" colorFrom="#42e695" colorTo="#3bb2b8" />
        <WidgetCard title="Accuracy" value="75%" change="↑ 5%" colorFrom="#56ccf2" colorTo="#2f80ed" />
        <WidgetCard title="Coverage" value="67%" change="↓ 2%" colorFrom="#a18cd1" colorTo="#fbc2eb" /> */}
      </div>
      <ChartSection />
    </>
  );
};

export default Dashboard;
