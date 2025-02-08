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
            nombre VARCHAR(100) NOT NULL,
            imagen VARCHAR(100) NOT NULL,
            version INTEGER NOT NULL,
            ram INTEGER NOT NULL,
            rom INTEGER NOT NULL,
            precio REAL NOT NULL,
            size REAL NOT NULL, 
            resolucion VARCHAR(50) NOT NULL,
            procesador VARCHAR(100),
            bateria INTEGER NOT NULL,
            camara VARCHAR(20),
            id_categoria INTEGER NOT NULL,
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