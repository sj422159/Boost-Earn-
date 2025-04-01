import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, BarChart3, Users, BookOpen, Activity } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import useAuthStore from '../../store/authStore';

interface Stats {
  totalUsers: number;
  activeProjects: number;
  completedCourses: number;
}

const defaultStats: Stats = {
  totalUsers: 0,
  activeProjects: 0,
  completedCourses: 0,
};

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>(defaultStats);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchStats = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('stats')
          .select('*')
          .limit(1)
          .single();

        if (error) {
          console.error('Error fetching stats:', error);
          return;
        }

        if (data) {
          setStats({
            totalUsers: data.total_users || 0,
            activeProjects: data.active_projects || 0,
            completedCourses: data.completed_courses || 0,
          });
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              title="Total Users"
              value={stats.totalUsers}
              icon={Users}
              trend="+12%"
            />
            <DashboardCard
              title="Active Projects"
              value={stats.activeProjects}
              icon={Layout}
              trend="+5%"
            />
            <DashboardCard
              title="Completed Courses"
              value={stats.completedCourses}
              icon={BookOpen}
              trend="+8%"
            />
            <DashboardCard
              title="System Health"
              value="98%"
              icon={Activity}
              trend="+1%"
            />
          </div>

          <div className="mt-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                <ActivityItem
                  title="New Healthcare Project"
                  description="Project XYZ has been initiated"
                  time="2 hours ago"
                />
                <ActivityItem
                  title="Course Completion"
                  description="5 users completed Advanced Medical Training"
                  time="5 hours ago"
                />
                <ActivityItem
                  title="System Update"
                  description="Platform successfully updated to version 2.1"
                  time="1 day ago"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon: Icon, trend }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <p className="text-sm text-green-600">{trend}</p>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ title, description, time }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="h-3 w-3 rounded-full bg-blue-600"></div>
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
}