import { auth } from "@/lib/auth";
import Button from "../ui/button";
import { manageAuth } from "@/actions/manageAuth";

async function Header() {
  const session = await auth();
  console.log(session);

  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="OpenInBio logo" />
        <h3 className="text-white text-2xl font-bold">OpenInBio</h3>
      </div>

      <div className="flex items-center gap-4">
        {session && <Button>Minha página</Button>}
        <form action={ manageAuth }>
          <Button>{session ? "Sair" : "Entrar"}</Button>
        </form>
      </div>
    </div>
  );
}

export default Header;
