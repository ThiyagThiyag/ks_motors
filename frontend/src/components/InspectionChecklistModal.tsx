import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldAlert } from 'lucide-react';

interface InspectionChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InspectionChecklistModal = ({ isOpen, onClose }: InspectionChecklistModalProps) => {
  const checklistCategories = [
    {
      title: "Engine & Drivetrain",
      items: ["Diagnostic code scan (Zero faults)", "Compression test (All cylinders within 5%)", "Turbocharger/Supercharger spool inspection", "Transmission fluid analysis", "Differential seals and mounts"]
    },
    {
      title: "Chassis & Suspension",
      items: ["Active suspension calibration check", "Bushings, control arms, and tie rods", "Carbon-ceramic brake rotor thickness", "Brake pad depth (> 70% life remaining)", "Alloy wheel runout test"]
    },
    {
      title: "Exterior & Body",
      items: ["Paint depth measurement (No structural damage)", "Panel gap symmetry inspection", "Aerodynamic active wing functionality", "PPF (Paint Protection Film) integrity check", "Underbody aerodynamics check"]
    },
    {
      title: "Interior & Electronics",
      items: ["Leather/Alcantara condition assessment", "Infotainment and telemetry systems", "Climate control output calibration", "Seat motors, heating, and cooling", "Premium audio system acoustic test"]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="glass-dark w-full max-w-2xl rounded-sm overflow-hidden border border-white/10 pointer-events-auto shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 border-b border-white/5 bg-dark-950 flex-shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldAlert className="w-8 h-8 text-primary-500" />
                  <h2 className="text-2xl font-bold uppercase tracking-widest text-white">
                    150-Point Inspection
                  </h2>
                </div>
                <p className="text-accent-500 text-sm font-light">
                  A glimpse into our rigorous certification process. Every vehicle must pass perfectly before it enters our showroom.
                </p>
              </div>

              <div className="p-8 overflow-y-auto custom-scrollbar flex-grow">
                <div className="space-y-8">
                  {checklistCategories.map((category, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-4 pb-2 border-b border-white/5 flex items-center gap-2">
                        <span className="text-primary-500 font-mono text-sm">0{idx + 1}</span> {category.title}
                      </h3>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-accent-500 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 border-t border-white/5 bg-dark-950 text-center flex-shrink-0">
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  *This is a summarized list. The full 150-point physical report is provided to the buyer upon delivery.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InspectionChecklistModal;
