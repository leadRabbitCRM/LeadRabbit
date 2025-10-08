export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className="min-h-screen text-foreground bg-background font-sans antialiased">
        {children}
      </div>
  );
}