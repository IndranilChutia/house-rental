
import axios from 'axios'
class Payment {
    constructor() {
        this.apiUrl = import.meta.env.VITE_HOST + "/api/rental-app";
    }

    // * Order Creation
    async createOrder(userId, propertyId) {
        try {
            let body = {
                userId: userId,
                propertyId: propertyId,
            };
            const response = await axios.post(`${this.apiUrl}/order`, body);
            return response.data ? response.data : response;
        } catch (error) {
            console.error("Error Creating Order:", error);
            throw error;
        }
    }


    // * Payment Validation
    async validatePayment(userId, payment) {
        try {
            // razorpay_order_id: "order_NTlwnuqc6CPQ3N";
            // razorpay_payment_id: "pay_NTlyJpgbXD5ni5";
            // razorpay_signature;
            console.log(payment?.razorpay_signature);
            let option = {
                headers: {
                    "x-razorpay-signature": payment?.razorpay_signature,
                },
            };
            let body = {
                userId: userId,
                order_id: payment?.razorpay_order_id,
                payment_id: payment?.razorpay_payment_id,
            };
            const response = await axios.post(
                `${this.apiUrl}/verify`,
                body,
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