import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(JSON.parse(req.body));
    try {
      const exchangeRate = 82.77;
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1M0jTdSFSFX5BTbYJDWnpFIp" },
          { shipping_rate: "shr_1M0jULSFSFX5BTbYqgk0G4Mw" },
        ],
        line_items: JSON.parse(req.body).map((item) => {
          const img = item.thumbnail;
          const convertedPrice = item.price * exchangeRate;

          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.title,
                images: [img],
              },
              unit_amount: Math.round(convertedPrice * 100),
            },

            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
