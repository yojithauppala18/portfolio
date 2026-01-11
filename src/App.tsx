import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Yojitha</h1>
            <div className="space-x-6">
              <a href="#about" className="hover:text-blue-200">About</a>
              <a href="#experience" className="hover:text-blue-200">Experience</a>
              <a href="#education" className="hover:text-blue-200">Education</a>
              <a href="#skills" className="hover:text-blue-200">Skills</a>
              <a href="#projects" className="hover:text-blue-200">Projects</a>
              <a href="#contact" className="hover:text-blue-200">Contact</a>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col items-center">
            <img 
              src="https://jxrbynivyvvmcrveoqtr.supabase.co/storage/v1/object/public/profile-images//pic2.jpeg"
              alt="Yojitha Profile"
              className="w-48 h-48 rounded-full mb-6 border-4 border-white object-cover shadow-lg"
            />
            <h1 className="text-5xl font-bold mb-4">YOJITHA NAGA VAIBHAVI UPPALA</h1>
            <p className="text-xl mb-2">Data Engineer | Machine Learning Specialist | AI Engineer</p>
            <p className="text-lg mb-8">Dallas, TX | (469) 688-7337</p>
            <div className="flex space-x-4">
              <a href="https://github.com/yojithauppala18" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-200"><Github /></a>
              <a href="https://www.linkedin.com/in/yojithauppala" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-200"><Linkedin /></a>
              <a href="mailto:yojitha.188@gmail.com" className="p-2 hover:text-blue-200"><Mail /></a>
              <a 
                href="https://drive.google.com/file/d/1L0OkUWKU8v8oCPJI0Kc2HQ34K_7U54bB/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 hover:text-blue-200 flex items-center"
              >
                <Download className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Data Engineer and Machine Learning Specialist with a Business Analytics & AI degree from the University of Texas. Proven expertise in developing high-performance AI solutions, including a 92% accurate spam detection system and a published U-Net neural network for landslide detection. Proficient in TensorFlow, Keras, Salesforce, and Google Cloud, with certifications including Salesforce Administrator and Google Cloud Professional. 
              
              Passionate about leveraging AI to solve complex business challenges with measurable improvements in efficiency and accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Data Engineer | Machine Learning Specialist | TensorFlow & Keras Expert</h3>
                  <p className="text-gray-600">InnovatEV Global, Dallas, TX</p>
                </div>
                <p className="text-gray-600">01/25 – Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Developed an AI-driven image detection system achieving 98.5% accuracy, reducing manual inspections by 40%, and increasing throughput by 30%</li>
                <li>Develops and optimizes machine learning models for image recognition and circuit verification using TensorFlow, Keras, and OpenCV</li>
                <li>Received outstanding stakeholder feedback for innovation and usability of AI prototypes in automotive technology</li>
              </ul>
            </div>

            <div className="mb-12 bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Systems Engineer | MuleSoft Proficient</h3>
                  <p className="text-gray-600">Tata Consultancy Services, India</p>
                </div>
                <p className="text-gray-600">06/23 – 01/24</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Optimized data exchange and enhanced system interoperability by engineering and integrating MuleSoft API calls, reducing data transfer latency by 35% and improving platform connectivity across 5+ systems</li>
                <li>Resolved complex database queries using SSMS, improving data retrieval speed by 40% and optimizing database performance to support business operations efficiently</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Data Scientist</h3>
                  <p className="text-gray-600">Coincent, India (Remote)</p>
                </div>
                <p className="text-gray-600">02/22 – 08/22</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Refactored Python code in Jupyter Notebook, achieving a 20% reduction in data processing time, enhancing computational efficiency for analysis</li>
                <li>Worked alongside a senior analyst to refine technical reporting by 18%, architecting and deploying a chatbot utilizing NumPy, Pandas, and TensorFlow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Master's in Business Analytics & Artificial Intelligence</h3>
                  <p className="text-gray-600">University of Texas, Dallas, TX</p>
                </div>
                <p className="text-gray-600">2025</p>
              </div>
              <p className="text-gray-700 mb-2">Awarded Dean's Excellence New Student Cohort Scholarship</p>
              <p className="text-gray-700">
                <span className="font-semibold">Relevant coursework:</span> Applied Machine Learning, Applied Deep Learning, Natural Language Processing, Advanced Statistics for Data Science, Data Visualization, Big Data, Advanced Business Analytics with R
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Diploma in Programming & Data Science</h3>
                  <p className="text-gray-600">Indian Institute of Technology, Madras, India</p>
                </div>
                <p className="text-gray-600">2023</p>
              </div>
              <p className="text-gray-700">
                Specialized in Machine Learning Foundations, Business Data Management, and Statistical Analysis for Data Science
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Electronics and Instrumentation Engineering</h3>
                  <p className="text-gray-600">National Institute of Technology, Agartala, India</p>
                </div>
                <p className="text-gray-600">2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Data Engineering</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• ETL/ELT Pipelines</li>
                <li>• Data Modeling</li>
                <li>• Data Warehousing</li>
                <li>• Data Integration</li>
                <li>• CI/CD Pipelines</li>
                <li>• Data Quality</li>
                <li>• Data Governance</li>
                <li>• Git</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Data Science & ML</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Machine Learning</li>
                <li>• Deep Learning</li>
                <li>• Neural Networks</li>
                <li>• NLP</li>
                <li>• TensorFlow & Keras</li>
                <li>• Statistics</li>
                <li>• Predictive Analytics</li>
                <li>• OpenAI & LLMs</li>
                <li>• Generative AI</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Cloud Infrastructure</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AWS Services</li>
                <li>• Google Cloud</li>
                <li>• Cloud Security</li>
                <li>• API Integration</li>
                <li>• Cloud Storage</li>
                <li>• MuleSoft</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Databases & Storage</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• SQL & SSMS</li>
                <li>• NoSQL</li>
                <li>• Data Lakes</li>
                <li>• MongoDB</li>
                <li>• PostgreSQL</li>
                <li>• Data Migration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Visualization & BI</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tableau</li>
                <li>• Power BI</li>
                <li>• Data Storytelling</li>
                <li>• Dashboard Design</li>
                <li>• MS Excel</li>
                <li>• Data Reporting</li>
                <li>• Business Analytics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Programming & Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Python</li>
                <li>• Java</li>
                <li>• R Programming</li>
                <li>• SQL</li>
                <li>• HTML/CSS</li>
                <li>• JavaScript</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Big Data & Analytics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hadoop</li>
                <li>• Apache Spark</li>
                <li>• Big Data Analytics</li>
                <li>• HDFS</li>
                <li>• Flume</li>
                <li>• Sqoop</li>
                <li>• Data Cleaning</li>
                <li>• Data Warehousing</li>
                <li>• ETL Processes</li>
                <li>• Hive</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Project Management</li>
                <li>• Team Leadership</li>
                <li>• Problem Solving</li>
                <li>• Communication</li>
                <li>• Stakeholder Relations</li>
                <li>• Time Management</li>
                <li>• Documentation</li>
                <li>• Cross-team Collaboration</li>
                <li>• Strategic Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">SMS Spam Detection</h3>
                <p className="text-gray-600">03/24 - 04/24</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Designed an AI-driven solution for email spam filtering, increasing detection precision to 92% through advanced Natural Language Processing (NLP) methods.</li>
                <li>Refined text feature extraction using TF-IDF and word embeddings, boosting classification efficiency by 30% while minimizing false alarms.</li>
              </ul>
            </div>
      
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">COVID-19 Data Analysis & Visualization</h3>
                <p className="text-gray-600">11/20 - 01/21</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Structured a data analytics pipeline to monitor global COVID-19 trends, analyzing 100,000+ records on confirmed cases, deaths, and recoveries.</li>
                <li>Cleaned and transformed large datasets using Pandas and NumPy, ensuring 100% data accuracy for subsequent analysis.</li>
                <li>Built interactive Power BI dashboards and Geovisualizations, enabling real-time insights for stakeholders and improving decision-making efficiency by 40%.</li>
                <li>Automated data updates and filtering processes, reducing manual effort by 60% and ensuring timely reporting during the pandemic.</li>
              </ul>
            </div>
      
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Flight Fare Prediction</h3>
                <p className="text-gray-600">01/23 - 03/23</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Operated a Machine Learning application for flight price prediction, resulting in a 20% reduction in pricing errors and a significant boost in customer satisfaction</li>
                <li>Implemented through exploratory analysis, optimizing categorical data management, resulting in a 15% improvement in predictive accuracy.</li>
                <li>Employed thorough testing, allocating 30% of the data to identify and implement the most effective predictive model.</li>
              </ul>
            </div>
      
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Automatic Text Summarization System</h3>
                <p className="text-gray-600">08/24 - 10/24</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Engineered and developed a dual NLP pipeline using NLTK and spaCy, processing 5,000+ news headlines with advanced text preprocessing (tokenization, POS tagging, NER, lemmatization).</li>
                <li>Extracted and ranked key headlines using the TextRank algorithm, achieving 90%+ relevance accuracy in identifying the top 10 stories for daily summaries.</li>
                <li>Built classification models using TF-IDF and LinearSVC, attaining 85%+ accuracy in categorizing news headlines by content themes.</li>
                <li>Visualized side-by-side summarization outputs and performance benchmarks, leading to a 30% improvement in summarization efficiency when using spaCy over NLTK.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Certifications & Publications */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-8">Certifications</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Graduate Certificate in Applied Machine Learning</h3>
                  <p className="text-gray-600">University of Texas</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Graduate Certificate in Business Analytics & Data Mining</h3>
                  <p className="text-gray-600">University of Texas</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Google Cloud Professional</h3>
                  <p className="text-gray-600">Google • 2022</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Publications</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">U-Net Deep Neural Network-Based Landslide Detection Method</h3>
                  <p className="text-gray-600 mb-4">Springer Nature Singapore • 2023</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Authored and published a research paper on U-Net deep neural network-based landslide detection, achieving 91.12% accuracy in identifying landslide-prone areas</li>
                    <li>Developed a deep learning model utilizing satellite imagery from the Landslide4Sense dataset, enhancing predictive capabilities for geological hazard detection</li>
                    <li>Conducted comparative analysis against existing models, demonstrating a 5% improvement in F1 score while reducing computational costs</li>
                    <li>Proposed a cost-effective AI solution for real-time landslide monitoring, addressing challenges in high-resolution imaging and remote area detection</li>
                  </ul>
                  <a href="https://link.springer.com/chapter/10.1007/978-981-99-4717-1_44" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                    Read Paper <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:yojitha.188@gmail.com" className="text-gray-700 hover:text-blue-600">
                    yojitha.188@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a href="tel:4696887337" className="text-gray-700 hover:text-blue-600">
                    (469) 688-7337
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <a 
                    href="https://www.linkedin.com/in/yojithauppala" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-700 hover:text-blue-600"
                  >
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Yojitha Naga Vaibhavi Uppala. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/yojithauppala18" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Github /></a>
              <a href="https://www.linkedin.com/in/yojithauppala" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Linkedin /></a>
              <a href="mailto:yojitha.188@gmail.com" className="hover:text-blue-400"><Mail /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
