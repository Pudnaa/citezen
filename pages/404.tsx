import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "antd";

export default function notfound() {
  const router = useRouter();

  return (
    <div
      className="w-screen h-screen bg-center bg-no-repeat bg-cover flex items-center"
      style={{
        backgroundImage: `url(https://pbs.twimg.com/media/BUxylabCcAAdLMg.jpg:large)`,
      }}
    >
      <div className="w-2/5 mx-auto text-white text-2xl text-center font-normal">
        <div className="text-4xl font-bold mb-8">404</div>
        Уучлаарай, таны хүссэн хуудас олдсонгүй.
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="w-full">
            <Link href="/">
              <a>
                <Button type="primary" className="w-full">
                  Нүүр
                </Button>
              </a>
            </Link>
          </div>
          <div className="w-full">
            <Button
              type="ghost"
              className="w-full"
              onClick={() => router.back()}
            >
              Буцах
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
