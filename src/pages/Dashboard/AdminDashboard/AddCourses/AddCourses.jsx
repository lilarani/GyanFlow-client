import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import "./AddCourses.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddCourses = () => {
  return (
    <div className="bg-[#0B1739] text-white min-h-screen pt-10">
      <Card className="w-10/12 mx-auto bg-linear-to-b from-gray-900 to-blue-950 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Add Course</CardTitle>
          <CardDescription>Add any course of your choice</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {/* div 1  */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="name">Course Title</Label>
                  <Input
                    className=""
                    id="name"
                    placeholder="Title of your course"
                  />
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="framework">Course Level</Label>
                  <Select>
                    <SelectTrigger id="framework" className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* div 2 */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="name">Course Description</Label>
                  <Textarea placeholder="Type course description here." />
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="name">Duration</Label>
                  <Input id="name" placeholder="Duration in hours" />
                </div>
              </div>
              {/* div 3  */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="name">Instructor</Label>
                  <Input id="name" placeholder="Title of your course" />
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="framework">Price</Label>
                  <Input id="name" placeholder="Price" />
                </div>
              </div>
              {/* div 4 */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="name">Thumbnail</Label>
                  <Input id="picture" type="file" />
                </div>
              </div>
            </div>
            <div
              class="addCourseButton"
              className="bg-linear-to-r from-[#71b7e6] to-[#9b59b6] h-10 mt-8 rounded"
            >
              <button className="border-none   w-full h-full  font-bold text-lg hover:bg-linear-to-l hover:from-[#71b7e6] hover:to-[#9b59b6] duration-300">
                Add
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCourses;
