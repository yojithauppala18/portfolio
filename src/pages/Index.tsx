import { useState } from "react";
import ProfileSidebar from "@/components/portfolio/ProfileSidebar";
import Navigation from "@/components/portfolio/Navigation";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "skills":
        return <SkillsSection />;
      case "portfolio":
        return <PortfolioSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Profile Card */}
          <ProfileSidebar />

          {/* Right Content Area */}
          <main className="flex-1">
            <div className="bg-card rounded-3xl p-6 md:p-8 gold-border card-shadow">
              {/* Navigation Tabs */}
              <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

              {/* Content */}
              <div key={activeTab}>{renderContent()}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
