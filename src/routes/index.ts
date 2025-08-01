export const AppRoutes = {
  // Main Application Routes
  Dashboard: '/',
  DashboardOverview: '/dashboard',
  KanbanBoard: '/kanban',
  TaskList: '/tasks',
  Timeline: '/timeline',

  // Placeholder for future routes
  // Projects: '/projects',
  // ProjectDetails: '/projects/:id',
  // Settings: '/settings',
  // Profile: '/profile',
  // AuthLogin: '/login',
  // AuthRegister: '/register',
};

/**
 * Helper function to generate dynamic paths if needed.
 * Example: `getProjectDetailsPath(id: string) => `/projects/${id}`
 */
// export const getProjectDetailsPath = (id: string) => `${AppRoutes.Projects}/${id}`;