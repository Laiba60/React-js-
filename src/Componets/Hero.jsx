import { ArrowUpRight, Filter, Lock, Key } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-blue-950 text-white px-6 py-10 md:px-16">
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {/* Feature Box 1 */}
        <div className="bg-white/10 p-6 rounded-lg">
          <div className="bg-white/20 p-3 rounded-full mx-auto mb-4">
            <Filter size={28} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Instant Store, Safe & Sort</h3>
          <p className="text-sm text-white/80">
            Filter and sort data instantly without exporting.
          </p>
        </div>

        {/* Feature Box 2 */}
        <div className="bg-white/10 p-6 rounded-lg">
          <div className="bg-white/20 p-3 rounded-full mx-auto mb-4">
            <Lock size={28} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Store in High Security</h3>
          <p className="text-sm text-white/80">
            Securely store and manage your passwords.
          </p>
        </div>

        {/* Feature Box 3 */}
        <div className="bg-white/10 p-6 rounded-lg">
          <div className="bg-white/20 p-3 rounded-full mx-auto mb-4">
            <Key size={28} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Unbreakable Passwords</h3>
          <p className="text-sm text-white/80">
            Use strong passwords to protect your accounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
