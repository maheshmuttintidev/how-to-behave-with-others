import { Form } from "@/components/form";
import Image from "next/image";

export default async function Page() {
  return (
    <div className="md:min-h-screen h-full flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">

        <Image src="/web-app-manifest-192x192.png" height={65} width={65} className="object-cover mx-auto" alt="Website Icon"/>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          How to Behave with Others
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          {`Get replies based on God's word from the Holy Bible.`}
        </p>
        <Form />
      </div>
    </div>
  );
}