import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import db from "@/db";
import { blogTable } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

interface params {
  subdomain: string;
}

export default async function SubdomainPage({
  params,
}: {
  params: Promise<params>;
}) {
  const { subdomain } = await params;
  const client = await clerkClient();
  const organization = await client.organizations.getOrganization({
    slug: subdomain,
  });

  const orgId = organization?.id;

  const blogPosts = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.orgId, orgId));
  
  if (!organization) {
    return (
      <div>
        <h1>Organization not found</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      {
        blogPosts.map((post) => (
          <Card key={post.id} className="mb-4">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
          </Card>
        ))
      }
    </div>
  );
}
