import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Profissionais Qualificados",
      description: "Equipe de veterinários e profissionais certificados com anos de experiência."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimento Personalizado",
      description: "Cada pet é único e merece cuidados especiais e individualizados."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Horários Flexíveis",
      description: "Atendimento de segunda a domingo, incluindo emergências 24 horas."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ambiente Seguro",
      description: "Instalações modernas e protocolos rigorosos de higiene e segurança."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Mais de 10 anos cuidando com 
                <span className="text-transparent bg-gradient-to-r from-pet-blue to-pet-green bg-clip-text"> amor</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                O PetCare nasceu da paixão por animais e do desejo de oferecer o melhor 
                cuidado possível para nossos amigos de quatro patas. Nossa missão é 
                proporcionar saúde, bem-estar e felicidade para cada pet que passa por nossas portas.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com uma equipe altamente qualificada e instalações modernas, nos dedicamos 
                a criar um ambiente acolhedor onde pets e seus donos se sintam seguros e cuidados.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2500+</div>
                <div className="text-muted-foreground">Pets Felizes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfação</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Profissionais</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Emergência</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-gradient-to-r from-white to-pet-warm/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pet-blue to-pet-green rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
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