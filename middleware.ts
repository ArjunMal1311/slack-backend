import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/api/uploadthing']
});

export const config = {
  matcher: ["/chat(.*)", "/(api|trpc)(.*)"],
};
