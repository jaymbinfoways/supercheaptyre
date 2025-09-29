import React from 'react';
import { Play, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from './Card';

const AboutUsVideo = () => {
    return (
        <section className="w-full h-full max-w-4xl mx-auto">
            <Card className="bg-white rounded-[20px] shadow-sm border-0 h-full flex flex-col">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-[40px] flex flex-col">
                    <h2 className="font-lexend font-medium text-black text-2xl sm:text-3xl md:text-[32px] leading-[1.2] mb-6 sm:mb-8 md:mb-[30px]">
                        Key Values or Commitments
                    </h2>

                    <p className="font-lexend font-normal text-[#6e6d6d] text-base sm:text-lg md:text-xl leading-7 md:leading-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </CardContent>
            </Card>
        </section>
    );
};

export default AboutUsVideo;
