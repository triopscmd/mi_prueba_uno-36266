import React from 'react';

// Define the props for the AuthLayout component
interface AuthLayoutProps {
  /**
   * The content to be rendered within the authentication layout (e.g., login form, registration form).
   */
  children: React.ReactNode;
  /**
   * Optional additional CSS classes to apply to the main layout container.
   * These classes will be merged with the default styles.
   */
  className?: string;
}

/**
 * The AuthLayout component provides a clean and centered structure for authentication pages
 * like login, registration, or password reset. It is distinct from the main application layout
 * as it does not include elements like the header or sidebar.
 */
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  className,
}) => {
  // Default Tailwind CSS styles for the authentication layout.
  // This typically centers the content vertically and horizontally,
  // providing a clean background for auth forms.
  const defaultStyles = `
    min-h-screen
    flex items-center justify-center
    bg-gray-50 dark:bg-gray-900
    py-12 px-4 sm:px-6 lg:px-8
  `.replace(/\s+/g, ' ').trim(); // Normalize whitespace

  // Merge the default styles with any provided custom className
  const combinedClassName = `${defaultStyles} ${className || ''}`.trim();

  return (
    <div className={combinedClassName}>
      <div className="max-w-md w-full space-y-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;