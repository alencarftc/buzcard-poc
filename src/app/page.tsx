"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

type QrCodeConfigType = "contact" | "email" | "instagram" | "whatsapp";

const QRCODE_IMAGES = {
  contact: {
    name: "Salvar contato",
    image: "qrcode-contact.png",
    icon: "contact.svg",
  },
  email: {
    name: "Enviar email",
    image: "qrcode-email.png",
    icon: "email.svg",
  },
  instagram: {
    name: "Visitar instagram",
    image: "qrcode-instagram.png",
    icon: "instagram.svg",
  },
  whatsapp: {
    name: "Salvar whatsapp",
    image: "qrcode-whatsapp.png",
    icon: "whatsapp.svg",
  },
};

export default function Home() {
  const [selectedQrCodeConfig, setSelectedQrCodeConfig] =
    useState<QrCodeConfigType>("contact");

  const handleOnBtnClick = (type: QrCodeConfigType) =>
    setSelectedQrCodeConfig(type);

  const { name, image, icon } = QRCODE_IMAGES[selectedQrCodeConfig];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header>
          <div className={styles.background_container}>
            <Image
              src="/images/bg.jpg"
              alt="Frente da loja"
              className={styles.background_image}
              width={432}
              height={200}
            />
          </div>

          <div className={styles.profile_container}>
            <Image
              src="/images/profile.png"
              alt="Foto de perfil"
              className={styles.profile_image}
              width={168}
              height={168}
              priority
            />
          </div>
        </header>

        <div className={styles.content}>
          <h1 className={styles.title}>Sara de Alencar</h1>
          <span className={styles.subtitle}>
            Consultora de Vendas @ Big Passo Calçados
          </span>

          <button
            className={`${styles.qrcode_container_btn} ${
              styles[`qrcode--${selectedQrCodeConfig}`]
            }`}
          >
            <div className={styles.qrcode_header}>
              <Image
                src={`/icons/${icon}`}
                alt=""
                width={24}
                height={24}
                className={styles.qrcode_icon}
              />
              <span className={styles.qrcode_title}>{name}</span>
            </div>
            <Image
              src={`/images/${image}`}
              alt={name}
              width={200}
              height={200}
              className={`${styles.qrcode_image}`}
            />
          </button>

          <div className={styles.buttons}>
            <button
              onClick={() => handleOnBtnClick("contact")}
              className={`${styles.button} ${styles["btn-contact"]}`}
            >
              <Image src="/icons/contact.svg" alt="" width={32} height={32} />
            </button>
            <div className={styles.row}>
              <button
                onClick={() => handleOnBtnClick("email")}
                className={`${styles.button} ${styles["btn-email"]}`}
              >
                <Image src="/icons/email.svg" alt="" width={32} height={32} />
              </button>
              <button
                onClick={() => handleOnBtnClick("instagram")}
                className={`${styles.button} ${styles["btn-instagram"]}`}
              >
                <Image
                  src="/icons/instagram.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </button>
              <button
                onClick={() => handleOnBtnClick("whatsapp")}
                className={`${styles.button} ${styles["btn-whatsapp"]}`}
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// import { MetadataRoute } from "next";

// export default function manifest(): MetadataRoute.Manifest {
//   return {
//     name: "Taomus",
//     short_name: "Taomus",
//     theme_color: "#fffdf6",
//     background_color: "#072530",
//     display: "standalone",
//     orientation: "natural",
//     scope: "/",
//     start_url: "/",
//     icons: [
//       { src: "/icons-192.png", type: "image/png", sizes: "192x192" },
//       { src: "/icons-256.png", type: "image/png", sizes: "256x256" },
//       { src: "/icons-512.png", type: "image/png", sizes: "512x512" },
//     ],
//   };
// }
