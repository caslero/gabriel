import { ModeloProductos } from "../model/ModeloProductos.js";
import { ModeloUsuarios } from "../model/ModeloUsuarios.js";
import { Tokens } from "../services/tokens.js";

export class ProductosControlador {
  static async guardarProducto(req, res) {
    try {
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

      const token = req.cookies.programacioniii;
      const descifrarToken = Tokens.descifrarToken(token);

      if (descifrarToken.status === "error") {
        return res.status(400).json({
          status: descifrarToken.status,
          numero: descifrarToken.numero,
          message: descifrarToken.message,
        });
      }

      const idUsuario = await ModeloUsuarios.idUsuarioRegistra(
        descifrarToken.correo
      );
      const registrado = await ModeloProductos.guardarNuevoProducto(
        req,
        idUsuario.id
      );

      if (!registrado) {
        return res.status(400).json({
          status: "error",
          numero: 0,
          message: "Error, al registrar producto...",
        });
      } else {
        return res.status(201).json({
          status: "ok",
          numero: 1,
          message: "Registro exitoso...",
        });
      }
    } catch (error) {
      console.log("Error, al guardar nuevo producto: " + error);
      return res.status(500).json({
        status: "error",
        numero: 0,
        message: "Error, al guardar nuevo producto...",
      });
    }
  }

  static async productosDisponibles(req, res) {
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

      const todosProductosDisponibles = await ModeloProductos.productosDisponibles();

      if (!todosProductosDisponibles) {
        return res.status(400).json({
          status: "error",
          numero: "0",
          message: "Error, al consultar productos...",
        });
      } else {
        return res.status(201).json({
          status: "ok",
          numero: 1,
          message: "Productos disponibles...",
          productosDisponibles: todosProductosDisponibles,
        });
      }

    } catch (error) {
      console.log("Error, al consultar productos disponibles: " + error);
      return res.status(500).json({
        status: "error",
        numero: 0,
        message: "Error, al consultar productos disponibles...",
      });
    }
  }
}
