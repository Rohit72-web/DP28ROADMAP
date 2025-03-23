import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Trophy, Medal, School, Users, Star, Award, 
  CheckCircle, Circle, User, Waves, Table as TableTennis,
  CookingPot as SwimmingPool, Target, Flag, Medal as MedalIcon,
  Swords as HockeyStick, MapPin, Calendar, Clock, ArrowRight,
  GraduationCap, Building2, Users2
} from 'lucide-react';

interface Achievement {
  title: string;
  completed: boolean;
  points: number;
  howToAchieve?: {
    steps: string[];
    resources?: {
      title: string;
      link?: string;
      description: string;
      icon: any;
    }[];
    timeframe?: string;
    requirements?: string[];
  };
}

interface Stage {
  title: string;
  icon: any;
  level: number;
  achievements: Achievement[];
  requiredPoints: number;
}

const swimmingStages: Stage[] = [
  {
    title: 'Basic Swimming',
    icon: SwimmingPool,
    level: 1,
    requiredPoints: 100,
    achievements: [
      { title: 'Learn to float and control breathing', completed: true, points: 20 },
      { title: 'Master freestyle basics', completed: true, points: 20 },
      { title: 'Learn backstroke technique', completed: true, points: 20 },
      { title: 'Complete breaststroke training', completed: false, points: 20 },
      { title: 'Introduction to butterfly stroke', completed: false, points: 20 },
    ],
  },
  {
    title: 'School Level',
    icon: School,
    level: 2,
    requiredPoints: 150,
    achievements: [
      { title: 'Join school swimming team', completed: true, points: 30 },
      { title: 'Win first school competition', completed: true, points: 30 },
      { title: 'Master flip turns and dives', completed: false, points: 30 },
      { title: 'Qualify for district meet', completed: false, points: 30 },
      { title: 'Break school record', completed: false, points: 30 },
    ],
  },
  {
    title: 'District Level',
    icon: Target,
    level: 3,
    requiredPoints: 200,
    achievements: [
      { title: 'Join professional swimming club', completed: false, points: 40 },
      { title: 'Complete advanced training camp', completed: false, points: 40 },
      { title: 'Win district championship', completed: false, points: 40 },
      { title: 'Achieve qualifying time for state', completed: false, points: 40 },
      { title: 'Master all competitive strokes', completed: false, points: 40 },
    ],
  },
  {
    title: 'State Level',
    icon: Flag,
    level: 4,
    requiredPoints: 250,
    achievements: [
      { title: 'Join state swimming academy', completed: false, points: 50 },
      { title: 'Medal in state championship', completed: false, points: 50 },
      { title: 'Qualify for nationals', completed: false, points: 50 },
      { title: 'Break state record', completed: false, points: 50 },
      { title: 'Selected for national camp', completed: false, points: 50 },
    ],
  },
  {
    title: 'National Level',
    icon: Trophy,
    level: 5,
    requiredPoints: 300,
    achievements: [
      { title: 'Medal in national championship', completed: false, points: 60 },
      { title: 'Selected for national team', completed: false, points: 60 },
      { title: 'Break national record', completed: false, points: 60 },
      { title: 'Qualify for international meets', completed: false, points: 60 },
      { title: 'Win national championship', completed: false, points: 60 },
    ],
  },
  {
    title: 'International',
    icon: Award,
    level: 6,
    requiredPoints: 350,
    achievements: [
      { title: 'Compete in Asian Games', completed: false, points: 70 },
      { title: 'Medal in Commonwealth Games', completed: false, points: 70 },
      { title: 'Qualify for Olympics', completed: false, points: 70 },
      { title: 'Break Asian record', completed: false, points: 70 },
      { title: 'Olympic final qualification', completed: false, points: 70 },
    ],
  },
];

