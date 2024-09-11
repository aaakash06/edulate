import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, Brain, School, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-poppins">
      <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center font-poppins text-lg">
          {/* <Link
            href="/"
            className="text-4xl font-spaceGrotesk  font-bold text-gray-900"
          >
            Edulate
          </Link> */}
          <div className="relative w-40 h-[10rem] ">
            <Image
              alt="logo"
              className="invert object-cover"
              src={"/logo/edulate.png"}
              fill
            ></Image>
          </div>

          <nav className="hidden md:flex space-x-4">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link
              href="#bootcamps"
              className="text-gray-600 hover:text-gray-900"
            >
              Bootcamps
            </Link>
            <Link
              href="#benefits"
              className="text-gray-600 hover:text-gray-900"
            >
              Benefits
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <Button>Get Started</Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 font-spaceGrotesk">
              Empower Your Students with Tech Skills
            </h1>
            <p className="text-xl  text-gray-600 mb-8 max-w-2xl mx-auto">
              We bring cutting-edge Web Development and Machine Learning
              bootcamps directly to schools, preparing students for the future
              of technology.
            </p>
            <Button size="lg">Learn More</Button>
          </div>
        </section>

        <section id="bootcamps" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-spaceGrotesk font-extrabold text-gray-900 mb-8 text-center">
              Our Bootcamps
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Code className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Web Development Bootcamp
                  </h3>
                  <p className="text-gray-600">
                    Learn HTML, CSS, JavaScript, and modern frameworks to build
                    responsive and dynamic websites.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Brain className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Machine Learning Bootcamp
                  </h3>
                  <p className="text-gray-600">
                    Dive into data science, Python, and machine learning
                    algorithms to solve real-world problems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="benefits"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-spaceGrotesk font-extrabold text-gray-900 mb-8 text-center">
              Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <School className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">For Schools</h3>
                <p className="text-gray-600">
                  Enhance your curriculum with industry-relevant tech education.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">For Students</h3>
                <p className="text-gray-600">
                  Gain practical skills and prepare for high-demand tech
                  careers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BookOpen className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Hands-on Learning
                </h3>
                <p className="text-gray-600">
                  Work on real projects and build a portfolio during the
                  bootcamp.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-spaceGrotesk font-extrabold text-gray-900 mb-8 text-center">
              What Schools Say
            </h2>
            <blockquote className="text-xl italic text-gray-600 text-center max-w-3xl mx-auto">
              "TechEd Bootcamps has transformed our computer science program.
              Our students are now building impressive projects and landing
              internships at top tech companies."
              <footer className="mt-4 text-gray-500">
                - Sarah Johnson, Principal at Tech High School
              </footer>
            </blockquote>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-spaceGrotesk font-extrabold  text-gray-900 mb-4">
              Ready to bring tech education to your school?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us today to learn more about our bootcamp programs.
            </p>
            <Button size="lg">Get in Touch</Button>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            &copy; 2023 TechEd Bootcamps. All rights reserved.
          </div>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
