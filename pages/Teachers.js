import Footer from "./components/Footer";
import TeachersList from "./components/TeachersList";
import Navbarr from "./components/Navbarr";
import BackButton from "./components/BackButton";
const Teachers = () => {
  return (
    <div>
      <Navbarr></Navbarr>
      <BackButton />
      <div>
        <p className="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3 mx-auto pt-16">
          Монголын боловсрол нэгт!
        </p>
        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          Манай багш нар
        </h1>
      </div>
      <TeachersList />
      <Footer></Footer>
    </div>
  );
};

export default Teachers;
