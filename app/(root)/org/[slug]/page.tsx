"use client";

import { useState } from "react";
import Nav from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { createBlog } from "./actions";
import { useOrganization } from "@clerk/nextjs";

export default function OrgLandingPage() {
  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const { organization } = useOrganization();

  const handleCreateBlog = async () => {
    if (!organization) return;

    await createBlog({
      title: blogTitle.trim(),
      content: blogContent.trim(),
      orgId: organization?.id,
    });
  };

  return (
    <main className="p-4">
      <Nav />
      <div className="p-10 flex flex-col items-center justify-center space-y-4">
        <Input
          placeholder="Enter your blog title ..."
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <Textarea
          placeholder="Write your blog content here..."
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
        />
        <Button className="" onClick={handleCreateBlog}>
          Create New Blog
        </Button>
      </div>
    </main>
  );
}
