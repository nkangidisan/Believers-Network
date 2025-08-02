import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, BarChart2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Transparency",
  description: "We are committed to honoring God and our partners through faithful stewardship. View and download our annual impact and financial reports.",
};

const reports = [
    { year: 2023, title: "Annual Impact Report 2023", file: "/reports/2023-report.pdf" },
    { year: 2022, title: "Annual Impact Report 2022", file: "/reports/2022-report.pdf" },
]

export default function Financials() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">
              Financial Transparency
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              We are committed to honoring God and our partners through faithful stewardship. Your trust is sacred to us.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-3xl font-bold">Our Commitment to Stewardship</h2>
                     <p className="mt-4 text-lg text-foreground/80">
                         Believers' Network is committed to the highest standards of financial integrity and accountability. We believe that every resource given to us is a sacred trust from God and our partners, to be used for the advancement of the Gospel. Our financial records are maintained with care and are available to our partners to ensure full transparency.
                     </p>
                </div>
                
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2"><BarChart2 className="text-accent"/> Annual Reports</CardTitle>
                        <CardDescription>Download our annual impact reports to see a detailed breakdown of our activities and financial stewardship.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            {reports.map(report => (
                                <li key={report.year} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                                    <span className="font-semibold">{report.title}</span>
                                    <Button asChild>
                                        <a href={report.file} download>
                                            <Download className="mr-2 h-4 w-4" />
                                            Download
                                        </a>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}
