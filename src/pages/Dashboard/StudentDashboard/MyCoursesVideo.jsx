import { useAllModulesQuery } from '@/redux/ApiCalling/apiClice';
import { useState } from 'react';
import { useParams } from 'react-router';

const MyCoursesVideo = () => {
  const { courseId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);

  // console.log(courseId);
  const { data } = useAllModulesQuery(courseId);
  console.log(data);
  return (
    <div className="bg-gradient-to-bl to-[#0F172A] from-[#080127] text-white py-16">
      <div className="grid grid-cols-1 md:grid-cols-7 h-full w-10/12 mx-auto  gap-6">
        <div className="col-span-5">
          {selectedVideo && selectedVideo.url ? (
            <div>
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={selectedVideo.url}
                  title={selectedVideo.videoTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="text-xl font-semibold mb-2">
                {selectedVideo.videoTitle}
              </h2>
              <p className="mt-2 text-sm ">
                Duration: {selectedVideo.duration} minutes
              </p>
            </div>
          ) : (
            <p className="text-center text-gray-400">
              Click a video to preview it here 🎬
            </p>
          )}
        </div>
        <div className="col-span-2 ">
          {data?.data?.map((module, index) => (
            <details
              key={index}
              className="mb-2 border border-white/20 rounded-lg"
            >
              <summary className="p-2 cursor-pointer bg-white/20">
                {module?.title}
              </summary>
              <div className="p-2 ">
                {module?.videos?.length > 0 ? (
                  module.videos.map((video, idx) => (
                    <p
                      key={idx}
                      className={`py-1 px-3 cursor-pointer ${
                        selectedVideo?.url === video.url
                          ? 'text-[#2bff00] bg-[#f6f6f875] font-bold'
                          : ''
                      }`}
                      onClick={() => setSelectedVideo(video)}
                    >
                      {video.videoTitle}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-400">No videos available</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCoursesVideo;
