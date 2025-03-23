import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Medal, School, Users, Star, Award, CheckCircle, Circle, User } from 'lucide-react';

interface Achievement {
  title: string;
  completed: boolean;
  points: number;
}

interface Stage {
  title: string;
  icon: any;
  level: number;
  achievements: Achievement[];
  requiredPoints: number;
}

const stages: Stage[] = [
  {
    title: 'School Level',
    icon: School,
    level: 1,
    requiredPoints: 100,
    achievements: [
      { title: 'Master basic dribbling skills', completed: true, points: 20 },
      { title: 'Learn basic passing techniques', completed: true, points: 20 },
      { title: 'Join school hockey club', completed: true, points: 20 },
      { title: 'Participate in first school tournament', completed: true, points: 20 },
      { title: 'Win first school match', completed: false, points: 20 },
    ],
  },
  {
    title: 'District Level',
    icon: Medal,
    level: 2,
    requiredPoints: 150,
    achievements: [
      { title: 'Selected for district training camp', completed: true, points: 30 },
      { title: 'Participate in district championship', completed: true, points: 30 },
      { title: 'Score in district match', completed: false, points: 30 },
      { title: 'Selected for district team', completed: false, points: 30 },
      { title: 'Win district championship', completed: false, points: 30 },
    ],
  },
  {
    title: 'State Academy',
    icon: Users,
    level: 3,
    requiredPoints: 200,
    achievements: [
      { title: 'Apply to SAI academy', completed: false, points: 40 },
      { title: 'Pass academy trials', completed: false, points: 40 },
      { title: 'Complete first training camp', completed: false, points: 40 },
      { title: 'Master advanced techniques', completed: false, points: 40 },
      { title: 'Selected for academy team', completed: false, points: 40 },
    ],
  },
  {
    title: 'National Tournaments',
    icon: Trophy,
    level: 4,
    requiredPoints: 250,
    achievements: [
      { title: 'Qualify for Sub-Junior Nationals', completed: false, points: 50 },
      { title: 'Participate in Khelo India Games', completed: false, points: 50 },
      { title: 'Selected for state team', completed: false, points: 50 },
      { title: 'Reach national quarterfinals', completed: false, points: 50 },
      { title: 'Win national medal', completed: false, points: 50 },
    ],
  },
  {
    title: 'Junior National',
    icon: Star,
    level: 5,
    requiredPoints: 300,
    achievements: [
      { title: 'Attend national camp trials', completed: false, points: 60 },
      { title: 'Selected for junior camp', completed: false, points: 60 },
      { title: 'Make junior national squad', completed: false, points: 60 },
      { title: 'International junior debut', completed: false, points: 60 },
      { title: 'Win international tournament', completed: false, points: 60 },
    ],
  },
  {
    title: 'Senior National',
    icon: Award,
    level: 6,
    requiredPoints: 350,
    achievements: [
      { title: 'Senior team trials', completed: false, points: 70 },
      { title: 'Selected for senior camp', completed: false, points: 70 },
      { title: 'Make senior national squad', completed: false, points: 70 },
      { title: 'International senior debut', completed: false, points: 70 },
      { title: 'Represent in major tournament', completed: false, points: 70 },
    ],
  },
];

export default function HockeyRoadmap() {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [showAchievements, setShowAchievements] = useState(false);

  const calculateProgress = (stage: Stage) => {
    const completed = stage.achievements.filter(a => a.completed).length;
    const total = stage.achievements.length;
    return (completed / total) * 100;
  };

  const calculatePoints = (stage: Stage) => {
    return stage.achievements
      .filter(a => a.completed)
      .reduce((sum, achievement) => sum + achievement.points, 0);
  };

  const currentStage = stages.find(s => s.level === activeStage) || stages[0];
  const totalPoints = stages
    .slice(0, activeStage)
    .reduce((sum, stage) => sum + calculatePoints(stage), 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-indigo-800 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-white">Hockey Career Journey</h1>
          <div className="flex items-center gap-4">
            <User className="w-8 h-8 text-white" />
            <div>
              <p className="text-white font-semibold">Current Level: {activeStage}</p>
              <p className="text-white">Total Points: {totalPoints}</p>
            </div>
          </div>
        </div>

        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-indigo-200 -translate-y-1/2 rounded-full" />
          <div className="relative flex justify-between">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = stage.level === activeStage;
              const isCompleted = stage.level < activeStage;
              const progress = calculateProgress(stage);

              return (
                <motion.div
                  key={stage.level}
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    setActiveStage(stage.level);
                    setShowAchievements(true);
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer relative z-10
                      ${isActive ? 'bg-yellow-400' : isCompleted ? 'bg-green-500' : 'bg-white'}`}
                  >
                    <Icon className={`w-6 h-6 ${isActive ? 'text-blue-900' : isCompleted ? 'text-white' : 'text-blue-900'}`} />
                  </div>
                  <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-sm whitespace-nowrap">
                    {stage.title}
                  </p>
                  {progress > 0 && (
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-yellow-400 text-xs">
                      {Math.round(progress)}%
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {showAchievements && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <Card className="bg-white/10 backdrop-blur-lg border-none">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">{currentStage.title} Achievements</h2>
                  <div className="text-white">
                    <p>Required Points: {currentStage.requiredPoints}</p>
                    <p>Current Points: {calculatePoints(currentStage)}</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {currentStage.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg ${
                        achievement.completed ? 'bg-green-500/20' : 'bg-white/5'
                      }`}
                    >
                      {achievement.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <Circle className="w-6 h-6 text-white/50" />
                      )}
                      <div className="flex-1">
                        <p className="text-white font-medium">{achievement.title}</p>
                        <p className="text-white/70 text-sm">{achievement.points} points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}