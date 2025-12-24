export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center mt-[25vh] h-screen">
      <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
      <p className="mt-2 text-gray-700">
        Only managers are allowed to view this page.
      </p>
    </div>
  );
}