# Ecommerce

Visual starter; functional accounting/payment workflows remain planned.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/nexa-templates/os-ecommerce)

## Run and deploy

Install dependencies using the included lockfile, run `npm run build`, then `npm run deploy`. Wrangler provisions the declared resources. No Nexa account or API key is required for the default configuration.

## Access

Public visual storefront. No real checkout or financial transactions.

`PREVIEW_MODE=true` is only for an isolated public sample deployment with no customer data or live services. Real installations use `false`.
## Source

Adapted from [ecommerce](https://github.com/nexa-templates/ecommerce/tree/646dc5ffa26043b5ec29720c3dfd84f8205ebd25) at `646dc5ffa26043b5ec29720c3dfd84f8205ebd25`. Original license files are retained. These source files are ordinary Wrangler applications; no Nexa manifest is required.
