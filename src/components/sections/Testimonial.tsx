import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useLang } from '../../i18n/LanguageContext';

export function Testimonial() {
  const { t, isRTL } = useLang();

  return (
    <section className="bg-brand-beige text-brand-dark relative overflow-hidden flex items-center py-24 lg:py-0 lg:min-h-[700px] border-y border-brand-darker/5">
      {/* Background Image */}
      <div className={`absolute inset-0 w-full h-full lg:w-1/2 opacity-20 lg:opacity-100 ${isRTL ? 'lg:left-0' : 'lg:left-0'}`}>
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"
          alt="Patiente satisfaite"
          className="w-full h-full object-cover object-top grayscale"
        />
        <div className={`hidden lg:block absolute inset-0 bg-gradient-to-${isRTL ? 'r' : 'r'} from-transparent via-brand-beige/50 to-brand-beige`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex ${isRTL ? 'justify-end' : 'justify-end'}`}>
          <motion.div
            className={`w-full lg:w-[55%] ${isRTL ? 'lg:pl-16 text-right' : 'lg:pl-16 text-left'} relative`}
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative quote mark */}
            <Quote className={`absolute -top-16 ${isRTL ? '-right-4 rotate-0' : '-left-4 rotate-180'} w-32 h-32 text-primary opacity-10`} />

            <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary mb-6 font-semibold flex items-center gap-3">
              <img src="/Assets/logo.png" alt="" className="h-10 w-auto" />
              {t('testimonial_eyebrow') || 'Témoignages'}
            </p>

            <h2 className="font-serif text-5xl lg:text-7xl mb-10 leading-tight text-brand-dark relative z-10">
              {t('testimonial_title')}
              <br />
              <span className="italic text-shimmer">{t('testimonial_title_italic')}</span>
            </h2>

            <p className="text-xl lg:text-2xl font-serif italic leading-relaxed mb-10 text-brand-dark/80 relative z-10">
              {t('testimonial_quote')}
            </p>

            <div className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'} space-y-6 relative z-10 border-t border-brand-darker/10 pt-8`}>
              <div className={`flex flex-col lg:flex-row items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="flex text-primary text-xl space-x-1">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <div className="hidden lg:block w-px h-8 bg-brand-darker/20" />
                <div className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-brand-dark gap-3">
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-md text-base">
                    ✨
                  </span>
                  {t('testimonial_stat')}
                </div>
              </div>
              <p className="text-brand-dark/60 text-xs tracking-widest uppercase">{t('testimonial_author')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
