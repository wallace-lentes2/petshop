import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-pet-warm to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-pet-cream/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-pet-blue/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">Mais de 10 anos cuidando com amor</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Cuidado completo para seu
                <span className="text-transparent bg-gradient-to-r from-pet-blue to-pet-green bg-clip-text"> 
                  {" "}melhor amigo
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                No PetCare, oferecemos serviços veterinários completos, grooming profissional 
                e muito carinho para garantir a saúde e felicidade do seu pet.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pet-blue to-pet-green hover:opacity-90 text-lg px-8 py-6 group shadow-lg"
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 hover:bg-pet-cream"
              >
                Conhecer Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2500+</div>
                <div className="text-sm text-muted-foreground">Pets Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroPets} 
                alt="Pets felizes no PetCare" 
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pet-orange to-pet-green rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Atendimento 24h</div>
                    <div className="text-xs text-muted-foreground">Emergências veterinárias</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-pet-blue/20 to-pet-green/20 rounded-3xl transform rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;