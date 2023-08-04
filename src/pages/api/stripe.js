import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  console.log(req.method);
  console.log(req.body);

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://nextjs-ecommerce-app-five.vercel.app";

  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1M0jTdSFSFX5BTbYJDWnpFIp" },
        { shipping_rate: "shr_1M0jULSFSFX5BTbYqgk0G4Mw" },
      ],
      line_items: req.body.cartItems.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.title,
              images: [item.thumbnail],
            },
            unit_amount: Math.round(item.price * 82.77 * 100),
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
      success_url: `${redirectURL}/success`,
      cancel_url: `${redirectURL}/canceled`,
    };
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create(params);
    res.status(200).json(session);
    res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
}
