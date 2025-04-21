import { useState } from "react";
import { BarChart, Package, ShoppingCart } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`bg-green-600 text-white p-5 ${open ? "w-60" : "w-20"} transition-all`}>
      <button onClick={() => setOpen(!open)} className="text-xl">☰</button>
      <ul className="mt-5 space-y-4 leading-[2rem]">
        <li className="flex items-center gap-3"></li>
        <li className="flex items-center gap-3"><BarChart /> {open && "Dashboard"}</li>
        <li className="flex items-center gap-3"><Package /> {open && "Products"}</li>
        <li className="flex items-center gap-3"><ShoppingCart /> {open && "Orders"}</li>
      </ul>
    </div>
  );
}
