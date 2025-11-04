"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useIntro } from '@/context/IntroContext'; 
import { useRouter } from "next/navigation"; 

const IntroAnimation: React.FC = () => {
const router = useRouter();
const { setIsIntroActive } = useIntro(); 
const [showContent, setShowContent] = useState(false);
const [canClick, setCanClick] = useState(false);

useEffect(() => {

const timer = setTimeout(() => {
setShowContent(true);
}, 500);

const enableClickTimer = setTimeout(() => {
setCanClick(true);
}, 2000);

return () => {
clearTimeout(timer);
clearTimeout(enableClickTimer);
};}, []);

 const handleStartJourney = () => {
if (canClick) {

 if (typeof window !== 'undefined') {
sessionStorage.setItem("campusConnectIntroCompleted", "true");
 }

 setIsIntroActive(false); 

router.push("/home");
}
};


 return (
 <div className="relative min-h-screen bg-gradient-to-br from-red-700 to-red-900 flex flex-col items-center justify-center p-4 overflow-hidden">
 {}
 <div className="absolute inset-0 bg-pattern-light opacity-10 animate-fade-in-slow"></div>

{}
<div className={`relative z-10 flex flex-col items-center justify-center transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>

{}
<button
onClick={handleStartJourney}
disabled={!canClick}
className={`
relative w-36 h-36 md:w-48 md:h-48 rounded-full shadow-2xl overflow-hidden
flex items-center justify-center
bg-white transform transition-all duration-700 ease-in-out
${showContent ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
${canClick ? 'animate-vibrate-slow cursor-pointer hover:scale-[1.05] active:scale-95' : 'cursor-not-allowed'}`}
>
<Image
 src="/static/logo.png" 
alt="Campus Connect Logo"
fill
className="object-contain p-4 md:p-6"
sizes="(max-width: 768px) 144px, 192px"
priority
/>
<span className="sr-only">Start Campus Connect</span>
</button>
{}
<h1 className={`text-3xl md:text-5xl font-extrabold text-white text-center mt-10 mb-4 transition-all duration-1000 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
 Welcome to Campus Connect!
 </h1>

{}
<p className={`text-lg md:text-xl text-red-100 text-center max-w-xl transition-all duration-1000 delay-700 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
Let's start the journey.
</p>
</div>

{}
<div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-400 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob-1"></div>
<div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-red-300 rounded-full mix-blend-lighten filter blur-xl opacity-20 animate-blob-2"></div>
</div>
);
};

export default IntroAnimation;
