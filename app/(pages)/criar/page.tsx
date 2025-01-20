import Header from "@/components/landing-page/header";
import Button from "@/components/ui/button";
import TextInput from "@/components/ui/textInput";
import { Rocket } from "lucide-react";

export default function criar() {
 return (
   <div>
    <Header/>
    <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex  items-center gap-4">
            <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
            <Rocket className="size-10"/>
        </div>
        <form 
        action=""
        className="w-full gap-2 flex items-center">
            <span className="text-white">openinbio.com/</span>
            <TextInput/>
            <Button className="w-[126px]">Criar</Button>
        </form>
    </div>
   </div>
 );
}