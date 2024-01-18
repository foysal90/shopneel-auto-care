import img1 from '../../assets/images/about_us/person.jpg'
import img2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-5 bg-base-200">
        <div className="hero-content  flex-col  lg:flex-row ">
          <div className='lg:w-1/2 relative '>
          <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={img2} className="w-1/2 absolute right-5 top-1/2 border-white border-8 rounded-lg shadow-2xl" />
         
          </div>
         
          <div className='lg:w-1/2'>
            <h1 className="text-xl text-red-700 font-bold">About us!</h1>
            <h1 className='text-4xl font-extrabold'>We are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
            </p>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <button className="btn btn-primary mt-5">Get More Info</button>
            </div>
            <div>
          </div>
        </div>
      </div>
    );
};

export default About;