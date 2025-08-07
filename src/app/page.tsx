import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRight, Layers, CheckCircle, Users } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Manage projects simply
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                FlowBoardAI helps to get it done all at once.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <SignUpButton mode="modal">
                  <Button size="lg" className="flex items-center gap-2">
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </SignUpButton>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-2xl">
              {/* Placeholder dashboard preview */}
              <div className="bg-background rounded-lg shadow-xl overflow-hidden border border-border w-full">
                <div className="bg-secondary h-8 sm:h-12 flex items-center px-2 sm:px-4">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-2 sm:p-4">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                    {/* Sidebar */}
                    <div className="w-full sm:w-32 md:w-40 lg:w-48 bg-secondary/50 h-32 sm:h-48 md:h-56 lg:h-64 rounded-md p-2 sm:p-3 flex-shrink-0">
                      <div className="h-3 sm:h-4 md:h-6 w-16 sm:w-24 md:w-32 bg-secondary rounded mb-2 sm:mb-4"></div>
                      <div className="space-y-1 sm:space-y-2">
                        <div className="h-2 sm:h-3 md:h-4 w-20 sm:w-32 md:w-40 bg-secondary rounded"></div>
                        <div className="h-2 sm:h-3 md:h-4 w-16 sm:w-28 md:w-36 bg-secondary rounded"></div>
                        <div className="h-2 sm:h-3 md:h-4 w-20 sm:w-32 md:w-40 bg-secondary rounded"></div>
                      </div>
                    </div>
                    {/* Main content */}
                    <div className="flex-1 p-2 sm:p-4">
                      <div className="h-4 sm:h-6 md:h-8 w-32 sm:w-48 md:w-64 bg-secondary/60 rounded mb-3 sm:mb-6"></div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                        <div className="h-20 sm:h-24 md:h-32 bg-blue-500/20 rounded-md p-2 sm:p-3">
                          <div className="h-2 sm:h-3 md:h-4 w-8 sm:w-12 md:w-16 bg-blue-500/40 rounded mb-1 sm:mb-2"></div>
                          <div className="space-y-1 sm:space-y-2">
                            <div className="h-1.5 sm:h-2 md:h-3 w-full bg-blue-500/40 rounded"></div>
                            <div className="h-1.5 sm:h-2 md:h-3 w-full bg-blue-500/40 rounded"></div>
                          </div>
                        </div>
                        <div className="h-20 sm:h-24 md:h-32 bg-yellow-500/20 rounded-md p-2 sm:p-3">
                          <div className="h-2 sm:h-3 md:h-4 w-8 sm:w-12 md:w-16 bg-yellow-500/40 rounded mb-1 sm:mb-2"></div>
                          <div className="space-y-1 sm:space-y-2">
                            <div className="h-1.5 sm:h-2 md:h-3 w-full bg-yellow-500/40 rounded"></div>
                            <div className="h-1.5 sm:h-2 md:h-3 w-full bg-yellow-500/40 rounded"></div>
                          </div>
                        </div>
                        <div className="h-20 sm:h-24 md:h-32 bg-green-500/20 rounded-md p-2 sm:p-3">
                          <div className="h-2 sm:h-3 md:h-4 w-8 sm:w-12 md:w-16 bg-green-500/40 rounded mb-1 sm:mb-2"></div>
                          <div className="space-y-1 sm:space-y-2">
                            <div className="h-1.5 sm:h-2 md:h-3 w-full bg-green-500/40 rounded"></div>
                            <div className="h-1.5 sm:h-2 md:h-3 w-full bg-green-500/40 rounded"></div>
                          </div>
                        </div>
                        <div className="h-20 sm:h-24 md:h-32 bg-purple-500/20 rounded-md p-2 sm:p-3">
                          <div className="h-2 sm:h-3 md:h-4 w-8 sm:w-12 md:w-16 bg-purple-500/40 rounded mb-1 sm:mb-2"></div>
                          <div className="space-y-1 sm:space-y-2">
                            <div className="h-1.5 sm:h-2 md:h-3 w-full bg-purple-500/40 rounded"></div>
                            <div className="h-1.5 sm:h-2 md:h-3 w-full bg-purple-500/40 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Everything you need to manage your projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              FlowBoardAI combines the best features of task management simply and easily.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Flow Boards</h3>
              <p className="text-muted-foreground">
                Visualize your workflow with drag and drop updates
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="bg-red-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Task Management</h3>
              <p className="text-muted-foreground">
                Create tasks with descriptions, due dates, priorities, and subtasks to stay organized.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
              <div className="bg-green-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Invite team members into the task arena.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Footer */}
       <footer className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <span className="text-xl font-bold text-foreground">FlowBoardAI</span>
              <p className="mt-2 text-muted-foreground max-w-xs">
                Get it all done all at once.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                  Product
                </h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                  Support
                </h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8">
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} FlowBoardAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
