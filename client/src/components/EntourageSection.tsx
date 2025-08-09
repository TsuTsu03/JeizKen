const EntourageSection = () => {
  const entourageData = [
    {
      title: 'Principal Sponsors',
      members: [
        'Atty. Rafael and Dra. Isabel Reyes',
        'Engr. Jonathan and Dra. Melissa Lim',
        'Mr. Daniel and Dra. Patricia Tan',
        'Mr. Adrian and Atty. Christine Ong',
        'Mr. Gregory and Dra. Stephanie Sy',
        'Mr. Dominic and Dra. Bianca Cruz',
        'Mr. Nathan and Dra. Gabrielle Uy',
        'Mr. Julian and Dra. Camille Chan',
        'Mr. Brandon and Dra. Danielle Lim',
        'Mr. Ethan and Dra. Natalia Reyes'
      ]
    },
    {
      title: 'Secondary Sponsors',
      members: [
        'Candle: Mr. Marcus Tan and Ms. Andrea Lim',
        'Veil: Mr. Zachary Cruz and Ms. Beatrice Ong',
        'Cord: Mr. Lucas Sy and Ms. Danielle Uy',
        'Bible: Fr. Anthony Manalo and Sr. Teresa Flores'
      ]
    },
    {
      title: 'Maid of Honor & Best Man',
      members: [
        'Maid of Honor: Victoria Reyes',
        'Best Man: Christopher Lim'
      ]
    },
    {
      title: 'Bridesmaids',
      members: [
        'Amanda Tan', 'Bianca Lim', 'Cassandra Ong', 'Danielle Sy', 'Elena Cruz',
        'Felicity Uy', 'Gabrielle Chan', 'Isabella Lim', 'Jasmine Reyes', 'Kristina Tan',
        'Lauren Ong', 'Megan Sy', 'Nicole Cruz', 'Olivia Uy', 'Patricia Chan'
      ]
    },
    {
      title: 'Groomsmen',
      members: [
        'Andrew Tan', 'Benjamin Lim', 'Christian Ong', 'Daniel Sy', 'Edward Cruz',
        'Francis Uy', 'Gabriel Chan', 'Henry Lim', 'Isaiah Reyes', 'Jacob Tan',
        'Kevin Ong', 'Liam Sy', 'Matthew Cruz', 'Nathaniel Uy', 'Owen Chan'
      ]
    },
    {
      title: 'Little Attendants',
      members: [
        'Flower Girls: Sophia Reyes, Emma Lim, Isabella Tan, Charlotte Ong, Mia Sy',
        'Ring Bearers: Ethan Reyes, Noah Lim, Lucas Tan, Jacob Ong, Alexander Sy'
      ]
    },
    {
      title: 'Parents & Grandparents',
      members: [
        'Bride\'s Parents: Mr. Roberto and Dra. Carmen Reyes',
        'Groom\'s Parents: Mr. William and Dra. Elizabeth Lim',
        'Bride\'s Grandparents: Mr. Francisco and Dra. Rosario Reyes',
        'Groom\'s Grandparents: Mr. Antonio and Dra. Consuelo Lim'
      ]
    },
    {
      title: 'Ceremony Assistants',
      members: [
        'Lector: Ms. Gabriella Reyes',
        'Psalmist: Mr. Raphael Lim',
        'Eucharistic Ministers: Mr. Dominic Reyes and Ms. Beatrice Lim'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-elegant relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-gold rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-gold rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title font-display text-primary mb-6 gold-underline inline-block">
            Our Wedding Entourage
          </h2>
          <div className="w-32 h-0.5 bg-gold mx-auto mb-6"></div>
          <p className="text-elegant-body text-muted-foreground max-w-2xl mx-auto">
            We are honored to have these special people stand with us as we begin our journey as husband and wife
          </p>
        </div>

        {/* Entourage Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {entourageData.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`animate-fade-up`}
              style={{ animationDelay: `${groupIndex * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover-elegant h-full">
                {/* Group Title */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-semibold text-primary mb-2">
                    {group.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gold mx-auto"></div>
                </div>

                {/* Members List */}
                <div className="space-y-3">
                  {group.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="flex items-center justify-center text-center"
                    >
                      <div className="relative">
                        <p className="text-foreground/90 hover:text-gold transition-colors duration-300 cursor-default">
                          {member}
                        </p>
                        {memberIndex < group.members.length - 1 && group.title !== 'Bridesmaids' && group.title !== 'Groomsmen' && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-1 h-1 bg-gold/30 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Bottom Element */}
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center space-x-1">
                    <div className="w-6 h-px bg-gold/30"></div>
                    <div className="w-1 h-1 bg-gold rounded-full"></div>
                    <div className="w-6 h-px bg-gold/30"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="bg-card/70 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-soft max-w-3xl mx-auto">
            <p className="text-elegant-body text-foreground/80 leading-relaxed italic">
              "A wedding is not just the union of two hearts, but the celebration of two families becoming one. 
              We are grateful for each person who will witness and bless our special day."
            </p>
            <div className="mt-6 flex justify-center items-center space-x-2">
              <div className="w-8 h-px bg-gold"></div>
              <div className="w-2 h-2 bg-gold rounded-full animate-float"></div>
              <div className="w-8 h-px bg-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntourageSection;