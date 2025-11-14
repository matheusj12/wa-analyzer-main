import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ClientDetailModalProps {
  client: any;
  onClose: () => void;
}

const ClientDetailModal = ({ client, onClose }: ClientDetailModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl">+551197777777</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                conv_20251009_2100 • Vendedor: carla
              </p>
            </div>
            <div className="flex gap-2">
              <Button className="bg-primary hover:bg-primary/90">
                Marcar follow-up
              </Button>
              <Button variant="outline" onClick={onClose}>
                Fechar
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Status Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="font-semibold">aberta</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sentimento</p>
              <p className="font-semibold">0.2</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Urgência</p>
              <p className="font-semibold">85</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Lead score</p>
              <p className="font-semibold">40</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Motivo da perda</p>
              <p className="font-semibold">—</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Produtos</p>
              <p className="font-semibold">Nenhum produto extraído</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ação sugerida</p>
              <p className="font-semibold">Responder agora — atendimento crítico</p>
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Tags</p>
            <div className="flex gap-2">
              <Badge variant="secondary">nao_respondida</Badge>
              <Badge variant="secondary">alta_prioridade</Badge>
            </div>
          </div>

          {/* JSON Data */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">JSON extraído (para backend)</p>
            <pre className="bg-muted p-4 rounded-md text-xs overflow-auto max-h-64">
{`{
  "conversation_id": "conv_20251009_2100",
  "cliente": {
    "nome": null,
    "telefone": "+551197777777"
  },
  "vendedor_id": "carla",
  "status_label": "aberta",
  "first_response_time_seconds": null,
  "last_activity_ts": "2025-10-09T20:55:00-03:00",
  "sentiment_score": 0.2,
  "urgency_score": 85,
  "lead_score": 40,
  "tags": ["nao_respondida", "alta_prioridade"]
}`}
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClientDetailModal;
