import { memo } from 'react';

export const Loading = memo(() => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">Loading...</p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Please wait</p>
        </div>
      </div>
    </div>
  );
});

