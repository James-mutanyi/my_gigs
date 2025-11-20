import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Star,
  Mail,
  Phone,
  Briefcase,
  Calendar,
  Award,
  FileText,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
// API imports - uncomment when ready to connect to Django backend
// import { useState, useEffect } from "react";
// import { fetchFreelancerById, type Freelancer } from "@/lib/api";

// ============================================
// MOCK DATA - Replace with Django API call
// ============================================
// DJANGO: Create endpoint GET /api/freelancers/{id}/
// When ready, fetch freelancer data in useEffect and display dynamically

const FreelancerProfile = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                    TA
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                        Team Allegiance
                      </h1>
                      <p className="text-xl text-gray-600 dark:text-gray-400 mb-3">
                        Full Stack Web Developer
                      </p>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 fill-yellow-500 text-yellow-500 mr-1" />
                          <span className="font-semibold text-lg text-gray-900 dark:text-white">
                            4.9
                          </span>
                          <span className="text-gray-600 dark:text-gray-400 ml-1">
                            (127 reviews)
                          </span>
                        </div>
                        <Separator orientation="vertical" className="h-6" />
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-1" />
                          Nairobi, Kenya
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="hero" size="lg">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Hire Me
                      </Button>
                      <Button variant="outline" size="lg">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* About */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    About Me
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I'm a passionate full-stack web developer with over 5 years
                    of experience building modern, scalable web applications. I
                    specialize in React, Node.js, and TypeScript, and I love
                    creating solutions that solve real-world problems. My goal
                    is to deliver high-quality work that exceeds client
                    expectations.
                  </p>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Skills & Expertise
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Node.js",
                      "TypeScript",
                      "Next.js",
                      "PostgreSQL",
                      "MongoDB",
                      "REST APIs",
                      "GraphQL",
                      "AWS",
                      "Docker",
                      "Git",
                      "Tailwind CSS",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Client Reviews</h2>
                    <Button variant="hero" asChild>
                      <Link to={`/freelancer/${id}/reviews`}>
                        Leave a Review
                      </Link>
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="border-b last:border-0 pb-4 last:pb-0"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-semibold">
                              C{i}
                            </div>
                            <div>
                              <h4 className="font-semibold">Client Name {i}</h4>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className="h-3 w-3 fill-accent text-accent"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {i} week ago
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Excellent work! Very professional and delivered on
                          time. Would definitely work with Sarah again. Highly
                          recommended!
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">team@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">+254 712 345 678</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Member since Jan 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certifications
                  </h3>
                  <div className="space-y-3">
                    {[
                      "AWS Certified Developer",
                      "Meta Frontend Developer",
                      "Google UX Design",
                    ].map((cert) => (
                      <div
                        key={cert}
                        className="flex items-start gap-2 p-2 bg-muted/50 rounded-lg"
                      >
                        <FileText className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FreelancerProfile;
