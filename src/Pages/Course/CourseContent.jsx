import VideoPlayer from "../../components/CoursePage/VideoPlayer";
import SideBar from "../../components/CoursePage/SideBar";
import video from "../../videos/CourseContents/demo-video.mp4";

function CourseContent()
{
    return <div className="w-full h-screen bg-gray-200">
        <VideoPlayer video={video}/>
        <SideBar />
    </div>
}

export default CourseContent;