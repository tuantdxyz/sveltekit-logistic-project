import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Delete existing data
  await prisma.service.deleteMany();
  await prisma.pricing.deleteMany();
  await prisma.shipping.deleteMany();
  await prisma.tracking.deleteMany();

  // Seed services
  const services = [
    {
      id: 1,
      name: "Vận chuyển đường bộ",
      description:
        "Giao hàng nhanh trong nước, phù hợp với hàng hóa nhỏ và vừa",
      price: 100000,
    },
    {
      id: 2,
      name: "Vận chuyển đường biển",
      description: "Vận chuyển hàng hóa quốc tế, tối ưu cho hàng hóa lớn",
      price: 500000,
    },
    {
      id: 3,
      name: "Vận chuyển đường hàng không",
      description:
        "Giao hàng siêu tốc toàn cầu, phù hợp với hàng hóa giá trị cao",
      price: 1000000,
    },
    {
      id: 4,
      name: "Dịch vụ kho bãi",
      description: "Lưu trữ và quản lý hàng hóa an toàn, hỗ trợ 24/7",
      price: 200000,
    },
    {
      id: 5,
      name: "Vận chuyển nội thành",
      description: "Giao hàng trong ngày tại các thành phố lớn",
      price: 50000,
    },
  ];

  await prisma.service.createMany({
    data: services,
    skipDuplicates: true,
  });

  // Seed pricing
  const pricing = [
    { serviceId: 1, price: 100000, currency: "VND" }, // Đường bộ
    { serviceId: 1, price: 150000, currency: "VND" }, // Đường bộ (gói cao cấp)
    { serviceId: 2, price: 500000, currency: "VND" }, // Đường biển
    { serviceId: 2, price: 700000, currency: "VND" }, // Đường biển (gói nhanh)
    { serviceId: 3, price: 1000000, currency: "VND" }, // Hàng không
    { serviceId: 3, price: 1200000, currency: "VND" }, // Hàng không (gói ưu tiên)
    { serviceId: 4, price: 200000, currency: "VND" }, // Kho bãi
    { serviceId: 4, price: 300000, currency: "VND" }, // Kho bãi (gói dài hạn)
    { serviceId: 5, price: 50000, currency: "VND" }, // Nội thành
    { serviceId: 5, price: 80000, currency: "VND" }, // Nội thành (gói nhanh)
  ];

  await prisma.pricing.createMany({
    data: pricing,
    skipDuplicates: true,
  });

  // Seed shipping
  const shipping = [
    { orderId: "ORD001", status: "Đang xử lý" },
    { orderId: "ORD002", status: "Đang giao hàng" },
    { orderId: "ORD003", status: "Đã giao" },
    { orderId: "ORD004", status: "Đang xử lý" },
    { orderId: "ORD005", status: "Hủy" },
  ];

  await prisma.shipping.createMany({
    data: shipping,
    skipDuplicates: true,
  });

  // Seed tracking
  const tracking = [
    {
      trackingId: "TRACK001",
      status: "Đang xử lý",
      location: "Hà Nội",
      updatedAt: new Date("2025-03-01T10:00:00Z"),
    },
    {
      trackingId: "TRACK002",
      status: "Đang giao hàng",
      location: "Đà Nẵng",
      updatedAt: new Date("2025-03-02T12:00:00Z"),
    },
    {
      trackingId: "TRACK003",
      status: "Đã giao",
      location: "TP.HCM",
      updatedAt: new Date("2025-03-03T15:00:00Z"),
    },
    {
      trackingId: "TRACK004",
      status: "Đang xử lý",
      location: "Cần Thơ",
      updatedAt: new Date("2025-03-04T09:00:00Z"),
    },
    {
      trackingId: "TRACK005",
      status: "Hủy",
      location: "Hải Phòng",
      updatedAt: new Date("2025-03-05T11:00:00Z"),
    },
  ];

  await prisma.tracking.createMany({
    data: tracking,
    skipDuplicates: true,
  });

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// tutorial run seed data
// delete folder migrations: npx prisma migrate reset (0)
// npx prisma migrate dev --name init (1)
// npm install prisma --save-dev
// npm install @prisma/client
// npm install ts-node typescript --save-dev
// config script: "seed": "node --loader ts-node/esm prisma/seed.ts",
// npm run seed (2)
// npx prisma studio
