import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './features/user/Home';
import PlanDetail from './features/user/PlanDetail';
import { AdminLayout } from './components/admin';
import {
  Dashboard,
  Visitors,
  Messages,
  Analytics,
  Settings,
  Login
} from './features/admin/pages';
import {
  SiteContent,
  AboutContent,
  ProjectsContent,
  SkillsContent,
  ExperienceContent
} from './features/admin/content';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/pricing/:planId" element={<PlanDetail />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Overview */}
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />

          {/* Content Management */}
          <Route path="content/site" element={<SiteContent />} />
          <Route path="content/about" element={<AboutContent />} />
          <Route path="content/projects" element={<ProjectsContent />} />
          <Route path="content/skills" element={<SkillsContent />} />
          <Route path="content/experience" element={<ExperienceContent />} />

          {/* Communication */}
          <Route path="messages" element={<Messages />} />
          <Route path="visitors" element={<Visitors />} />

          {/* System */}
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;