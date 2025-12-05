import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const apps = [
    {
      title: "Coming Soon",
      description: "More apps will be added here to help you manage your lifestyle.",
      icon: Home,
      href: "#",
      disabled: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold tracking-tight">Life Apps Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Your central hub for managing different aspects of your lifestyle
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <Card key={app.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{app.title}</CardTitle>
                  </div>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {app.disabled ? (
                    <Button disabled className="w-full" variant="outline">
                      Coming Soon
                    </Button>
                  ) : (
                    <Link href={app.href}>
                      <Button className="w-full">
                        Open App
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>About This Dashboard</CardTitle>
              <CardDescription>
                Welcome to your Life Apps monorepo dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This dashboard serves as the central hub for all your lifestyle applications.
                As you add more apps to the monorepo, they will appear here as cards with
                quick access links. This project is built with Next.js, TypeScript, and
                styled with shadcn/ui components.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Life Apps Monorepo - Built with Next.js and shadcn/ui</p>
        </div>
      </footer>
    </div>
  );
}
