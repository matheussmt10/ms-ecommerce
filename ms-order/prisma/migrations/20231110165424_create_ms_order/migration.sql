-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "external_id" TEXT NOT NULL,
    "type_order" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
