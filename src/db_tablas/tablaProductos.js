export async function crearTablaProductosSqlite(conectar) {
  try {
      const resultado = await conectar.get(`
          SELECT name 
          FROM sqlite_master 
          WHERE type='table' AND name='productos';
      `);

      if (!resultado) {
          await conectar.run(`
              CREATE TABLE productos (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  codigo VARCHAR(10) NOT NULL UNIQUE,
                  producto VARCHAR(100) NOT NULL,
                  imagen VARCHAR(150) NOT NULL,
                  id_categoria INTEGER NOT NULL,
                  existencia_actual INTEGER NOT NULL DEFAULT 0,  -- Cambiado a INTEGER para representar true/false
                  precio REAL NOT NULL,
                  fecha_creado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                  FOREIGN KEY (id_categoria) REFERENCES categorias(id)
              )
          `);
          console.log("Tabla de productos creada.");
      } else {
          console.log("La tabla de productos ya existe.");
      }
  } catch (error) {
      console.error("Error al crear la tabla de productos:", error);
  }
}