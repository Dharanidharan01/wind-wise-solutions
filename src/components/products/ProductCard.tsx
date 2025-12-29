import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  shortDesc: string;
  image: string;
  icon: React.ReactNode;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Product Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onClick={() => setIsModalOpen(true)}
        className="group cursor-pointer bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
      >
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          {product.icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {product.shortDesc}
        </p>
        <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
          <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            {/* Backdrop */}
            <div
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-foreground/60 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.35, 
                ease: [0.4, 0, 0.2, 1]
              }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden"
            >
              <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-y-auto max-h-[85vh]">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors duration-200"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>

                {/* Product Image */}
                <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      {product.icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold">
                      {product.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8">
                    {product.description}
                  </p>

                  <Link to="/contact" onClick={() => setIsModalOpen(false)}>
                    <Button variant="hero" size="lg" className="w-full sm:w-auto gap-2">
                      Contact Us
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;
