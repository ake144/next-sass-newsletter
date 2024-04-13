-- CreateTable
CREATE TABLE "Latest" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Latest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Latest" ADD CONSTRAINT "Latest_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
