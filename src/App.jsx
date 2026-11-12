import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { locales, localizePath } from './locale';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SuccessPage from './pages/SuccessPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ResearchPage from './pages/ResearchPage';
import PaperPage from './pages/PaperPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        {locales.map((locale) => (
          <Route key={locale} path={localizePath(locale, '/')}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="success" element={<SuccessPage />} />
            <Route path="success/:id" element={<CaseStudyPage />} />
            <Route path="research" element={<ResearchPage />} />
            <Route path="research/:slug" element={<PaperPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        ))}
      </Routes>
    </Layout>
  );
}
