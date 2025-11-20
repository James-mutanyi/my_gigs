import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";
// API imports - uncomment when ready to connect to Django backend
// import { useState, useEffect } from "react";
// import { fetchFeaturedFreelancers, type Freelancer } from "@/lib/api";

// ============================================
// MOCK DATA - Replace with Django API call
// ============================================
// DJANGO BACKEND SETUP:
// 1. Create endpoint: GET /api/freelancers/?is_featured=true&page_size=4
// 2. In Django ViewSet, filter by is_featured=True field
// 3. Return serialized freelancer data with all required fields
// 4. When ready, uncomment the useEffect below to fetch from API

const featuredFreelancers = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    title: "Full Stack Developer",
    location: "Nairobi, Kenya",
    rating: 4.9,
    reviews: 127,
    completedJobs: 89,
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    avatar: "SW",
    yearsExperience: 5,
  },
  {
    id: 2,
    name: "Michael Ochieng",
    title: "UI/UX Designer",
    location: "Lagos, Nigeria",
    rating: 5.0,
    reviews: 94,
    completedJobs: 76,
    skills: ["Figma", "Adobe XD", "Prototyping", "Design Systems"],
    avatar: "MO",
    yearsExperience: 6,
  },
  {
    id: 3,
    name: "Grace Muthoni",
    title: "Content Writer & SEO Specialist",
    location: "Cape Town, South Africa",
    rating: 4.8,
    reviews: 156,
    completedJobs: 134,
    skills: ["SEO", "Copywriting", "Content Strategy", "Research"],
    avatar: "GM",
    yearsExperience: 4,
  },
  {
    id: 4,
    name: "David Kamau",
    title: "Mobile App Developer",
    location: "Accra, Ghana",
    rating: 4.9,
    reviews: 103,
    completedJobs: 82,
    skills: ["React Native", "iOS", "Android", "Firebase"],
    avatar: "DK",
    yearsExperience: 7,
  },
];

export const FeaturedFreelancers = () => {
  // ============================================
  // API INTEGRATION - Uncomment when ready
  // ============================================
  // const [freelancers, setFreelancers] = useState(featuredFreelancers); // Use mock data as fallback
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   async function loadFeaturedFreelancers() {
  //     try {
  //       setIsLoading(true);
  //       // Call Django API: GET /api/freelancers/?is_featured=true&page_size=4
  //       const data = await fetchFeaturedFreelancers();
  //       // The API returns an array of Freelancer objects
  //       // Transform if needed to match component interface
  //       setFreelancers(data);
  //     } catch (err) {
  //       console.error('Failed to fetch featured freelancers:', err);
  //       setError('Failed to load featured freelancers');
  //       // Keep using mock data on error
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   loadFeaturedFreelancers();
  // }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/30 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Freelancers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Meet top-rated professionals ready to bring your projects to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredFreelancers.map((freelancer) => (
            <Card
              key={freelancer.id}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-900 border-gray-200 dark:border-gray-800"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="pb-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-4">
                  {/* Enhanced Avatar */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {freelancer.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <CardTitle className="text-lg font-bold mb-1 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {freelancer.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {freelancer.title}
                  </p>
                </div>

                {/* Rating Display */}
                <div className="flex items-center justify-center gap-1 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-lg py-2 px-3 border border-amber-200 dark:border-amber-800">
                  <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span className="font-bold text-gray-900 dark:text-white">
                    {freelancer.rating}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    ({freelancer.reviews} reviews)
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 relative z-10">
                {/* Location */}
                <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg py-2 px-3">
                  <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                  {freelancer.location}
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  asChild
                >
                  <Link to={`/freelancer/${freelancer.id}`}>
                    View Profile
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/browse">View All Freelancers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
