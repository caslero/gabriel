export async function crearTablaCategoriasSqlite(conectar) {
    try {
      const resultado = await conectar.get(`
        SELECT name 
        FROM sqlite_master 
        WHERE type='table' AND name='compras';
      `);
  
      if (!resultado) {
        await conectar.run(`CREATE TABLE compras (
    id INTEGER NOT NULL AUTO_INCREMENT,
    id_producto INTEGER NOT NULL,
    id_cliente INTEGER NOT NULL,
    procesada BOOLEAN NOT NULL DEFAULT FALSE,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
    )
    `);
        console.log("Tabla de compras creada.");
      } else {
        console.log("La tabla de compras ya existe.");
      }
    } catch (error) {
      console.error("Error al crear la tabla de compras:", error);
    }
  }