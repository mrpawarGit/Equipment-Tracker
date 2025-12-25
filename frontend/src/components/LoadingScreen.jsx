export default function LoadingScreen({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="text-center">
        {!error ? (
          <>
            <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm">
              Waiting for backend to start...
            </p>
          </>
        ) : (
          <p className="text-red-600 text-sm">Failed to connect to backend</p>
        )}
      </div>
    </div>
  );
}
