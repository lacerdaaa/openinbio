import ProjectCard from "@/components/commons/project-card"
import TotalVisits from "@/components/commons/total-visits"
import UserCard from "@/components/commons/user-card"
import { Plus } from "lucide-react"
import Link from "next/link"

export default async function ProfilePage(
    { params }: { params: {profileId: string}}
) {
    const { profileId } = await params

    return (
    <div className="relative  p-20 overflow-hidden flex">
        <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
            <span>You are using a free trial version.</span>
            <Link href={`/${profileId}/upgrade`}>
            <button className="text-accent-green font-bold ">Upgrade to Pro</button>
            </Link>
        </div>
        <div className="w-1/2 flex justify-center h-min">
            <UserCard/>
        </div>
        <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
            <ProjectCard/>  
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <button className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed border-border-secondary"> 
                <Plus className="size-10 text-accent-green"/>
                <span>Novo projeto</span>
            </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
            <TotalVisits/>
        </div>
    </div>
    ) 
}