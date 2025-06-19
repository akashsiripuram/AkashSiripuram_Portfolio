import React from 'react';
import { Trophy, Award, Star, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      position: "1st Prize",
      title: "Epitome'24",
      organizer: "GSDC, GRIET",
      icon: <Award className="w-5 h-5" />,
      color: "text-blue-400"
    },
    {
      position: "1st Prize",
      title: "Hackathon",
      organizer: "Cybernaughts, CVR College of Engineering",
      icon: <Trophy className="w-5 h-5" />,
      color: "text-blue-400"
    },
    {
      position: "2nd Place",
      title: "BlockBinge Hackathon",
      organizer: "MLSA-USAR Student Chapter",
      icon: <Trophy className="w-5 h-5" />,
      color: "text-yellow-400"
    },
    {
      position: "3rd Place",
      title: "INNO-VA-THON 2.0",
      organizer: "EIE Department, VNR VJIET",
      icon: <Zap className="w-5 h-5" />,
      color: "text-green-400"
    },
    {
      position: "Consolation Prize",
      title: "National Level Ideathon",
      organizer: "NewGen, CVR College",
      icon: <Star className="w-5 h-5" />,
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-16 px-6 ">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Achievements
          </h2>
          <p className="text-gray-400 text-lg">
            Recognition from hackathons and competitions
          </p>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-800/30 transition-colors duration-200"
            >
              <div className={`${achievement.color} mt-1`}>
                {achievement.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className={`${achievement.color} font-bold text-lg`}>
                    {achievement.position}
                  </span>
                  <span className="text-white font-medium">
                    {achievement.title}
                  </span>
                </div>
                
                {achievement.organizer && (
                  <p className="text-gray-400 text-sm mb-1">
                    {achievement.organizer}
                  </p>
                )}
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;