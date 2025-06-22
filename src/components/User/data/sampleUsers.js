export const sampleUsers = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `User${i + 1}`,
  xp: Math.floor(Math.random() * 1000),
  badges: [],
  missionsCompleted: [],
  streak: Math.floor(Math.random() * 10),
  wasteCollected: (Math.random() * 15).toFixed(2),
}));
