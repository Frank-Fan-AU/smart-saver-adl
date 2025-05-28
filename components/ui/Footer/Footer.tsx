import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-400 border-t border-brand-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 品牌区域 */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold text-white">SmartSaverADL</span>
            </div>
            <p className="text-brand-100 text-sm">
              Your smart shopping companion in Adelaide
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productlist" className="text-brand-100 hover:text-white transition-colors">
                  Product List
                </Link>
              </li>
              <li>
                <Link href="/" className="text-brand-100 hover:text-white transition-colors">
                  Shopping List
                </Link>
              </li>
              <li>
                <Link href="/" className="text-brand-100 hover:text-white transition-colors">
                  Price Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@smartsaveradl.com" className="text-brand-100 hover:text-white transition-colors">
                  support@smartsaveradl.com
                </a>
              </li>
              <li>
                <a href="https://github.com/your-repo" className="text-brand-100 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 pt-8 border-t border-brand-300">
          <p className="text-center text-brand-100 text-sm">
            &copy; {new Date().getFullYear()} SmartSaverADL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
