-- Up
CREATE TABLE Empresa (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    telefono TEXT,
    direccion TEXT
);

INSERT INTO Empresa ( nombre, telefono, direccion )  values('mi negocio', '6677889900', 'desconosido.');
INSERT INTO Empresa ( nombre, telefono, direccion )  values('otro negocio', '6677889900', 'alameda.');
INSERT INTO Empresa ( nombre, telefono, direccion )  values('mi tiendita', '6674509593', 'eldorado.');

-- Down
DROP TABLE Empresa;

