import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import type { Component } from "solid-js";
import { Suspense } from "solid-js";
import { AppRoutes } from "./routes";

const queryClient = new QueryClient();

const App: Component = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      {/* Navigation */}
      <AppRoutes />
      </QueryClientProvider>
    </>
  );
};

export default App;
