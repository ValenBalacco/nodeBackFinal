import { Request, Response } from "express";
import { MercadoPagoConfig, Preference } from "mercadopago";

// Instancia el cliente de Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || "TU_ACCESS_TOKEN_AQUI",
});

export const crearPreferencia = async (req: Request, res: Response): Promise<void> => {
  try {
    const { items, email } = req.body;

    const preference = {
      items: items.map((item: any) => ({
        title: item.title,
        quantity: Number(item.quantity),
        unit_price: Number(item.unitPrice),
        currency_id: "ARS",
      })),
      payer: { email },
      back_urls: {
        success: "http://localhost:5173/checkout/success",
        failure: "http://localhost:5173/checkout/failure",
        pending: "http://localhost:5173/checkout/pending",
      },
      auto_return: "approved",
    };

    const preferenceClient = new Preference(client);
    const mpRes = await preferenceClient.create({ body: preference });

    res.json({ init_point: mpRes.init_point });
  } catch (e: any) {
    console.error("Error en Mercado Pago:", e);
    res.status(500).json({ error: "No se pudo iniciar el pago" });
  }
};