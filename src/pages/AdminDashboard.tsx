
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, Users, TrendingUp, Star, Heart, Eye, Calendar, Clock } from "lucide-react";

const AdminDashboard = () => {
  const [selectedBeach, setSelectedBeach] = useState(null);

  // Mumbai beaches data with volunteer interest
  const beachesData = [
    {
      id: 1,
      name: "Juhu Beach",
      location: "Juhu, Mumbai",
      volunteers: 156,
      rating: 4.2,
      status: "High Priority",
      lastCleaned: "2 days ago",
      wasteLevel: 78,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506862ae3?w=300&h=200&fit=crop",
      trending: true
    },
    {
      id: 2,
      name: "Marine Drive Beach",
      location: "Marine Drive, Mumbai",
      volunteers: 203,
      rating: 4.5,
      status: "Clean",
      lastCleaned: "1 day ago",
      wasteLevel: 32,
      image: "https://images.unsplash.com/photo-1587473454983-0d1bb908d067?w=300&h=200&fit=crop",
      trending: true
    },
    {
      id: 3,
      name: "Versova Beach",
      location: "Versova, Mumbai",
      volunteers: 189,
      rating: 4.0,
      status: "Needs Attention",
      lastCleaned: "5 days ago",
      wasteLevel: 65,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      name: "Chowpatty Beach",
      location: "Girgaon, Mumbai",
      volunteers: 134,
      rating: 3.8,
      status: "Moderate",
      lastCleaned: "3 days ago",
      wasteLevel: 55,
      image: "https://images.unsplash.com/photo-1588963931436-a62b68abf138?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Bandra Bandstand",
      location: "Bandra, Mumbai",
      volunteers: 167,
      rating: 4.3,
      status: "Good",
      lastCleaned: "1 day ago",
      wasteLevel: 28,
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73aeb?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Aksa Beach",
      location: "Malad, Mumbai",
      volunteers: 98,
      rating: 3.9,
      status: "Remote",
      lastCleaned: "1 week ago",
      wasteLevel: 45,
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=300&h=200&fit=crop"
    }
  ];

  const totalVolunteers = beachesData.reduce((sum, beach) => sum + beach.volunteers, 0);
  const avgRating = (beachesData.reduce((sum, beach) => sum + beach.rating, 0) / beachesData.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Beach Management Dashboard</h1>
          <p className="text-gray-600">Monitor and manage coastal cleanup operations across Mumbai</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Total Beaches</p>
                  <p className="text-3xl font-bold">{beachesData.length}</p>
                </div>
                <MapPin className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Active Volunteers</p>
                  <p className="text-3xl font-bold">{totalVolunteers}</p>
                </div>
                <Users className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Avg Rating</p>
                  <p className="text-3xl font-bold">{avgRating}</p>
                </div>
                <Star className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">High Priority</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trending Beaches Section (Zomato-style) */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-orange-500" />
              Highly Volunteered Beaches
            </CardTitle>
            <CardDescription>
              Popular beaches with high volunteer engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beachesData
                .filter(beach => beach.trending)
                .map((beach) => (
                  <div key={beach.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                    <img 
                      src={beach.image} 
                      alt={beach.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{beach.name}</h3>
                      <p className="text-sm text-gray-600">{beach.location}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4 text-red-500" />
                          <span className="text-sm font-medium">{beach.volunteers}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">{beach.rating}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-800">
                          Trending
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* All Beaches Grid */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-blue-500" />
              All Mumbai Beaches
            </CardTitle>
            <CardDescription>
              Comprehensive overview of all monitored beaches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beachesData.map((beach) => (
                <Card key={beach.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative">
                    <img 
                      src={beach.image} 
                      alt={beach.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        beach.status === 'High Priority' ? 'bg-red-500' :
                        beach.status === 'Clean' ? 'bg-green-500' :
                        beach.status === 'Needs Attention' ? 'bg-orange-500' :
                        'bg-blue-500'
                      }`}
                    >
                      {beach.status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-1">{beach.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{beach.location}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">{beach.volunteers} volunteers</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">{beach.rating}</span>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">Waste Level</span>
                          <span className="text-sm font-medium">{beach.wasteLevel}%</span>
                        </div>
                        <Progress 
                          value={beach.wasteLevel} 
                          className={`h-2 ${beach.wasteLevel > 70 ? 'bg-red-100' : beach.wasteLevel > 40 ? 'bg-yellow-100' : 'bg-green-100'}`}
                        />
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Last cleaned: {beach.lastCleaned}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
