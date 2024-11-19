import Link from "next/link";
import Image from "next/image";
import imgBanner from "@images/banner__namiko-banner-1.png";
import imgDummy1 from "@images/dummy-home-namiko-present-1.png";
import imgDummy2 from "@images/dummy-home-namiko-present-2.png";
import imgShowCase2 from "@images/dummy-namiko-showcase-2.png";
import imgIcon1 from "@images/dummy-standard-icon-1.png";
import imgIcon2 from "@images/dummy-standard-icon-2.png";
import imgIcon3 from "@images/dummy-standard-icon-3.png";
import imgLogo from "@images/logo.svg";
import imgAbout from "@images/switchflex-new-670x440.jpg";
import imgSwf from "@images/switchflex-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLine,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import {
  FOLLOW_FACEBOOK_ROUTE_PATH,
  FOLLOW_INSTAGRAM_ROUTE_PATH,
  FOLLOW_LINE_ROUTE_PATH,
  FOLLOW_X_ROUTE_PATH,
  FOLLOW_YOUTUBE_ROUTE_PATH,
} from "@/const/route-paths.const";

export default function Home() {
  return (
    <>
      <main className="mb-16 space-y-16 *:mx-auto">
        <Image
          className="container rounded-xl"
          src={imgBanner}
          alt="Namiko Banner"
        />

        <section className="container grid justify-items-center px-3 md:grid-cols-2 md:space-x-4 xl:px-0">
          <div>
            <h2 className="mb-10 ms-3 text-3xl text-primary md:mb-16 md:ps-0">
              Every Emotion captured By &quot;Namiko&quot;
            </h2>
            <div className="*:my-3">
              <Image
                className="rounded-xl"
                src={imgDummy1}
                alt="Present Product"
              />
              <div className="px-3">
                <p>
                  Namiko x Linsy ชุดโต๊ะอาหารลายหินอ่อน 6 ที่นั่ง รุ่น
                  LS151ZH47R1003 - Green
                </p>
                <b className="text-xl text-primary">฿ 59,900.-</b>
              </div>
            </div>
          </div>
          <div className="*:my-3">
            <Image
              className="rounded-xl"
              src={imgDummy2}
              alt="Present Product"
            />
            <div className="px-3">
              <p>
                Namiko x Linsy Modern ชั้นไม้วางของ 4 ชั้น 1 ตู้ - Dark Brown
              </p>
              <b className="text-xl text-primary">฿ 11,990.-</b>
            </div>
          </div>
        </section>

        <section className="container flex flex-col px-3 xl:px-0">
          <h2 className="mb-6 flex justify-center text-3xl text-primary md:justify-end">
            เก็บความรู้สึกด้วย Namiko
          </h2>
          <div
            className="rounded-xl bg-cover bg-center"
            style={{
              backgroundImage: "url(./images/dummy-namiko-showcase-1.png)",
            }}
          >
            <div className="w-full p-16 pb-20 text-white md:w-1/2">
              <p className="mb-4">Namiko x Linsy โซฟาหนังแท้พร้อมที่วางเท้า</p>
              <p className="mb-8">
                <small>
                  โซฟาหนังนุ่ม พร้อมที่วางเท้า โซฟาหนังพนักพิงศีรษะหนังวัว
                  บุด้วขนห่าน ตัวโครงเป็นไม้เนื้อแข็ง
                  มีความแข็งแรงทนทานใช้งานได้ยาวนาน
                </small>
              </p>
              <button>
                <Link
                  href={"/products"}
                  className="flex items-center rounded-full bg-white px-4 py-2 text-primary"
                >
                  ดูเพิ่มเติม{" "}
                  <FontAwesomeIcon
                    icon={faAnglesRight}
                    className="ms-2 size-4"
                  />
                </Link>
              </button>
            </div>
          </div>
        </section>

        <section className="container flex flex-wrap items-center justify-center px-5 md:px-0">
          <div className="order-2 space-y-6 px-3 text-primary md:order-1 md:basis-1/2 xl:px-0">
            <h2 className="text-3xl">Namiko กล่องอาหารสเตนเลส 4 ช่อง 1500ml</h2>
            <p>
              สามารถเก็บความร้อนได้ดี ออกแบบให้เติมน้ำร้อนเพื่อรักษาอุณหภูมิ
              เวลาเข้าไมโครเวฟกรุณานำแผ่นสแตตนเลสออก
            </p>
            <button className="underline-offset-4 hover:underline">
              <Link href={"/products"} className="flex items-center">
                ดูเพิ่มเติม{" "}
                <FontAwesomeIcon icon={faAnglesRight} className="ms-2 size-4" />
              </Link>
            </button>
          </div>
          <div className="py-3 md:order-2 md:basis-1/2">
            <Image src={imgShowCase2} alt="Showcase" />
          </div>
        </section>

        <section className="bg-[#eaf3ef] py-6">
          <h2 className="pb-6 text-center text-3xl text-primary">
            <b>มาตรฐานของเรา</b>
          </h2>
          <div className="container mx-auto flex flex-wrap space-x-0 space-y-3 md:space-x-6 md:space-y-0 [&_img]:size-12">
            <div className="flex basis-full flex-col items-center space-y-3 rounded-xl bg-white p-10 text-center md:flex-1">
              <Image src={imgIcon1} alt="standard icon" />
              <b>คุณภาพ</b>
              <p>
                เราเลือกแต่วัสดุเกรดพรีเมี่ยม
                เพื่อให้มั่นใจว่าสินค้าจะมีคุณภาพดีที่สุด
              </p>
            </div>
            <div className="flex basis-full flex-col items-center space-y-3 rounded-xl bg-white p-10 text-center md:flex-1">
              <Image src={imgIcon2} alt="standard icon" />
              <b>การจัดส่งรวดเร็ว</b>
              <p>
                จัดส่งถึงมือคุณอย่างรวดเร็วด้วยบริการขนส่งชั้นนำจาก Topvalue
                Express
              </p>
            </div>
            <div className="flex basis-full flex-col items-center space-y-3 rounded-xl bg-white p-10 text-center md:flex-1">
              <Image src={imgIcon3} alt="standard icon" />
              <b>ราคาคุ้มกว่า</b>
              <p>คุ้มค่าทั้งราคาที่เหมาะสม และคุณภาพที่คุณจะได้รับ</p>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="flex flex-wrap items-center justify-center">
            <div className="mb-5 flex items-center divide-x *:px-5 sm:mb-0">
              <h4 className="text-primary">ติดตามเรา</h4>
              <Image className="h-5" src={imgLogo} alt="logo" />
            </div>
            <div className="space-x-1 *:size-12 *:rounded-full *:border-2 *:border-primary *:bg-primary *:text-white hover:[&_button]:bg-white hover:[&_button]:text-primary">
              <button>
                <a href={FOLLOW_FACEBOOK_ROUTE_PATH} target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="mx-auto mt-1 size-6"
                  />
                </a>
              </button>
              <button>
                <a href={FOLLOW_LINE_ROUTE_PATH} target="_blank">
                  <FontAwesomeIcon
                    icon={faLine}
                    className="mx-auto mt-1 size-6"
                  />
                </a>
              </button>
              <button>
                <a href={FOLLOW_YOUTUBE_ROUTE_PATH} target="_blank">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="mx-auto mt-1 size-6"
                  />
                </a>
              </button>
              <button>
                <a href={FOLLOW_INSTAGRAM_ROUTE_PATH} target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="mx-auto mt-1 size-6"
                  />
                </a>
              </button>
              <button>
                <a href={FOLLOW_X_ROUTE_PATH} target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="mx-auto mt-1 size-6"
                  />
                </a>
              </button>
            </div>
          </div>
        </section>

        <section className="container flex flex-wrap items-center shadow-md">
          <Image
            className="basis-full object-cover lg:basis-3/5"
            src={imgAbout}
            alt="Company"
          />

          <div className="basis-full space-y-5 px-10 py-5 lg:basis-2/5">
            <p className="text-gray-400">
              <small>เกี่ยวกับ</small>
            </p>
            <b className="text-xl text-primary">บริษัท สวิทซ เฟรคซ จำกัด</b>
            <p className="text-gray-400">
              ก่อตั้งขึ้นเมื่อปี 2005
              โดยกลุ่มวิศวกรที่มีความเชี่ยวชาญในงานเครื่องจักรโดยเฉพาะ
              และดำเนินธุรกิจนำเข้าและส่งออกเครื่องจักร
              ทั้งขนาดเล็กและขนาดใหญ่สำหรับงานอุตสาหกรรม จนกระทั่งในปี 2019
              คณะผู้ก่อตั้งบริษัท
              ได้เล็งเห็นถึงโอกาสในการนำเครื่องจักรและเทคโนโลยี
              มาพัฒนาต่อยอดเพื่อผลิตเป็นเครื่องใช้ไฟฟ้าในครัวเรือน
            </p>
            <button className="box-border rounded-full border-2 border-primary bg-primary px-4 py-2 text-white hover:bg-white hover:text-primary">
              <Link href={"/about-us"} className="flex items-center">
                ดูเพิ่มเติม
                <FontAwesomeIcon icon={faAnglesRight} className="ms-2 size-4" />
              </Link>
            </button>
            <div className="space-y-4 border-t pt-4">
              <p className="mb-3">
                <small>ไปยังเว็บไซต์</small>
              </p>
              <a
                href="https://switchflex.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={imgSwf} alt="switchflex" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
