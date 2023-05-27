import { styles } from "../styles";
import cards from "../assets/cards.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-0 h-0 rounded-full bg-[#E8C6C8]' />
          <div className='w-1 sm:h-0 h-0' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-white-100'>OptiiMind</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Transform the chaos of distractions <br className='sm:block hidden' />
            into a productivity with OptiiMind's magiical alchemy!
          </p>
        </div>
      </div>

      <div class="flex justify-center items-end h-screen ml-50">
        <img src={cards} alt="Image" className="object-contain mb-0 h-3/5" />
      </div>

    </section>
  );
};
export default Hero;
