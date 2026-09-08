"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconType } from "react-icons/lib";
import { IoClose } from "react-icons/io5";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  description?: string;
  url?: string;
  company?: string;
  companyColor?: string;

  // Certificados locales
  certificateImage?: string;
  certificatePdf?: string;
};

const ResumeCard = ({
  Icon,
  role,
  date,
  description,
  url,
  company,
  companyColor = "text-cyan-300",
  certificateImage,
  certificatePdf,
}: Props) => {
  const [showCertificate, setShowCertificate] = useState(false);

  const hasExternalUrl = Boolean(url);
  const hasPdf = Boolean(certificatePdf);
  const hasImage = Boolean(certificateImage);

  const isClickable = hasExternalUrl || hasPdf || hasImage;

  const cardContent = (
    <div
      className={`
        flex items-start space-x-6
        bg-blue-950/20
        transition-all duration-300
        p-4 sm:p-8
        rounded-md
        border border-transparent
        ${
          isClickable
            ? "hover:border-cyan-400 hover:bg-blue-950/40 cursor-pointer group"
            : ""
        }
      `}
    >
      <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center shrink-0">
        <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
      </div>

      <div className="flex-1">
        {date && (
          <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold">
            {date}
          </h1>
        )}

        <h1 className="text-gray-200 text-xl sm:text-2xl font-semibold">
          {role}
        </h1>

        {company && (
          <h2 className={`${companyColor} text-lg font-medium mt-1`}>
            {company}
          </h2>
        )}

        {description && (
          <p className="text-gray-300 text-sm sm:text-base pt-3 leading-relaxed">
            {description}
          </p>
        )}

        {isClickable && (
          <p className="mt-4 text-cyan-300 text-sm font-medium">
            Ver certificado →
          </p>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="mb-6">
        {/* 1. CREDENCIAL EXTERNA */}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {cardContent}
          </a>

        /* 2. CERTIFICADO PDF */
        ) : certificatePdf ? (
          <a
            href={certificatePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {cardContent}
          </a>

        /* 3. CERTIFICADO COMO IMAGEN */
        ) : certificateImage ? (
          <button
            type="button"
            onClick={() => setShowCertificate(true)}
            className="block w-full text-left"
          >
            {cardContent}
          </button>

        /* 4. TARJETA NORMAL */
        ) : (
          cardContent
        )}
      </div>

      {/* MODAL PARA CERTIFICADOS EN IMAGEN */}
      {showCertificate && certificateImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setShowCertificate(false)}
        >
          <button
            type="button"
            onClick={() => setShowCertificate(false)}
            className="absolute top-5 right-5 text-white text-4xl hover:text-cyan-300 transition-colors"
            aria-label="Cerrar certificado"
          >
            <IoClose />
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={certificateImage}
              alt={`Certificado de ${role}`}
              width={1600}
              height={1100}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeCard;