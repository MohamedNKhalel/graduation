"use strict";(self.webpackChunkgraduation=self.webpackChunkgraduation||[]).push([[860],{9860:(l,r,o)=>{o.r(r),o.d(r,{LandingComponent:()=>d});var g=o(6814),t=o(5879);const s=["navbar"];let d=(()=>{class a{constructor(e){this._Renderer2=e}onscroll(){this.animateCards(),window.scrollY>=1e3?$(".my-card").slideDown(2e3):$(".my-card").slideUp(1e3)}ngOnInit(){$(document).ready(()=>{$(".text").slideDown(2e3),console.log("ready")})}animateCards(){window.scrollY>450?$(".about-content").slideDown(1e3):$(".about-content").slideUp(1e3)}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(t.Qsj))};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-landing"]],viewQuery:function(n,i){if(1&n&&t.Gf(s,5),2&n){let c;t.iGM(c=t.CRH())&&(i.navelement=c.first)}},hostBindings:function(n,i){1&n&&t.NdJ("scroll",function(){return i.onscroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:382,vars:0,consts:[[1,"main"],[1,"container"],[1,"py-5","text"],[1,"tagline"],[1,"mt-2"],[1,"buttons","mt-5"],[1,"btn-main","me-3"],[1,"btn-second"],[1,"about"],[1,"row","align-items-center","gy-4"],[1,"col-md-5"],["src","assets/images/about.jpg","alt","",1,"w-100"],[1,"col-md-6","py-3"],[1,"about-content"],["aboutcontent",""],[1,"about-text"],[1,"my-logo"],[1,"about-buttons"],["type","button",1,"btn-second"],["type","button",1,"btn-main","ms-4"],[1,"services"],[1,"row","align-items-center"],[1,"col-md-8","py-3"],[1,"row"],[1,"mb-5"],[1,"col-md-6"],[1,"d-flex","gap-3","my-card"],[1,"icons"],[1,"fa-regular","fa-image"],[1,"my-card-text"],[1,"fa-solid","fa-disease"],[1,"fa-solid","fa-file-shield"],[1,"fa-solid","fa-globe"],[1,"col-md-4"],[1,"consult","bg-white","px-3"],[1,"mb-3","consult-input"],["type","text","placeholder","First Name",1,"form-control","rounded-5","py-3","fs-5"],["type","text","placeholder","Last Name",1,"form-control","rounded-5","py-3","fs-5"],["title","service",1,"form-control","rounded-5","py-3","fs-5"],["disabled","","selected","","value",""],["value",""],["type","text","placeholder","Phone",1,"form-control","rounded-5","py-3","fs-5"],["type","text","placeholder","Date",1,"form-control","rounded-5","py-3","fs-5"],[1,"fa-solid","fa-calendar-days"],["type","text","placeholder","Time",1,"form-control","rounded-5","py-3","fs-5"],[1,"fa-regular","fa-clock"],["type","text","placeholder","Message",1,"form-control","rounded-5","py-3","fs-5"],["type","button",1,"btn-main","w-100"],[1,"hero"],[1,"text-center"],[1,"my-4"],[1,"team"],[1,"team-container"],[1,"title"],[1,"row","gy-4","mt-3","justify-content-center"],[1,"col-lg-3","col-md-6"],[1,"team-card","bg-white","shadow","rounded-2","p-3"],[1,"team-card-header","position-relative"],["src","assets/images/Mohamed.jpg","alt","",1,"w-100","rounded-top-2"],[1,"team-card-layer","d-flex","justify-content-center","align-items-end"],[1,"team-icons","py-2","bg-white","w-100","text-center"],[1,"fa-brands","me-2","fa-twitter","fa-xl"],[1,"fa-brands","me-2","fa-facebook-f","fa-xl"],[1,"fa-brands","me-2","fa-google","fa-xl"],[1,"fa-brands","fa-instagram","fa-xl"],[1,"team-card-body","my-2"],[1,"team-card-footer"],[1,"d-block","m-auto"],["src","assets/images/shawky.jpg","alt","",1,"w-100","rounded-top-2"],["src","assets/images/hazem.jpg","alt","",1,"w-100","rounded-top-2"],["src","assets/images/agha.jpg","alt","",1,"w-100","rounded-top-2"],["src","assets/images/abdo.jpg","alt","",1,"w-100","rounded-top-2"],[1,"testimonial"],[1,"mt-3"],[1,"patients","position-relative","mt-5"],["id","carouselExampleCaptions","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],["data-bs-interval","2000",1,"carousel-item","active"],[1,"testimonial-person"],["src","assets/images/person_1.jpg","alt","..."],[1,"test-icon"],[1,"fa","fa-quote-left"],[1,"text-center","test-text"],[1,"opinion"],[1,"patient-name"],["data-bs-interval","2000",1,"carousel-item"],["src","assets/images/person_2.jpg","alt","..."],["src","assets/images/person_3.jpg","alt","..."],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","0","aria-current","true","aria-label","Slide 1",1,"active"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","1","aria-label","Slide 2"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide-to","2","aria-label","Slide 3"],[1,"contact"],[1,"row","justify-content-center","mt-3"],[1,"contact-card","d-flex","flex-column","gap-4","p-5","rounded-2","text-center"],[1,"contact-card-header"],[1,"contact-icon"],[1,"fa","fa-map-signs"],[1,"contact-card-body"],[1,"fa","fa-phone"],[1,"fa","fa-paper-plane"],[1,"fa","fa-globe"],[1,"row","mt-5","align-items-center","p-3","form-row","rounded-2"],["src","https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13760.60892943406!2d31.571249350000002!3d30.43178615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1716139338188!5m2!1sen!2seg","height","550","allowfullscreen","true","loading","lazy","referrerpolicy","no-referrer-when-downgrade",1,"w-100",2,"border","0"],[1,"contact-form"],[1,"form-floating","mb-4"],["type","text","id","floatingInput","placeholder","enter your name",1,"form-control"],["for","floatingInput"],["type","email","id","floatingEmail","placeholder","example@example.com",1,"form-control"],["for","floatingEmail"],["type","text","id","floatingSubject","placeholder","subject",1,"form-control"],["for","floatingSubject"],["placeholder"," ","id","floatingTextarea",1,"form-control"],["for","floatingTextarea"],["type","button",1,"btn-main","d-block","ms-auto"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span"),t._uU(5,"welcome to Derma Center"),t.qZA(),t.TgZ(6,"div")(7,"h1"),t._uU(8,"we are here for your care"),t.qZA(),t.TgZ(9,"p",4),t._uU(10,"A Great place to receive care accurate diagnoses and analysis of skin diseases, "),t._UZ(11,"br"),t._uU(12," Early diagnosis is now available"),t.qZA()()(),t.TgZ(13,"div",5)(14,"button",6),t._uU(15,"Join us"),t.qZA(),t.TgZ(16,"button",7),t._uU(17,"Learn More"),t.qZA()()()()(),t.TgZ(18,"section",8)(19,"div",1)(20,"div",9)(21,"div",10)(22,"div"),t._UZ(23,"img",11),t.qZA()(),t.TgZ(24,"div",12)(25,"div",13,14)(27,"div",15)(28,"h2"),t._uU(29,"We Are "),t.TgZ(30,"span",16),t._uU(31,"DERMA CENTER"),t.qZA(),t._uU(32," A Medical Online Clinic"),t.qZA(),t.TgZ(33,"p"),t._uU(34,"Welcome to DermAssist, the premier online platform where medical professionals can leverage cutting-edge technology to diagnose skin diseases with greater accuracy and efficiency. Our website uses advanced image analysis tools developed through rigorous research and collaboration with dermatology experts.Trust Derma Center to enhance your diagnostic capabilities and improve patient outcomes."),t.qZA()(),t.TgZ(35,"div",17)(36,"button",18),t._uU(37,"Make an appointment"),t.qZA(),t.TgZ(38,"button",19),t._uU(39,"Contact us"),t.qZA()()()()()()(),t.TgZ(40,"section",20)(41,"div",1)(42,"div",21)(43,"div",22)(44,"div",23)(45,"h2",24),t._uU(46,"Our Sercives"),t.qZA(),t.TgZ(47,"div",25)(48,"div",26)(49,"div",27),t._UZ(50,"i",28),t.qZA(),t.TgZ(51,"div",29)(52,"h3"),t._uU(53,"Image Analysis"),t.qZA(),t.TgZ(54,"p"),t._uU(55,"Utilize our state-of-the-art image processing algorithms to upload and analyze high-resolution images of skin conditions. Our technology provides quick, accurate preliminary assessments to support your diagnostic decisions."),t.qZA()()()(),t.TgZ(56,"div",25)(57,"div",26)(58,"div",27),t._UZ(59,"i",30),t.qZA(),t.TgZ(60,"div",29)(61,"h3"),t._uU(62,"Disease Prediction"),t.qZA(),t.TgZ(63,"p"),t._uU(64,"Benefit from our AI-driven predictive model that evaluates patient images against a vast database of dermatological cases to identify potential skin diseases with high accuracy."),t.qZA()()()(),t.TgZ(65,"div",25)(66,"div",26)(67,"div",27),t._UZ(68,"i",31),t.qZA(),t.TgZ(69,"div",29)(70,"h3"),t._uU(71,"Data Security and Compliance "),t.qZA(),t.TgZ(72,"p"),t._uU(73,"Rest assured knowing that patient data security and privacy are our top priorities. Our platform complies with HIPAA regulations, ensuring that all patient information is protected and confidential."),t.qZA()()()(),t.TgZ(74,"div",25)(75,"div",26)(76,"div",27),t._UZ(77,"i",32),t.qZA(),t.TgZ(78,"div",29)(79,"h3"),t._uU(80,"24/7 Support "),t.qZA(),t.TgZ(81,"p"),t._uU(82,"Access our dedicated support team around the clock to assist with any questions or issues you may encounter, ensuring seamless operation at all times."),t.qZA()()()()()(),t.TgZ(83,"div",33)(84,"div")(85,"form",34)(86,"h3"),t._uU(87,"FREE CONSULTATION"),t.qZA(),t.TgZ(88,"div",35),t._UZ(89,"input",36),t.qZA(),t.TgZ(90,"div",35),t._UZ(91,"input",37),t.qZA(),t.TgZ(92,"div",35)(93,"select",38)(94,"option",39),t._uU(95,"Select Your Services"),t.qZA(),t.TgZ(96,"option",40),t._uU(97,"Image Analysis"),t.qZA(),t.TgZ(98,"option",40),t._uU(99,"Disease Prediction"),t.qZA(),t.TgZ(100,"option",40),t._uU(101,"Security"),t.qZA(),t.TgZ(102,"option",40),t._uU(103,"Support"),t.qZA()()(),t.TgZ(104,"div",35),t._UZ(105,"input",41),t.qZA(),t.TgZ(106,"div",35),t._UZ(107,"input",42)(108,"i",43),t.qZA(),t.TgZ(109,"div",35),t._UZ(110,"input",44)(111,"i",45),t.qZA(),t.TgZ(112,"div",35),t._UZ(113,"input",46),t.qZA(),t.TgZ(114,"div",35)(115,"button",47),t._uU(116,"Appointment"),t.qZA()()()()()()()(),t.TgZ(117,"section",48)(118,"div",49)(119,"h2"),t._uU(120,"Your Health is Our Priority"),t.qZA(),t.TgZ(121,"p",50),t._uU(122,"We can manage your dream building A small river named Duden flows by their place"),t.qZA(),t.TgZ(123,"button",7),t._uU(124,"Try Now"),t.qZA()()(),t.TgZ(125,"section",51)(126,"div",52)(127,"div",53)(128,"h2"),t._uU(129,"Our Qualified Team"),t.qZA(),t.TgZ(130,"p"),t._uU(131,"We have made a lot of effort to develop this website so that it will be a refuge for doctors to quickly check up on the skin diseases of their patients."),t.qZA()(),t.TgZ(132,"div",54)(133,"div",55)(134,"div")(135,"div",56)(136,"div",57),t._UZ(137,"img",58),t.TgZ(138,"div",59)(139,"div",60),t._UZ(140,"i",61)(141,"i",62)(142,"i",63)(143,"i",64),t.qZA()()(),t.TgZ(144,"div",65)(145,"h3"),t._uU(146,"ENG/Mohamed Khalel"),t.qZA(),t.TgZ(147,"span"),t._uU(148,"Frontend Developer"),t.qZA(),t.TgZ(149,"p",4),t._uU(150,"I'm a junior Angular Front-end developer with a lot of skills "),t.qZA()(),t.TgZ(151,"div",66)(152,"button",67),t._uU(153,"Contact Now"),t.qZA()()()()(),t.TgZ(154,"div",55)(155,"div")(156,"div",56)(157,"div",57),t._UZ(158,"img",68),t.TgZ(159,"div",59)(160,"div",60),t._UZ(161,"i",61)(162,"i",62)(163,"i",63)(164,"i",64),t.qZA()()(),t.TgZ(165,"div",65)(166,"h3"),t._uU(167,"ENG/Ahmed Shawky"),t.qZA(),t.TgZ(168,"span"),t._uU(169,"Flutter Developer"),t.qZA(),t.TgZ(170,"p",4),t._uU(171,"I'm a junior Flutter developer with a lot of skills "),t.qZA()(),t.TgZ(172,"div",66)(173,"button",67),t._uU(174,"Contact Now"),t.qZA()()()()(),t.TgZ(175,"div",55)(176,"div")(177,"div",56)(178,"div",57),t._UZ(179,"img",69),t.TgZ(180,"div",59)(181,"div",60),t._UZ(182,"i",61)(183,"i",62)(184,"i",63)(185,"i",64),t.qZA()()(),t.TgZ(186,"div",65)(187,"h3"),t._uU(188,"ENG/Hazem Kandeel"),t.qZA(),t.TgZ(189,"span"),t._uU(190,"Frontend Developer"),t.qZA(),t.TgZ(191,"p",4),t._uU(192,"I'm a junior Angular Front-end developer with a lot of skills "),t.qZA()(),t.TgZ(193,"div",66)(194,"button",67),t._uU(195,"Contact Now"),t.qZA()()()()(),t.TgZ(196,"div",55)(197,"div")(198,"div",56)(199,"div",57),t._UZ(200,"img",70),t.TgZ(201,"div",59)(202,"div",60),t._UZ(203,"i",61)(204,"i",62)(205,"i",63)(206,"i",64),t.qZA()()(),t.TgZ(207,"div",65)(208,"h3"),t._uU(209,"ENG/Ahmed Agha"),t.qZA(),t.TgZ(210,"span"),t._uU(211,"UI/UX Designer"),t.qZA(),t.TgZ(212,"p",4),t._uU(213,"I'm a junior UI/UX Designer with a lot of skills "),t.qZA()(),t.TgZ(214,"div",66)(215,"button",67),t._uU(216,"Contact Now"),t.qZA()()()()(),t.TgZ(217,"div",55)(218,"div")(219,"div",56)(220,"div",57),t._UZ(221,"img",71),t.TgZ(222,"div",59)(223,"div",60),t._UZ(224,"i",61)(225,"i",62)(226,"i",63)(227,"i",64),t.qZA()()(),t.TgZ(228,"div",65)(229,"h3"),t._uU(230,"ENG/Abdelwahab Abdullah"),t.qZA(),t.TgZ(231,"span"),t._uU(232,"Backend Developer"),t.qZA(),t.TgZ(233,"p",4),t._uU(234,"I'm a junior Back-end developer with a lot of skills "),t.qZA()(),t.TgZ(235,"div",66)(236,"button",67),t._uU(237,"Contact Now"),t.qZA()()()()()()()(),t.TgZ(238,"section",72)(239,"div",1)(240,"div",53)(241,"span"),t._uU(242,"Read testimonials"),t.qZA(),t.TgZ(243,"h2",73),t._uU(244,"Our Patients Says "),t.qZA()(),t.TgZ(245,"div",74)(246,"div",75)(247,"div",76)(248,"div",77)(249,"div")(250,"div",49)(251,"div",78),t._UZ(252,"img",79),t.TgZ(253,"div",80),t._UZ(254,"i",81),t.qZA()()(),t.TgZ(255,"div",82)(256,"div",83)(257,"p"),t._uU(258,"I was amazed by the accuracy and speed of the AI diagnosis on this website. I uploaded a photo of a rash that had been bothering me for weeks, and within minutes, I had a detailed analysis and recommendations for treatment."),t.qZA()(),t.TgZ(259,"div",84)(260,"p"),t._uU(261,"Mohamed khalel"),t.qZA(),t.TgZ(262,"span"),t._uU(263,"Patient"),t.qZA()()()()(),t.TgZ(264,"div",85)(265,"div")(266,"div",49)(267,"div",78),t._UZ(268,"img",86),t.TgZ(269,"div",80),t._UZ(270,"i",81),t.qZA()()(),t.TgZ(271,"div",82)(272,"div",83)(273,"p"),t._uU(274,"As a dermatologist, I find this AI-powered diagnosis tool to be incredibly helpful in my practice. It serves as a reliable preliminary screening tool that can assist in identifying potential skin conditions quickly."),t.qZA()(),t.TgZ(275,"div",84)(276,"p"),t._uU(277,"John Snow"),t.qZA(),t.TgZ(278,"span"),t._uU(279,"Healthcare Professional"),t.qZA()()()()(),t.TgZ(280,"div",85)(281,"div")(282,"div",49)(283,"div",78),t._UZ(284,"img",87),t.TgZ(285,"div",80),t._UZ(286,"i",81),t.qZA()()(),t.TgZ(287,"div",82)(288,"div",83)(289,"p"),t._uU(290,"I've always been fascinated by the potential of AI in healthcare, and this website is a perfect example of its practical application. The user interface is intuitive, and the AI's ability to provide accurate diagnoses is impressive."),t.qZA()(),t.TgZ(291,"div",84)(292,"p"),t._uU(293,"Hiezenberg"),t.qZA(),t.TgZ(294,"span"),t._uU(295,"Tech Enthusiast"),t.qZA()()()()()(),t.TgZ(296,"button",88),t._UZ(297,"span",89),t.TgZ(298,"span",90),t._uU(299,"Previous"),t.qZA()(),t.TgZ(300,"button",91),t._UZ(301,"span",92),t.TgZ(302,"span",90),t._uU(303,"Next"),t.qZA()(),t.TgZ(304,"div",93),t._UZ(305,"button",94)(306,"button",95)(307,"button",96),t.qZA()()()()(),t.TgZ(308,"section",97)(309,"div",1)(310,"div",53)(311,"h2"),t._uU(312,"Contact Us"),t.qZA(),t.TgZ(313,"p"),t._uU(314,"You can freely contact us in the event of a problem or malfunction in the site\u2019s performance or your need for some services"),t.qZA()(),t.TgZ(315,"div",98)(316,"div",55)(317,"div",99)(318,"div",100)(319,"div",101),t._UZ(320,"i",102),t.qZA()(),t.TgZ(321,"div",103)(322,"h3"),t._uU(323,"Address"),t.qZA(),t.TgZ(324,"p"),t._uU(325,"221b Baker St, London NW1 6XE, UK"),t.qZA()()()(),t.TgZ(326,"div",55)(327,"div",99)(328,"div",100)(329,"div",101),t._UZ(330,"i",104),t.qZA()(),t.TgZ(331,"div",103)(332,"h3"),t._uU(333,"CONTACT NUMBER"),t.qZA(),t.TgZ(334,"p"),t._uU(335,"+20 01021025739"),t.qZA()()()(),t.TgZ(336,"div",55)(337,"div",99)(338,"div",100)(339,"div",101),t._UZ(340,"i",105),t.qZA()(),t.TgZ(341,"div",103)(342,"h3"),t._uU(343,"Email Address"),t.qZA(),t.TgZ(344,"p"),t._uU(345,"breakingcode@gmail.com"),t.qZA()()()(),t.TgZ(346,"div",55)(347,"div",99)(348,"div",100)(349,"div",101),t._UZ(350,"i",106),t.qZA()(),t.TgZ(351,"div",103)(352,"h3"),t._uU(353,"Website"),t.qZA(),t.TgZ(354,"p"),t._uU(355,"www.breakingcode.com "),t.qZA()()()()(),t.TgZ(356,"div",107)(357,"div",25)(358,"div")(359,"div"),t._UZ(360,"iframe",108),t.qZA()()(),t.TgZ(361,"div",25)(362,"div",109)(363,"form")(364,"div",110),t._UZ(365,"input",111),t.TgZ(366,"label",112),t._uU(367,"Your Name"),t.qZA()(),t.TgZ(368,"div",110),t._UZ(369,"input",113),t.TgZ(370,"label",114),t._uU(371,"Email Address"),t.qZA()(),t.TgZ(372,"div",110),t._UZ(373,"input",115),t.TgZ(374,"label",116),t._uU(375,"Subject"),t.qZA()(),t.TgZ(376,"div",110),t._UZ(377,"textarea",117),t.TgZ(378,"label",118),t._uU(379,"Messages"),t.qZA()(),t.TgZ(380,"button",119),t._uU(381,"Send message"),t.qZA()()()()()()())},dependencies:[g.ez],styles:[".logo[_ngcontent-%COMP%]{color:var(--main-color);text-decoration:none;font-size:30px;font-weight:700}.navbar[_ngcontent-%COMP%]{background-color:#ffffff4d;padding-block:30px;transition:all .5s ease}.main[_ngcontent-%COMP%]{min-height:100vh;background-image:linear-gradient(rgba(255,255,255,.2),rgba(255,255,255,.2)),url(ave-calvar-5u4L-E4eQWw-unsplash.2e6b9378c4b41209.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed;padding-top:110px;font-size:16px}.text[_ngcontent-%COMP%]{display:none}.tagline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--main-color);font-weight:500;font-size:16px}.tagline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4em;line-height:1.1;color:#000;font-weight:700;width:40%}.tagline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#00000080;width:40%;line-height:2;font-size:1.0625rem}@media screen and (max-width: 768px){.tagline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .tagline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}}.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]{display:none}.about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.75rem;font-weight:700;line-height:1.2;color:#000}.about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .my-logo[_ngcontent-%COMP%]{color:var(--main-color)}.about[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px;line-height:2;font-weight:400;color:#00000080}.services[_ngcontent-%COMP%]{background-color:#f8f9fa}.services[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.75rem;color:#000;font-weight:700}.services[_ngcontent-%COMP%]   .my-card[_ngcontent-%COMP%]{display:none}.services[_ngcontent-%COMP%]   .my-card[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.services[_ngcontent-%COMP%]   .my-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:45px;color:var(--tomato);border-radius:50%;width:85px;height:85px;padding:20px 16px;background-color:#ffeeed;align-self:flex-start}.services[_ngcontent-%COMP%]   .my-card[_ngcontent-%COMP%]   .my-card-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:500;color:#000}.services[_ngcontent-%COMP%]   .my-card[_ngcontent-%COMP%]   .my-card-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#00000080;line-height:2;font-weight:400}.services[_ngcontent-%COMP%]   .consult[_ngcontent-%COMP%]{padding-block:100px}.services[_ngcontent-%COMP%]   .consult[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;color:var(--main-color);text-transform:uppercase;letter-spacing:3px}.services[_ngcontent-%COMP%]   .consult[_ngcontent-%COMP%]   .consult-input[_ngcontent-%COMP%]{position:relative}.services[_ngcontent-%COMP%]   .consult[_ngcontent-%COMP%]   .consult-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#00000080}.services[_ngcontent-%COMP%]   .consult[_ngcontent-%COMP%]   .consult-input[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#00000080;position:absolute;top:50%;right:30px;transform:translateY(-50%)}.services[_ngcontent-%COMP%]   .consult[_ngcontent-%COMP%]   .consult-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{color:#00000080}.hero[_ngcontent-%COMP%]{height:500px;background-image:linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)),url(bg_2.e471df96698eda92.jpg);background-position:center;background-size:cover;background-repeat:no-repeat;display:flex;justify-content:center;align-items:center;color:#fff}.hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:3.125rem;font-weight:800}.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px;color:#ffffffb3}@media screen and (max-width: 768px){.main[_ngcontent-%COMP%]{font-size:14px}}.team[_ngcontent-%COMP%]{padding-block:50px}.team[_ngcontent-%COMP%]   .team-container[_ngcontent-%COMP%]{width:90%;margin:auto}.team[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center}.team[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.75rem;font-weight:700;color:#191919}.team[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.0625rem;font-weight:400;color:#00000080;width:75%;margin:40px auto auto;line-height:2}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:hover   .team-card-layer[_ngcontent-%COMP%]{top:0!important}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:hover   .team-card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:RGB(32,125,255)!important}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-header[_ngcontent-%COMP%]{overflow:hidden}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-header[_ngcontent-%COMP%]   .team-card-layer[_ngcontent-%COMP%]{position:absolute;inset:120% 0 0;background-color:#ffffff4d;transition:all .6s ease}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-header[_ngcontent-%COMP%]   .team-card-layer[_ngcontent-%COMP%]   .team-icons[_ngcontent-%COMP%]{color:var(--tomato)}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-header[_ngcontent-%COMP%]   .team-card-layer[_ngcontent-%COMP%]   .team-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#a52a2a35;box-shadow:inset 0 0 1px 1px tomato;border-radius:50%;width:40px;height:40px;padding:20px 11px;transition:all .3s ease}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-header[_ngcontent-%COMP%]   .team-card-layer[_ngcontent-%COMP%]   .team-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{background-color:var(--tomato);color:#e6dcdc}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-body[_ngcontent-%COMP%]{text-align:center}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#000;font-weight:500}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;letter-spacing:5px;color:RGB(32,125,255)}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.0625rem;color:#00000080;line-height:2}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--main-color);border-radius:25px;padding:10px 15px;border:none;color:#fff;font-size:1rem;font-weight:500;transition:all .4s ease}.team[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .team-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--tomato)}.testimonial[_ngcontent-%COMP%]{padding-block:100px;background-image:linear-gradient(rgba(32,125,255,.5647058824),rgba(32,125,255,.5647058824)),url(bg_3.4af1222e8094c9ba.jpg);background-position:center center;background-size:cover;background-repeat:no-repeat}.testimonial[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center}.testimonial[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:600;line-height:2;color:#ffffffe6}.testimonial[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:44px;font-weight:700;color:#fff}.testimonial[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .testimonial-person[_ngcontent-%COMP%]{position:relative}.testimonial[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .testimonial-person[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;border-radius:50%}.testimonial[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .testimonial-person[_ngcontent-%COMP%]   .test-icon[_ngcontent-%COMP%]{background-color:var(--tomato);width:40px;height:40px;display:flex;justify-content:center;align-items:center;border-radius:50%;position:absolute;top:115px;left:52%}.testimonial[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .testimonial-person[_ngcontent-%COMP%]   .test-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;color:#fff}.testimonial[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .test-text[_ngcontent-%COMP%]   .opinion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.0625rem;color:#ffffffb3;font-weight:400;line-height:2;padding-block:20px;width:500px;margin:auto}.testimonial[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .test-text[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]{padding-block:20px}.testimonial[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .test-text[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.0625rem;color:#fff;font-weight:400}.testimonial[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]   .test-text[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffffffb3;font-weight:400;font-size:1.0625rem}.testimonial[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]{top:100%!important}.testimonial[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%]   [data-bs-target][_ngcontent-%COMP%]{background-color:#fff!important;border-radius:50%;width:10px;height:10px}.contact[_ngcontent-%COMP%]{padding-block:50px}.contact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center}.contact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.75rem;font-weight:700;color:#191919}.contact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.0625rem;font-weight:400;color:#00000080;width:75%;margin:40px auto auto;line-height:2}.contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]{background-color:#f8f9fa;height:320px}.contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   .contact-card-header[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%]{background-color:#fff;width:100px;height:100px;display:flex;justify-content:center;align-items:center;border-radius:50%;margin:auto;padding:20px;transition:all .4s ease}.contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   .contact-card-header[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%]:hover{background-color:var(--main-color)}.contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   .contact-card-header[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#fff}.contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   .contact-card-header[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main-color);font-size:30px;transition:all .4s ease}.contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   .contact-card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.0625rem;color:RGBA(0,0,0,.9);font-weight:500}.contact[_ngcontent-%COMP%]   .contact-card[_ngcontent-%COMP%]   .contact-card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.0625rem;color:#00000080;font-weight:400;line-height:2}.contact[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]{background-color:#f1f3f4;margin:0;padding:0}.contact[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:200px!important;resize:none}"]})}return a})()}}]);