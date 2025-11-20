import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewForm } from "@/components/ReviewForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// API imports - uncomment when ready to connect to Django backend
// import { useEffect } from "react";
// import { fetchTestimonials, createTestimonial, type Testimonial } from "@/lib/api";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  location?: string;
  content: string;
  rating: number;
  avatar: string;
}


// ============================================
// MOCK DATA - Replace with Django API call
// ============================================
// DJANGO BACKEND SETUP:
// 1. Create Testimonial model with fields: name, role, company, location, content, rating, avatar, is_approved
// 2. Create endpoint: GET /api/testimonials/ (filter by is_approved=True for public display)
// 3. Create endpoint: POST /api/testimonials/ (to submit new testimonials)
// 4. Add admin moderation for is_approved field
// 5. When ready, uncomment the useEffect below to fetch from API

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amara Okafor",
    role: "Marketing Director",
    company: "TechVentures Nigeria",
    content: "MyGigs Africa has revolutionized how we find talent. The quality of freelancers is exceptional, and the platform makes everything seamless!",
    rating: 5,
    avatar: "AO",
  },
  {
    id: 2,
    name: "David Kamau",
    role: "Freelance Developer",
    location: "Nairobi, Kenya",
    content: "As a freelancer, MyGigs Africa has connected me with amazing clients across Africa. My income has tripled and the opportunities keep coming!",
    rating: 5,
    avatar: "DK",
  },
  {
    id: 3,
    name: "Fatima Hassan",
    role: "Content Creator",
    location: "Cairo, Egypt",
    content: "The platform is incredibly user-friendly. I've built a solid client base in just 3 months, and the payment options are flexible and secure.",
    rating: 5,
    avatar: "FH",
  },
];

export const PlatformTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ============================================
  // API INTEGRATION - Uncomment when ready
  // ============================================
  // const [isLoading, setIsLoading] = useState(false);
  
  // Step 1: Fetch approved testimonials on mount
  // useEffect(() => {
  //   async function loadTestimonials() {
  //     try {
  //       setIsLoading(true);
  //       // Call Django API: GET /api/testimonials/ (returns only is_approved=True)
  //       const data = await fetchTestimonials();
  //       setTestimonials(data);
  //     } catch (error) {
  //       console.error('Failed to fetch testimonials:', error);
  //       // Keep using mock data on error
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   loadTestimonials();
  // }, []);

  const handleSubmitReview = (rating: number, content: string) => {
    // ============================================
    // API INTEGRATION - Uncomment when ready
    // ============================================
    // async function submitTestimonial() {
    //   try {
    //     // Call Django API: POST /api/testimonials/
    //     // In production, get name from authenticated user context
    //     const newTestimonial = await createTestimonial({
    //       name: "User Name", // Get from auth context
    //       content,
    //       rating,
    //     });
    //     // Note: New testimonial won't appear until admin approves (is_approved=True)
    //     setIsDialogOpen(false);
    //     // Show success message
    //     console.log('Testimonial submitted for review');
    //   } catch (error) {
    //     console.error('Failed to submit testimonial:', error);
    //   }
    // }
    // submitTestimonial();
    
    // MOCK implementation (remove when using API)
    const newTestimonial: Testimonial = {
      id: Date.now(),
      name: "Anonymous User", // In production, get from user session
      role: "Platform User",
      content,
      rating,
      avatar: "AU",
    };
    
    setTestimonials([newTestimonial, ...testimonials]);
    setIsDialogOpen(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Community Says
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Join thousands of satisfied clients and freelancers across Africa
          </p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">{averageRating}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              ({testimonials.length} reviews)
            </span>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="default" size="lg" className="gap-2">
                <Plus className="h-5 w-5" />
                Share Your Experience
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Share Your MyGigs Africa Experience</DialogTitle>
              </DialogHeader>
              <ReviewForm
                onSubmit={handleSubmitReview}
                title="Your Platform Review"
                description="Help others discover MyGigs Africa by sharing your experience"
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-primary/10">
                    <CardContent className="pt-8 pb-8">
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-900 dark:text-white text-center text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-semibold ring-4 ring-primary/20">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-lg text-gray-900 dark:text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                            {testimonial.company && `, ${testimonial.company}`}
                            {testimonial.location && ` • ${testimonial.location}`}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full shadow-lg hover:scale-110 transition-transform bg-white dark:bg-gray-900"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full shadow-lg hover:scale-110 transition-transform bg-white dark:bg-gray-900"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};