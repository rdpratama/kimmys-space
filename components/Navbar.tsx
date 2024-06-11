import { ModeToggle } from "./modeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="w-full h-20 border rounded-lg px-[10%] flex justify-between items-center">
      <div className="w-[10rem] h-[2.5rem] rounded-lg flex items-center">
        <a href="#">
          <Button variant="outline" className="w-full h-full">
            kimmys.space
          </Button>
        </a>
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
