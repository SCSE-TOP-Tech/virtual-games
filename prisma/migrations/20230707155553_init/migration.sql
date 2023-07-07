-- CreateTable
CREATE TABLE "Account" (
    "accountID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("accountID")
);

-- CreateTable
CREATE TABLE "User" (
    "userID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "stateID" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Timer" (
    "timerID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3) NOT NULL,
    "timeTaken" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Timer_pkey" PRIMARY KEY ("timerID")
);

-- CreateTable
CREATE TABLE "Guess" (
    "guessID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Guess_pkey" PRIMARY KEY ("guessID")
);

-- CreateTable
CREATE TABLE "UserItem" (
    "userItemID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "stateItemID" INTEGER NOT NULL,
    "collected" BOOLEAN NOT NULL,

    CONSTRAINT "UserItem_pkey" PRIMARY KEY ("userItemID")
);

-- CreateTable
CREATE TABLE "Item" (
    "itemID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("itemID")
);

-- CreateTable
CREATE TABLE "State" (
    "stateID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "currentTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("stateID")
);

-- CreateTable
CREATE TABLE "StateItem" (
    "stateItemID" SERIAL NOT NULL,
    "stateID" INTEGER NOT NULL,
    "itemID" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,

    CONSTRAINT "StateItem_pkey" PRIMARY KEY ("stateItemID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_userID_key" ON "Account"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Timer_userID_key" ON "Timer"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "Guess_userID_key" ON "Guess"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "UserItem_userID_key" ON "UserItem"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "UserItem_stateItemID_key" ON "UserItem"("stateItemID");

-- CreateIndex
CREATE UNIQUE INDEX "StateItem_stateID_key" ON "StateItem"("stateID");

-- CreateIndex
CREATE UNIQUE INDEX "StateItem_itemID_key" ON "StateItem"("itemID");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_stateID_fkey" FOREIGN KEY ("stateID") REFERENCES "State"("stateID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timer" ADD CONSTRAINT "Timer_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guess" ADD CONSTRAINT "Guess_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserItem" ADD CONSTRAINT "UserItem_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserItem" ADD CONSTRAINT "UserItem_stateItemID_fkey" FOREIGN KEY ("stateItemID") REFERENCES "StateItem"("stateItemID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StateItem" ADD CONSTRAINT "StateItem_stateID_fkey" FOREIGN KEY ("stateID") REFERENCES "State"("stateID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StateItem" ADD CONSTRAINT "StateItem_itemID_fkey" FOREIGN KEY ("itemID") REFERENCES "Item"("itemID") ON DELETE RESTRICT ON UPDATE CASCADE;
