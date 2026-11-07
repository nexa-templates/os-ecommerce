# Ecommerce template

This repository is a visual starter, not a storefront or payment service. Preserve the calm Shopify-inspired store admin layout and original Nexa identity.

- Start with README.md. Customize index.html, styles.css, and app.js; Wrangler is a development dependency and there is no application backend yet. Publish the public preview to the Nexa Templates Worker, with the Preview label visible on mobile too; do not enable GitHub Pages.
- Sample sales, orders, and stock figures are fictional. Never imply that clicking a demo control charges a customer or fulfills an order.
- Establish products, currencies, shipping, tax, payment, and inventory requirements before implementing transactions. Use a provider's hosted checkout and server-verified webhooks.
- Imported projects should use their own Cloudflare account, Worker name, resources, and secrets. Never commit customer records or credentials to this public upstream; retain Git history for future merges.
- Run npm run build, check JavaScript syntax, and inspect desktop/mobile browser layouts and order filtering. Add meaningful transaction and access tests as real functionality is implemented.

This standalone version uses Cloudflare Access. Production must fail closed without its issuer, audience and application origin. Local sample tests run with PREVIEW_MODE=true; signed-token tests cover the production gate. Never enable preview mode for customer data or live email.
