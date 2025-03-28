import { json, type RequestHandler } from "@sveltejs/kit";
import { prisma } from "$lib/prisma";

export const GET: RequestHandler = async ({ url }) => {
  const trackingId = url.searchParams.get("trackingId");

  if (!trackingId) {
    return json({ message: "Mã theo dõi là bắt buộc" }, { status: 400 });
  }

  try {
    const order = await prisma.tracking.findUnique({
      where: { trackingId },
    });

    if (!order) {
      return json({ message: "Không tìm thấy đơn hàng" }, { status: 404 });
    }

    return json(order, { status: 200 });
  } catch (error) {
    console.error(error);
    return json(
      { message: "Có lỗi xảy ra khi tra cứu đơn hàng" },
      { status: 500 }
    );
  }
};
