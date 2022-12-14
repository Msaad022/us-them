import Styles from "../styles/About.module.css";
import { useRef } from "react";
import poster from '../public/poster1.png'

function About() {

  return (
    <section className={Styles.main_about} id="about">
      <div className={Styles.img_about}>
        <div className={Styles.parent_video}>
          <video src={"/video_about.mp4"} poster={poster.src} type="video/mp4" controls/>
        </div>
      </div>
      <div className={Styles.text_about}>
        <div>
          <span>ما هو نحن وهم؟</span>
          <h2>لماذ تستخدم تطبيق نحن و هم - لعلاج التاخر العقلي </h2>
          <p>
            هو احد الحلول التي تهدف إلي علاج الأطفال ذوي الاحتياجات الخاصه من
            فئة التاخر العقلي بشكل مجاني ليسهل علي جميع الأطفال الحصول علي
            العلاج في المنزل عن طريق استخدام وسائل علاجية تم تجهيزها بواسطة
            متخصصين في علاج حالات الـتأخر العقلي بهدف الوصول إلي صحة أفضل
            لأطفالنا.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
