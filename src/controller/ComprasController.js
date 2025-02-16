import { ModeloCompras } from "../model/ModeloCompras.js";
import { ModeloUsuarios } from "../model/ModeloUsuarios.js";
import { Tokens } from "../services/tokens.js";

export class ComprasControlador {
  static async realizarCompra(req, res) {
    try {
      const { productosComprados, total_pagar, referenciaBancaria} = req.body;

      const token = req.cookies.programacioniii;

      const descifrarToken = Tokens.descifrarToken(token);

      if (descifrarToken.status === "error") {
        return res.status(400).json({
          status: descifrarToken.status,
          numero: descifrarToken.numero,
          message: descifrarToken.message,
        });
      }
      
      if (productosComprados && productosComprados.length < 1) {
        return res.status(400).json({
          status: "error",
          numero: 0,
          message: "Error, agregre al menos un producto...",
        });
      }
      
      const id_usuario = await ModeloUsuarios.idUsuarioRegistra(descifrarToken.correo);

      const compraRealizada = await ModeloCompras.guardarNuevaCompra(id_usuario.id, total_pagar, productosComprados, referenciaBancaria);

      if (!compraRealizada) {
        return res.status(400).json({
          status: "error",
          numero: 0,
          message: "Error, no se realizo la compra...",
        });
      } else {
        return res.status(201).json({
          status: "ok",
          numero: 1,
          message: "Compra realizada con exito...",
        });
      }
      
    } catch (error) {
      console.log("Error, al cerrar sesion: " + error);
      return res.status(500).json({
        status: "error",
        numero: 0,
        message: "Error, al cerrar sesion...",
      });
    }
  }


  static async comprasUsuario(req, res) {
    try {
      const token = req.cookies.programacioniii;

      const descifrarToken = Tokens.descifrarToken(token);

      if (descifrarToken.status === "error") {
        return res.status(400).json({
          status: descifrarToken.status,
          numero: descifrarToken.numero,
          message: descifrarToken.message,
        });
      }

      const usuario_id = await ModeloUsuarios.datosInicioSesion(descifrarToken.correo);
      
      const comprasPorUsuario = await ModeloCompras.comprasCadaUsuario(usuario_id.id);
      
      if (!comprasPorUsuario) {
        return res.status(400).json({
          status: "error",
          numero: 0,
          message: "Error al consultar compras..."
        });
      } else {
        return res.status(201).json({
          status: "ok",
          numero: 1,
          message: "Todas sus compras...",
          comprasRealizadas: comprasPorUsuario
        });
      }
      
    } catch (error) {
      console.log("Error, al consultar compras: " + error);
      return res.status(500).json({
        status: "error",
        numero: 0,
        message: "Error, al consultar compras...",
      });
    }
  }
}
