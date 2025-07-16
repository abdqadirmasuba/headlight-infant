import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, GraduationCap, Award, Heart } from "lucide-react";
import staffGroup from "@/assets/staff-group.jpg";

const Staff = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const staffMembers = [
    {
      name: "Mrs. Sarah Nakimuli",
      position: "Head Teacher",
      qualification: "Bachelor of Education, Makerere University",
      experience: "8 years in education",
      specialization: "Educational Leadership & Curriculum Development",
      image: staffGroup
    },
    {
      name: "Mr. David Ssebunya",
      position: "Deputy Head Teacher",
      qualification: "Diploma in Primary Education",
      experience: "6 years in education",
      specialization: "Mathematics & Science",
      image: staffGroup
    },
    {
      name: "Miss Grace Namutebi",
      position: "Nursery Coordinator",
      qualification: "Certificate in Early Childhood Development",
      experience: "4 years in education",
      specialization: "Early Childhood Development",
      image: staffGroup
    },
    {
      name: "Mrs. Joan Mukisa",
      position: "Primary 7 Teacher",
      qualification: "Bachelor of Arts in Education",
      experience: "7 years in education",
      specialization: "English Language & Literature",
      image: staffGroup
    },
    {
      name: "Mr. Patrick Kiwanuka",
      position: "Physical Education Teacher",
      qualification: "Diploma in Sports Science",
      experience: "3 years in education",
      specialization: "Sports & Physical Fitness",
      image: staffGroup
    },
    {
      name: "Miss Rebecca Namugga",
      position: "Art & Music Teacher",
      qualification: "Certificate in Creative Arts",
      experience: "2 years in education",
      specialization: "Visual Arts & Music",
      image: staffGroup
    }
  ];

  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.max(0, staffMembers.length - itemsPerPage);

  const nextStaff = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevStaff = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section id="staff" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Our Dedicated Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Qualified Educators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our passionate team of educators brings years of experience and dedication 
            to nurturing your child's academic and personal growth.
          </p>
        </div>

        {/* Staff Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {staffMembers.map((staff, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 px-4 ${
                    itemsPerPage === 3 ? 'w-1/3' : itemsPerPage === 2 ? 'w-1/2' : 'w-full'
                  }`}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="relative mb-6">
                          <img
                            src={staff.image}
                            alt={staff.name}
                            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                          />
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                              <GraduationCap className="h-4 w-4 text-primary-foreground" />
                            </div>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {staff.name}
                        </h3>
                        <p className="text-primary font-semibold mb-3">
                          {staff.position}
                        </p>
                        
                        <div className="space-y-3 text-left">
                          <div className="flex items-start space-x-2">
                            <Award className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-foreground">Qualification</p>
                              <p className="text-xs text-muted-foreground">{staff.qualification}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-2">
                            <Heart className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-foreground">Experience</p>
                              <p className="text-xs text-muted-foreground">{staff.experience}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-2">
                            <GraduationCap className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-foreground">Specialization</p>
                              <p className="text-xs text-muted-foreground">{staff.specialization}</p>
                            </div>
                          </div>
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
            onClick={prevStaff}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextStaff}
            disabled={currentIndex === maxIndex}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-1">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;