import React from 'react';
import imagesOTR12294 from '../images/OTR12294.jpg';
import RishiImage from '../images/Rishi.jpeg';
import KaavyaImage from '../images/Kaavya.jpeg';
function Team() {
    let message = 'The Team';
    return (
        <section className="section-white h-full w-full py-12 bg-gray-100">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">The Team behind NaviGree</h2>
                    <p className="text-xl text-gray-600">{message}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Team Member: Rishitha */}
                    <div className="team-item bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                        <img src={RishiImage} className="w-32 h-32 mx-auto rounded-full" alt="Rishitha Bura" />
                        <h3 className="text-xl font-semibold mt-4">Rishitha Bura</h3>
                        <p className="text-white-500 mb-4">rishib48@gmail.com</p>
                        <ul className="team-icon flex justify-center space-x-4">
                            <li><a href="https://www.linkedin.com/in/rishitha-bura-36a035231/" className="text-blue-500 hover:text-blue-600">
                                <i className="fab fa-linkedin"></i>
                            </a></li>
                        </ul>
                    </div>

                    {/* Team Member: Will Gan */}
                    <div className="team-item bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                        <img src={imagesOTR12294} className="w-32 h-32 mx-auto rounded-full" alt="Will Gan" />
                        <h3 className="text-xl font-semibold mt-4">Will Gan</h3>
                        <p className="text-white-500 mb-4">willg899@gmail.com</p>
                        <ul className="team-icon flex justify-center space-x-4">
                            <li><a href="https://www.linkedin.com/in/william-gan-4384572a8/" className="text-blue-500 hover:text-blue-600">
                                <i className="fab fa-linkedin"></i>
                            </a></li>
                        </ul>
                    </div>

                    {/* Team Member: Kaavya Karnati */}
                    <div className="team-item bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                        <img src={KaavyaImage} className="w-32 h-32 mx-auto rounded-full" alt="Kaavya Karnati" />
                        <h3 className="text-xl font-semibold mt-4">Kaavya Karnati</h3>
                        <p className="text-white-500 mb-4">kaavya.karnati@gmail.com</p>
                        <ul className="team-icon flex justify-center space-x-4">
                            <li><a href="https://www.linkedin.com/in/kaavya-naga-sri-karnati/" className="text-blue-500 hover:text-blue-600">
                                <i className="fab fa-linkedin"></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;