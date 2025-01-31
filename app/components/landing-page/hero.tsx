import TextInput from "../ui/textInput";
import Button from "../ui/button";
import UserCard from "../commons/user-card";
import TotalVisits from "../commons/total-visits";
import ProjectCard from "../commons/project-card";

function Hero() {
  return (
    <div className="flex gap-5 h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh] ">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>
        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe ela com o mundo
          <br />
          Acompanhe o engajamento com analytics de cliques.
        </h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">openinbio.com/</span>
          <TextInput placeholder="Seu link" />
          <Button>Criar Agora</Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="relative top-[30px]">
          <UserCard/>
          <div className="absolute -bottom-[4%] -right-[45%]">
            <TotalVisits/>
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            {/* <ProjectCard /> */}
            <ProjectCard />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            {/* <ProjectCard /> */}
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
