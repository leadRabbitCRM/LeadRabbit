import Navigationbar from "./components/navbar"
export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <Navigationbar/>
        {children}
      </div>
  );
}