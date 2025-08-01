import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { AppRoutes } from '../routes';

/**
 * NotFoundPage component displays a 404 error message when a user navigates
 * to a non-existent route. It provides a consistent layout using MainLayout
 * and an option to return to the dashboard.
 */
const NotFoundPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-80px)]"> {/* Adjusted min-height to account for header */}
        <Card className="text-center max-w-lg w-full">
          <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-6">
            Oops! The page you are looking for does not exist or has been moved.
            Please check the URL or navigate back to the dashboard.
          </p>
          <Link to={AppRoutes.Dashboard}>
            <Button>
              Go to Dashboard
            </Button>
          </Link>
        </Card>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;