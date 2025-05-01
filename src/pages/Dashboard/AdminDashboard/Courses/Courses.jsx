import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  useDeleteCoursesMutation,
  useGetCourseQuery,
} from '@/redux/ApiCalling/apiClice';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
};

const Courses = () => {
  const [mobileView, setMobileView] = useState(false);
  const { data } = useGetCourseQuery();
  const coursesData = data?.data || [];
  const [deleteCourses] = useDeleteCoursesMutation();

  useEffect(() => {
    setMobileView(window.innerWidth < 768);
    const handleResize = () => setMobileView(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const deleteSignleCourse = async id => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async result => {
        if (result.isConfirmed) {
          await deleteCourses(id).unwrap();
          Swal.fire({
            title: 'Deleted!',
            text: 'Course has been deleted.',
            icon: 'success',
          });
        }
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  const getCategoryColor = category => {
    switch (category) {
      case 'Development':
        return 'bg-blue-700 text-white hover:bg-blue-600';
      case 'Design':
        return 'bg-green-700 text-white hover:bg-green-600';
      case 'Marketing':
        return 'bg-yellow-600 text-black hover:bg-yellow-500';
      default:
        return 'bg-gray-600 text-white hover:bg-gray-500';
    }
  };

  const renderMobileCards = () => (
    <div className="space-y-4 mt-4">
      {coursesData?.map((course, index) => (
        <motion.div
          key={course.id}
          className="bg-[#142447] p-4 shadow-md transition-transform hover:scale-[1.02] hover:shadow-blue-500/30 duration-300"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <div className="flex justify-between items-center">
            <span className="text-md font-semibold">
              {course.instructors.join(', ')}
            </span>
            <Badge className={getCategoryColor(course.status)}>
              {course.status}
            </Badge>
          </div>
          <div className="mt-2">
            <p className="text-white text-lg font-bold">{course.title}</p>
            <p className="text-gray-400 text-sm">
              Duration: {course.totalDuration} months
            </p>
            <p className="text-gray-300 mt-1">${course.price}</p>
          </div>
          <div className="flex justify-end gap-2 mt-3">
            <Button variant="ghost" size="icon" className="hover:text-white">
              <Edit size={18} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteSignleCourse(course._id)}
              className="hover:text-red-400"
            >
              <Trash2 size={18} />
            </Button>
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
            <TableHead>Course</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {coursesData?.map((course, index) => (
            <motion.tr
              key={course.id}
              className="border-b border-[#2c3a5c] hover:bg-[#1c2b4f] transition duration-300"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <TableCell className="font-semibold">{course.title}</TableCell>
              <TableCell>
                {course.instructors?.map(ins => ins.name).join(', ')}
              </TableCell>
              <TableCell>
                <Badge className={getCategoryColor(course.status)}>
                  {course.status}
                </Badge>
              </TableCell>
              <TableCell>{course.totalDuration} months</TableCell>
              <TableCell className="text-right">${course.price}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-green-800"
                  >
                    <Edit size={18} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteSignleCourse(course._id)}
                    className="hover:text-red-400"
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
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
        All Available Courses
      </motion.h1>
      {mobileView ? renderMobileCards() : renderDesktopTable()}
    </div>
  );
};

export default Courses;
