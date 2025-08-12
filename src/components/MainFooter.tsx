const MainFooter = () => {
  return (
    <footer className="border-t border-gray-200 mt-6 lg:mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <p className="sm:text-sm text-xs">
            © 2025 RW-Rent OÜ. All rights reserved. Developed by 1 Zulf OÜ
          </p>
          <div className="flex space-x-4 sm:text-sm text-xs">
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
            <a href="#" className="hover:text-gray-900">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
