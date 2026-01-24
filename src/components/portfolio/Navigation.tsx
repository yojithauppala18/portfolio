import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="mb-8">
      <ul className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
