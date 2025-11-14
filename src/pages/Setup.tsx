import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Settings, FileText, Search, Smartphone } from "lucide-react";

const Setup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [businessCategory, setBusinessCategory] = useState("Tecnologia Software marketing");
  const [businessDetails, setBusinessDetails] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const handleContinue = () => {
    if (step < 4) {
      setStep(step + 1);
    }
    if (step === 3) {
      setIsConnecting(true);
      // Simulate connection
      setTimeout(() => {
        setStep(4);
        setIsConnecting(false);
      }, 2000);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const steps = [
    { number: 1, label: "Configuração", icon: Settings },
    { number: 2, label: "Dados do Negócio", icon: FileText },
    { number: 3, label: "Identificar Negócio", icon: Search },
    { number: 4, label: "Conectar WhatsApp", icon: Smartphone },
    { number: 5, label: "Análise Iniciada", icon: Check },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Configurar Seu Negócio</h1>
          <p className="text-muted-foreground mt-1">
            Configure sua instância WhatsApp para análise de atendimentos
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {steps.map((s, index) => {
              const Icon = s.icon;
              const isActive = step === s.number;
              const isCompleted = step > s.number;
              
              return (
                <div key={s.number} className="flex flex-col items-center flex-1 relative">
                  {index > 0 && (
                    <div className={`absolute top-6 -left-1/2 w-full h-0.5 -z-10 ${
                      isCompleted ? "bg-primary" : "bg-border"
                    }`} />
                  )}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    isActive ? "bg-primary text-primary-foreground" :
                    isCompleted ? "bg-primary/20 text-primary" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-center font-medium">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Escolher Configuração</h2>
                <div className="bg-muted/30 border border-primary/20 rounded-lg p-4 mb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-semibold">Apogeu.io - São Paulo</p>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        <Badge variant="secondary">Tecnologia Software</Badge>
                        <Badge variant="secondary">55139815590671</Badge>
                        <Badge variant="outline" className="bg-primary/10 border-primary text-primary">Dados Completos</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Criado em 07/10/2025</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-sm">
                  <p className="text-primary font-medium">
                    ⚡ Configurações com 'Dados Completos' vão direto para conexão WhatsApp
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button onClick={handleContinue} className="flex-1">
                  Criar Nova Configuração
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">📝 Inserir informações manualmente</h2>
                <p className="text-muted-foreground mb-6">
                  Prefere inserir as informações do seu negócio manualmente? Preencha os campos abaixo.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="category">📊 Nicho/Categoria do Negócio</Label>
                  <Input
                    id="category"
                    value={businessCategory}
                    onChange={(e) => setBusinessCategory(e.target.value)}
                    placeholder="Tecnologia Software marketing"
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Isso nos ajuda a personalizar as análises para seu setor
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={handleBack}>
                  ← Voltar às Opções
                </Button>
                <Button onClick={handleContinue} className="flex-1">
                  ✓ Continuar
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">📋 Detalhamento do Negócio</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="details">Descreva seu negócio</Label>
                  <Textarea
                    id="details"
                    value={businessDetails}
                    onChange={(e) => setBusinessDetails(e.target.value)}
                    placeholder="Prestação de serviços..."
                    className="mt-2 min-h-[200px]"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Quanto mais detalhes, melhor será a personalização das análises
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={handleBack}>
                  ← Voltar
                </Button>
                <Button onClick={handleContinue} className="flex-1 bg-primary hover:bg-primary/90">
                  ✓ Conectar WhatsApp
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">📱 Conectar WhatsApp</h2>
                <p className="text-muted-foreground mb-6">
                  Escaneie o QR Code com seu WhatsApp para conectar automaticamente
                </p>
              </div>
              
              {isConnecting ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mb-4" />
                  <p className="text-lg font-medium">Criando instância WhatsApp...</p>
                </div>
              ) : step === 4 ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-64 h-64 bg-muted rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-48 h-48 border-4 border-primary rounded-lg mx-auto" />
                      <p className="text-xs text-muted-foreground">QR Code será exibido aqui</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold">Como conectar:</p>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      <li>Abra o WhatsApp no seu celular</li>
                      <li>Toque em "Mais opções" (⋮) e depois em "Aparelhos conectados"</li>
                      <li>Toque em "Conectar um aparelho"</li>
                      <li>Aponte a câmera para este QR Code</li>
                    </ol>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Check className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold text-primary">Conectado com sucesso!</p>
                  <Button onClick={() => navigate("/dashboard")} className="mt-6">
                    Ir para Dashboard
                  </Button>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Setup;
