-- CreateTable
CREATE TABLE "Notas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT,
    "creado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
