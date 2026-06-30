import { Link } from "react-router-dom";

type linkData = {
  to: string;
  label: string;
};

export default function NavLink({ link }: { link: linkData }) {
  return (
    <Link
      to={link.to}
      className="inline-flex min-h-11 items-center justify-center rounded-xl border-4 border-[#2a1209] bg-[#ffce45] px-4 py-2 text-sm font-black uppercase text-[#3b1a0b] shadow-[4px_4px_0_#2a1209] transition duration-150 hover:-translate-y-1 hover:rotate-[-1deg] hover:bg-[#ff5a35] hover:text-[#fff4c6] hover:shadow-[6px_7px_0_#2a1209] focus:outline-none focus:ring-4 focus:ring-[#fff0a3] active:translate-y-0 active:shadow-[2px_2px_0_#2a1209]"
    >
      {link.label}
    </Link>
  );
}
