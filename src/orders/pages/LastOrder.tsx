import { Layout } from "../../ui/Layout";

const setText = (): string => {
  return "Hello, I would like to complete my purchase. My order ID is 1234".replace(
    /\s/g,
    "%20"
  );
};

export const LastOrder = () => {
  return (
    <Layout>
      <main className="mt-32">
        <h1 className="italic text-lg text-center">
          Contact our team to complete your purchase.
        </h1>
        <p className="pt-5">
          We'll give you a code after clicking the button, then send it to our
          staff by continuing to Whatsapp.
        </p>
        <a
          className="bg-green-400 w-60 py-2 block text-center text-white cursor-pointer rounded-lg mx-auto mt-5"
          href={`https://wa.me/584121930005/?text=${setText()}`}
        >
          Go to Whatsapp
        </a>
      </main>
    </Layout>
  );
};
