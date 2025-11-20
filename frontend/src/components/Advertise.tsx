import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Targeted Reach",
    description: "Connect with the right audience across 47 African countries",
  },
  {
    icon: TrendingUp,
    title: "Boost Visibility",
    description: "Premium placement to showcase your services or job listings",
  },
  {
    icon: Users,
    title: "Growing Network",
    description: "Access to 10,000+ active freelancers and clients",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "Start getting responses within 24 hours of posting",
  },
];

export const Advertise = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-teal-500/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Advertise With Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              Reach thousands of talented freelancers and potential clients across Africa. 
              Boost your visibility and grow your business with our premium advertising options.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Basic Plan</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Perfect for startups</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">$49</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">/month</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    Featured listing
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    Up to 5 job posts
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    Basic analytics
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-orange-500 bg-white dark:bg-gray-900">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Premium Plan</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">For growing businesses</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">$99</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">/month</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    Priority featured listing
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    Unlimited job posts
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                    Dedicated support
                  </li>
                </ul>
                <Button variant="hero" className="w-full">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
