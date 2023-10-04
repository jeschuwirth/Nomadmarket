## Supuestos y consideraciones

- Al seleccionar un local se muestran solamente aquellos productos con stock en el local.

-  No se muestra el SKU de los productos en la vista de catálogo por temas estéticos. Se consideró que mostrar la imagen, nombre y precio sería suficiente para demostrar el conocimiento de que también podría mostrar el SKU.

- Se asume que todos los productos están disponibles en todos los locales. Los locales disponibles se consiguen del primer producto en el llamado a la API. Si el primer producto no tiene todos los locales entonces solamente se mostrarán aquellos donde el primer producto está disponible. (la forma correcta de arreglar este problema es tener otro endpoint del backend con todos los locales).

- La información del producto en la vista de producto se consigue llamando al endpoint de la API y luego filtrando en ella aquel producto con el SKU correspondiente. (La forma correctar de implementar esto sería con otro endpoint del backend que permite hacer una request por un producto en específico).

- Las siguientes líneas del readme son autogeneradas y muestran cómo ejecutar el código.
---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
