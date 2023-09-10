import { Router } from "express";
import { createOrder, receiveWebhook } from '../controllers/payment.controller.js';
const router = Router();

router.post('/create-order', createOrder);

router.get('/success', (req, res) => {
    return res.send('success');
});

router.get('/failure', (req, res) => {
    return res.send('failure');
});

router.get('/pending', (req, res) => {
    return res.send('pending');
});

router.post('/webhook', receiveWebhook);

export default router;
