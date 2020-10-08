export const config = {
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    amount: 100000,
    publicKey: process.env.PAYSTACK_KEY,
}

export const outrightConfig = {
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    publicKey: process.env.PAYSTACK_KEY
}

export const installmentConfig = {
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    publicKey: process.env.PAYSTACK_KEY,
}