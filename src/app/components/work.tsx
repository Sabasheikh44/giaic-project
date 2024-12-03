import "../style/education.css"
function Work(){
    return(
        <main className="edu-main">
            <div className="edu-text">
                <h1>Work History</h1>
                <p>Developed multiple websites using HTML, CSS, JavaScript.</p>
            </div>
            <div className="box-edu">
                <div>
                <h1 className="uni-text">Islamia Girls College Karachi</h1>
                    <span>Student</span>
                </div>
                <div className="computer">
                    <h1>I.Com</h1>
                    <p>Pursed intermidiate in Commerce from Islamia College Karachi accounting, management, and markiting fundamentals.
                    </p>
                </div>
            </div>
            {/* {box-2} */}
            <div className="box-edu">
                <div>
                    <h1 className="uni-text">University of Karachi</h1>
                    <span>Student</span>
                </div>
                <div className="computer">
                    <h1>Bachelor in Commerce</h1>
                    <p>B.com , accounting, managment,and markiting fundamentals.</p>
                </div>
            </div>
            {/* {box-3} */}
            <div className="box-edu">
                <div>
                    <h1 className="uni-text">Bahria University</h1>
                    <span>Student</span>
                </div>
                <div className="computer">
                    <h1>Diploma in Artificial Intelligence</h1>
                    <p>AI diploma covers machine learning, deep learning, NLP computer vision, and data science.</p>
                </div>
            </div>
            
        </main>
    )
}
export default Work;