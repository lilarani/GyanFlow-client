import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  User,
  Calendar,
  Tag,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
  Menu,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useGetCourseQuery } from '@/redux/ApiCalling/apiClice';

const Courses = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);
  const { data, isLoading, isError } = useGetCourseQuery();
  console.log(data);
  const coursesData = data?.data;

  // Add resize listener
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCategoryColor = category => {
    switch (category) {
      case 'Development':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Design':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Marketing':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const renderMobileCards = () => {
    return (
      <div className="space-y-4">
        {coursesData.map(course => (
          <div key={course.id} className="bg-navy-900 rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">
                {course.instructors.join(', ')}
              </span>
              <Badge className={getCategoryColor(course.category)}>
                • {course.category}
              </Badge>
            </div>
            <div className="space-y-2">
              <div>
                <p className="font-medium">{course.instructor}</p>
                <p className="text-gray-400 text-xs">{course.duration} hrs</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-navy-800">
              <div className="font-medium text-lg">${course.price}</div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Edit size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderDesktopTable = () => {
    return (
      <div className="bg-navy-900 rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-navy-900">
            <TableRow className="border-b border-navy-800">
              <TableHead>Course</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coursesData.map(course => (
              <TableRow key={course.id} className="border-b border-navy-800">
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>{course.instructors.join(', ')}</TableCell>
                <TableCell>
                  <Badge className={getCategoryColor(course.category)}>
                    • {course.category}
                  </Badge>
                </TableCell>
                <TableCell>{course.duration} hrs</TableCell>
                <TableCell className="text-right">${course.price}</TableCell>
                <TableCell>
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white"
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-white"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };

  return (
    <div className="w-full p-4 md:p-6 bg-[#0B1739] text-white min-h-screen">
      <h1 className="text-xl md:text-2xl font-bold">All available courses</h1>
      {mobileView ? renderMobileCards() : renderDesktopTable()}
    </div>
  );
};

export default Courses;
