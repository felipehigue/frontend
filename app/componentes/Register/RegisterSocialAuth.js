export default function RegisterSocialAuth() {
    const socials = [
      { icon: '📘', name: 'Facebook' },
      { icon: '🔍', name: 'Google' },
      { icon: '🍎', name: 'Apple' }
    ];
  
    return (
      <div className="flex gap-4 justify-center mb-5">
        {socials.map((social, index) => (
          <a
            key={index}
            href="#"
            className="flex-1 flex items-center justify-center p-3 border border-gray-300 rounded-lg font-medium text-gray-800 hover:bg-gray-50 transition-all"
          >
            <span className="mr-2 text-xl">{social.icon}</span> {social.name}
          </a>
        ))}
      </div>
    );
  }