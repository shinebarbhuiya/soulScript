-- DropForeignKey
ALTER TABLE "Entry" DROP CONSTRAINT "Entry_userTableId_fkey";

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_userTableId_fkey" FOREIGN KEY ("userTableId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
