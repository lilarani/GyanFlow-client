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

const userData = [
  {
    id: '#U101',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    status: 'Active',
    role: 'Admin',
  },
  {
    id: '#U102',
    name: 'Emma Watson',
    email: 'emma@example.com',
    phone: '987-654-3210',
    status: 'Inactive',
    role: 'User',
  },
  {
    id: '#U103',
    name: 'Sophia Moore',
    email: 'sophia@example.com',
    phone: '456-123-7890',
    status: 'Active',
    role: 'Editor',
  },
  {
    id: '#U104',
    name: 'Daniel Brown',
    email: 'daniel@example.com',
    phone: '789-456-1230',
    status: 'Inactive',
    role: 'User',
  },
  {
    id: '#U105',
    name: 'Michael Scott',
    email: 'michael@example.com',
    phone: '159-753-4862',
    status: 'Active',
    role: 'Admin',
  },
];

const UserManagement = () => {
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setMobileView(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getStatusColor = status => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  };

  const renderMobileCards = () => {
    return (
      <div className="space-y-4">
        {userData.map(user => (
          <div key={user.id} className="bg-navy-900 rounded-lg p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">{user.name}</span>
              <Badge className={getStatusColor(user.status)}>
                {user.status}
              </Badge>
            </div>
            <div className="space-y-2">
              <p className="font-medium">{user.email}</p>
              <p className="text-gray-400 text-xs">{user.phone}</p>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-navy-800">
              <div className="text-sm">{user.role}</div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-gray-400">
                  <Edit size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400">
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
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userData.map(user => (
              <TableRow key={user.id} className="border-b border-navy-800">
                <TableCell>{user.id}</TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(user.status)}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400"
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
      <h1 className="text-xl md:text-2xl font-bold">Manage your users</h1>
      {mobileView ? renderMobileCards() : renderDesktopTable()}
    </div>
  );
};

export default UserManagement;
