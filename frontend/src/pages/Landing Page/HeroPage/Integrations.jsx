import facebook from "../../../assets/ic_baseline-facebook.png";
import tiktok from "../../../assets/Vector (7).png";
import instagram from "../../../assets/mingcute_instagram-fill.png";
import youtube from "../../../assets/line-md_youtube-twotone.png";
import twitter from "../../../assets/prime_twitter.png";
import email from "../../../assets/line-md_email-twotone.png";

export default function IntegrationsSection() {
  return (
    <section className="relative py-24 mb-60 bg-red-500 text-center overflow-hidden">
      {/* Dotted SVG Arc behind the heading */}
      <svg
        className="absolute top-[135px] left-1/2 transform -translate-x-1/2 z-0 opacity-65"
        width="1400"
        height="400"
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 150 400 A 300 300 0 0 1 650 400"
          stroke="#d1d5db"
          strokeWidth="1"
          strokeDasharray="20 24"
        />
      </svg>

      {/* Icons around arc */}
      <div className="relative w-full max-w-3xl mx-auto z-10">
        {/* Facebook at arc start */}
        <div
          className="absolute "
          style={{
            left: "13.75%",
            top: "159.08%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <IconCircle src={facebook} alt="Facebook" className="w-24 h-24" />
        </div>

        {/* TikTok at arc end */}
        <div
          className="absolute"
          style={{
            right: "2.75%",
            top: "162.08%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <IconCircle src={tiktok} alt="TikTok" />
        </div>

        {/* Instagram (bottom center) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <IconCircle src={instagram} alt="Instagram" />
        </div>

        {/* YouTube (bottom-right) */}
        <div className="absolute"
        >
          <IconCircle src={youtube} alt="YouTube" />
        </div>

        {/* Twitter (bottom-left) */}
        <div className="absolute bottom-8 left-[5%]">
          <IconCircle src={twitter} alt="Twitter" />
        </div>

        {/* Email (top-left) */}
        <div className="absolute top-8 left-[5%]">
          <IconCircle src={email} alt="Email" />
        </div>
      </div>

      {/* Yellow tag */}
      <div className="mb-44 inline-block px-4 py-1 bg-yellow-400 text-sm font-medium rounded-md text-black relative z-10">
        Seamless integrations
      </div>

      {/* Headings */}
      <h2 className="text-4xl md:text-5xl font-bold text-black mt-20 mb-4 relative z-10">
        Integrate with <br /> multiple platforms
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto relative z-10">
        Integrate with all the leading social platforms across the internet
      </p>
    </section>
  );
}

// Icon wrapper for images
function IconCircle({ src, alt }) {
  return (
    <div className="w-24 h-24 rounded-full border-2 border-[#90A3BF]  flex items-center justify-center ">
      <img src={src} alt={alt} className="w-12 h-12 object-contain" />
    </div>
  );
}
