import { create } from 'zustand';
import { Project, Task } from '../types/project'; // Import existing project types

/**
 * Defines the shape of the global application state managed by Zustand.
 */
interface AppState {
  // Data states
  projects: Project[];
  tasks: Task[]; // All tasks, or tasks for the currently selected project
  selectedProjectId: string | null; // ID of the currently active project

  // UI states
  isSidebarOpen: boolean;
  isLoading: boolean; // Generic loading indicator for global operations
  globalError: string | null; // Generic error message for global issues

  // Actions to modify the state
  setProjects: (projects: Project[]) => void;
  setTasks: (tasks: Task[]) => void;
  setSelectedProjectId: (projectId: string | null) => void;
  toggleSidebar: () => void;
  setLoading: (loading: boolean) => void;
  setGlobalError: (error: string | null) => void;
}

/**
 * The Zustand store for managing global application state.
 * Components can `useAppStore()` to access and update this state.
 */
export const useAppStore = create<AppState>((set) => ({
  // --- Initial State ---
  projects: [],
  tasks: [],
  selectedProjectId: null,
  isSidebarOpen: true, // Sidebar is open by default
  isLoading: false,
  globalError: null,

  // --- Actions ---

  /**
   * Sets the array of projects in the store.
   * @param projects The array of Project objects.
   */
  setProjects: (projects) => set({ projects }),

  /**
   * Sets the array of tasks in the store.
   * @param tasks The array of Task objects.
   */
  setTasks: (tasks) => set({ tasks }),

  /**
   * Sets the ID of the currently selected project.
   * @param projectId The ID of the project, or null if no project is selected.
   */
  setSelectedProjectId: (projectId) => set({ selectedProjectId: projectId }),

  /**
   * Toggles the visibility state of the sidebar.
   */
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  /**
   * Sets the global loading state.
   * @param loading True to indicate loading, false otherwise.
   */
  setLoading: (isLoading) => set({ isLoading }),

  /**
   * Sets a global error message.
   * @param error The error string, or null to clear the error.
   */
  setGlobalError: (error) => set({ globalError: error }),
}));