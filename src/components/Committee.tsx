import { Crown, Star, Users, Mic } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Committee = () => {
  const keynoteData = [
    {
      name: "Dr. Shreedhara K S",
      title: "Professor of CSE",
      institution: "University BDT College of Engineering, Davanagere, Karnataka"
    },
    {
      name: "Dr. Dilip Kumar S M",
      title: "Professor in Computer Science Engineering",
      institution: "University Visvesvaraya College of Engineering, Bangalore"
    },
    {
      name: "Dr. Mahesha BR Pandit",
      title: "Chief Technology Officer",
      institution: "Canarys Automations Limited, Bangalore"
    },
    {
      name: "Dr. M A Rajan",
      title: "Principal Scientist, Applied Cryptography Group",
      institution: "Tata Consultancy Services, Bangalore"
    }
  ];

  const advisoryCommittee = [
    {
      name: "Dr. Dileep A.D.",
      title: "Professor, Dept. of Computer Science and Engineering & Dean Administration",
      institution: "Indian Institute of Technology, Dharwad"
    },
    {
      name: "Dr. R. Padmavathy",
      title: "Professor & Former HoD, Dept. of Computer Science and Engineering",
      institution: "National Institute of Technology, Warangal"
    },
    {
      name: "Dr. Deepak K.T.",
      title: "Associate Dean - Research and Development [R&D]",
      institution: "Indian Institute of Information Technology, Dharwad"
    },
    {
      name: "Dr. Sunil Saumya",
      title: "Associate Dean (Academics)",
      institution: "Indian Institute of Information Technology, Dharwad"
    },
    {
      name: "Dr. Jaisankar N.",
      title: "Professor, Higher Academic Grade, School of Computer Science and Engineering, Dept. of Software Systems",
      institution: "VIT, Vellore"
    },
    {
      name: "Dr. B. Surendiran",
      title: "Asso. Professor, Dept of CSE",
      institution: "NIT Puducherry, Thiruvettakudy, Karaikal, Puducherry"
    },
    {
      name: "Prof. P. Paramashivaiah",
      title: "Professor, Dept. of Commerce and Management",
      institution: "Tumkur University"
    },
    {
      name: "Dr. Premasudha B.G.",
      title: "HOD, Dept. of MCA",
      institution: "SIT, Tumakuru"
    },
    {
      name: "Dr. Sunitha N.R.",
      title: "HOD, Dept. of Computer Science and Engineering",
      institution: "SIT, Tumakuru"
    }
  ];

  const organizingCommittee = [
    {
      name: "Dr. H M Dakshina Murthy",
      title: "Principal",
      institution: "Sree Siddaganga College of Arts, Science and Commerce for Women, Tumakuru"
    },
    {
      name: "Dr. H S Jayanna",
      title: "Dean (Academic)",
      institution: "SIT, Tumakuru"
    },
    {
      name: "Dr. R Aparna",
      title: "Professor & HOD, Dept. of Information Science and Engineering",
      institution: "SIT, Tumakuru"
    },
    {
      name: "Dr. Kusuma Kumari B M",
      title: "Coordinator, Dept. PG studies in Computer Science",
      institution: "Tumkur University, Tumakuru"
    },
    {
      name: "Prof. H G Sarvamangala",
      title: "Coordinator, IQAC",
      institution: "Sree Siddaganga College of Arts, Science and Commerce, Tumakuru"
    },
    {
      name: "Dr. Vijay Kumar H S",
      title: "Assistant Professor, Dept. of MCA",
      institution: "SIT, Tumakuru"
    },
    {
      name: "Dr. Prashanth G K",
      title: "Assistant Professor, Dept. of MCA",
      institution: "SIT, Tumakuru"
    },
    {
      name: "Mahesha S",
      title: "HOD, Dept. of Computer Science",
      institution: "SSCASCW, Tumakuru"
    },
    {
      name: "K S Lingadevarappa",
      title: "HOD, Dept. of Computer Science",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Shylesha B S",
      title: "HOD, Dept. of Chemistry",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Dr. Padmaja Y M",
      title: "HOD, Dept. of Kannada",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Dr. Revanasiddappa",
      title: "HOD, Dept. of Physics",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Hanumantharayappa",
      title: "HOD, Dept. of Mathematics",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Dr. Chandrashekaraiah",
      title: "HOD, Dept. of History",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Capt. RamalingaReddy S",
      title: "NCC Officer",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Rathnamma Y S",
      title: "HOD, Dept. of PG Studies in Commerce",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Uday Kumar",
      title: "Director, Dept. of Physical Education",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Sowmya L",
      title: "HOD, Dept. of Bio technology",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Navya S Murthy",
      title: "HOD, Dept. of Commerce",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Prof. Yashaswini",
      title: "HOD, Dept. of Business Administration",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Lt. Shruthi P",
      title: "NCC Officer",
      institution: "SSCASC, Tumakuru"
    },
    {
      name: "Sri Mallesh Babu",
      title: "Asst. Professor, Dept. of Computer Science",
      institution: "SSCASCW, Tumakuru"
    }
  ];

  return (
    <section id="committee" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Committee & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Distinguished leaders and experts guiding the conference towards excellence
          </p>
        </div>

        {/* Leadership Hierarchy */}
        <div className="mb-16 space-y-8">
          {/* Chief Patron */}
          <Card className="card-conference">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-3 text-2xl text-primary">
                <Crown className="text-accent" size={28} />
                <span>Chief Patron</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Sree Sree Siddalinga Swamiji</h3>
              <p className="text-muted-foreground">President, Sree Siddaganga Education Society, Siddaganga Math, Tumakuru</p>
            </CardContent>
          </Card>

          {/* Patrons */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-lg text-secondary">
                  <Star className="text-secondary" size={20} />
                  <span>Patron</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-bold text-foreground mb-1">Sri T K Nanjundappa</h4>
                <p className="text-sm text-muted-foreground">Hon. Secretary, Sree Siddaganga Education Society, Sree Siddaganga Math, Tumakuru</p>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-lg text-secondary">
                  <Star className="text-secondary" size={20} />
                  <span>Patron</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-bold text-foreground mb-1">Dr. Shivakumaraiah</h4>
                <p className="text-sm text-muted-foreground">Joint Secretary, Sree Siddaganga Education Society, Sree Siddaganga Math, Tumakuru</p>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-lg text-secondary">
                  <Star className="text-secondary" size={20} />
                  <span>Patron</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-bold text-foreground mb-1">Dr. D N Yogeeshwarappa</h4>
                <p className="text-sm text-muted-foreground">Coordinator for Degree Colleges, Sree Siddaganga Education Society, Sree Siddaganga Math, Tumakuru</p>
              </CardContent>
            </Card>
          </div>

          {/* Chairman and General Chair */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-3 text-xl text-accent">
                  <Users className="text-accent" size={24} />
                  <span>Chairman</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Dr. T B Nijalingappa</h3>
                <p className="text-muted-foreground">Principal, Sree Siddaganga College of Arts, Science and Commerce, Tumakuru</p>
              </CardContent>
            </Card>

            <Card className="card-conference">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-3 text-xl text-conference-teal">
                  <Users className="text-conference-teal" size={24} />
                  <span>General Chair</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-lg font-bold text-primary mb-2">Dr. S.R. Mahadeva Prasanna</h3>
                <p className="text-muted-foreground">Director, IIIT, Dharwad</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Keynote Speakers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center space-x-3">
              <Mic className="text-accent" size={32} />
              <span>Keynote Speakers</span>
            </h3>
            <p className="text-lg text-muted-foreground">Distinguished experts sharing insights on cutting-edge AI and ML technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keynoteData.map((speaker, index) => (
              <Card key={index} className="card-conference text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mic className="text-primary" size={32} />
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-2">{speaker.name}</h4>
                  <p className="text-sm font-medium text-secondary mb-2">{speaker.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{speaker.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisory Committee */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Advisory Committee</h3>
            <p className="text-lg text-muted-foreground">Esteemed academicians and researchers providing strategic guidance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryCommittee.map((member, index) => (
              <Card key={index} className="card-conference">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">{member.name}</h4>
                      <p className="text-sm font-medium text-secondary mb-2">{member.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{member.institution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizing Committee */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Organizing Committee</h3>
            <p className="text-lg text-muted-foreground">Dedicated team members ensuring seamless conference execution</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingCommittee.map((member, index) => (
              <Card key={index} className="card-conference">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-700 font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">{member.name}</h4>
                      <p className="text-sm font-medium text-purple-600 mb-2">{member.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{member.institution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Organized by Section */}
          <div className="mt-12 text-center">
            <Card className="card-conference max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-4">Organized by</h4>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-secondary">Department of Bachelor of Computer Applications</p>
                  <p className="text-muted-foreground">Sree Siddaganga College of Arts, Science and Commerce</p>
                  <p className="text-muted-foreground">Tumakuru</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;