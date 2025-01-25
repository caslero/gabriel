import { createConnection } from "mysql";
//import pg from "pg";
import dotenv from "dotenv";
import { crearTablaUsuariosLocal } from "../db_tablas/tablaUsuarios.js";

/** config se encarga de traernos las variables de entorno generadas en un archivo
    .env */
dotenv.config();
//const { Pool } = pg;

/** conexion es la ercargada de hacer la conexion a la BD */
export const conexion = createConnection({
  host: process.env.SERVIDOR,
  user: "root" || process.env.USUARIO,
  password: process.env.CLAVE,
});

function crearBaseDeDatos() {
  const nombreDB = process.env.DB;
  conexion.query(
    `CREATE DATABASE IF NOT EXISTS \`${nombreDB}\``,
    (error, results) => {
      if (error) {
        console.log("Error al crear la base de datos:", error);
      } else {
        //console.log("Base de datos verificada/creada...");
        conectarBaseDeDatos(nombreDB); // Conectar a la base de datos después de crearla
      }
    }
  );
}

function conectarBaseDeDatos(nombreDB) {
  conexion.changeUser({ database: nombreDB }, (error) => {
    if (error) {
      console.log("Error al seleccionar la base de datos:", error);
    } else {
      //console.log("Base de datos seleccionada: " + nombreDB);
      crearTablaUsuariosLocal(); // Crear la tabla empleados después de conectar a la base de datos
    }
  });
}

export function conectar() {
  conexion.connect((error) => {
    if (error) {
      console.log("Error al conectar la base de datos:", error);
    } else {
      console.log("Base de datos conectada con exito...");
      crearBaseDeDatos();
    }
  });
}
