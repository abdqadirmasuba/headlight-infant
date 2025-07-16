import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Users, Clock, BookOpen } from "lucide-react";

const Classes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const classes = [
    {
      name: "Baby Nursery",
      ageRange: "2-3 years",
      students: "15-20",
      duration: "Half Day",
      description: "Our baby nursery focuses on early childhood development through play, basic social skills, and foundational learning experiences.",
      features: ["Play-based learning", "Potty training support", "Social skills development", "Basic motor skills"]
    },
    {
      name: "Middle Nursery",
      ageRange: "3-4 years",
      students: "20-25",
      duration: "Full Day",
      description: "Middle nursery introduces structured learning while maintaining a playful environment to develop pre-reading and numeracy skills.",
      features: ["Pre-reading activities", "Number recognition", "Creative arts", "Language development"]
    },
    {
      name: "Top Nursery",
      ageRange: "4-5 years",
      students: "25-30",
      duration: "Full Day",
      description: "Top nursery prepares children for primary school with advanced pre-literacy, numeracy, and social preparation.",
      features: ["School readiness", "Advanced numeracy", "Writing preparation", "Independence skills"]
    },
    {
      name: "Primary 1",
      ageRange: "5-6 years",
      students: "30-35",
      duration: "Full Day",
      description: "P1 marks the beginning of formal education with structured learning in literacy, numeracy, and foundational subjects.",
      features: ["Formal reading", "Basic mathematics", "Science introduction", "English & Local language"]
    },
    {
      name: "Primary 2",
      ageRange: "6-7 years",
      students: "30-35",
      duration: "Full Day",
      description: "P2 builds on foundational skills with more complex reading, writing, and mathematical concepts.",
      features: ["Reading comprehension", "Addition & subtraction", "Environmental studies", "Creative writing"]
    },
    {
      name: "Primary 3",
      ageRange: "7-8 years",
      students: "30-35",
      duration: "Full Day",
      description: "P3 introduces more diverse subjects and develops critical thinking skills across the curriculum.",
      features: ["Multi-subject learning", "Problem solving", "Social studies", "Basic computer skills"]
    },
    {
      name: "Primary 4",
      ageRange: "8-9 years",
      students: "25-30",
      duration: "Full Day",
      description: "P4 focuses on intermediate skills development and preparation for upper primary education.",
      features: ["Advanced literacy", "Multiplication & division", "Science experiments", "Research skills"]
    },
    {
      name: "Primary 5",
      ageRange: "9-10 years",
      students: "25-30",
      duration: "Full Day",
      description: "P5 develops higher-order thinking skills and prepares students for more challenging academic work.",
      features: ["Critical thinking", "Advanced mathematics", "Science projects", "Essay writing"]
    },
    {
      name: "Primary 6",
      ageRange: "10-11 years",
      students: "25-30",
      duration: "Full Day",
      description: "P6 provides comprehensive preparation for P7 and focuses on consolidating all primary education skills.",
      features: ["Exam preparation", "Leadership skills", "Advanced sciences", "Career guidance"]
    },
    {
      name: "Primary 7",
      ageRange: "11-12 years",
      students: "20-25",
      duration: "Full Day",
      description: "P7 is the final year of primary education, preparing students for PLE and secondary school transition.",
      features: ["PLE preparation", "Study skills", "Advanced curriculum", "Secondary school readiness"]
    }
  ];

  const nextClass = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % classes.length);
  };

  const prevClass = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + classes.length) % classes.length);
  };

  const goToClass = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="classes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground font-semibold text-sm mb-4">
            Our Classes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Educational Journey from Nursery to Primary 7
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive education from early childhood through primary completion, 
            ensuring each stage builds upon the previous for optimal learning progression.
          </p>
        </div>

        {/* Class Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {classes.map((classInfo, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="max-w-4xl mx-auto shadow-lg">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-3">
                            {classInfo.name}
                          </h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {classInfo.description}
                          </p>
                          
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                              <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                              <p className="text-sm font-medium text-foreground">{classInfo.students}</p>
                              <p className="text-xs text-muted-foreground">Students</p>
                            </div>
                            <div className="text-center">
                              <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                              <p className="text-sm font-medium text-foreground">{classInfo.duration}</p>
                              <p className="text-xs text-muted-foreground">Schedule</p>
                            </div>
                            <div className="text-center">
                              <BookOpen className="h-5 w-5 text-primary mx-auto mb-1" />
                              <p className="text-sm font-medium text-foreground">{classInfo.ageRange}</p>
                              <p className="text-xs text-muted-foreground">Age Range</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-4">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {classInfo.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevClass}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextClass}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {classes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToClass(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;