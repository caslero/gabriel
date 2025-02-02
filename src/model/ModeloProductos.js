import { conexionSqlite } from "../db/databaseSqlite.js";
import {
  registrarProductoVersionUno,
  registrarProductoVersionDos,
} from "../sql/ProductosSentencias.js";

export class ModeloProductos {
  static async guardarNuevoProducto(req, idUsuario) {
    return new Promise((resolve) => {
      const { version } = req.body;

      const guardarProductoUno = conexionSqlite.run(
        registrarProductoVersionUno(req, idUsuario)
      );

      guardarProductoUno
        .then((datos) => {
          
          if (version === 2) {
            const guardarProductoDos = conexionSqlite.run(
              registrarProductoVersionDos(req, idUsuario)
            );
            guardarProductoDos
              .then((datosDos) => {
                resolve([datos, datosDos]);
              })
              .catch((error) => {
                console.log(error);
                resolve(false);
              });
          } else {
            resolve(datos);
          }
        })
        .catch((error) => {
          console.log(error);
          resolve(false);
        });
    });
  }
}

