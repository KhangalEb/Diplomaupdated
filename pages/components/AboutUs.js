import { motion } from "framer-motion";
const AboutUs = () => {
  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <div>
      <motion.div
        className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <motion.div variants={textAnimate}>
                <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Бидний тухай
                </h2>
              </motion.div>
              <motion.div variants={textAnimate}>
                <p className=" mb-4">
                  Компьютерын хэрэглээ өсөн нэмэгдэж, техник технологи эрчимтэй
                  хөгжиж буй өнөөгийн нийгэмд мэдээлэл харилцаа холбооны
                  технологи (МХХТ) хөгжихийн хэрээр бидний өдөр тутмын үйл
                  ажиллагаа ч энэ бүгдээс хамааралтай болж байгаа билээ. Монгол
                  улсын боловсролын салбар болон мэдээллийн технологийн салбар
                  хоорондоо холбогдоод мөн удаж байгаа билээ. Ялангуяа сүүлийн
                  жилүүдэд цар тахал гарсантай холбоотой цахим сургалтын систем
                  нь дан монголд ч төдийгүй дэлхий нийтээр хөгжлөө.
                </p>
                <p>
                  Үнийг дагаад цахим сургалтын системүүд хэд хэдээрээ хэрэглээнд
                  нэвтэрч хэдэн сая хэрэглэгчидтэй болж амжсан байна. Тэгвэл
                  сурагч нар өөрсдийн багшаасаа бүрэн сурч чадаагүй хичээлийн
                  сэдэв, эсвэл хичээлтэй холбоотой зөвлөгөө зэргийг тухайн
                  хичээлийн мэргэжлийн багш нараас онлайнаар давтлага, зөвлөгөө
                  зэргийг авах боломжийг манай систем болох “Онлайн цагийн
                  багшийн систем” бий болгож байгаа юм.
                </p>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div className="image-container" variants={imageAnimate}>
                <img
                  className="w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                  alt="office content 1"
                />
              </motion.div>
              <motion.div className="image-container" variants={imageAnimate}>
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                  alt="office content 2"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default AboutUs;
