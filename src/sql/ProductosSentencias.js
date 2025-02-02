export function registrarProductoVersionUno(req, id_usuario) {
  const {
    nombre,
    imagen,
    ramVersionUno,
    romVersionUno,
    precioVersionUno,
    sizePantallaUno,
    resolucionVersionUno,
    procesadorVersionUno,
    bateriaVersionUno,
    camaraVersionUno,
    gammaVersionUno,
    cantidadVersionUno,
  } = req.body;

  
    const guardarProducto = `INSERT INTO productos 
          (nombre, imagen, version, ram, rom, precio, size, resolucion, procesador, bateria, camara, gamma, cantidad, id_usuario, fecha_creado) VALUES
          ('${nombre}', '${imagen}', '1', '${ramVersionUno}', '${romVersionUno}', '${precioVersionUno}', '${sizePantallaUno}',
           '${resolucionVersionUno}', '${procesadorVersionUno}', '${bateriaVersionUno}', '${camaraVersionUno}', '${gammaVersionUno}', '${cantidadVersionUno}', '${id_usuario}', CURRENT_TIMESTAMP)`;
    return guardarProducto;
}

export function registrarProductoVersionDos(req, id_usuario) {
  const {
    nombre,
    imagen,
    ramVersionDos,
    romVersionDos,
    precioVersionDos,
    sizePantallaDos,
    resolucionVersionDos,
    procesadorVersionDos,
    bateriaVersionDos,
    camaraVersionDos,
    gammaVersionDos,
    cantidadVersionDos,
  } = req.body;

  const guardarProducto2 = `INSERT INTO productos 
          (nombre, imagen, version, ram, rom, precio, size, resolucion, procesador, bateria, camara, gamma, cantidad, id_usuario, fecha_creado) VALUES
          ('${nombre}', '${imagen}', '2', '${ramVersionDos}', '${romVersionDos}', '${precioVersionDos}', '${sizePantallaDos}',
           '${resolucionVersionDos}', '${procesadorVersionDos}', '${bateriaVersionDos}', '${camaraVersionDos}', '${gammaVersionDos}', '${cantidadVersionDos}', '${id_usuario}', CURRENT_TIMESTAMP)`;

  return guardarProducto2;
}

/** 
  export function registrarProductoVersionUno(req, id_usuario) {
    const {
      nombre,
      imagen,
      version,
      ramVersionUno,
      romVersionUno,
      ramVersionDos,
      romVersionDos,
      precioVersionUno,
      precioVersionDos,
      sizePantallaUno,
      sizePantallaDos,
      resolucionVersionUno,
      resolucionVersionDos,
      procesadorVersionUno,
      procesadorVersionDos,
      bateriaVersionUno,
      bateriaVersionDos,
      camaraVersionUno,
      camaraVersionDos,
      gammaVersionUno,
      gammaVersionDos,
      cantidadVersionUno,
      cantidadVersionDos,
    } = req.body;
  
    if (version === 1) {
      const guardarProducto = `INSERT INTO productos 
          (nombre, imagen, version, ram, rom, precio, size, resolucion, procesador, bateria, camara, gamma, cantidad, id_usuario, fecha_creado) VALUES
          ('${nombre}', '${imagen}', '1', '${ramVersionUno}', '${romVersionUno}', '${precioVersionUno}', '${sizePantallaUno}',
           '${resolucionVersionUno}', '${procesadorVersionUno}', '${bateriaVersionUno}', '${camaraVersionUno}', '${gammaVersionUno}', '${cantidadVersionUno}', '${id_usuario}', CURRENT_TIMESTAMP)`;
      return guardarProducto;
    } else {
      const guardarProducto = `INSERT INTO productos 
          (nombre, imagen, version, ram, rom, precio, size, resolucion, procesador, bateria, camara, gamma, cantidad, id_usuario, fecha_creado) VALUES
          ('${nombre}', '${imagen}', '1', '${ramVersionUno}', '${romVersionUno}', '${precioVersionUno}', '${sizePantallaUno}',
           '${resolucionVersionUno}', '${procesadorVersionUno}', '${bateriaVersionUno}', '${camaraVersionUno}', '${gammaVersionUno}', '${cantidadVersionUno}', '${id_usuario}', CURRENT_TIMESTAMP)`;
  
      const guardarProducto2 = `INSERT INTO productos 
          (nombre, imagen, version, ram, rom, precio, size, resolucion, procesador, bateria, camara, gamma, cantidad, id_usuario, fecha_creado) VALUES
          ('${nombre}', '${imagen}', '2', '${ramVersionDos}', '${romVersionDos}', '${precioVersionDos}', '${sizePantallaDos}',
           '${resolucionVersionDos}', '${procesadorVersionDos}', '${bateriaVersionDos}', '${camaraVersionDos}', '${gammaVersionDos}', '${cantidadVersionDos}', '${id_usuario}', CURRENT_TIMESTAMP)`;
      
      return `${guardarProducto}; ${guardarProducto2}`;
    }
  }
*/
