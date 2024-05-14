
import axios from 'axios'
class Payment {
    constructor() {
        this.apiUrl = import.meta.env.VITE_HOST + "/api/rental-app";
    }

    // * Order Creation
    async createOrder(id) {
        try {
            let body = {
                subscriptionId: id,
            };
            const response = await axios.post(`${this.apiUrl}/order`, body);
            console.log(response);
            return response;
        } catch (error) {
            console.error("Error Creating Order:", error);
            throw error;
        }
    }


    // * Payment Validation
    async validatePayment(payment) {
        try {
            // razorpay_order_id: "order_NTlwnuqc6CPQ3N";
            // razorpay_payment_id: "pay_NTlyJpgbXD5ni5";
            // razorpay_signature;
            let option = {
                headers: {
                    "x-razorpay-signature": payment?.razorpay_signature,
                },
            };
            let body = {
                order_id: payment?.razorpay_order_id,
                payment_id: payment?.razorpay_payment_id,
            };
            const response = await post(
                `${this.apiUrl}/verifyOrder`,
                body,
                {},
                option
            );

            if (response.statusCode == "200") {
                return response;
            } else {
                return "Faced some issue to update the payment details,please wait for sometime";
            }
        } catch (error) {
            console.error("An error occurred while validating the payment", error);
            throw error;
        }
    }
}

export default Payment;