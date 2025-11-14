import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Clock,
  Home,
  LineChart,
  Phone,
  Shield,
  Menu
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import ClientDetailModal from "@/components/ClientDetailModal";

const Dashboard = () => {
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const salesData = [
    { name: "Alice", vendas: 39 },
    { name: "Gabriela", vendas: 39 },
    { name: "Marcos", vendas: 38 },
    { name: "João", vendas: 36 },
    { name: "Eduarda", vendas: 34 },
    { name: "Daniel", vendas: 32 },
    { name: "Isabella", vendas: 31 },
    { name: "Larissa", vendas: 31 },
    { name: "Carla", vendas: 29 },
    { name: "Bruno", vendas: 27 },
    { name: "Fábio", vendas: 26 },
    { name: "Heitor", vendas: 26 },
  ];

  const lossReasons = [
    { name: "sem estoque", value: 35, color: "hsl(var(--chart-red))" },
    { name: "sem resposta", value: 30, color: "hsl(var(--chart-orange))" },
    { name: "atendimento", value: 20, color: "hsl(var(--chart-green))" },
    { name: "preço", value: 15, color: "hsl(var(--chart-blue))" },
  ];

  const statusData = [
    { name: "respondida", value: 35, color: "hsl(var(--chart-gray))" },
    { name: "perdida", value: 30, color: "hsl(var(--chart-blue))" },
    { name: "aberta", value: 20, color: "hsl(var(--chart-yellow))" },
    { name: "vendida", value: 10, color: "hsl(var(--chart-green))" },
    { name: "em_proposta", value: 5, color: "hsl(var(--chart-red))" },
  ];

  const recentActivity = [
    { cliente: "Elisa Silva", vendedor: "Alice", status: "Respondida", urgencia: 60, acao: "Enviar proposta atualizada amanhã." },
    { cliente: "Igor Pereira", vendedor: "Fábio", status: "Perdida", urgencia: 85, acao: "Arquivar conversa." },
    { cliente: "Fernanda Silva", vendedor: "Gabriela", status: "Respondida", urgencia: 95, acao: "Enviar proposta atualizada amanhã." },
    { cliente: "Igor Pereira", vendedor: "Larissa", status: "Respondida", urgencia: 15, acao: "Enviar proposta atualizada amanhã." },
    { cliente: "Beatriz Silva", vendedor: "Larissa", status: "Perdida", urgencia: 70, acao: "Arquivar conversa." },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "respondida": return "bg-status-info";
      case "perdida": return "bg-status-error";
      case "aberta": return "bg-status-warning";
      default: return "bg-status-success";
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-20"} bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col`}>
        <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <h2 className="font-bold text-lg text-sidebar-foreground">WAanalyst</h2>
              <p className="text-xs text-sidebar-foreground/60">v4.0</p>
            </div>
          )}
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Button variant="default" className="w-full justify-start gap-3">
            <Home className="w-5 h-5" />
            {sidebarOpen && "Dashboard"}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <LineChart className="w-5 h-5" />
            {sidebarOpen && "Análises"}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Phone className="w-5 h-5" />
            {sidebarOpen && "Nova Análise"}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Shield className="w-5 h-5" />
            {sidebarOpen && "Admin"}
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard de Análise de Vendas</h1>
            <p className="text-muted-foreground mt-1">
              Visão em tempo real das conversas do WhatsApp - quinta-feira, 9 de outubro de 2025
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-l-4 border-l-chart-blue">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Novos Leads (Hoje)</p>
                <p className="text-4xl font-bold">1250</p>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-chart-green">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Taxa de Vendas</p>
                <p className="text-4xl font-bold">54.2%</p>
                <p className="text-xs text-muted-foreground">391 vendas de 722 finalizadas</p>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-chart-red">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Taxa de Perda</p>
                <p className="text-4xl font-bold">45.8%</p>
                <p className="text-xs text-muted-foreground">331 perdidas de 722 finalizadas</p>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-chart-yellow">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Tempo Médio de Resposta</p>
                <p className="text-4xl font-bold">164s</p>
              </div>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales Performance Chart */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Performance dos Vendedores (Vendas)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="vendas" fill="hsl(var(--chart-blue))" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Loss Reasons Pie Chart */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Principais Motivos de Perda</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={lossReasons}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                    label
                  >
                    {lossReasons.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-4 mt-4 justify-center">
                {lossReasons.map((reason) => (
                  <div key={reason.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: reason.color }} />
                    <span className="text-sm">{reason.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Activity Table */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Atividade Recente</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">CLIENTE</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">VENDEDOR</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">STATUS</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">URGÊNCIA</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">AÇÃO SUGERIDA</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((activity, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50 cursor-pointer" onClick={() => setSelectedClient(activity)}>
                      <td className="py-3 px-4">{activity.cliente}</td>
                      <td className="py-3 px-4 text-muted-foreground">{activity.vendedor}</td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(activity.status)}>
                          {activity.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Progress value={activity.urgencia} className="w-32" />
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{activity.acao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>

      {/* Client Detail Modal */}
      {selectedClient && (
        <ClientDetailModal
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
