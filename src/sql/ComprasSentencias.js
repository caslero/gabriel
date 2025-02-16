export function registrarCompra(id_usuario, total_pagar, productosComprar, referenciaBancaria) {  
  const productosJson = JSON.stringify(productosComprar);
  const guardarCompra = `INSERT INTO compras
            (id_usuario, precio_total, fecha_compra, estado, productos, ref_bancaria, fecha_creada) VALUES
  ('${id_usuario}', '${total_pagar}', CURRENT_TIMESTAMP, 'exitosa', '${productosJson}', '${referenciaBancaria}', CURRENT_TIMESTAMP)`;
  return guardarCompra;
}


export function comprasRealizadas(id) {
  const realizadasCompras = `SELECT * FROM compras WHERE id_usuario = '${id}'`;
  return realizadasCompras;
}

