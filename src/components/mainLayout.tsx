import Jumbotron from "./jumbotron/jumbotron";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh">
      {/* Left side (Jumbotron) - hidden on mobile */}
      <div className="hidden md:block md:w-1/2 lg:w-3/5 fixed h-full overflow-hidden">
        <Jumbotron />
      </div>

      {/* Right side (Content) - scrollable */}
      <div className="w-full md:ml-[50%] lg:ml-[60%] overflow-y-auto bg-white px-4 py-6">{children}</div>
    </div>
  );
}
