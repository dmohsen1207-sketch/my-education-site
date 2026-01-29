import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ROUTE_PATHS } from "@/lib";

// Page Imports
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import Articles from "@/pages/Articles";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

/**
 * @description
 * المكون الرئيسي للتطبيق الذي يدير التوجيه (Routing) وتوفير السياق العام (Context Providers).
 * تم استخدام HashRouter لضمان التوافق مع بيئات الاستضافة المختلفة.
 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" expand={false} richColors />
        <HashRouter>
          <Layout>
            <Routes>
              {/* المسار الرئيسي */}
              <Route path={ROUTE_PATHS.HOME} element={<Home />} />

              {/* مسارات الدورات التعليمية */}
              <Route path={ROUTE_PATHS.COURSES} element={<Courses />} />
              <Route path={ROUTE_PATHS.COURSE_DETAIL} element={<CourseDetail />} />

              {/* مسار المقالات والنصائح */}
              <Route path={ROUTE_PATHS.ARTICLES} element={<Articles />} />

              {/* مسارات الصفحات التعريفية والتواصل */}
              <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
              <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />

              {/* لوحة تحكم المستخدم */}
              <Route path={ROUTE_PATHS.DASHBOARD} element={<Dashboard />} />

              {/* توجيه المسارات غير المعرفة إلى الصفحة الرئيسية أو صفحة 404 */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
