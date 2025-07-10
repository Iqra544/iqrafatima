import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {/* Contact Info */}
        <div className="flex items-center space-x-3 text-gray-700">
          <FaEnvelope className="text-blue-600" />
          <span>Email: contact@myawesomeapp.com</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <FaPhone className="text-blue-600" />
          <span>Phone: +92 300 1234567</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-700">
          <FaMapMarkerAlt className="text-blue-600" />
          <span>Location: Karachi, Pakistan</span>
        </div>

        {/* Social Links */}
        <div className="pt-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Follow us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebook className="w-6 h-6" />
            </a>  
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaTwitter className="w-6 h-6" /> 
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            </a>            
            </div>
        </div>
      </div>
      </div>
  );
}  
      
