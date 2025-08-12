import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRight, Layers, CheckCircle, Users } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#EFF5FF'}}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Manage projects simply
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                FlowBoardAI helps to get it done all at once.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <SignUpButton mode="modal">
                  <Button size="lg" className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white">
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </SignUpButton>
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-2xl">
              {/* Placeholder dashboard preview */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 w-full">
                <div className="bg-gray-800 h-8 sm:h-12 flex items-center px-2 sm:px-4">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex gap-4">
                    {/* Sidebar */}
                    <div className="w-32 md:w-40 lg:w-48 bg-gray-100 h-48 md:h-56 lg:h-64 rounded-md p-3 flex-shrink-0">
                      <div className="h-4 md:h-6 w-24 md:w-32 bg-gray-300 rounded mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-3 md:h-4 w-32 md:w-40 bg-gray-300 rounded"></div>
                        <div className="h-3 md:h-4 w-28 md:w-36 bg-gray-300 rounded"></div>
                        <div className="h-3 md:h-4 w-32 md:w-40 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    {/* Main content */}
                    <div className="flex-1">
                      <div className="h-6 md:h-8 w-48 md:w-64 bg-gray-300 rounded mb-6"></div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        <div className="h-24 md:h-32 bg-blue-100 rounded-md p-3">
                          <div className="h-3 md:h-4 w-12 md:w-16 bg-blue-200 rounded mb-2"></div>
                          <div className="space-y-1">
                            <div className="h-2 md:h-3 w-full bg-blue-200 rounded"></div>
                            <div className="h-2 md:h-3 w-full bg-blue-200 rounded"></div>
                          </div>
                        </div>
                        <div className="h-24 md:h-32 bg-yellow-100 rounded-md p-3">
                          <div className="h-3 md:h-4 w-12 md:w-16 bg-yellow-200 rounded mb-2"></div>
                          <div className="space-y-1">
                            <div className="h-2 md:h-3 w-full bg-yellow-200 rounded"></div>
                            <div className="h-2 md:h-3 w-full bg-yellow-200 rounded"></div>
                          </div>
                        </div>
                        <div className="h-24 md:h-32 bg-green-100 rounded-md p-3">
                          <div className="h-3 md:h-4 w-12 md:w-16 bg-green-200 rounded mb-2"></div>
                          <div className="space-y-1">
                            <div className="h-2 md:h-3 w-full bg-green-200 rounded"></div>
                            <div className="h-2 md:h-3 w-full bg-green-200 rounded"></div>
                          </div>
                        </div>
                        <div className="h-24 md:h-32 bg-purple-100 rounded-md p-3">
                          <div className="h-3 md:h-4 w-12 md:w-16 bg-purple-200 rounded mb-2"></div>
                          <div className="space-y-1">
                            <div className="h-2 md:h-3 w-full bg-purple-200 rounded"></div>
                            <div className="h-2 md:h-3 w-full bg-purple-200 rounded"></div>
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
       <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need to manage your projects</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               FlowBoardAI combines the best features of task management simply and easily.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <Card className="shadow-md" style={{backgroundColor: '#F3F4F6'}}>
               <CardContent className="p-8">
                 <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                   <Layers className="h-6 w-6 text-blue-600" />
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Flow Boards</h3>
                 <p className="text-gray-600">
                   Visualize your workflow with drag and drop updates
                 </p>
               </CardContent>
             </Card>

             <Card className="shadow-md" style={{backgroundColor: '#F3F4F6'}}>
               <CardContent className="p-8">
                 <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                   <CheckCircle className="h-6 w-6 text-red-600" />
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Task Management</h3>
                 <p className="text-gray-600">
                   Create tasks with descriptions, due dates, priorities, and subtasks to stay organized.
                 </p>
               </CardContent>
             </Card>
             
             <Card className="shadow-md" style={{backgroundColor: '#F3F4F6'}}>
               <CardContent className="p-8">
                 <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                   <Users className="h-6 w-6 text-green-600" />
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Collaboration</h3>
                 <p className="text-gray-600">
                   Invite team members into the task arena.
                 </p>
               </CardContent>
             </Card>
           </div>
         </div>
       </section>

       {/* CTA Section */}
      <section className="py-20 bg-gray-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start using FlowBoardAI to streamline your workflows and boost productivity.
          </p>
          <SignUpButton mode="modal">
            <Button size="lg" variant="secondary" className="text-blue-600">
              Create your free account
            </Button>
          </SignUpButton>
        </div>
        
      </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between">
             <div className="mb-8 md:mb-0">
               <span className="text-xl font-bold text-gray-900">FlowBoardAI</span>
               <p className="mt-2 text-gray-600 max-w-xs">
                 Get it all done all at once.
               </p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
               <div>
                 <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                   Product
                 </h3>
                 <ul className="space-y-2">
                   <li><Link href="#" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                 </ul>
               </div>
               <div>
                 <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                   Company
                 </h3>
                 <ul className="space-y-2">
                   <li><Link href="#" className="text-gray-600 hover:text-gray-900">About</Link></li>
                 </ul>
               </div>
               <div>
                 <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                   Support
                 </h3>
                 <ul className="space-y-2">
                   <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                 </ul>
               </div>
             </div>
           </div>
           <div className="mt-12 border-t border-gray-200 pt-8">
             <p className="text-gray-500 text-sm text-center">
               © {new Date().getFullYear()} FlowBoardAI. All rights reserved.
             </p>
           </div>
         </div>
       </footer>
    </div>
  );
}
