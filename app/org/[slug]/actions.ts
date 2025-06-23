"use server";

import { CreateBlogType, blogTable } from "@/db/schema";
import db from "@/db/index";

export const createBlog = async (formData: CreateBlogType) => {
  try {
    const result = await db.insert(blogTable).values({
      content: formData.content,
      title: formData.title,
      orgId: formData.orgId,
      createdAt: new Date(),
    }).returning({
        id: blogTable.id,
    });
    return result;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};
