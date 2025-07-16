import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mrs. Agnes Namubiru",
      role: "Parent of P5 Student",
      content: "HeadLight Infants has been a blessing to our family. My daughter Sarah has grown tremendously in confidence and academic performance. The teachers are caring and professional.",
      rating: 5,
      location: "Kayunga Town"
    },
    {
      name: "Mr. Robert Kiggundu",
      role: "Parent of Nursery Student",
      content: "I was impressed by the school's approach to early childhood development. My son enjoys going to school every day, and I can see his progress in both academics and social skills.",
      rating: 5,
      location: "Galiraya Village"
    },
    {
      name: "Mrs. Joyce Nalwanga",
      role: "Parent of P3 & P6 Students",
      content: "Having two children at HeadLight has been wonderful. The school maintains high standards while being affordable. The communication between teachers and parents is excellent.",
      rating: 5,
      location: "Busaana"
    },
    {
      name: "Mr. Emmanuel Walusimbi",
      role: "Parent of P7 Student",
      content: "My daughter is well-prepared for her PLE thanks to HeadLight's dedicated teachers. The school has helped her develop leadership skills and academic excellence.",
      rating: 5,
      location: "Kayunga Central"
    },
    {
      name: "Mrs. Faith Namirembe",
      role: "Parent of Middle Nursery",
      content: "The nurturing environment at HeadLight is exactly what my toddler needed. The teachers treat each child with love and patience. I highly recommend this school.",
      rating: 5,
      location: "Nazigo"
    },
    {
      name: "Mr. Paul Ssekandi",
      role: "Parent of P1 & P4 Students",
      content: "HeadLight Infants School provides quality education at reasonable fees. Both my children are performing well and love their teachers. The school transport is also reliable.",
      rating: 5,
      location: "Nakifuma"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground font-semibold text-sm mb-4">
            Parent Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Parents Say About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what parents in our community 
            have to say about their experience with HeadLight Infants School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mb-3" />
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-secondary" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our School Family
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the HeadLight difference for yourself. We welcome you to visit 
              our school and meet our dedicated team of educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Schedule a Visit
              </a>
              <a 
                href="tel:+256755138789" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors"
              >
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;