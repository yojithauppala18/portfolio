import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      period: "2024 — 2026",
      title: "MS in Business Analytics & Artificial Intelligence",
      institution: "The University of Texas at Dallas",
      details: "Focus: Machine Learning, Deep Learning, Statistical Modeling",
    },
    {
      period: "2022 — 2024",
      title: "Diploma in Data Science",
      institution: "Indian Institute of Technology, Madras",
      details: "Advanced coursework in ML, Statistics, and Programming",
    },
    {
      period: "2017 — 2021",
      title: "B.E. in Computer Science",
      institution: "National Institute of Technology, Agartala",
      details: "CGPA: 8.72 | Focus: Algorithms, Data Structures, Databases",
    },
  ];

  const certifications = [
    "Google Cloud Professional Data Engineer",
    "Salesforce Certified Associate",
    "HackerRank SQL (Advanced)",
    "HackerRank Python (Basic)",
  ];

  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
        Education
        <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
      </h2>

      <div className="space-y-10">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Academic Background</h3>
          </div>
          <div className="space-y-6 ml-5 border-l-2 border-border pl-6">
            {education.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-primary font-medium">{item.period}</span>
                <h4 className="text-foreground font-medium mt-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.institution}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary rounded-xl text-sm text-muted-foreground gold-border hover:text-foreground transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
