import { Clock, Users, FileCheck, GraduationCap, BookOpen, FlaskConical } from "lucide-react";
import bpharmImg from "@/assets/course-bpharm.jpg";
import dpharmImg from "@/assets/course-dpharm.jpg";
import mpharmImg from "@/assets/course-mpharm.jpg";

const courses = [
  {
    name: "Bachelor of Pharmacy (B.Pharm)",
    duration: "4 Years (8 Semesters)",
    intake: "60 Students",
    eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics with minimum 50% marks. Valid score in state/national entrance exam.",
    description: "A comprehensive undergraduate program covering pharmaceutical chemistry, pharmacology, pharmaceutics, pharmacognosy, and clinical pharmacy. Students gain hands-on experience through practical training and hospital/industry internships.",
    img: bpharmImg,
    icon: <GraduationCap className="w-6 h-6" />,
    features: ["Hospital & Industry Training", "8 Semester Curriculum", "Research Projects", "GPAT Preparation"],
  },
  {
    name: "Diploma in Pharmacy (D.Pharm)",
    duration: "2 Years",
    intake: "60 Students",
    eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics with minimum 45% marks.",
    description: "A diploma program designed to train students in the fundamentals of pharmacy practice, drug dispensing, pharmaceutical formulations, and community health. Graduates are eligible for pharmacist registration.",
    img: dpharmImg,
    icon: <BookOpen className="w-6 h-6" />,
    features: ["Pharmacist Registration", "Drug Dispensing Training", "Community Health", "Practical Labs"],
  },
 
];

const Courses = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Courses Offered</h1>
          <p>PCI-approved programs designed to build competent pharmaceutical professionals.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container space-y-12">
          {courses.map((course, idx) => (
            <div key={course.name} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2">
                  <img src={course.img} alt={course.name} className="w-full h-64 lg:h-full object-cover" />
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-primary">{course.icon}</div>
                    <h2 className="text-xl md:text-2xl font-bold text-primary">{course.name}</h2>
                  </div>
                  <p className="text-muted-foreground text-sm mb-5">{course.description}</p>
                  <div className="grid sm:grid-cols-3 gap-4 mb-5">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Duration</span>
                        <p className="text-sm font-medium">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Intake</span>
                        <p className="text-sm font-medium">{course.intake}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Eligibility</span>
                        <p className="text-sm font-medium">{course.eligibility}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((f) => (
                      <span key={f} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
