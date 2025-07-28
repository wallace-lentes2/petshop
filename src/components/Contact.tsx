import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para cuidar do seu pet. Entre em contato conosco e agende uma visita!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pet-blue to-pet-green rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua dos Pets, 123<br />
                      Vila Animal, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pet-blue to-pet-green rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Telefone</h4>
                    <p className="text-muted-foreground">
                      (11) 9999-9999<br />
                      (11) 8888-8888
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pet-blue to-pet-green rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">E-mail</h4>
                    <p className="text-muted-foreground">
                      contato@petcare.com.br<br />
                      emergencia@petcare.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pet-blue to-pet-green rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horários</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 16h<br />
                      Domingo: 9h às 15h<br />
                      <span className="text-pet-blue font-medium">Emergência: 24h</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-pet-cream to-pet-warm flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-pet-blue mx-auto mb-2" />
                  <p className="text-muted-foreground">Localização no Mapa</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Agendar Consulta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nome</label>
                    <Input placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nome do Pet</label>
                    <Input placeholder="Nome do seu pet" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Telefone</label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">E-mail</label>
                    <Input placeholder="seu@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Serviço</label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option>Consulta Veterinária</option>
                    <option>Banho e Tosa</option>
                    <option>Day Care</option>
                    <option>Hotel Pet</option>
                    <option>Emergência</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensagem</label>
                  <Textarea 
                    placeholder="Conte-nos mais sobre seu pet e suas necessidades..."
                    rows={4}
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-pet-blue to-pet-green hover:opacity-90 text-lg py-6"
                >
                  Enviar Mensagem
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Responderemos em até 24 horas. Para emergências, ligue diretamente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;