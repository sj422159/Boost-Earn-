import { create } from 'zustand';
import { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

const useAuthStore = create<AuthState>((set: (partial: Partial<AuthState>) => void) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  setUser: (user: User | null) => set({ user, isAuthenticated: !!user }),
  setLoading: (loading: boolean) => set({ loading }),
}));

export default useAuthStore;