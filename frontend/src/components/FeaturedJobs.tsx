import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign } from "lucide-react";
// API imports - uncomment when ready to connect to Django backend
// import { useState, useEffect } from "react";
// import { fetchFeaturedJobs, type Job } from "@/lib/api";

// ============================================
// MOCK DATA - Replace with Django API call
// ============================================
// DJANGO BACKEND SETUP:
// 1. Create Job model with fields: title, company, location, type, budget, skills (JSONField), is_featured
// 2. Create endpoint: GET /api/jobs/?is_featured=true&page_size=4
// 3. Add posted_time_ago() method to calculate "X days ago" from created_at timestamp
// 4. When ready, uncomment the useEffect below to fetch from API

const jobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Solutions Kenya",
    location: "Nairobi, Kenya",
    type: "Full-time",
    budget: "$2,000 - $3,500/mo",
    skills: ["React", "Node.js", "MongoDB"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Agency Lagos",
    location: "Lagos, Nigeria",
    type: "Contract",
    budget: "$1,500 - $2,500/mo",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    posted: "1 day ago",
  },
  {
    id: 3,
    title: "Content Writer",
    company: "Marketing Hub SA",
    location: "Cape Town, South Africa",
    type: "Part-time",
    budget: "$800 - $1,200/mo",
    skills: ["SEO", "Copywriting", "Research"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "StartUp Ghana",
    location: "Accra, Ghana",
    type: "Contract",
    budget: "$2,500 - $4,000/mo",
    skills: ["React Native", "iOS", "Android"],
    posted: "1 day ago",
  },
];

export const FeaturedJobs = () => {
  // ============================================
  // API INTEGRATION - Uncomment when ready
  // ============================================
  // const [jobsList, setJobsList] = useState(jobs); // Use mock data as fallback
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  
  // useEffect(() => {
  //   async function loadFeaturedJobs() {
  //     try {
  //       setIsLoading(true);
  //       // Call Django API: GET /api/jobs/?is_featured=true&page_size=4
  //       const data = await fetchFeaturedJobs();
  //       // The API returns an array of Job objects
  //       setJobsList(data);
  //     } catch (err) {
  //       console.error('Failed to fetch featured jobs:', err);
  //       setError('Failed to load featured jobs');
  //       // Keep using mock data on error
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   loadFeaturedJobs();
  // }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Jobs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the latest opportunities from top companies across Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{job.type}</Badge>
                  <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
                <CardTitle className="text-xl mb-2 text-gray-900 dark:text-white">{job.title}</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">{job.company}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm font-medium text-orange-500">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {job.budget}
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">{job.posted}</p>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};
