import { CreditCard, Users, GraduationCap, Building, Award, Percent } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Registration = () => {
  const registrationCategories = [
    {
      category: "Academicians/Faculty",
      fee: "₹1,000",
      icon: GraduationCap,
      color: "primary",
      description: "Academic staff and faculty members"
    },
    {
      category: "Industry Professionals",
      fee: "₹2,000",
      icon: Building,
      color: "secondary",
      description: "Industry experts and professionals"
    },
    {
      category: "Research Scholars",
      fee: "₹500",
      icon: Award,
      color: "accent",
      description: "PhD and research scholars"
    },
    {
      category: "PG Students",
      fee: "₹300",
      icon: Users,
      color: "conference-teal",
      description: "Postgraduate students"
    },
    {
      category: "UG Students",
      fee: "₹200",
      icon: Users,
      color: "conference-gold",
      description: "Undergraduate students"
    }
  ];

  const paymentDetails = [
    { label: "Bank Name", value: "Bank of Baroda" },
    { label: "Branch Name", value: "Tumkur" },
    { label: "Account Number", value: "74000100003149" },
    { label: "Account Type", value: "Saving" },
    { label: "IFSC Code", value: "BARB0VJTUMK" },
    { label: "MICR Code", value: "572012011" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'primary': 'from-primary/10 to-primary/5 border-primary/20',
      'secondary': 'from-secondary/10 to-secondary/5 border-secondary/20',
      'accent': 'from-accent/10 to-accent/5 border-accent/20',
      'conference-teal': 'from-conference-teal/10 to-conference-teal/5 border-conference-teal/20',
      'conference-gold': 'from-conference-gold/10 to-conference-gold/5 border-conference-gold/20'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getIconColor = (color: string) => {
    const iconColorMap = {
      'primary': 'text-primary',
      'secondary': 'text-secondary',
      'accent': 'text-accent',
      'conference-teal': 'text-conference-teal',
      'conference-gold': 'text-conference-gold'
    };
    return iconColorMap[color as keyof typeof iconColorMap] || iconColorMap.primary;
  };

  return (
    <section id="registration" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Registration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Register now to secure your participation in NCEAMBT 2025
          </p>
        </div>

        {/* Registration Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {registrationCategories.map((category, index) => {
            const IconComponent = category.icon;
            const gradientColors = [
              'from-blue-50 to-blue-100 border-blue-200',
              'from-purple-50 to-purple-100 border-purple-200',
              'from-green-50 to-green-100 border-green-200',
              'from-orange-50 to-orange-100 border-orange-200',
              'from-pink-50 to-pink-100 border-pink-200'
            ];
            const iconColors = [
              'text-blue-600',
              'text-purple-600',
              'text-green-600',
              'text-orange-600',
              'text-pink-600'
            ];
            const priceColors = [
              'text-blue-700',
              'text-purple-700',
              'text-green-700',
              'text-orange-700',
              'text-pink-700'
            ];

            return (
              <Card
                key={index}
                className={`relative overflow-hidden bg-gradient-to-br ${gradientColors[index]} border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md`}>
                    <IconComponent className={`${iconColors[index]}`} size={28} />
                  </div>

                  {/* Category */}
                  <h3 className="font-bold text-gray-800 mb-2 text-sm leading-tight">
                    {category.category}
                  </h3>

                  {/* Price */}
                  <div className={`text-3xl font-bold ${priceColors[index]} mb-3`}>
                    {category.fee}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Decorative element */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradientColors[index]} opacity-30 rounded-full -translate-y-10 translate-x-10`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Special Offer */}
        <div className="text-center mb-8">
          <Card className="card-conference bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <h3 className="text-2xl font-bold text-accent">Special Discount</h3>
              </div>
              <p className="text-lg text-foreground mb-4">
                <strong>50% Fee Waiver</strong> for SC/ST candidates
              </p>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Supporting Inclusive Education
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Registration Actions */}
        <div className="text-center mb-12">
          <a
            href="https://forms.gle/4qdeUiRbUCpaTs88A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-base px-8 py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/25"
            >
              Register Now
            </Button>
          </a>
        </div>

        {/* Payment Details */}
        <div className="max-w-3xl mx-auto">
          <Card className="card-conference">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-lg text-primary">
                <CreditCard className="text-primary" size={20} />
                <span>Payment Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-foreground mb-3">Bank Account Information</h4>
                  {paymentDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-muted/30 rounded-lg text-left">
                      <span className="font-medium text-foreground text-sm">{detail.label}:</span>
                      <span className="font-bold text-primary text-sm">{detail.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-base font-semibold text-foreground mb-3">Payment Instructions</h4>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <p>Payment details need to be filled in the registration form (Google Form)</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <p>Complete registration and submit camera ready paper on or before 10.09.2025</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <p>Accommodation will be available at nominal charges</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Registration;