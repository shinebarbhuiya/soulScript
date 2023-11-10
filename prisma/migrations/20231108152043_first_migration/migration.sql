-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "fullName" STRING,
    "firstName" STRING,
    "lastName" STRING,
    "userId" STRING NOT NULL,
    "email" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entry" (
    "id" STRING NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "entryText" STRING NOT NULL,
    "userTableId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_userTableId_fkey" FOREIGN KEY ("userTableId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
