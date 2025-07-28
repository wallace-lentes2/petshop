import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, Scissors, Heart, Pill, Utensils, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Consultas Veterinárias",
      description: "Exames completos, vacinação, e acompanhamento da saúde do seu pet com veterinários especializados.",
      image: "/vet-service.jpg",
      features: ["Exames preventivos", "Vacinação completa", "Cirurgias", "Emergência 24h"]
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Banho & Tosa",
      description: "Serviços de grooming profissional para manter seu pet sempre limpo, cheiroso e bonito.",
      image: "/grooming-service.jpg",
      features: ["Banho especializado", "Tosa higiênica", "Corte de unhas", "Limpeza de ouvidos"]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Day Care",
      description: "Espaço seguro e divertido para seu pet socializar e brincar enquanto você está trabalhando.",
      image: "/daycare-service.jpg",
      features: ["Supervisão profissional", "Atividades recreativas", "Socialização", "Refeições incluídas"]
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Farmácia Pet",
      description: "Medicamentos, vitaminas e suplementos para manter a saúde do seu pet em dia.",
      features: ["Medicamentos especializados", "Vitaminas", "Suplementos", "Receita veterinária"]
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Nutrição Especializada",
      description: "Planos alimentares personalizados e rações premium para cada fase da vida do seu pet.",
      features: ["Consulta nutricional", "Rações premium", "Dietas especiais", "Acompanhamento"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hotel Pet",
      description: "Hospedagem confortável e segura para quando você precisar viajar.",
      features: ["Suítes confortáveis", "Passeios diários", "Cuidados especiais", "Monitoramento 24h"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-background to-pet-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Serviços Completos para seu Pet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para garantir o bem-estar, 
            saúde e felicidade do seu melhor amigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                {service.image ? (
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-pet-blue to-pet-green rounded-full flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-pet-blue to-pet-green rounded-2xl flex items-center justify-center text-white mx-auto">
                    {service.icon}
                  </div>
                )}
                
                <div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-pet-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-pet-cream transition-colors">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pet-blue to-pet-green hover:opacity-90 text-lg px-8 py-6"
          >
            Agendar Serviço
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;