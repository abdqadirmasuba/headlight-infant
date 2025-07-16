import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, GraduationCap } from "lucide-react";
import classroomHero from "@/assets/classroom-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${classroomHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-school-navy/90 via-school-blue/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-school-yellow/20 text-school-yellow font-semibold text-sm mb-4">
              ✨ Nurturing Young Minds Since 2019
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-school-white mb-6 leading-tight">
            Where Future
            <span className="block text-school-yellow">Awaits Bright</span>
          </h1>
          
          <p className="text-xl text-school-white/90 mb-8 leading-relaxed">
            At HeadLight Infants School, we provide quality nursery and primary education 
            in Kayunga, Uganda. Our mission is to develop confident, creative learners 
            ready for tomorrow's challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-school-yellow hover:bg-school-yellow/90 text-school-navy font-semibold">
              Enroll Your Child
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-school-white text-school-white hover:bg-school-white hover:text-school-navy"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 bg-school-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex-shrink-0">
                <Users className="h-8 w-8 text-school-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-school-white">200+</p>
                <p className="text-school-white/80 text-sm">Happy Students</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-school-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-school-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-school-white">15+</p>
                <p className="text-school-white/80 text-sm">Qualified Teachers</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-school-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex-shrink-0">
                <Star className="h-8 w-8 text-school-yellow" />
              </div>
              <div>
                <p className="text-2xl font-bold text-school-white">5+</p>
                <p className="text-school-white/80 text-sm">Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;