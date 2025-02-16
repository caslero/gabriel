import { ModeloUsuarios } from "../model/ModeloUsuarios.js";
import { Tokens } from "../services/tokens.js";

export class ComprasControlador {
  static async realizarCompra(req, res) {
    try {
      const productosComprar = req.body;
      const token = req.cookies.programacioniii;

      const descifrarToken = Tokens.descifrarToken(token);

      if (descifrarToken.status === "error") {
        return res.status(400).json({
          status: descifrarToken.status,
          numero: descifrarToken.numero,
          message: descifrarToken.message,
        });
      }
      
      const id_usuario = await ModeloUsuarios.idUsuarioRegistra(descifrarToken.correo);

      console.log(productosComprar);
      

      return res.status(201).json({
        status: "ok",
        numero: 1,
        message: "Compra realizada con exito...",
      });
    } catch (error) {
      console.log("Error, al cerrar sesion: " + error);
      return res.status(500).json({
        status: "error",
        numero: 0,
        message: "Error, al cerrar sesion...",
      });
    }
  }
}
