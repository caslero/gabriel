import { ModeloUsuarios } from "../model/ModeloUsuarios.js";
import bcryptjs from "bcryptjs";
import { Tokens } from "../services/tokens.js";
import { EnviarCorreo } from "../services/sendMailValEmpleado.js";

/** La clase LoginController se encarga de analizar las diferentes peticiones que
  deben cumplirse para que un usuario pueda iniciar sesion correctamente */
export class LoginControlador {
  /** postLogin sen encarga de responder la petision para iniciar sesion en caso
    de cumplirse todas las condiciones */
  static async iniciarSesion(req, res) {
    const correo = req.body.correo;
    const clave = req.body.clave;

    let authUsuario = await ModeloUsuarios.usuarioAutorizado(correo);

    if (!authUsuario[0]) {
      return res.status(400).json({
        status: "Error",
        message: "Usuario no verificado",
      });
    }

    if (!authUsuario[0].validar) {
      const tokenValidarUsuario = await ModeloUsuarios.tokenValidarUsuario(
        correo
      );
      const tokenUnicoValidarEmpleado = tokenValidarUsuario[0].token;
      const nombre = tokenValidarUsuario[0].nombre;

      EnviarCorreo.sendMailCrearClave(
        correo,
        nombre,
        tokenUnicoValidarEmpleado
      );

      return res.status(400).json({
        status: "Error",
        message: "Valide su correo...",
      });
    }

    const resultado = authUsuario[0] && authUsuario[0].clave;
    const comparada = await bcryptjs.compare(clave, resultado);

    if (comparada) {
      const token = Tokens.tokenInicioSesion(correo);

      return res
        .cookie("programacioniii", token.token, token.cookieOption)
        .json({
          status: "ok",
          message: "usuario logueado",
          redirect: "/comprar-producto",
        });
    } else {
      return res.status(400).json({
        status: "Error",
        message: "Credenciales invalidas...",
      });
    }
  }

  static async cerrarSesion(req, res) {
    try {
      res.clearCookie('programacioniii');

      return res.status(201).json({
        status: "ok",
        numero: 1,
        message: "Cerrando sesion...",
        redirect: '/'
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
