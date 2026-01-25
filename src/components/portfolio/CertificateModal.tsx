import { Award, Download } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CertificateModalProps {
  title: string;
  pdfUrl: string;
  children: React.ReactNode;
}

const CertificateModal = ({ title, pdfUrl, children }: CertificateModalProps) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[85vh] bg-card border-border p-0 overflow-hidden flex flex-col">
        <DialogHeader className="px-4 py-3 flex flex-row items-center justify-between border-b border-border">
          <DialogTitle className="text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            {title}
          </DialogTitle>
          <Button
            onClick={handleDownload}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Download className="w-4 h-4" />
            Download
          </Button>
        </DialogHeader>
        <div className="flex-1 p-3">
          <iframe
            src={pdfUrl}
            className="w-full h-full rounded-md border border-border bg-secondary"
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateModal;
