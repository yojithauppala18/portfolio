import { Code } from "lucide-react";

const SkillsSection = () => {
  const skills = {
    "Languages": ["Python", "SQL", "R", "Java", "Scala"],
    "ML/AI": ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain", "OpenAI"],
    "Big Data": ["Apache Spark", "Hadoop", "Kafka", "Airflow", "Hive", "dbt"],
    "Cloud": ["GCP", "AWS", "Azure", "BigQuery", "Redshift", "Snowflake"],
    "Tools": ["Docker", "Git", "Tableau", "Power BI", "MLflow", "FastAPI"],
  };

  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
        Skills
        <span className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
      </h2>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Code className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Technical Expertise</h3>
      </div>

      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-sm font-medium text-foreground mb-3">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 rounded-xl text-sm text-primary font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
