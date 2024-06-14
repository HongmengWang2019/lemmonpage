// Sidebar.tsx
import React from "react";

interface SidebarItem {
  name: string;
  href: string;
  current: boolean;
}

interface SidebarProps {
  items: SidebarItem[];
  setActiveSection: (sectionId: string) => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar: React.FC<SidebarProps> = ({ items, setActiveSection }) => {
  return (
    <aside className="self-start fixed top-32 right-16 col-span-1">
      <ul role="list" className="-mx-2 space-y-1">
        {items.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={() => setActiveSection(item.href.substring(1))} // This assumes IDs are the same as hrefs minus the '#'
              className={classNames(
                item.current
                  ? "text-white"
                  : "text-gray-700 hover:text-stone-50/70",
                "group flex gap-x-3 rounded-md p-2 pl-3 text-sm font-semibold leading-6"
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
