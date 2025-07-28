import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users, Award, Target, Heart, BookOpen, Star } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const milestones = [
    {
      year: "2019",
      title: "School Foundation",
      description: "HeadLight Infants School was founded in February 2019 with a vision to provide quality education in Kayunga."
    },
    {
      year: "2020",
      title: "First Graduation",
      description: "Our first class of P7 students successfully completed their PLE examinations with excellent results."
    },
    {
      year: "2021",
      title: "Facility Expansion",
      description: "We expanded our facilities to include modern classrooms, a computer lab, and improved playground facilities."
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "HeadLight Infants was recognized as one of the top performing schools in Kayunga district."
    },
    {
      year: "2023",
      title: "Community Outreach",
      description: "Launched community literacy programs and parent education workshops to support holistic child development."
    },
    {
      year: "2024",
      title: "Continued Excellence",
      description: "Maintaining our commitment to educational excellence while expanding our student body and facilities."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistently high PLE pass rates with many students joining top secondary schools",
      stats: "95% Pass Rate"
    },
    {
      icon: Users,
      title: "Growing Community",
      description: "A thriving school community with engaged parents and dedicated staff",
      stats: "200+ Students"
    },
    {
      icon: Star,
      title: "Recognition",
      description: "Acknowledged by the district for outstanding educational contribution",
      stats: "Multiple Awards"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Positive influence on the local community through education and outreach",
      stats: "5+ Programs"
    }
  ];

  const coreValues = [
    {
      icon: BookOpen,
      title: "Educational Excellence",
      description: "We maintain the highest standards in curriculum delivery and academic achievement, ensuring every child reaches their full potential."
    },
    {
      icon: Heart,
      title: "Nurturing Care",
      description: "Our approach combines academic rigor with emotional support, creating a safe and loving environment for learning."
    },
    {
      icon: Target,
      title: "Individual Development",
      description: "We recognize that every child is unique and tailor our teaching methods to meet individual learning styles and needs."
    },
    {
      icon: Users,
      title: "Community Partnership",
      description: "We work closely with parents and the community to create a supportive network that extends learning beyond the classroom."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-school-blue to-school-navy text-school-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center text-school-white/80 hover:text-school-yellow transition-colors mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-school-white/90 leading-relaxed">
              From humble beginnings in February 2019 to becoming one of Kayunga's 
              most trusted educational institutions, HeadLight Infants School has 
              remained committed to nurturing young minds and building bright futures.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality, affordable education that nurtures young minds, 
                  builds strong character foundations, and prepares children to become 
                  confident, creative learners ready for tomorrow's challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading nursery and primary school in Kayunga, known for 
                  academic excellence, moral integrity, and producing well-rounded 
                  students who contribute positively to society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From our founding to today, here are the key milestones that have 
              shaped HeadLight Infants School into the institution it is today.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {milestone.title}
                        </h3>
                        <span className="text-primary font-semibold">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud of what we've accomplished in our journey to provide 
              excellent education in Kayunga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {achievement.description}
                  </p>
                  <div className="text-primary font-bold">
                    {achievement.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do at HeadLight Infants School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-school-blue to-school-navy text-school-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our School Family
          </h2>
          <p className="text-xl text-school-white/90 mb-8 max-w-2xl mx-auto">
            Experience the HeadLight difference for yourself. We invite you to visit 
            our school and discover why parents choose us for their children's education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="bg-school-yellow hover:bg-school-yellow/90 text-school-navy">
                Schedule a Visit
              </Button>
            </Link>
            <a href="tel:+256755138789">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-school-white text-school-white hover:bg-school-white hover:text-school-navy"
              >
                Call Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;