const tableTennisStages: Stage[] = [
  {
    title: 'Basic Skills',
    icon: TableTennis,
    level: 1,
    requiredPoints: 100,
    achievements: [
      { title: 'Master basic grip and stance', completed: true, points: 20 },
      { title: 'Learn forehand drive', completed: true, points: 20 },
      { title: 'Learn backhand drive', completed: true, points: 20 },
      { title: 'Master basic serves', completed: false, points: 20 },
      { title: 'Learn push and chop shots', completed: false, points: 20 },
    ],
  },
  {
    title: 'School Level',
    icon: School,
    level: 2,
    requiredPoints: 150,
    achievements: [
      { title: 'Join school TT club', completed: true, points: 30 },
      { title: 'Win first school tournament', completed: true, points: 30 },
      { title: 'Master advanced serves', completed: false, points: 30 },
      { title: 'Qualify for district games', completed: false, points: 30 },
      { title: 'Win inter-school championship', completed: false, points: 30 },
    ],
  },
  {
    title: 'District Level',
    icon: Target,
    level: 3,
    requiredPoints: 200,
    achievements: [
      { title: 'Join district academy', completed: false, points: 40 },
      { title: 'Win district championship', completed: false, points: 40 },
      { title: 'Master loop drives', completed: false, points: 40 },
      { title: 'Selected for state trials', completed: false, points: 40 },
      { title: 'Top 3 in district ranking', completed: false, points: 40 },
    ],
  },
  {
    title: 'State Level',
    icon: Flag,
    level: 4,
    requiredPoints: 250,
    achievements: [
      { title: 'Join state academy', completed: false, points: 50 },
      { title: 'State ranking tournament medal', completed: false, points: 50 },
      { title: 'Qualify for nationals', completed: false, points: 50 },
      { title: 'Top 5 in state ranking', completed: false, points: 50 },
      { title: 'Win state championship', completed: false, points: 50 },
    ],
  },
  {
    title: 'National Level',
    icon: Trophy,
    level: 5,
    requiredPoints: 300,
    achievements: [
      { title: 'National ranking tournament medal', completed: false, points: 60 },
      { title: 'Selected for national camp', completed: false, points: 60 },
      { title: 'Top 10 national ranking', completed: false, points: 60 },
      { title: 'Win national championship', completed: false, points: 60 },
      { title: 'Selected for national team', completed: false, points: 60 },
    ],
  },
  {
    title: 'International',
    icon: Award,
    level: 6,
    requiredPoints: 350,
    achievements: [
      { title: 'Asian championship qualification', completed: false, points: 70 },
      { title: 'Commonwealth Games selection', completed: false, points: 70 },
      { title: 'Olympic qualification', completed: false, points: 70 },
      { title: 'ITTF tour medal', completed: false, points: 70 },
      { title: 'Top 100 world ranking', completed: false, points: 70 },
    ],
  },
];

