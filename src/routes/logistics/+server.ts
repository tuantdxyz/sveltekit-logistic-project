import { json, type RequestHandler } from "@sveltejs/kit";
import { prisma } from "$lib/prisma";

export const GET: RequestHandler = async () => {
  const services = await prisma.service.findMany();
  return json(services);
};
