
import { useGamification } from '../../context/UserGamificationContext';

const UserStatsCard = () => {
  const { user } = useGamification();

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
      <p className="text-sm">Level: {user.level}</p>
      <progress className="w-full my-2" value={user.xp % 100} max="100"></progress>
      <p className="text-sm">XP: {user.xp}</p>
      <p className="text-sm">Badges: {user.badges.join(', ') || 'None yet'}</p>
    </div>
  );
};
export default UserStatsCard;
