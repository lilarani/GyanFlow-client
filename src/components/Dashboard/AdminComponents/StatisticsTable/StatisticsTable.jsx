import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
  Menu
} from 'lucide-react';
import { useState } from 'react';

const ordersData = [
  {
    id: '#1532',
    client: { name: 'John Carter', email: 'hello@johncarter.com' },
    date: 'Jan 30, 2024',
    status: 'Delivered',
    country: 'United States',
    total: '$1,099.24'
  },
  {
    id: '#1531',
    client: { name: 'Sophie Moore', email: 'contact@sophiemoore.com' },
    date: 'Jan 27, 2024',
    status: 'Canceled',
    country: 'United Kingdom',
    total: '$5,870.32'
  },
  {
    id: '#1530',
    client: { name: 'Matt Cannon', email: 'info@mattcannon.com' },
    date: 'Jan 24, 2024',
    status: 'Delivered',
    country: 'Australia',
    total: '$13,899.49'
  },
  {
    id: '#1529',
    client: { name: 'Graham Hills', email: 'hi@grahamhills.com' },
    date: 'Jan 21, 2024',
    status: 'Pending',
    country: 'India',
    total: '$1,569.12'
  },
  {
    id: '#1528',
    client: { name: 'Sandy Houston', email: 'contact@sandyhouston.com' },
    date: 'Jan 18, 2024',
    status: 'Delivered',
    country: 'Canada',
    total: '$899.16'
  },
  {
    id: '#1527',
    client: { name: 'Andy Smith', email: 'hello@andysmith.com' },
    date: 'Jan 15, 2024',
    status: 'Pending',
    country: 'United States',
    total: '$2,449.64'
  }
];

const StatisticsTable = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);
  
  // Add resize listener
  useState(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Canceled':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      case 'Pending':
        return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  // Card view for mobile
  const renderMobileCards = () => {
    return (
      <div className="space-y-4 ">
        {ordersData.map((order) => (
          <div key={order.id} className="bg-navy-900 rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">{order.id}</span>
              <Badge className={getStatusColor(order.status)}>
                • {order.status}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <User size={14} />
                  Client
                </div>
                <div>
                  <p className="font-medium">{order.client.name}</p>
                  <p className="text-gray-400 text-xs">{order.client.email}</p>
                </div>
              </div>
              
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    Date
                  </div>
                  <p>{order.date}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={14} />
                    Country
                  </div>
                  <p>{order.country}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-2 border-t border-navy-800">
              <div className="font-medium text-lg">{order.total}</div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1 h-8 w-8">
                  <Edit size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1 h-8 w-8">
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Regular table for desktop
  const renderDesktopTable = () => {
    return (
      <div className="bg-navy-900 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-navy-900">
              <TableRow className="border-b border-navy-800">
                <TableHead className="w-16">
                  <Checkbox />
                </TableHead>
                <TableHead>
                  Order
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    Client
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    Date
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <Tag size={16} />
                    Status
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    Country
                  </div>
                </TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="w-24"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ordersData.map((order) => (
                <TableRow key={order.id} className="border-b border-navy-800 hover:bg-navy-800/50">
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.client.name}</p>
                      <p className="text-gray-400 text-sm">{order.client.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      • {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.country}</TableCell>
                  <TableCell className="text-right">{order.total}</TableCell>
                  <TableCell>
                    <div className="flex gap-2 justify-end">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-4 md:p-6 bg-[#0B1739] text-white min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Orders Status</h1>
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search for..." 
              className="pl-10 w-full bg-navy-900 border-navy-800 text-white rounded-lg"
            />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto">
            Create order
          </Button>
        </div>
      </div>
      
      {mobileView ? renderMobileCards() : renderDesktopTable()}
      
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-sm gap-3">
        <div className="text-gray-400 w-full sm:w-auto text-center sm:text-left">1-6 of 12</div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-8 w-8">
            <ChevronLeft size={16} />
          </Button>
          <Button variant="ghost" size="icon" className="bg-purple-600 hover:bg-purple-700 text-white h-8 w-8">
            1
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-8 w-8">
            2
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white h-8 w-8">
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StatisticsTable;