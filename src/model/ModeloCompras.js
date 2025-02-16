import { conexionSqlite } from "../db/databaseSqlite.js";
import { registrarCompra, comprasRealizadas } from "../sql/ComprasSentencias.js";

export class ModeloCompras {
  static async guardarNuevaCompra(id_usuario, total_pagar, productosComprar, referenciaBancaria) {
    return new Promise((resolve) => {

      const guardarCompra = conexionSqlite.run(registrarCompra(id_usuario, total_pagar, productosComprar, referenciaBancaria));

      guardarCompra.then((data) => {
        resolve(data)
      }).catch((error) => {
        console.log(error);          
        resolve(false)
      });
    });
  }


  static async comprasCadaUsuario(id) {
    return new Promise((resolve) => {
      const compraDeCadaUsuario = conexionSqlite.all(comprasRealizadas(id));
      compraDeCadaUsuario.then((data) => {
        resolve(data);
      }).catch((error) => {
        resolve(false)
      });
    });
  }

}