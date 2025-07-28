import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      pet: "Luna (Golden Retriever)",
      rating: 5,
      comment: "Excelente atendimento! A equipe é muito carinhosa e profissional. A Luna sempre fica feliz quando vamos ao PetCare. Recomendo de olhos fechados!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "João Santos",
      pet: "Max (Bulldog Francês)",
      rating: 5,
      comment: "O Dr. Ricardo salvou a vida do meu Max. Atendimento de emergência impecável e muito cuidado com os detalhes. Sou cliente há 3 anos e sempre satisfeito.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      pet: "Mimi (Gato Persa)",
      rating: 5,
      comment: "A Mimi é muito estressada, mas a equipe do PetCare tem um jeito especial com ela. O ambiente é tranquilo e os profissionais são muito pacientes.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Oliveira",
      pet: "Rex (Pastor Alemão)",
      rating: 5,
      comment: "Serviço de hotel pet excepcional! O Rex ficou uma semana e voltou feliz e bem cuidado. As instalações são modernas e o cuidado é exemplar.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fernanda Lima",
      pet: "Bella (Yorkshire)",
      rating: 5,
      comment: "O serviço de grooming é fantástico! A Bella sempre sai linda e cheirosa. A atenção aos detalhes e o carinho com os pets fazem toda a diferença.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ricardo Mendes",
      pet: "Thor (Rottweiler)",
      rating: 5,
      comment: "Profissionais muito competentes! O Thor tinha um problema sério de pele que foi resolvido com o tratamento adequado. Muito obrigado pela dedicação!",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-pet-warm to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos clientes e a felicidade dos pets são nossa maior recompensa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-pet-orange text-pet-orange" />
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-pet-orange text-pet-orange" />
            <span className="font-semibold text-foreground">4.9/5.0</span>
            <span className="text-muted-foreground">baseado em 500+ avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;