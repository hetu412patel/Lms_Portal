const CourseIdPage = ({params}: {params : {courseId : String}}) => {
    return ( 
        <div>
            course id : {params.courseId}
        </div>
     );
}
 
export default CourseIdPage;