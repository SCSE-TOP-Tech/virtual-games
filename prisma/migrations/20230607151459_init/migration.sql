-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Timer" (
    "timerID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" TEXT NOT NULL,
    "startTime" INTEGER NOT NULL DEFAULT 0,
    "endTime" INTEGER NOT NULL DEFAULT 0,
    "totalTime" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL,
    CONSTRAINT "Timer_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Score" (
    "scoreID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" TEXT NOT NULL,
    "timerScore" INTEGER NOT NULL,
    "hintScore" INTEGER NOT NULL,
    "culpritScore" INTEGER NOT NULL,
    "totalScore" INTEGER NOT NULL,
    CONSTRAINT "Score_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CulpritGuess" (
    "guessID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" TEXT NOT NULL,
    "culpritName" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    CONSTRAINT "CulpritGuess_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Hint" (
    "hintID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" TEXT NOT NULL,
    "hintsCollected" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Hint_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Score_userID_key" ON "Score"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "Hint_userID_key" ON "Hint"("userID");
