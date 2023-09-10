import mercadopago from 'mercadopago';
import { ACCESS_TOKE_MERCADO_PAGO, HOST } from '../config.js'

export const createOrder = async (req, res) => {
    mercadopago.configure({
        sandbox: true,
        access_token: ACCESS_TOKE_MERCADO_PAGO,
    });

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: 'Laptop',
                unit_price: 500,
                currency_id: 'ARS',
                quantity: 1
            }
        ],
        back_urls: {
            success: `${HOST}/success`,
            failure: `${HOST}/failure`,
            pending: `${HOST}/pending`,
        },
        notification_url: ''  // utilizar ngrok porque necesita un https
    });

    console.log(result);
    return res.send(result.body);
}

export const receiveWebhook = async (req, res) => {
    console.log(req.query);
    try {
        const payment = req.query;

        if (payment.type === 'payment') {
            const data = await mercadopago.payment.findById(payment['data.id']);
            console.log(data);
            // store in database
        }

        return res.sendStatus(204);
    } catch (error) {

        console.log(error);
        return res.sendStatus(500).json({ error: error.message });
    }
}
