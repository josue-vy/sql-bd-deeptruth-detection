USE bd_deeptruth;
GO

CREATE TABLE valoraciones (
    id INT IDENTITY(1,1) PRIMARY KEY,
    rating INT NOT NULL,
    comentario TEXT NULL,
    fecha DATETIME DEFAULT GETDATE()
);
