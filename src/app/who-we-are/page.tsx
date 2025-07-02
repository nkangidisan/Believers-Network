import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhoWeAreSection from "@/components/home/who-we-are-section";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
    { name: "Iradukunda Pacifique", role: "Founder & Vision Bearer", image: "/visionbearer.jpg", aiHint: "man portrait" },
    { name: "Team Member 2", role: "Head of Missions", image: "https://placehold.co/400x400.png", aiHint: "portrait woman" },
    { name: "Team Member 3", role: "Outreach Coordinator", image: "https://placehold.co/400x400.png", aiHint: "portrait man" },
    { name: "Team Member 4", role: "Worship Leader", image: "https://placehold.co/400x400.png", aiHint: "portrait woman" },
]

export default function WhoWeAre() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">
                        Who We Are
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        We are a family of believers, united by a passion to see lives transformed by the power of Jesus Christ.
                    </p>
                </div>
            </div>
        </section>

        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="font-headline text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg text-foreground/80 mb-6">To fulfill the Great Commission by taking the gospel of Jesus Christ to students, schools, and communities across Africa and beyond, leading them to a personal relationship with God.</p>
                         <ul className="space-y-2">
                            <li className="flex items-center gap-2"><CheckCircle className="text-accent h-5 w-5" /> Reaching the unreached in educational institutions.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-accent h-5 w-5" /> Equipping believers for a life of purpose and service.</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-accent h-5 w-5" /> Impacting nations through targeted outreach and missions.</li>
                        </ul>
                    </div>
                     <div>
                        <h2 className="font-headline text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg text-foreground/80">To see a global generation of young people passionately in love with Jesus, walking in the power of the Holy Spirit, and actively transforming their communities and nations for the glory of God.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <WhoWeAreSection />

        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-3xl md:text-4xl font-bold">
                        Meet the Team
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        God has assembled a dedicated team to carry this vision forward.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map(member => (
                        <Card key={member.name} className="text-center border-0 shadow-lg">
                            <CardContent className="p-0">
                                <Image src={member.image} alt={member.name} data-ai-hint={member.aiHint} width={400} height={400} className="w-full h-auto rounded-t-lg object-cover" />
                                <div className="p-4">
                                    <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                                    <p className="text-primary">{member.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
