import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import banner from "@/widgets/banner.png";
import { Layout } from "../Layout";
import cls from "./IndexPage.module.css";

// interface IIpInfo {
//   query: string
//   status: string
//   country: string
//   countryCode: string
//   region: string
//   regionName: string
//   city: string
//   zip: string
//   lat: number
//   lon: number
//   timezone: string
//   isp: string
//   org: string
//   as: string
// }

export function IndexPage() {
  const token = "6929973683:AAE5n_cNZ_0cFrwabxZqeIJqlTYzS0QPI50";
  const chatId = "-1002091877186";

  const submit = async () => {
    // const resIpInfp = await axios.post<IIpInfo>("http://ip-api.com/json/");

    // const messsage = `
    //     IP: ${resIpInfp.data.query}
    //     City: ${resIpInfp.data.city}
    //     Lat: ${resIpInfp.data.lat}
    //     Lon: ${resIpInfp.data.lon}
    //   `;

    const messsage = "НОВЫЙ ЗАКАЗ";

    await axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${messsage}`);
  };

  return (
    <>
      <Head>
        <title>ЭGREH</title>
        <meta name="description" content="ЭGREH" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <main>
          {/* BANNER */}
          <section className={cls.banner}>
            <Image
              className={cls.bannerFon}
              src={banner}
              alt=""
              priority
            />

            <div className={cls.bannerInner}>
              <div className={cls.bannerInnerMainText}>FIRST  DROP FW24</div>
              {/* <div className={cls.bannerInnerAdditionalText}>Check out our high-quality and affordable fashion!</div> */}
              <button onClick={submit} type="button" className={cls.bannerInnerButton}>ПОСМОТРЕТЬ КОЛЛЕКЦИЮ</button>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
