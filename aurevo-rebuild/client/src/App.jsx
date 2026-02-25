import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ChallengeSection from './components/ChallengeSection/ChallengeSection';
import ReliefSection from './components/ReliefSection/ReliefSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import WhyUs from './components/WhyUs/WhyUs';
import Testimonials from './components/Testimonials/Testimonials';
import ProcessSection from './components/ProcessSection/ProcessSection';
import FAQ from './components/FAQ/FAQ';
import CTASection from './components/CTASection/CTASection';
import Footer from './components/Footer/Footer';

export default function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <ChallengeSection />
                <ReliefSection />
                <ServicesSection />
                <WhyUs />
                <Testimonials />
                <ProcessSection />
                <FAQ />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
