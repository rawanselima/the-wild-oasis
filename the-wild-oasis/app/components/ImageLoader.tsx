'use client';

import { useState } from 'react';
import Image from 'next/image';
import Spinner from './Spinner';
import { ImageLoaderProps } from '../types/general';


export default function ImageLoader({ image, name , className, containerClassName }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative h-full w-full overflow-hidden bg-primary-950/20 ${containerClassName ?? ''}`}>
      {/* إظهار الـ Spinner طالما الصورة في حالة التحميل */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}

      {/* إظهار أيقونة في حالة حدوث خطأ في تحميل الصورة */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-200 opacity-50">
          <svg className="w-10 h-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <span className="text-xs">الصورة غير متوفرة</span>
        </div>
      )}

      {!hasError && (
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className={` ${className} object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          quality={50}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
    </div>
  );
}