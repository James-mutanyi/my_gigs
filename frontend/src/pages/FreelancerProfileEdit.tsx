import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Briefcase, Award, MapPin, X, Plus, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { LocationSelect } from "@/components/LocationSelect";

const FreelancerProfileEdit = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState<string[]>(["React", "Node.js", "TypeScript"]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedConstituency, setSelectedConstituency] = useState("");
  const [selectedWard, setSelectedWard] = useState("");

  const addSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Send data to Django backend
    // PUT /api/freelancers/profile/update/
    
    toast({
      title: "Profile Updated!",
      description: "Your freelancer profile has been successfully updated",
    });
    
    navigate("/dashboard/freelancer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Edit Your Profile</h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Keep your profile updated to attract more clients and opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleSubmit}>
              <Tabs defaultValue="personal" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="professional">Professional</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                </TabsList>

                {/* Personal Info Tab */}
                <TabsContent value="personal" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        Personal Information
                      </CardTitle>
                      <CardDescription>
                        Your basic information visible to clients
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Profile Photo */}
                      <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                          SW
                        </div>
                        <div className="space-y-2">
                          <Button type="button" variant="outline" size="sm">
                            Upload Photo
                          </Button>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            JPG, PNG or GIF. Max size 2MB
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            defaultValue="Sarah"
                            required
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            defaultValue="Wanjiku"
                            required
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="title">Professional Title *</Label>
                        <Input
                          id="title"
                          placeholder="e.g., Full Stack Web Developer"
                          defaultValue="Full Stack Web Developer"
                          required
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tagline">Tagline</Label>
                        <Input
                          id="tagline"
                          placeholder="A brief catchy description"
                          defaultValue="Building exceptional digital experiences"
                          className="h-11"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio *</Label>
                        <Textarea
                          id="bio"
                          rows={5}
                          placeholder="Tell clients about yourself, your experience, and what you can offer..."
                          defaultValue="Experienced full-stack developer with 6+ years building scalable web applications..."
                          required
                          className="resize-none"
                        />
                        <p className="text-xs text-muted-foreground">
                          Minimum 100 characters recommended
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue="sarah.w@example.com"
                            required
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+254 712 345 678"
                            defaultValue="+254 712 345 678"
                            required
                            className="h-11"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Location Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Location
                      </CardTitle>
                      <CardDescription>
                        Select your location from our database
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <LocationSelect
                        selectedCounty={selectedCounty}
                        selectedConstituency={selectedConstituency}
                        selectedWard={selectedWard}
                        onCountyChange={(id, name) => setSelectedCounty(id)}
                        onConstituencyChange={(id, name) => setSelectedConstituency(id)}
                        onWardChange={(id, name) => setSelectedWard(id)}
                        required
                      />
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Professional Tab */}
                <TabsContent value="professional" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        Professional Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="category">Category *</Label>
                          <Select required>
                            <SelectTrigger id="category" className="h-11">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent className="bg-popover z-50">
                              <SelectItem value="web-dev">Web Development</SelectItem>
                              <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                              <SelectItem value="design">Graphic Design</SelectItem>
                              <SelectItem value="writing">Content Writing</SelectItem>
                              <SelectItem value="carpenter">Carpentry</SelectItem>
                              <SelectItem value="teacher">Teaching</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="hourlyRate">Hourly Rate (USD) *</Label>
                          <Input
                            id="hourlyRate"
                            type="number"
                            placeholder="35"
                            defaultValue="35"
                            required
                            className="h-11"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="experience">Years of Experience *</Label>
                          <Select required>
                            <SelectTrigger id="experience" className="h-11">
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                            <SelectContent className="bg-popover z-50">
                              <SelectItem value="0-1">Less than 1 year</SelectItem>
                              <SelectItem value="1-3">1-3 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="5-10">5-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="availability">Availability *</Label>
                          <Select required>
                            <SelectTrigger id="availability" className="h-11">
                              <SelectValue placeholder="Select availability" />
                            </SelectTrigger>
                            <SelectContent className="bg-popover z-50">
                              <SelectItem value="full-time">Full-time</SelectItem>
                              <SelectItem value="part-time">Part-time</SelectItem>
                              <SelectItem value="weekends">Weekends only</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent value="skills" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Skills & Expertise
                      </CardTitle>
                      <CardDescription>
                        Add skills that match your expertise
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="skills">Add Skills</Label>
                        <div className="flex gap-2">
                          <Input
                            id="skills"
                            placeholder="Type a skill and press Enter or +"
                            value={currentSkill}
                            onChange={(e) => setCurrentSkill(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                addSkill();
                              }
                            }}
                            className="h-11"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={addSkill}
                            className="h-11 w-11"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {skills.length > 0 && (
                        <div>
                          <Label className="mb-3 block">Your Skills</Label>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="px-3 py-2 text-sm">
                                {skill}
                                <button
                                  type="button"
                                  onClick={() => removeSkill(skill)}
                                  className="ml-2 hover:text-destructive"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Portfolio Tab */}
                <TabsContent value="portfolio" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Portfolio & Work Samples</CardTitle>
                      <CardDescription>
                        Showcase your best work (Coming soon - will integrate with file upload)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-12 text-muted-foreground">
                        Portfolio upload feature will be available soon
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-end pt-6 sticky bottom-4 bg-background/80 backdrop-blur-sm border-t p-4 rounded-lg">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/dashboard/freelancer")}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="hero" size="lg">
                  <Save className="mr-2 h-4 w-4" />
                  Save Profile
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FreelancerProfileEdit;
