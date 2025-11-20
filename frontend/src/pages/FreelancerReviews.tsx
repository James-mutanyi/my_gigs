import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReviewCard, Review } from "@/components/ReviewCard";
import { ReviewForm } from "@/components/ReviewForm";
import { ReviewStats } from "@/components/ReviewStats";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
// API imports - uncomment when ready to connect to Django backend
// import { useEffect } from "react";
// import { fetchReviewsByFreelancer, createReview, markReviewHelpful, addReviewReply } from "@/lib/api";

// ============================================
// MOCK DATA - Replace with Django API call
// ============================================
// DJANGO BACKEND SETUP:
// 1. Create Review model with fields: freelancer (FK), client, rating, content, helpful_count, created_at
// 2. Create ReviewReply model with fields: review (OneToOne), content, created_at
// 3. Create nested endpoint: /api/freelancers/{id}/reviews/
// 4. Add custom actions: mark_helpful and add_reply
// 5. When ready, uncomment the useEffect below to fetch from API

const mockReviews: Review[] = [
  {
    id: "1",
    author: "Sarah Wanjiku",
    authorInitials: "SW",
    role: "Marketing Manager",
    rating: 5,
    date: "2 days ago",
    content: "Absolutely fantastic work! The project was delivered ahead of schedule and exceeded all expectations. Communication was excellent throughout, and the quality is outstanding. Highly recommended!",
    helpful: 24,
    verified: true,
    replies: [
      {
        id: "r1",
        author: "John Doe",
        authorInitials: "JD",
        date: "1 day ago",
        content: "Thank you so much for the kind words, Sarah! It was a pleasure working with you on this project. Looking forward to our next collaboration!",
      },
    ],
  },
  {
    id: "2",
    author: "Michael Ochieng",
    authorInitials: "MO",
    role: "Startup Founder",
    rating: 5,
    date: "1 week ago",
    content: "Best freelancer I've worked with on this platform. Very professional, responsive, and delivers high-quality work. Will definitely hire again!",
    helpful: 18,
    verified: true,
    replies: [],
  },
  {
    id: "3",
    author: "Grace Muthoni",
    authorInitials: "GM",
    role: "E-commerce Business Owner",
    rating: 4,
    date: "2 weeks ago",
    content: "Great experience overall. The work was solid and delivered on time. Minor revisions were needed, but they were handled promptly and professionally.",
    helpful: 12,
    verified: true,
    replies: [
      {
        id: "r2",
        author: "John Doe",
        authorInitials: "JD",
        date: "2 weeks ago",
        content: "Thank you for your feedback, Grace! I'm glad we could get everything perfect for you. Appreciate your patience during the revision process.",
      },
    ],
  },
];

const FreelancerReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  
  // ============================================
  // API INTEGRATION - Uncomment when ready
  // ============================================
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  
  // Step 1: Fetch reviews for this freelancer on mount
  // useEffect(() => {
  //   async function loadReviews() {
  //     if (!id) return;
  //     try {
  //       setIsLoading(true);
  //       // Call Django API: GET /api/freelancers/{id}/reviews/
  //       const data = await fetchReviewsByFreelancer(parseInt(id));
  //       // Transform API response to match Review interface if needed
  //       setReviews(data);
  //     } catch (err) {
  //       console.error('Failed to fetch reviews:', err);
  //       setError('Failed to load reviews');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   loadReviews();
  // }, [id]);
  
  // Calculate stats
  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
  const ratingDistribution = reviews.reduce((acc, review) => {
    acc[review.rating as keyof typeof acc]++;
    return acc;
  }, { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });

  const handleSubmitReview = (rating: number, content: string) => {
    // ============================================
    // API INTEGRATION - Uncomment when ready
    // ============================================
    // async function submitReview() {
    //   if (!id) return;
    //   try {
    //     // Call Django API: POST /api/freelancers/{id}/reviews/
    //     const newReview = await createReview(parseInt(id), { rating, content });
    //     // Add the new review to the list
    //     setReviews([newReview, ...reviews]);
    //     toast({
    //       title: "Review submitted",
    //       description: "Thank you for your feedback!",
    //     });
    //   } catch (error) {
    //     console.error('Failed to submit review:', error);
    //     toast({
    //       title: "Error",
    //       description: "Failed to submit review. Please try again.",
    //       variant: "destructive",
    //     });
    //   }
    // }
    // submitReview();
    
    // MOCK implementation (remove when using API)
    const newReview: Review = {
      id: Date.now().toString(),
      author: "Anonymous User", // In production, get from user session
      authorInitials: "AU",
      role: "Client",
      rating,
      content,
      date: "Just now",
      helpful: 0,
      verified: false,
      replies: [],
    };
    
    setReviews([newReview, ...reviews]);
    
    
    toast({
      title: "Review submitted",
      description: "Thank you for your feedback!",
    });
  };

  const handleReply = (reviewId: string, content: string) => {
    setReviews(reviews.map(review =>
      review.id === reviewId
        ? {
            ...review,
            replies: [{
              id: Date.now().toString(),
              author: "John Doe",
              authorInitials: "JD",
              date: "Just now",
              content,
            }]
          }
        : review
    ));
  };

  const handleHelpful = (reviewId: string) => {
    setReviews(reviews.map(review =>
      review.id === reviewId
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ));
    
    toast({
      title: "Thank you!",
      description: "Your feedback has been recorded.",
    });
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button variant="ghost" className="mb-6 gap-2" asChild>
            <Link to={`/freelancer/${id}`}>
              <ArrowLeft className="h-4 w-4" />
              Back to Profile
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
              Client Reviews
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Real feedback from clients who have worked with this freelancer
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Stats & Write Review */}
            <div className="lg:col-span-1 space-y-6">
              <ReviewStats
                totalReviews={totalReviews}
                averageRating={averageRating}
                ratingDistribution={ratingDistribution}
              />
              
              <ReviewForm onSubmit={handleSubmitReview} />
            </div>

            {/* Right Column - Reviews List */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                All Reviews ({reviews.length})
              </h2>
              
              {reviews.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  No reviews yet. Be the first to review!
                </div>
              ) : (
                reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    onReply={handleReply}
                    onHelpful={handleHelpful}
                    showReplyButton={true}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FreelancerReviews;