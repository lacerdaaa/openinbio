import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Plus,
} from "lucide-react";
import Button from "../ui/button";

export default function UserCard() {

  const icons = [Github, Instagram, Linkedin, Twitter, Plus];

  return (
    <div className="w-[348] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48 ">
        <img
          src="/me.webp"
          alt="User Picture"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2 ">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            Lacerda Dev
          </h3>
        </div>
        <p className="opacity-40 ">"Eu faço produtos para internet."</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          { 
            icons.map((Icon, i) => (
              <button key={i} className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
            <Icon/>
          </button>
            ))
          }
        </div>
        <div className="flex flex-col gap-3 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            <Button className="w-full">Templaste SaaS - Compre Agora</Button>
            <button className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]">
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
