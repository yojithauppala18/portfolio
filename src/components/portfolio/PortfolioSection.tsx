import { Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Multilingual Language Translator",
      category: "Applied NLP • AWS",
      description:
        "Built a multilingual language translation system supporting Spanish, English, French, Chinese, and Russian. Designed and deployed the application using AWS infrastructure for scalable inference, enabling reliable real-time translation across multiple language pairs.",
      techStack: ["Python", "NLP", "AWS", "Machine Translation"],
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=600&q=80",
      github: "https://github.com/yojithauppala18/Language-translator",
    },
    {
      title: "Flight Fare Prediction System",
      category: "Applied Machine Learning • AWS",
      description:
        "Developed a flight fare prediction system using large-scale U.S. airline data (1993–2024). Trained and evaluated LightGBM and XGBoost models to predict ticket prices, deploying the pipeline on AWS for scalable data processing and experimentation.",
      techStack: ["Python", "LightGBM", "XGBoost", "AWS", "Pandas"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
      github: "https://github.com/yojithauppala18/flight-fare-prediction",
    },
    {
      title: "Customer Churn Prediction & Analysis",
      category: "Machine Learning",
      description:
        "Built an end-to-end machine learning pipeline to predict customer churn using XGBoost. Applied feature engineering and SMOTE to handle class imbalance, achieving an AUC-ROC of 88% and enabling data-driven retention insights.",
      techStack: ["Python", "XGBoost", "scikit-learn", "Pandas"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      github: "https://github.com/yojithauppala18/customer-churn-detection",
    },
    {
      title: "NYC Taxi ETL & Analytics Pipeline",
      category: "Data Engineering",
      description:
        "Designed and implemented a distributed ETL pipeline processing 6.4M+ NYC taxi trip records using the Hadoop ecosystem. Built analytical workflows to uncover trip patterns and fare trends through scalable data processing.",
      techStack: ["Hadoop", "Hive", "Spark", "Python", "SQL"],
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
      github: "https://github.com/yojithauppala18/NYC-taxi-dataset-analysis",
    },
  ];

  return (
    <section className="animate-fade-in">
      {/* Section Header */}
      <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
        Projects
        <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary/50 rounded-2xl overflow-hidden gold-border hover:bg-secondary/80 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row">
              {/* Project Image */}
              <div className="md:w-72 h-48 md:h-auto overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-primary/10 rounded-md text-xs text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all gold-border"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
