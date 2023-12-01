const Video=()=>
{
    return<div className="video-player">
        <h1>Vehicle video</h1>
        <video width="650px" height="365px" controls>
        <source src="/train.mp4" type="video/mp4"/>
        </video>
    </div>;
}

export default Video;