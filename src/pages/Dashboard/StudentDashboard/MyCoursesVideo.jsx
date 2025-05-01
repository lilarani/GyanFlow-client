import { useAllModulesQuery } from '@/redux/ApiCalling/apiClice';
import { useState } from 'react';
import { useParams } from 'react-router';

const MyCoursesVideo = () => {
  const { courseId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const { data } = useAllModulesQuery(courseId);
  console.log(data);

  return (
    <div className="bg-gradient-to-bl  from-[#100d1b] to-[#1a044d] text-white py-32">
      <div className="grid grid-cols-1 md:grid-cols-7 h-full w-10/12 mx-auto gap-6">
        <div className="col-span-5">
          {selectedVideo && selectedVideo.url ? (
            <div className="animate__animated animate__fadeIn">
              <div className="w-full aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                <iframe
                  className="w-full h-full"
                  src={selectedVideo.url}
                  title={selectedVideo.videoTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="text-xl font-semibold mt-4">{selectedVideo.videoTitle}</h2>
              <p className="mt-2 text-sm">Duration: {selectedVideo.duration} minutes</p>
            </div>
          ) : (
            <p className="text-center py-60 border my-shadow text-gray-400">Click a video to preview it here </p>
          )}
        </div>
        <div className="col-span-2 space-y-4">
          {data?.data?.map((module, index) => (
            <details key={index} className="mb-4 border border-white/20 rounded-lg overflow-hidden">
              <summary className="p-4 cursor-pointer bg-[#160e2f] hover:bg-[#1a044d] transition duration-300">
                {module?.title}
              </summary>
              <div className="p-4">
                {module?.videos?.length > 0 ? (
                  module.videos.map((video, idx) => (
                    <p
                      key={idx}
                      className={`py-2 px-4 cursor-pointer transition duration-300 hover:bg-[#1a044d] ${selectedVideo?.url === video.url
                        ? 'text-[#2bff00] bg-[#f6f6f875] font-bold'
                        : 'text-gray-300'
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
