
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
        <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
        <Card>
            <CardHeader>
                <CardTitle>Welcome, Admin!</CardTitle>
                <CardDescription>
                    This is your control panel for the Believers' Network website. You can manage devotionals, gallery images, testimonies, and more from here.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Select an option from the sidebar to get started.</p>
            </CardContent>
        </Card>
    </div>
  );
}
