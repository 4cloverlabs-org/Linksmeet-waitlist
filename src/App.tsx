import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingLayout from './marketing/MarketingLayout';
import Landing from './pages/Landing';
import Blog from './marketing/Blog';
import BlogPost from './marketing/BlogPost';
import About from './marketing/About';
import Contact from './marketing/Contact';
import Careers from './marketing/Careers';
import Pricing from './marketing/Pricing';
import Privacy from './marketing/Privacy';
import Terms from './marketing/Terms';
import NotFound from './marketing/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ---- Landing is self-contained (own nav + footer) ---- */}
        <Route path="/" element={<Landing />} />

        {/* ---- Other marketing pages (shared nav + footer) ---- */}
        <Route element={<MarketingLayout />}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
