import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useTranslation } from 'react-i18next';

interface BookingBannerProps {
    className?: string;
}

export const BookingBanner: React.FC<BookingBannerProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 p-8 md:p-12 shadow-2xl ${className}`}>
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="space-y-4 max-w-2xl">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                    >
                        {t('booking.title', "Ready to streamline your IT?")}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-blue-50 leading-relaxed"
                    >
                        {t('booking.subtitle', "Book a free consultation with our experts. We discuss your needs and find the perfect solution for your infrastructure.")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start"
                    >
                        <div className="flex items-center gap-2 text-sm font-medium text-white/80 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                            <Calendar size={14} /> 30 Min Free Call
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-white/80 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                            <ExternalLink size={14} /> Microsoft Bookings
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button
                        onClick={() => window.open('https://outlook.office.com/book/AnyTec@byondx.app/s/mA87sccjGUObd3uqL8ahWA2?ismsaljsauthenabled', '_blank')}
                        className="bg-white text-blue-600 dark:text-gray-900 hover:bg-white/90 border-0 text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                    >
                        {t('footer.contact', 'Book Meeting')} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>
        </div>
    );
};
