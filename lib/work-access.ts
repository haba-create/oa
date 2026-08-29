import { cookies } from "next/headers";

export const WORK_ACCESS_COOKIE = "work-access";

export async function hasWorkAccess(): Promise<boolean> {
  return (await cookies()).get(WORK_ACCESS_COOKIE)?.value === "granted";
}
