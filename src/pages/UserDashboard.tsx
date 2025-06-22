
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Camera, Award, Star, Flame, Target, Users, Trophy, Medal, Crown, Zap, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { UserGamificationProvider, useGamification } from "@/components/User/context/UserGamificationContext";

const WasteCaptureButton = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const { updateXP } = useGamification();

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }
      setIsCapturing(true);
    } catch (error) {
      toast({
        title: "Camera Permission Required",
        description: "Please allow camera access to capture waste images.",
        variant: "destructive",
      });
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context?.drawImage(video, 0, 0);
      
      // Simulate waste classification
      const wasteTypes = ['Wet Waste', 'Dry Waste'];
      const detectedWaste = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
      
      updateXP(25);
      
      toast({
        title: "Waste Detected!",
        description: `Classified as: ${detectedWaste}. +25 XP earned!`,
      });
      
      stopCamera();
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCapturing(false);
  };

  return (
    <Card className="border-2 border-green-200 bg-green-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-6 w-6 text-green-600" />
          Waste Capture Mission
        </CardTitle>
        <CardDescription>
          Capture and classify waste to earn XP and help the environment!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isCapturing ? (
          <Button 
            onClick={startCamera}
            className="w-full bg-green-600 hover:bg-green-700"
            size="lg"
          >
            <Camera className="mr-2 h-5 w-5" />
            Start Waste Detection
          </Button>
        ) : (
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-64 object-cover"
                autoPlay
                playsInline
              />
              <canvas ref={canvasRef} className="hidden" />
            </div>
            <div className="flex gap-2">
              <Button onClick={captureImage} className="flex-1 bg-green-600 hover:bg-green-700">
                Capture & Classify
              </Button>
              <Button onClick={stopCamera} variant="outline" className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const UserStats = () => {
  const { user } = useGamification();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Level</p>
              <p className="text-2xl font-bold">{user.level}</p>
            </div>
            <Crown className="h-8 w-8 text-blue-200" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Streak</p>
              <p className="text-2xl font-bold">{user.streak} days</p>
            </div>
            <Flame className="h-8 w-8 text-orange-200" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">XP</p>
              <p className="text-2xl font-bold">{user.xp}</p>
            </div>
            <Zap className="h-8 w-8 text-purple-200" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Waste Collected</p>
              <p className="text-2xl font-bold">{user.wasteCollected}kg</p>
            </div>
            <Target className="h-8 w-8 text-green-200" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const BadgesSection = () => {
  const { user } = useGamification();
  
  const allBadges = [
    { id: 1, name: 'Starter', icon: Star, earned: true, description: 'Complete your first mission' },
    { id: 2, name: 'Eco Warrior', icon: Award, earned: false, description: 'Collect 10kg of waste' },
    { id: 3, name: 'Streak Master', icon: Flame, earned: false, description: 'Maintain 7-day streak' },
    { id: 4, name: 'Community Hero', icon: Users, earned: false, description: 'Help 5 other users' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-yellow-600" />
          Badges Collection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allBadges.map((badge) => (
            <div key={badge.id} className={`p-4 rounded-lg text-center ${badge.earned ? 'bg-yellow-50 border-2 border-yellow-200' : 'bg-gray-50 border-2 border-gray-200'}`}>
              <badge.icon className={`h-8 w-8 mx-auto mb-2 ${badge.earned ? 'text-yellow-600' : 'text-gray-400'}`} />
              <p className={`font-semibold ${badge.earned ? 'text-yellow-800' : 'text-gray-500'}`}>{badge.name}</p>
              <p className="text-xs text-gray-500 mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const MissionsSection = () => {
  const missions = [
    { id: 1, title: 'Daily Waste Hunt', description: 'Capture and classify 5 waste items', reward: 50, completed: false },
    { id: 2, title: 'Beach Cleanup', description: 'Join a community beach cleanup event', reward: 100, completed: false },
    { id: 3, title: 'Recycling Master', description: 'Correctly classify 20 items', reward: 75, completed: false },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-6 w-6 text-blue-600" />
          Daily Missions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {missions.map((mission) => (
          <div key={mission.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h4 className="font-semibold">{mission.title}</h4>
              <p className="text-sm text-gray-600">{mission.description}</p>
              <Badge variant="secondary" className="mt-1">+{mission.reward} XP</Badge>
            </div>
            <Button variant={mission.completed ? "secondary" : "default"} size="sm">
              {mission.completed ? "Completed" : "Start"}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const UserDashboardContent = () => {
  const { user } = useGamification();
  const nextLevelXP = (user.level + 1) * 100;
  const currentLevelProgress = (user.xp % 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
              <p className="text-gray-600">Continue your eco-journey and make a difference</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Level {user.level} Progress</p>
              <Progress value={currentLevelProgress} className="w-32 h-2 mt-1" />
              <p className="text-xs text-gray-400 mt-1">{user.xp % 100}/100 XP</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <UserStats />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <WasteCaptureButton />
          <MissionsSection />
        </div>

        <BadgesSection />
      </div>
    </div>
  );
};

const UserDashboard = () => {
  return (
    <UserGamificationProvider>
      <UserDashboardContent />
    </UserGamificationProvider>
  );
};

export default UserDashboard;
