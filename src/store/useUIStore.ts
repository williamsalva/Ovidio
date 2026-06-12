import { create } from 'zustand';

export interface AppointmentData {
  step: number;
  location: 'casa-kindoc' | 'kindoc-universidad' | 'kindoc-satelite' | '';
  date: string;
  time: string;
  patientName: string;
  patientAge: string;
  phone: string;
  email: string;
  comments: string;
}

interface UIState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  
  isAppointmentModalOpen: boolean;
  openAppointmentModal: () => void;
  closeAppointmentModal: () => void;
  
  appointmentData: AppointmentData;
  setAppointmentData: (data: Partial<AppointmentData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetAppointment: () => void;
  
  contactFormStatus: 'idle' | 'submitting' | 'success' | 'error';
  setContactFormStatus: (status: 'idle' | 'submitting' | 'success' | 'error') => void;
  
  servicesFilter: 'all' | 'diagnostico' | 'procedimiento';
  setServicesFilter: (filter: 'all' | 'diagnostico' | 'procedimiento') => void;
  
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const initialAppointmentState: AppointmentData = {
  step: 1,
  location: '',
  date: '',
  time: '',
  patientName: '',
  patientAge: '',
  phone: '',
  email: '',
  comments: '',
};

export const useUIStore = create<UIState>((set) => ({
  // Theme state
  theme: 'light',
  toggleTheme: () => set((state) => {
    const nextTheme = state.theme === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (nextTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', nextTheme);
    }
    return { theme: nextTheme };
  }),
  setTheme: (theme) => set(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
    return { theme };
  }),
  
  // Appointment modal state
  isAppointmentModalOpen: false,
  openAppointmentModal: () => set({ isAppointmentModalOpen: true }),
  closeAppointmentModal: () => set({ isAppointmentModalOpen: false }),
  
  // Appointment scheduler state
  appointmentData: initialAppointmentState,
  setAppointmentData: (data) => set((state) => ({
    appointmentData: { ...state.appointmentData, ...data }
  })),
  nextStep: () => set((state) => ({
    appointmentData: { ...state.appointmentData, step: state.appointmentData.step + 1 }
  })),
  prevStep: () => set((state) => ({
    appointmentData: { ...state.appointmentData, step: Math.max(1, state.appointmentData.step - 1) }
  })),
  resetAppointment: () => set({ appointmentData: initialAppointmentState }),
  
  // Contact form status
  contactFormStatus: 'idle',
  setContactFormStatus: (status) => set({ contactFormStatus: status }),
  
  // Services filtering
  servicesFilter: 'all',
  setServicesFilter: (filter) => set({ servicesFilter: filter }),
  
  // Search filtering
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