const hockeyStages: Stage[] = [
  {
    title: 'School Level',
    icon: School,
    level: 1,
    requiredPoints: 100,
    achievements: [
      { title: 'Master basic dribbling skills', completed: true, points: 20 },
      { title: 'Learn basic passing techniques', completed: true, points: 20 },
      { title: 'Join school hockey club', completed: true, points: 20 },
      { title: 'Participate in first school tournament', completed: false, points: 20 },
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

// Add howToAchieve information to achievements
const enhanceStagesWithGuidance = (stages: Stage[]): Stage[] => {
  return stages.map(stage => ({
    ...stage,
    achievements: stage.achievements.map(achievement => ({
      ...achievement,
      howToAchieve: {
        steps: [
          'Join specialized training programs',
          'Practice regularly with experienced coaches',
          'Participate in relevant competitions',
          'Focus on physical conditioning',
          'Study and analyze professional techniques'
        ],
        resources: [
          {
            title: 'Training Centers',
            icon: Building2,
            description: 'Find nearby specialized training facilities',
          },
          {
            title: 'Expert Coaches',
            icon: Users2,
            description: 'Connect with certified coaches',
          },
          {
            title: 'Competition Calendar',
            icon: Calendar,
            description: 'Upcoming events and tournaments',
          },
          {
            title: 'Learning Resources',
            icon: GraduationCap,
            description: 'Online tutorials and training materials',
          }
        ],
        timeframe: '3-6 months of dedicated practice',
        requirements: [
          'Regular attendance at training sessions',
          'Physical fitness requirements',
          'Basic equipment and gear',
          'Time commitment of 15-20 hours per week'
        ]
      }
    }))
  }));
};

const enhancedSwimmingStages = enhanceStagesWithGuidance(swimmingStages);
const enhancedTableTennisStages = enhanceStagesWithGuidance(tableTennisStages);
const enhancedHockeyStages = enhanceStagesWithGuidance(hockeyStages);

export default function SportRoadmap() {
  const [sport, setSport] = useState<'swimming' | 'tableTennis' | 'hockey'>('swimming');
  const [activeStage, setActiveStage] = useState<number>(1);
  const [showAchievements, setShowAchievements] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const stages = sport === 'swimming' 
    ? enhancedSwimmingStages 
    : sport === 'tableTennis' 
    ? enhancedTableTennisStages 
    : enhancedHockeyStages;

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
          <h1 className="text-4xl font-bold text-white">Sports Career Journey</h1>
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <button
                onClick={() => setSport('swimming')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  sport === 'swimming' ? 'bg-yellow-400 text-blue-900' : 'bg-white/10 text-white'
                }`}
              >
                <Waves className="w-5 h-5" />
                Swimming
              </button>
              <button
                onClick={() => setSport('tableTennis')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  sport === 'tableTennis' ? 'bg-yellow-400 text-blue-900' : 'bg-white/10 text-white'
                }`}
              >
                <TableTennis className="w-5 h-5" />
                Table Tennis
              </button>
              <button
                onClick={() => setSport('hockey')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  sport === 'hockey' ? 'bg-yellow-400 text-blue-900' : 'bg-white/10 text-white'
                }`}
              >
                <HockeyStick className="w-5 h-5" />
                Hockey
              </button>
            </div>
            <div className="flex items-center gap-4">
              <User className="w-8 h-8 text-white" />
              <div>
                <p className="text-white font-semibold">Current Level: {activeStage}</p>
                <p className="text-white">Total Points: {totalPoints}</p>
              </div>
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
                    setSelectedAchievement(null);
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
                      className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-colors
                        ${achievement.completed ? 'bg-green-500/20' : 'bg-white/5'}
                        ${selectedAchievement === achievement ? 'ring-2 ring-yellow-400' : ''}
                        hover:bg-white/20`}
                      onClick={() => setSelectedAchievement(
                        selectedAchievement === achievement ? null : achievement
                      )}
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
                      <ArrowRight className={`w-5 h-5 text-white/50 transition-transform ${
                        selectedAchievement === achievement ? 'rotate-90' : ''
                      }`} />
                    </div>
                  ))}
                </div>

                {selectedAchievement && selectedAchievement.howToAchieve && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 p-4 bg-white/5 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">How to Achieve</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2">Steps:</h4>
                      <ul className="list-disc list-inside text-white/80 space-y-2">
                        {selectedAchievement.howToAchieve.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2">Resources:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedAchievement.howToAchieve.resources?.map((resource, index) => {
                          const Icon = resource.icon;
                          return (
                            <div key={index} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg">
                              <Icon className="w-5 h-5 text-yellow-400" />
                              <div>
                                <p className="text-white font-medium">{resource.title}</p>
                                <p className="text-white/70 text-sm">{resource.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2">Timeframe:</h4>
                      <p className="text-white/80">{selectedAchievement.howToAchieve.timeframe}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-white/80 space-y-2">
                        {selectedAchievement.howToAchieve.requirements?.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}