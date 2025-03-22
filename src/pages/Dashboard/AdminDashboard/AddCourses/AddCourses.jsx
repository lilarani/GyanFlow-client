'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { useCreateCourseMutation } from '@/redux/ApiCalling/apiClice';

let ImageHostKey = "47b25851b9d300db92da4ca62f89a4bb";
let ImageHosting = `https://api.imgbb.com/1/upload?key=${ImageHostKey}`;

const AddCourses = () => {
  const [status, setStatus] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  let [createCourse] = useCreateCourseMutation()
  const handleFileChange = (e) => {
    setThumbnail(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const courseData = {
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      description: form.description.value,
      // instructors: form.instructors.value.split(',').map((name) => name.trim()),
      // categoryId: form.categoryId.value,
      totalDuration: form.totalDuration.value,
      enrollCount: form.enrollCount.value,
      seatLeft: form.seatLeft.value,
      batch: form.batch.value,
      price: form.price.value,
      studyPlan: form.studyPlan.value,
      totalLectures: form.totalLectures.value,
      status: status,
    };

    let thumbnailUrl = '';
    if (thumbnail) {
      const imageData = new FormData();
      imageData.append('image', thumbnail);

      try {
        const res = await fetch(ImageHosting, {
          method: 'POST',
          body: imageData,
        });
        const imgData = await res.json();
        if (imgData.success) {
          thumbnailUrl = imgData.data.url;
        }

      } catch (error) {
        console.log(error);
        return;
      }
    }

    courseData.thumbnail = thumbnailUrl;

    let result = await createCourse(courseData).unwrap();
    console.log(result.data)

  };

  return (
    <div className="bg-[#0B1739] text-white min-h-screen pt-10">
      <Card className="w-10/12 mx-auto bg-gradient-to-b from-gray-900 to-blue-950 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Add Course</CardTitle>
          <CardDescription>Fill out the course information below</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Title</Label>
                <Input name="title" placeholder="Enter course title" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Short Description</Label>
                <Textarea name="shortDescription" placeholder="Enter short description" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Description</Label>
                <Textarea name="description" placeholder="Enter full course description" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Instructor(s)</Label>
                <Input name="instructors" placeholder="Instructor name(s)" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Category ID</Label>
                <Input name="categoryId" placeholder="Enter category ID" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Total Duration (Hours)</Label>
                <Input name="totalDuration" placeholder="e.g., 30" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Enroll Count</Label>
                <Input name="enrollCount" type="number" placeholder="Number of enrollments" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Seats Left</Label>
                <Input name="seatLeft" type="number" placeholder="Available seats" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Batch</Label>
                <Input name="batch" placeholder="Batch Name or Number" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Price (BDT)</Label>
                <Input name="price" type="number" placeholder="Enter price" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Thumbnail</Label>
                <Input type="file" onChange={handleFileChange} />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Study Plan</Label>
                <Textarea name="studyPlan" placeholder="Enter study plan details" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Total Lectures</Label>
                <Input name="totalLectures" type="number" placeholder="Number of lectures" />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label>Status</Label>
                <Select onValueChange={(value) => setStatus(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                    <SelectItem value="Upcoming">Upcoming</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg mt-6">
                Add Course
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCourses;
