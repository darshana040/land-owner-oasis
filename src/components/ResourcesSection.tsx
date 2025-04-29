
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ResourcesSection = () => {
  const resources = [
    {
      title: "Understanding Property Zoning Regulations",
      description: "Learn about different zoning categories and how they impact property usage and value.",
      category: "Legal",
      readTime: "8 min read"
    },
    {
      title: "Guide to Property Taxes and Assessments",
      description: "Everything you need to know about how property taxes are calculated and how assessments work.",
      category: "Finance",
      readTime: "12 min read"
    },
    {
      title: "Land Survey Basics for Property Owners",
      description: "Understanding survey maps, boundary lines, and why surveys are important when buying property.",
      category: "Education",
      readTime: "10 min read"
    },
    {
      title: "Real Estate Investment Strategies",
      description: "Exploring different approaches to maximize your return on investment in the property market.",
      category: "Investment",
      readTime: "15 min read"
    }
  ];

  return (
    <div className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold text-estate-primary">Helpful Resources</h2>
          <p className="mt-2 text-muted-foreground">Explore our collection of guides and articles about real estate</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge>{resource.category}</Badge>
                  <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                </div>
                <CardTitle className="font-serif mt-2 text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{resource.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-estate-primary hover:text-estate-secondary font-medium text-sm flex items-center">
                  Read Article
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-estate-primary hover:text-estate-secondary font-medium">
            View all resources
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
