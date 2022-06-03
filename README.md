This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## docker new image

docker build --pull --rm -f "Dockerfile" -t citizen:v1

## server дээр шинэчлэлт авах дараалал

## PORT=3002 NODE_PORT=3002 pm2 start npm --name "next" -- start

## pm2

- https://pm2.keymetrics.io/docs/usage/quick-start/
- pm2 restart app_name
- pm2 reload app_name
- pm2 stop app_name
- pm2 delete app_name
- pm2 logs --lines 200
- pm2 start npm --name "citizen" -- start

- $ npm install pm2@latest -g

## Update аваад Build хийгээд Server-ээ Restart хийх гол 3 команд

- Эхлээд putty-аар сервер рүүгээ нэвтэрч орно.
- Зохих folder руугаа орно.
- Тэгээд зохих командуудаа өгч серверээ шинэчилнэ.

Командууд:

- svn update - project update (svn-ээс кодоо update авна.)
- npm run build (NextJS-ээ шинээр build хийнэ)
- pm2 restart customer [pm2 ps ашиглаж байгаа сервис] (серверээ restart хийнэ)

customer.veritech.mn -г шинэчлэх

- /home/frontend/customer
- ./build.sh
