import React from 'react';
import { MapPin, Phone, Mail, User, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact: React.FC = () => {
  const contactPersons = [
    {
      name: "K S Lingadevarappa",
      role: "HOD",
      phone: "9632246106",
      icon: User
    },
    {
      name: "Mamatha M",
      role: "Coordinator",
      phone: "7892605749",
      icon: User
    },
    {
      name: "Sowjanya G",
      role: "Co-coordinator",
      phone: "9738120370",
      icon: User
    }
  ];

  const supportContacts = [
    {
      name: "Sowmya L",
      role: "Registration Support",
      phone: "9480112873",
      color: "primary"
    },
    {
      name: "Shruthi P",
      role: "Technical Support",
      phone: "8970599606",
      color: "secondary"
    },
    {
      name: "Uday Kumar",
      role: "Accommodation Support",
      phone: "9620455342",
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'primary': 'from-primary/10 to-primary/5 border-primary/20',
      'secondary': 'from-secondary/10 to-secondary/5 border-secondary/20',
      'accent': 'from-accent/10 to-accent/5 border-accent/20'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getIconColor = (color: string) => {
    const iconColorMap = {
      'primary': 'text-primary',
      'secondary': 'text-secondary',
      'accent': 'text-accent'
    };
    return iconColorMap[color as keyof typeof iconColorMap] || iconColorMap.primary;
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact & Venue
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for any inquiries about the conference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Venue Information */}
          <div className="space-y-8">
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl text-primary">
                  <MapPin className="text-primary" size={28} />
                  <span>Venue</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    Sree Siddaganga College of Arts, Science & Commerce
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-start space-x-2">
                      <MapPin size={16} className="mt-1 flex-shrink-0" />
                      <span>B.H. Road, Tumakuru, Karnataka – 572102</span>
                    </p>
                    <p className="flex items-start space-x-2">
                      <Mail size={16} className="mt-1 flex-shrink-0" />
                      <span>sscasc.cs.conference@gmail.com</span>
                    </p>
                  </div>
                </div>

                {/* Conference Dates */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="text-accent" size={20} />
                    <h4 className="font-semibold text-foreground">Conference Dates</h4>
                  </div>
                  <p className="text-lg font-bold text-primary">26th & 27th September 2025</p>
                </div>
              </CardContent>
            </Card>

            {/* Main Organizers */}
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl text-secondary">
                  <User className="text-secondary" size={24} />
                  <span>Conference Organizers</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactPersons.map((person, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-secondary/20 rounded-full">
                          <person.icon className="text-secondary" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{person.name}</h4>
                          <p className="text-sm text-muted-foreground">{person.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="text-accent" size={16} />
                        <span className="font-mono text-sm text-foreground">{person.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="text-xl text-conference-teal">Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-conference-teal rounded-full mt-2 flex-shrink-0"></div>
                    <p>Visit our website: <a href="https://www.sscasc.in" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.sscasc.in</a></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-conference-teal rounded-full mt-2 flex-shrink-0"></div>
                    <p>All submissions must be sent before 25.08.2025</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-conference-teal rounded-full mt-2 flex-shrink-0"></div>
                    <p>Accommodation available at nominal charges</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-conference-teal rounded-full mt-2 flex-shrink-0"></div>
                    <p>Free transportation from nearby bus/railway stations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Contacts */}
          <div className="space-y-8">
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl text-accent">
                  <Phone className="text-accent" size={24} />
                  <span>Support Contacts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportContacts.map((contact, index) => (
                    <Card 
                      key={index} 
                      className={`bg-gradient-to-br ${getColorClasses(contact.color)} border`}
                    >
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className={`p-3 rounded-full w-fit mx-auto mb-4 bg-background/50`}>
                            <Phone className={`${getIconColor(contact.color)}`} size={24} />
                          </div>
                          <h4 className="font-bold text-foreground mb-1">{contact.name}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{contact.role}</p>
                          <div className="flex items-center justify-center space-x-2">
                            <Phone size={16} className={getIconColor(contact.color)} />
                            <span className="font-mono text-foreground">{contact.phone}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Compact Location Map */}
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl text-primary">
                  <MapPin className="text-primary" size={24} />
                  <span>Location Map</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.2006712127272!2d77.10022889999999!3d13.337789899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02e9cd672b2b3%3A0xfe581168b98e181!2sSree%20Siddaganga%20College%20of%20Arts%20Science%20and%20Commerce!5e0!3m2!1sen!2sin!4v1752818622086!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{border: 0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-muted-foreground">
                    Sree Siddaganga College, Tumakuru
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;