import 'dotenv/config'

export const PORT = process.env.PORT;
export const HOST = `http://localhost:${PORT}`;
export const ACCESS_TOKE_MERCADO_PAGO = process.env.ACCESS_TOKE_MERCADO_PAGO;
console.log(ACCESS_TOKE_MERCADO_PAGO);
