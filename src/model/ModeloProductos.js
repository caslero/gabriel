import { conexionSqlite } from "../db/databaseSqlite.js";
import {
  registrarProductoVersionUno,
  registrarProductoVersionDos,
  disponiblesProductos,
} from "../sql/ProductosSentencias.js";

export class ModeloProductos {
  static async guardarNuevoProducto(req, idUsuario) {
    return new Promise((resolve) => {
      const { version } = req.body;

      const guardarProductoUno = conexionSqlite.run(
        registrarProductoVersionUno(req, idUsuario)
      );

      guardarProductoUno.then((data) => {
        resolve(data)
      }).catch((error) => {
        console.log(error);          
        resolve(false)
      });
    });
  }

  static async productosDisponibles() {
    return new Promise((resolve) => {
      const todosProductos = conexionSqlite.all(disponiblesProductos());
      todosProductos.then((data) => {
        resolve(data);
      }).catch((error) => {
        resolve(false)
      });
    });
  }
}

