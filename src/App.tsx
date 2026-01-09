import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Journey from "./pages/Journey";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ThemeInitializer = () => {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const shouldUseDark = saved ? saved === "dark" : true;
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeInitializer />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
