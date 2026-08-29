"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { WORK_ACCESS_COOKIE } from "../../lib/work-access";

const ACCESS_CODE = (process.env.WORK_ACCESS_CODE ?? "helloafia!").toUpperCase();

export async function unlockWork(formData: FormData) {
  const code = String(formData.get("code") ?? "").trim().toUpperCase();
  const from = String(formData.get("from") ?? "/work");
  const safeFrom = from.startsWith("/work") && !from.startsWith("//") ? from : "/work";

  if (code === ACCESS_CODE) {
    (await cookies()).set(WORK_ACCESS_COOKIE, "granted", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    redirect(safeFrom);
  }

  redirect(`${safeFrom}?access=denied`);
}
