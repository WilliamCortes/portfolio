import Image from "next/image";
import React, { FC } from "react";

type Props = {
  img: string;
  nick: string;
  slogan: string;
  title: string;
  twitter: string;
  facebook: string;
  linkedin: string;
};

export const Footer: FC<Props> = ({
  img,
  nick,
  slogan,
  title,
  twitter,
  facebook,
  linkedin,
}) => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="side">
            <Image src={img} alt="Web logo" width="45" height="43" />
            <div>
              <p className="text--bold footer-name">
                {nick} {new Date().getFullYear()}{" "}
              </p>
              <p className="text--sm footer-rights">{slogan}</p>
            </div>
          </div>
          <div className="side">
            <p className="text--sm">{title}</p>
            <ul className="footer-sm">
              <li>
                <a
                  className="text--bold hire-value"
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM7.68101 13.252H11.307V24.1464H7.68101V13.252ZM11.5479 9.8818C11.5244 8.8136 10.7605 8 9.5201 8C8.27969 8 7.46875 8.8136 7.46875 9.8818C7.46875 10.9279 8.25572 11.7649 9.47304 11.7649H9.49621C10.7605 11.7649 11.5479 10.9279 11.5479 9.8818ZM20.2088 12.9961C22.5948 12.9961 24.3836 14.5535 24.3836 17.8998L24.3834 24.1464H20.7576V18.3178C20.7576 16.8538 20.2329 15.8548 18.9203 15.8548C17.9186 15.8548 17.3219 16.5283 17.0599 17.1788C16.964 17.4119 16.9404 17.7367 16.9404 18.0623V24.1467H13.3141C13.3141 24.1467 13.3619 14.2745 13.3141 13.2522H16.9404V14.7953C17.4217 14.0535 18.2836 12.9961 20.2088 12.9961Z"
                      fill="var(--light-icon)"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="text--bold hire-value"
                  href={twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM15.5544 13.5582L15.5208 13.0046C15.4201 11.5697 16.3042 10.259 17.7032 9.75059C18.218 9.56981 19.0909 9.54721 19.6617 9.70539C19.8856 9.77318 20.3108 9.99916 20.613 10.2025L21.1614 10.5754L21.7658 10.3833C22.1015 10.2816 22.5492 10.1121 22.7506 9.99916C22.9409 9.89747 23.1088 9.84097 23.1088 9.87487C23.1088 10.0669 22.6947 10.7223 22.3477 11.0838C21.8777 11.5923 22.012 11.6375 22.9633 11.2985C23.534 11.1064 23.5452 11.1064 23.4333 11.3211C23.3662 11.4341 23.0192 11.8295 22.6499 12.1911C22.0232 12.8125 21.9896 12.8803 21.9896 13.4001C21.9896 14.2023 21.6091 15.8745 21.2286 16.7897C20.5235 18.5071 19.0126 20.281 17.5017 21.1736C15.3753 22.4277 12.5438 22.7441 10.16 22.0097C9.36538 21.7611 8 21.1284 8 21.0154C8 20.9815 8.41409 20.9363 8.91772 20.925C9.96973 20.9024 11.0218 20.6086 11.9171 20.0889L12.5214 19.7273L11.8276 19.4901C10.8427 19.1511 9.95854 18.3715 9.73471 17.6371C9.66756 17.3998 9.68994 17.3885 10.3167 17.3885L10.9658 17.3772L10.4174 17.1173C9.76828 16.7897 9.17513 16.236 8.88414 15.6711C8.6715 15.2643 8.4029 14.2362 8.48124 14.1571C8.50362 14.1232 8.73865 14.191 9.00725 14.2814C9.77948 14.5638 9.8802 14.496 9.43253 14.0215C8.59316 13.1628 8.33575 11.886 8.73865 10.6771L8.92891 10.1347L9.66756 10.8692C11.1784 12.3493 12.9579 13.2306 14.9948 13.4905L15.5544 13.5582Z"
                      fill="var(--light-icon)"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  className="text--bold hire-value"
                  href={facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"
                      transform="scale(1.3)"
                      fill="var(--light-icon)"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text--right">
          <a
            className="text--bold hire-value"
            href="https://williamcortes.co/"
            target="_blank"
            rel="noreferrer"
          >
            <h6>&copy; Power By Will I am</h6>
          </a>
        </div>
      </div>
    </footer>
  );
};
