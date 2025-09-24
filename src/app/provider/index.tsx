import { memo, Suspense, type ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../store";
import logo from "../../shared/assets/footerlogo.svg";

const client = new QueryClient();

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen bg-black">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src={logo}
                    alt="Loading..."
                    className="w-20 h-20 animate-bounce"
                  />
                  <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-300 text-sm">Please wait...</p>
                </div>
              </div>
            }
          >
            {children}
          </Suspense>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default memo(AppProvider);
