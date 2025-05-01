import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
  useGetAllPaymentHistoryQuery,
} from "@/redux/ApiCalling/apiClice";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
};
const PaymentHistory = () => {
  const [mobileView, setMobileView] = useState(false);
  const { data } = useGetAllPaymentHistoryQuery();
  
  const paymentData = data?.data || [];
  console.log(paymentData)

  useEffect(() => {
    setMobileView(window.innerWidth < 768);
    const handleResize = () => setMobileView(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const getCategoryColor = (category) => {
    switch (category) {
      case "Development":
        return "bg-blue-700 text-white hover:bg-blue-600";
      case "Design":
        return "bg-green-700 text-white hover:bg-green-600";
      case "Marketing":
        return "bg-yellow-600 text-black hover:bg-yellow-500";
      default:
        return "bg-gray-600 text-white hover:bg-gray-500";
    }
  };

  const renderMobileCards = () => (
    <div className="space-y-4 mt-4">
      {paymentData?.map((payment, index) => (
        <motion.div
          key={payment.id}
          className="bg-[#142447] p-4 shadow-md transition-transform hover:scale-[1.02] hover:shadow-blue-500/30 duration-300"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <div className="flex justify-between items-center">
            <span className="text-md font-semibold">
            {payment?.studentId?.name}
            </span>
          </div>
          <div className="mt-2">
            <p className="text-white text-lg font-bold">{payment?.studentId?.name}</p>
            <p className="text-gray-400 text-sm">
  
            </p>
            <p className="text-gray-300 mt-1">  {payment?.studentId?.name}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderDesktopTable = () => (
    <motion.div
      className="bg-[#142447] shadow-xl mt-6 overflow-hidden scrollbar-hidden transition-all duration-300 hover:shadow-blue-500/30"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={0}
    >
      <Table className="scrollbar-hidden">
        <TableHeader className="bg-[#1f2a4a] text-white">
          <TableRow className="border-b border-[#2c3a5c]">
            <TableHead>Student Name</TableHead>
            <TableHead>Transaction Id</TableHead>
            <TableHead>Course Title</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentData?.map((payment, index) => (
            <motion.tr
              key={payment.id}
              className="border-b border-[#2c3a5c] hover:bg-[#1c2b4f] transition duration-300"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <TableCell className="font-semibold">{payment?.studentId?.name}
              </TableCell>
              <TableCell>{payment?.transactionId}</TableCell>
              <TableCell>{payment?.courseId?.title}</TableCell>
              <TableCell>{payment?.courseId?.price}</TableCell>
              <TableCell>{new Date(Number(payment?.date)).toLocaleDateString()}
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );

  return (
    <div className="w-full p-4 md:p-6 bg-[#0B1739] text-white min-h-screen  scrollbar-hidden">
      <motion.h1
        className="text-xl md:text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        All Payment History
      </motion.h1>
      {mobileView ? renderMobileCards() : renderDesktopTable()}
    </div>
  );
};

export default PaymentHistory;
