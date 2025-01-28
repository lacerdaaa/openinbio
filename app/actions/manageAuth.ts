"use server"

import { signIn, signOut, auth } from "@/lib/auth";

export async function manageAuth() {
 const session = auth();

 if(!session) {
    return await signIn("google", {
        redirectTo: "/criar"
    })
}

return await signOut({
   redirectTo: "/",
}  )
}