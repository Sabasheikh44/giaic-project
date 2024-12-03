import "../style/education.css"
function Education(){
    return(
        <main className="edu-main">
            <div className="edu-text">
                <h1>Education</h1>
                <p className="text">Web Development, Database Management , Artificial Intelligence</p>
            </div>
            <div className="box-edu">
                <div>
                    <h1 className="uni-text">Islamia Girls College Karachi</h1>
                    <span>Student</span>
                </div>
                <div className="computer">
                    <h1>I.Com</h1>
                    <p>Pursed intermidiate in Commerce from Islamia College,
                        developing expertise in Accountingb, Economics, and Business Studies with passion.
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
                    <p>B.com , accounting, managment,and markiting fundamentals</p>
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
export default Education;