import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "We provide a loving, safe environment where every child feels valued and supported."
    },
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Our curriculum focuses on holistic development, preparing children for future success."
    },
    {
      icon: Target,
      title: "Individual Growth",
      description: "We recognize each child's unique potential and tailor our approach accordingly."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain high standards in teaching, learning, and character development."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                About HeadLight Infants School
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Shaping Tomorrow's Leaders
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in February 2019, HeadLight Infants School has been a beacon of 
                educational excellence in Kayunga, Uganda. We believe that every child 
                deserves a bright start to their educational journey.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Our Mission:</strong> To provide quality, affordable education that nurtures young minds and builds strong character foundations.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-secondary-foreground rounded-full" />
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Our Vision:</strong> To be the leading nursery and primary school in Kayunga, known for academic excellence and moral integrity.
                </p>
              </div>
            </div>

            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90">
                Read Our Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;