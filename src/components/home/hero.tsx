import { Button } from "../ui/button";
import { ArrowRight, Copy } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import CodeBlockJson from "./code-block-json";

export default function Hero() {
  return (
    <section className="relative isolate mx-auto w-full py-12 md:py-22 lg:py-36 ">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `
        linear-gradient(to right, var(--foreground) 1px, transparent 1px),
        linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
      `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, var(--background) 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, var(--background)  30%, transparent 70%)",
        }}
      />
      <div className="relative z-10 px-4 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-left lg:mx-0">
            <div>
              <Badge
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none"
                variant="secondary"
              >
                <span className="text-primary mr-1">✦</span>
                Medical Data Structuring
              </Badge>
            </div>
            <h1 className="from-foreground via-foreground/90 to-foreground/70 mb-6 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
              Du texte médical brut
              <br className=" hidden lg:block" /> au JSON structuré
            </h1>
            <p className="text-muted-foreground max-w-2xl mb-8 text-lg leading-relaxed md:text-xl">
              Analyse et extraction automatique des informations clés des
              rapports médicaux non structurés : patient, diagnostic, dates,
              prescriptions et observations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/parser">
                <Button
                  size="lg"
                  className="h-12 cursor-pointer rounded-full px-8 text-base shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  Convert Medical Report
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>

              <Link href="#schema">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:border-primary/50 h-12 cursor-pointer rounded-full px-8 text-base transition-transform duration-300 hover:-translate-y-0.5"
                >
                  View JSON Schema
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Tabs defaultValue="pdf">
              <Card className="border-border/40 from-background to-background/95 relative overflow-hidden rounded-sm bg-linear-to-b shadow-xl backdrop-blur py-0 px-0">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b px-4 py-2">
                    <TabsList className="flex items-center gap-3 bg-background!">
                      <TabsTrigger
                        className="cursor-pointer  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        value="pdf"
                      >
                        pdf
                      </TabsTrigger>
                      <TabsTrigger
                        value="json"
                        className="cursor-pointer  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        json
                      </TabsTrigger>
                    </TabsList>
                    <div className="flex gap-2">
                      <div className="size-3 rounded-full bg-red-500"></div>
                      <div className="size-3 rounded-full bg-yellow-500"></div>
                      <div className="size-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  <TabsContent value="pdf" className="p-6">
                    <div className="w-full">
                      {/* PDF Header */}
                      <div className="border-b py-3">
                        <p className="text-sm font-semibold">Rapport Médical</p>
                        <p className="text-xs text-neutral-500">
                          Document clinique — confidentiel
                        </p>
                      </div>

                      {/* PDF Body */}
                      <div className="space-y-4 py-4 text-sm leading-relaxed">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-neutral-500">Patient</p>
                            <p className="font-medium">Ahmed El Amrani</p>
                          </div>
                          <div>
                            <p className="text-xs text-neutral-500">Dates</p>
                            <p className="font-medium">
                              Consultation : 12/09/2025
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-neutral-500">Diagnostic</p>
                          <p className="font-medium">Hypertension artérielle</p>
                        </div>

                        <div>
                          <p className="text-xs text-neutral-500">
                            Prescription
                          </p>
                          <p className="font-medium">
                            Amlodipine 5mg — 1 fois par jour
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-neutral-500">
                            Observations
                          </p>
                          <p className="font-medium">
                            Tension stable, suivi recommandé.
                          </p>
                        </div>
                      </div>

                      {/* PDF Footer */}
                      <div className="border-t py-2 text-xs text-neutral-400">
                        Généré automatiquement — IA médicale
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="json" className="p-5">
                    <CodeBlockJson />
                  </TabsContent>
                </CardContent>
              </Card>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_30%,var(--primary),transparent_35%)] blur-3xl opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_70%,var(--foreground),transparent_10%)] blur-3xl"></div>
    </section>
  );
}
