import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import uet from "../../Assests/uet.jpeg";
import Filter from "./Filter";

const SearchCom = () => {
  const [filterText, setFilterText] = useState(""); // Search text
  const [filteredArray, setFilteredArray] = useState([]); // Filtered results
  const [data, setData] = useState([]); // Original data
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const array = [
    {
      id: 1,
      pic: uet,
      name: "Ali Institute of Education",
      description:
        "The Ali Institute of Education (AIE) was established in 1992 by a distinguished family trust, with the primary objective of providing effective teachers to the schools of Pakistan.",
      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 2,
      pic: uet,

      name: "Al-Karam International Institute, Bhera",
      description:
        "Al-Karam International University, Bhera A Federal Chartered University. It is Recognized & Accredited by Higher Education Commission (HEC) & Pakistan Bar Council (PBC).",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 3,
      pic: uet,

      name: "Baba Guru Nanak University, Nankana Sahib",
      description:
        "Baba Guru Nanak University is a public university located in Nankana Sahib, Punjab, Pakistan, the birthplace of Guru Nanak. On 28 October 2019, Prime Minister of Pakistan, Imran Khan laid the foundation stone of the university.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 4,
      pic: uet,

      name: "Bahauddin Zakariya University",
      description:
        "Bahauddin Zakariya University is a public university with its main campus located in Multan, Punjab, Pakistan. Bahauddin Zakariya University was founded in 1975 as Multan University, and is the 2nd largest university in Punjab following University of the Punjab.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 5,
      pic: uet,

      name: "Beaconhouse National University",
      description:
        "Beaconhouse National University is a private liberal arts university located in Lahore, in the province of Punjab, Pakistan. BNU was founded in 2003 by its parent company Beaconhouse School System, it is located at Raiwind, a subdivision of Lahore District; the BNU campus is adjacent to the Bahria Town.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 6,
      pic: uet,

      name: "Cholistan University of Veterinary and Animal Sciences, Bahawalpur",
      description:
        "The Cholistan University of Veterinary and Animal Sciences is a public university located in Bahawalpur, Punjab, Pakistan. It was established in 2014 on the initiative of Chief Minister Punjab, Muhammad Shahbaz Sharif.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      category: "Agriculture & Veterinary",
    },
    {
      id: 7,
      pic: uet,

      name: "Emerson University, Multan",
      description:
        "Emerson University, Multan, formerly known as the Government Emerson College Multan is located in the city of Multan in the Punjab province of Pakistan. It is the largest college in Multan city located on Bosan Road.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 8,
      pic: uet,

      name: "Faisalabad Medical University, Faisalabad",
      description:
        "Faisalabad Medical University is a public university located in Faisalabad, Punjab, Pakistan, on a 158-acre campus on Sargodha Road. It was established, as Punjab Medical College, in 1973 and received the status of a university in 2017.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },

    {
      id: 9,
      pic: uet,

      name: "Fatima Jinnah Medical University, Lahore",
      description:
        "Fatima Jinnah Medical University, previously known as Balak Ram Medical College, is a public medical university located in Lahore, Punjab, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },
    {
      id: 10,
      pic: uet,

      name: "Fatima Jinnah Women University, Rawalpindi",
      description:
        "Fatima Jinnah Women University is a public university in the neighborhood of Mall Road of Rawalpindi, Punjab, Pakistan, as well as in Old Presidency and Kachari Chowk.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 11,
      pic: uet,

      name: "Forman Christian College",
      description:
        "Forman Christian College is a private nonprofit liberal arts university in Lahore, Punjab, Pakistan. It was founded in 1864 and is administered by the Presbyterian Church. The university follows an American-style curriculum.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 12,
      pic: uet,

      name: "Ghazi National Institute of Engineering and Sciences, Dera Ghazi Khan",
      description:
        "Ghazi National Institute of Engineering and Sciences is the prestigious institute of higher education, established by late Sardar Abdul Karim Khan Khosa, a renowned philanthropist of the area.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 13,
      pic: uet,

      name: "Ghazi University, Dera Ghazi Khan",
      description:
        "It is one of the nation's leading public research universities. The university is widely known as an institution of strong performance and high ambition.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 14,
      pic: uet,

      name: "GIFT University",
      description:
        "The GIFT University, also known as Gujranwala Institute of Future Technologies, is a private university located in Gujranwala, Punjab, Pakistan. It is the best University in Gujranwala region, offering multiple degree programs ranging from undergraduate to doctorate.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 15,
      pic: uet,

      name: "Global Institute, Lahore (HEC-NOC Suspended)",
      description:
        "We have been functioning since 1996 in the educational arena of Lahore, with an excellent repute in Business Administration, Commerce, Computer Sciences & Technology disciplines.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 17,
      pic: uet,

      name: "Government College for Women University, Faisalabad",
      description:
        "The Government College Women University Faisalabad (GCWUF) started its journey as an intermediate college in 1934. It was promoted to Degree College in the year 1944",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 17,
      pic: uet,

      name: "Government College for Women University, Sialkot",
      description:
        "The Government College Women University Sialkot is a public university located in Sialkot, Punjab, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 18,
      pic: uet,

      name: "Government College University, Faisalabad",
      description:
        "The Government College University’s journey started as a primary school in 1897 in the present building of Government College for Women, Karkhana Bazar, Faisalabad. It was promoted to High School and Intermediate College in 1905 and 1924 respectively. It was elevated to the degree level in 1933 and postgraduate disciplines were introduced in 1963. The long journey that started with the humble beginning reached its climax when it was granted the status of University in October 2002.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      category: "Humanities",
    },
    {
      id: 19,
      pic: uet,

      name: "Government College University, Lahore",
      description:
        "The Government College University is a public research university in Lahore, Punjab, Pakistan. Founded as Government College, Lahore, in 1864 under British administration, it became a university in 2002.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      category: "Humanities",
    },
    {
      id: 20,
      pic: uet,

      name: "Government Sadiq College Women University",
      description:
        "Named after its founder, Nawab Sir Sadiq Muhammad Khan Abbasi V, the Government Sadiq College Women University is one of the most prestigious and well known institutions of the South Punjab for girls. The Government Sadiq College Women University Bahawalpur is dedicated to fostering..",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 21,
      pic: uet,

      name: "Hajvery University",
      description:
        "Hajvery University (HU) is an autonomous Government-Chartered university. Approved by the Higher Education Commission of Pakistan (HEC), Punjab Higher Education Commission (PHEC) and accredited by Pharmacy Council of Pakistan, Pakistan Engineering Council, Council of Higher Education Turkey and the European Commission.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },
    {
      id: 22,
      pic: uet,

      name: "HITEC University",
      description:
        "HITEC University is a private university located in Taxila Cantonment, Punjab, Pakistan. Taxila, a historic seat of learning and an important archaeological site, is about 30 km north-west of Islamabad and Rawalpindi.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 23,
      pic: uet,

      name: "Imperial College of Business Studies",
      description:
        "Imperial University is a higher education institute in Lahore, Pakistan that offers programs in disciplines including Engineering, Management Sciences, Computing, Information Technology, Applied Technology, Social Sciences, Natural Sciences, Commerce, Medicine, Architecture and Fashion Designing",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 18,
    },
    {
      id: 24,
      pic: uet,

      name: "Punjab University College of Information Technology",
      description:
        "Punjab University College of Information Technology is a college of computer science and information technology at the University of the Punjab located in Lahore, Pakistan. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 25,
      pic: uet,

      name: "Institute for Art and Culture",
      description:
        "Since 2018, the Institute for Art & Culture (IAC) has embarked on a mission to nurture the creative talent of students across Pakistan and beyond.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 10,
    },
    {
      id: 26,
      pic: uet,

      name: "Institute of Management Sciences",
      description:
        "The Institute of Management Sciences, formerly known as Pak-American Institute of Management Sciences, is a project of AKEF established in Lahore, Pakistan in 1987 which offers undergraduate and graduate programs in management and computer sciences. The Rector of the institute is Khalid Ranjha in 2014.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 27,
      pic: uet,

      name: "Institute of Southern Punjab",
      description:
        "The Institute of Southern Punjab is a private university in Multan, Punjab, Pakistan. It was established in 2010. The university offers undergraduate, graduate, and postgraduate programs in various disciplines.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 28,
      pic: uet,

      name: "International Institute of Science, Arts and Technology, Gujranwala",
      description:
        "The establishment of the International Institute of Science, Arts and Technology has introduced a new era in the domain of higher education in the fertile",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 29,
      pic: uet,

      name: "Islamia University of Bahawal Pur",
      description:
        "The Islamia University of Bahawalpur, formerly known as Jamia Abbasia, is a public university located in Bahawalpur, Punjab, Pakistan. It is the only government university within the division, offering standard education both practical and theoretical",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 30,
      pic: uet,

      name: "Khawaja Freed University of Engineering & Information Technology, Rahim Yar Khan",
      description:
        "The Khwaja Fareed University of Engineering and Information Technology is a public university located in Rahim Yar Khan, Punjab, Pakistan. It was established in 2014 on the initiative of the then Chief Minister of Punjab Mian Muhammad Shahbaz Sharif. It was named after the famous Sufi poet Khwaja Ghulam Fareed.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 18,
    },
    {
      id: 31,
      pic: uet,

      name: "King Edward Medical University",
      description:
        "King Edward Medical University is a public medical university located in Lahore, Punjab, Pakistan. It was established as Lahore Medical School during the British Raj in 1860 and is named after King Edward VII",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 32,
      pic: uet,

      name: "Kinnaird College for Women",
      description:
        "The Kinnaird College for Women is a university located in Lahore, Pakistan. It is a women's liberal arts university. Kinnaird was established in 1913 by the Zenana Bible and Medical Mission. In 1919, Presbyterian Mission Church and the Church Mission Society joined a consortium to fund and operate the college.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 33,
      pic: uet,

      name: "Kohsar University, Murree",
      description:
        "Kohsar University Murree, is a public university located in Murree, Punjab, Pakistan. It was established by Government of Punjab vide Kohsar University, Murree Act-2020. The university is currently based in the buildings of Govt. Graduate College Murree, Govt.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 34,
      pic: uet,

      name: "Lahore College for Women University",
      description:
        "The Lahore College for Women University Is a public university in Lahore, Punjab, Pakistan. Founded in 1922 with a capacity of 60 students, it now has a full-time enrollment of about 15,000 students and admits students at Intermediate, Graduate, Masters and Ph.D. levels.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 35,
      pic: uet,

      name: "Lahore Garrison University",
      description:
        "The Lahore Garrison University LGU is a Pakistan Army university located in Lahore, Punjab, Pakistan. The university was established by the Pakistan army. It runs undergraduates and graduate and PhD programs in various disciplines. Alumni and Students are known as Garrisonian.very good",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 36,
      pic: uet,

      name: "Lahore Institute of Science & Technology, Lahore",
      description:
        "Our institute offers a vibrant array of extracurricular activities, fostering creativity, leadership, and teamwork.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 37,
      pic: uet,

      name: "Lahore Leads University",
      description:
        "Known for its innovative programs and cutting-edge research, Lahore Leads University is a leader in higher education in Pakistan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 38,
      pic: uet,

      name: "Lahore School of Economics",
      description:
        "Lahore School of Economics, also known as The Lahore School, is a private research university based in Lahore, Punjab, Pakistan and recognized by the Higher Education Commission of Pakistan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 39,
      pic: uet,

      name: "Lahore University of Biological and Applied Sciences, Lahore",
      description:
        "Lahore University of Biological & Applied Sciences (UBAS) is a distinguished institution, known for excellence in biological sciences and applied studies. With a comprehensive range of courses and eighteen prestigious Programmes, UBAS is the premier university in Lahore and Punjab",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 40,
      pic: uet,

      name: "Lahore University of Management Sciences",
      description:
        "Lahore University of Management Sciences is a private research university in Lahore, Punjab, Pakistan. In 1984, Syed Babar Ali recognized the shortage of qualified managers in the country. He proposed to establish a world-class university that would attract and retain the highest caliber of students and faculty.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 41,
      pic: uet,

      name: "Minhaj University",
      description:
        "Minhaj University Lahore was founded in 1986 by Shaykh-ul-Islam Prof. Dr Muhammad Tahir-ul-Qadri, patron-in-chief of Minhaj ul Quran International.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 42,
      pic: uet,

      name: "Mir Chakar Khan Rind University of Technology, Dera Ghazi Khan",
      description:
        "The Mir Chakar Khan Rind University of Technology is a public university located in Dera Ghazi Khan District, Punjab, Pakistan. It was named after a Baloch folk hero Mir Chakar Khan Rind. In this University there are many faculties related to engineering too.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 43,
      pic: uet,

      name: "Muhammad Nawaz Shareef University of Agriculture",
      description:
        "The Muhammad Nawaz Shareef University of Agriculture is a public university located in Multan, Punjab, Pakistan. It was established in 2012 on the initiative of Chief Minister Punjab Mian Muhammad Shahbaz Sharif. The university is named after Nawaz Sharif. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 44,
      pic: uet,

      name: "Muhammad Nawaz Sharif University of Engineering & Tech",
      description:
        "The Muhammad Nawaz Sharif University of Engineering and Technology is a public university located in Multan, Punjab, Pakistan. It was established in 2012 on the initiative of Chief Minister Punjab Mian Muhammad Shahbaz Sharif.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 45,
      pic: uet,

      name: "Multan University of Science & Technology, Multan",
      description:
        "State of the art educational institution of Southern Punjab.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 46,
      pic: uet,

      name: "Namal University, Mianwali",
      description:
        "The Namal University is a private university in Rikhi, Mianwali District, Punjab, Pakistan. It is located on 30 km, Talagang Mianwali Road near Namal Lake.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 47,
      pic: uet,

      name: "National College of Arts",
      description:
        "Evolving from an industrial polytechnic in 1875 to a contemporary arts college in 1958, NCA now boasts an impressive array of undergraduate, graduate, MPhil.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 48,
      pic: uet,

      name: "National College of Business Administration & Economics",
      description:
        "National College of Business Administration & Economics. NCBA&E was founded back in 1994 as a state of the art educational institute.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 49,
      pic: uet,

      name: "National Textile University",
      description:
        "The National Textile University is a public university located in Faisalabad, Punjab, Pakistan. It is a premier institute of textile education in Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 50,
      pic: uet,

      name: "National University of Medical Sciences",
      description:
        "The National University of Medical Sciences, commonly referred as NUMS, is a public university located in Rawalpindi, Punjab, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },
    {
      id: 51,
      pic: uet,

      name: "National University of Pakistan",
      description:
        "The National University of Pakistan is a university in Islamabad, Pakistan. The creation of this university was made possible by the passing of the National University of Pakistan Bill in 2023.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 52,
      pic: uet,

      name: "NFC Institute of Engineering & Technology",
      description:
        "The NFC Institute of Engineering and Technology Multan is a public university located in Multan, Punjab, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 53,
      pic: uet,

      name: "Nishtar Medical University, Multan",
      description:
        "Nishtar Medical University is a public medical university located in Multan, Punjab, Pakistan. It is one of the oldest medical institutions established after the creation of Pakistan. It offers degree programs in medicine, dentistry, allied health sciences and nursing.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },
    {
      id: 54,
      pic: uet,

      name: "Nur International University",
      description:
        "NUR International University is a private University. It is located in Lahore, Pakistan. It was founded in 2015.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 55,
      pic: uet,

      name: "Pakistan Global Institute, Rawat",
      description:
        "PGI defines itself as a community of professors, scholars, and thinkers who aim to foster a well-rounded personality in individual students. We encourage value-centered education by challenging assumptions and emphasizing ethical concerns in both classes and activities",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 56,
      pic: uet,

      name: "Pakistan Institute of Fashion & Design",
      description:
        "Pakistan Institute of Fashion and Design, also referred as PIFD, is a public design institution primarily located in Lahore, Punjab, Pakistan. It was established in 1994 as the Pakistan School of Fashion Design by the Trade Development Authority of Pakistan, a department within the Ministry of Commerce.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 57,
      pic: uet,

      name: "Pir Mehr Ali Shah Arid Agriculture University",
      description:
        "Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi is in Rawalpindi, Punjab, Pakistan. It is named after Pir Meher Ali Shah, a known Hanafi scholar. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 58,
      pic: uet,

      name: "Punjab Tianjin University of Technology, Lahore",
      description:
        "The Punjab Tianjin University of Technology is a public university located in Lahore, Punjab, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 59,
      pic: uet,

      name: "Punjab University of Technology, Rasul-Mandi Bahauddin",
      description:
        "The legacy of the Punjab University of Technology Rasul goes back to the year 1873 and finds its roots in the School of Surveying that was established at the University Oriental College in Lahore. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 60,
      pic: uet,

      name: "Qarshi University",
      description:
        "Qarshi University is a project of Qarshi Foundation; a non-profit welfare organization funded by the Qarshi family. It was established in 2011. It is recognized by the Higher Education Commission of Pakistan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 61,
      pic: uet,

      name: "Rashid Latif Khan University, Lahore",
      description:
        "Rashid Latif Khan University is located on Ferozepur Road in Lahore, Punjab, Pakistan, with a total area of 33 acres for the Rashid Latif Khan University Complex. RLKU offers a one-of-a-kind infrastructure, comprising excellent facilities in a number of sectors that are up to date on innovation and research standards. The University also features a comprehensive digital library with easy access for students and faculty members. As a multifunctional university, RLKU offers career orientation courses and degrees at the undergraduate and postgraduate levels in a wide range of subjects",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 62,
      pic: uet,

      name: "Rawalpindi Medical University",
      description:
        "Rawalpindi Medical University is a public university located in Rawalpindi, Punjab, Pakistan. It is affiliated with three public sector teaching hospitals for undergraduate and postgraduate medical education & training.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },
    {
      id: 63,
      pic: uet,

      name: "Rawalpindi Women University, Rawalpindi",
      description:
        "The Rawalpindi Women University is a public university funded by the Government of Punjab, Pakistan in Rawalpindi, Punjab, Pakistan. The university has been running 15 BS Honors,16 Masters and 10 M.Phil. programs successfully. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 64,
      pic: uet,

      name: "Thal University, Bhakkar",
      description:
        "Thal University Bhakkar is a public sector university that provides advanced, intellectual learning that illuminates the human minds and broadens the vision",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 65,
      pic: uet,

      name: "The Grand Asian University, Sialkot",

      description:
        "Grand Asian University (GAUS), a project of Islam Group, was conceived. The founding base of this dream was the establishment of the cradle of Islam Education.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 66,
      pic: uet,

      name: "The Green International University, Lahore",
      description:
        "Green International University, Lahore is established by Government of the Punjab vide No. SO(Univ.)9-15/2019 dated 25th June, 2020 through Green International University Act, 2020 (VI of 2020) promulgated on 4th June, 2020.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 67,
      pic: uet,

      name: "The Superior University",
      description:
        "Join Superior University, ranked Pakistan No 1 University. Offers world class education and diverse range of programs for a successful future.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 68,
      pic: uet,

      name: "The University of Faisalabad",
      description:
        "The University of Faisalabad is a private university located in Faisalabad, Punjab, Pakistan. It was established in 2002 under the auspices of Madina Foundation, a not for profit philanthropic organization",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 69,
      pic: uet,

      name: "The Women University",
      description:
        "The Women University Multan, Urdu: وؤمن یونیورسٹی ملتان, is a public university located in Multan, Punjab, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 70,
      pic: uet,

      name: "Times Institute, Multan",
      description:
        "TIMES Institute is a Government Chartered and HEC Recognized Degree Awarding Institute established under The Times Institute, Multan Act 2020",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 71,
      pic: uet,

      name: "University of Agriculture",
      description:
        "The University of Agriculture is a public research university in Faisalabad, Pakistan. It is the largest university of Pakistan by area, with a covered area of 2,550 acres. It is ranked as a top university of Pakistan for Agriculture/Veterinary and is ranked among top ten Pakistani universities in general category",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 72,
      pic: uet,

      name: "University of Central Punjab",
      description:
        "The University of Central Punjab or UCP is a private university located on Khayaban-e-Jinnah Road, Lahore, Punjab, Pakistan. ",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 73,
      pic: uet,

      name: "University of Chakwal, Chakwal",
      description:
        "The University of Chakwal is a public university located in Chakwal, Punjab Pakistan. It was established in January, 2020 through the University of Chakwal ACT 2019.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 74,
      pic: uet,

      years: "10+ years",
      seats: "400+ seats",
      name: "University of Chenab, Gujrat",
      description:
        "The University of Chenab in Gujrat, HEC recognized, offers 35+ programs like IT with expert faculty, offering world-class education.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 75,
      pic: uet,

      name: "University of Child Health Sciences, Lahore",
      description:
        "The good news for the pediatric students is that a full child university is set up in Lahore. This is the first child university in Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },
    {
      id: 76,
      pic: uet,

      name: "University of Education",
      description:
        "University of Education, which was established in 2002, offers degree programs ranging frome undergraduate to PhD level in various disciplines. The University of Education constitutes 9 campuses which are spread across the remotest parts of the province of Punjab. The constituent campuses of the University include century old Institutions for teacher education in the sub continent, with good repute and traditions of excellence",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 77,
      pic: uet,

      name: "University of Engineering & Technology , Lahore",
      description:
        "The University of Engineering and Technology, Lahore is a public university located in Lahore, Punjab, Pakistan specializing in science, technology, engineering, and mathematics subjects. It is the oldest and one of the most selective engineering institutions in Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 78,
      pic: uet,

      name: "University of Engineering & Technology, Taxila",
      description:
        "The University of Engineering and Technology, Taxila is a public university located in Taxila, Punjab, Pakistan. It was established in 1975 as a campus of the University of Engineering and Technology, Lahore and chartered as an independent university in 1993.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 79,
      pic: uet,

      name: "University of Gujrat",
      description:
        "The University of Gujrat is a public university located in Gujrat, Punjab, Pakistan. It was established in 2004.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 80,
      pic: uet,

      name: "University of Health Sciences",
      description:
        "The University of Health Sciences, Lahore, commonly referred to as UHS Lahore, is a graduate, affiliating public university located in Lahore, Punjab, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 81,
      pic: uet,

      name: "University of Home Economics, Lahore",
      description:
        "The University of Home Economics Lahore is a public university located in Lahore, Pakistan. It was founded in 1955 to create a center for teaching and research in the field of Home Economics. On 8 February 2017, Punjab assembly passed the bill to upgrade it from college to university.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 82,
      pic: uet,

      name: "University of Jhang",
      description:
        "The University of Jhang is a public university located in Jhang, Punjab, Pakistan. The University of Jhang has been established by the Government, Higher Education Department under the act UNIVERSITY OF JHANG ACT 2010.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 83,
      pic: uet,

      name: "University of Lahore",
      description:
        "The University of Lahore, abbreviated as UOL, is a private university located in Lahore, Punjab, Pakistan. The University of Lahore was founded at the collegiate level in 1999 under the IBADAT Educational Trust and was granted full degree awarding status in 2002.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 84,
      pic: uet,

      name: "University of Layyah",
      description:
        "With a marvelous history of 15 years of excellence, the University of Layyah is now positioned among fast growing Universities of Punjab Pakistan. Originally established as a BZU Bahadur Sub-Campus Layyah in 2009. Realizing the importance of Higher Education Degree Awarding Institute one in each district this Sub-Campus was upgraded as University in December 2022. Presently, University of Layyah comprises of 23 departments in six faculties and 2 campuses.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 85,
      pic: uet,

      name: "University of Management & Technology",
      description:
        "The University of Management and Technology is a top ranked private research university located in Lahore, Pakistan. It is chartered by the Government of Punjab, Pakistan and is recognized by the Higher Education Commission of Pakistan in the W4 category, the highest attainable HEC ranking for Pakistani universities.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 86,
      pic: uet,

      name: "University of Mianwali",
      description:
        "The University of Mianwali, established recently in 2019, was previously a sub campus of the University of Sargodha since 2012. The University faced many challenges since its inaction and sailed out from them successfully. The magnificent admin block, academic blocks and laboratories add to the grace of the University. In no time at all, it has started to flourish and has achieved many laurels in academics and co-curricular activities.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 87,
      pic: uet,

      name: "University of Narowal",
      description:
        "The University of Narowal distinctive mission is to serve society as a centre of higher education, delivering long-term societal advantages through the dissemination of cutting-edge knowledge, discovering new knowledge, and promoting research activities to generate knowledge. More specifically, this commitment extends to undergraduate and graduate education, and research, which are shaped and bounded by the overarching goal of advancing knowledge.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 88,
      pic: uet,

      name: "University of Okara",
      description:
        "The University of Okara is a public university located in Renala Khurd, Okara, Punjab, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 89,
      pic: uet,

      name: "University of Sahiwal",
      description:
        "Inagurated in 2016, University of Sahiwal has changed with the world over the last couple of years, often leading the way with new ideas and discoveries.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 90,
      pic: uet,

      name: "University of Sargodha",
      description:
        "A major public sector university of Pakistan offering modern teaching and research facilities, including well-equipped classrooms, laboratories.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 91,
      pic: uet,

      name: "University of Sialkot, Sialkot",
      description:
        "The University of Sialkot is a private university located in Sialkot, Punjab, Pakistan. It was established in 2018 and has eight faculties.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 92,
      pic: uet,

      name: "University of South Asia",
      description:
        "The University of South Asia or USA is a private university located in Lahore, Punjab, Pakistan. It was established in 1987 as a computer training institution with the name of National College of Computer Sciences. More than 100,000 students underwent training programs in Computer Sciences.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 93,
      pic: uet,

      name: "University of the Punjab",
      description:
        "The University of the Punjab, also referred to as the Punjab University, is a public research university in Lahore, Punjab, Pakistan. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 94,
      pic: uet,

      name: "University of Veterinary & Animal Sciences",
      description:
        "The University of Veterinary and Animal Sciences, or UVAS originally known as Lahore Veterinary College, is a public university located in Lahore, Punjab, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 95,
      pic: uet,

      name: "University of Wah",
      description:
        "The University of Wah is a private university located at Wah, Punjab, Pakistan. It was established in 2005. It offers bachelors, masters and doctoral programs in basic sciences, social sciences, management sciences, computer science and engineering.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 96,
      pic: uet,

      name: "Virtual University of Pakistan",
      description:
        "The Virtual University of Pakistan is a public university with its headquarters in Sir Syed Memorial Society Building, 19-Ataturk Avenue, G-5/1, Islamabad. It mainly focuses on providing e-learning programs through utilization of Information and Communication Technology tools.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 97,
      pic: uet,

      name: "Air University",
      description:
        "The Air University is a federally chartered public sector research university in Pakistan. Established in 2002, its main campus is located in the capital city of Islamabad, Pakistan. The university has two other functional campuses, Aerospace and Aviation Campus at Kamra and a campus at Multan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 98,
      pic: uet,

      name: "Allama Iqbal Open University",
      description:
        "Allama Iqbal Open University, the largest university of Asia in distance education, which primarily focuses on the educational needs of masses by",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 99,
      pic: uet,

      name: "Bahria University",
      description:
        "Bahria University is a public-sector university established in 2000 by the Pakistan Navy at Shangrilla Road, Sector E-8/1 in Islamabad, Pakistan. The university maintains campuses in Karachi, Islamabad and Lahore. Established by the Pakistan Navy in 2000, its status is semi-government",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 100,
      pic: uet,

      name: "Capital University of Science & Technology",
      description:
        "The Capital University of Science & Technology is a private university located in Islamabad, Pakistan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 101,
      pic: uet,

      name: "COMSATS University, Islamabad",
      description:
        "The COMSATS University Islamabad, formerly known as COMSATS Institute of Information Technology, is a public university in Pakistan. It is a multi-campus university with its principal seat located in Islamabad. Comsats was envisioned as Pakistan's first exclusive Institute of Information Technology.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 102,
      pic: uet,

      name: "Dar-ul-Madina International University, Islamabad",
      description:
        "Dar-ul-Madina International University (DMIU) is one of the educational ventures that have been initiated by Dawat-e-Islami to cultivate a culture of research, learning, knowledge generation and its application up to the standards of the Higher Education Commission of Pakistan by remaining within the boundaries of Shariah. No doubt teaching faculty is the backbone of an institution.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 103,
      pic: uet,

      name: "Federal Urdu University of Arts, Sciences & Technology",
      description:
        "The Federal Urdu University of Arts, Sciences & Technology enjoys the unique distinction of being the first ever university in Pakistan, which ultimately aims at using Urdu as the main language of instruction and teaching… The University was established on 13th November 2002 under Ordinance No. CXIX of 2002 promulgated by the President of Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 104,
      pic: uet,

      name: "Foundation University",
      description:
        "The Foundation University Islamabad, is a university located in Islamabad, Pakistan. It is under the administration of Pakistan Armed Forces and has two campuses; Foundation University School of Health Sciences and Foundation University School of Science and Technology.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 105,
      pic: uet,

      name: "Health Services Academy (HSA), Islamabad",
      description:
        "It was established as an in-service training institution in 1988 by the Ministry of Health. However, in 2002 HSA was granted status of an autonomous institution under the Ministry of Health. After the 18th amendment HSA was placed under the Ministry of National Health Services Regulation and Coordination. Since its beginning HSA has been striving to excel in meeting human resources needs of Public Health.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 106,
      pic: uet,

      name: "Ibadat International University, Islamabad",
      description:
        "Ibadat International University has established state of art facilities with fully developed infra-structure for Engineering, IT, Artificial Intelligence, Allied Health Sciences,    Biological Sciences, Pharmacy, Law, and Management Sciences.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 107,
      pic: uet,

      name: "Institute of Space Technology",
      description:
        "The Institute of Space Technology is a public university located in Islamabad, Pakistan. It is focused on the study of astronomy, aerospace engineering, avionics engineering, Computer science, Artificial intelligence, Data science and astronautics.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 108,
      pic: uet,

      name: "International Islamic University",
      description:
        "The International Islamic University is an Islamic public university located in Islamabad, Pakistan. It was established in 1980 and restructured in 1985, and remains a valuable source for Higher Education in Pakistan. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 109,
      pic: uet,

      name: "MY University",
      description:
        "MY University is a springboard for learning. It is committed to high quality teaching with a thriving interactive culture. That's why we have established a strong support system between students and staff. They work on professionalism, teamwork, respect, integrity, mentorship, systems thinking and communication skills. We intend to recruit a diverse intake of students – the best and the truest of a kind – as it is our vision to see the institution par excellence in the days ahead.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 110,
      pic: uet,

      name: "National Defense University",
      description:
        "The National Defence University, formerly introduced as Army War Course, the National Defence College, is the military university of the Islamic Republic of Pakistan focused on military education and training for the armed forces, including Pakistan military forces and two hundred foreign participants.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 111,
      pic: uet,

      name: "National Skills University, Islamabad",
      description:
        "National Skills University Islamabad, is a degree awarding institution upgraded from a TVET institution formerly known as National Institute of Science and Technical Education. NSU is a public sector university established by Federal Government of Pakistan under the National Skills University Islamabad Act, 2018.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 112,
      pic: uet,

      name: "National University of Computer & Emerging Sciences",
      description:
        "The sponsoring body of the University – the Foundation for Advancement of Science and Technology (FAST) was established in 1980. It is registered with the Government of Pakistan as a charitable institution. In 1985, it selected higher education as a vehicle to pursue its objective of producing scientists and technologists of the highest calibre. FAST pioneered the development of IT industry in Pakistan by offering the country’s first undergraduate program in Computer Science. Today, this University, sponsored by FAST, stands recognized as the leader and trend-setter in this field in Pakistan and abroad",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 113,
      pic: uet,

      name: "National University of Modern Languages",
      description:
        "The National University of Modern Languages is a multi-campus public university with its main campus located in Islamabad, Pakistan and other campuses in different cities of Pakistan. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 114,
      pic: uet,

      name: "National University of Sciences & Technology",
      description:
        "The National University of Sciences & Technology is a Pakistani multi-campus public research university with its main campus in Islamabad, and other campuses in Rawalpindi, Risalpur, Quetta and Karachi.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 115,
      pic: uet,

      name: "National University of Technology (NUTECH), Islamabad",
      description:
        "As an idea and futuristic concept of integrating all 8 levels of education under one umbrella was rather a difficulty proposition. It raised a heated debate in first NUTECH BoG meeting held in May 2018. After hectic discussions, the BoG agreed with University vision, mission and objectives and approved its statutes, structure, programs, budget and allied administrative aspects.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 116,
      pic: uet,

      name: "Pakistan Institute of Development Economics",
      description:
        "The Pakistan Institute of Development Economics is a post-graduate research institute and a public policy think tank located in the vicinity of Islamabad, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 117,
      pic: uet,

      name: "Pakistan Institute of Engineering & Applied Sciences",
      description:
        "The Pakistan Institute of Engineering and Applied Sciences, is a public research university located in Islamabad, Pakistan. The university is modelled on international standards with a strong focus on the scientific advancement of the nuclear science-related STEM fields.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 118,
      pic: uet,

      name: "Quaid-i-Azam University",
      description:
        "Quaid-i-Azam University Islamabad, founded as University of Islamabad, is a public research university in Islamabad, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 119,
      pic: uet,

      name: "Riphah International University",
      description:
        "Riphah International University is a private university in Pakistan, chartered by the Federal Government of Pakistan in 2002. It is sponsored by the not-for-profit Islamic International Medical College Trust.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 120,
      pic: uet,

      name: "Shaheed Zulfiqar Ali Bhutto Medical University",
      description:
        "The Shaheed Zulfiqar Ali Bhutto Medical University is a public university in Islamabad, Pakistan. Established on 21 March 2013, it offers undergraduate and postgraduate courses of medicine, surgery, dentistry, basic medical sciences and allied health professions.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },

    {
      id: 121,
      pic: uet,

      name: "Shifa Tameer-e-Millat University",
      description:
        "Shifa Tameer-e-Millat University is a private university, established in 2012 in Islamabad, Pakistan. It is set up as a nonprofit institution in the private sector.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 122,
      pic: uet,

      name: "Sir Syed (CASE) Institute of Technology, Islamabad",
      description:
        "The Sir Syed CASE Institute of Technology is a private university located in Islamabad, Pakistan. SS-CASE-IT offers undergraduate, postgraduate, and doctoral degrees. Degrees awarded by SS-CASE-IT are recognized by the Higher Education Commission of Pakistan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 123,
      pic: uet,

      name: "Al-Khair University",
      description:
        "Al-Khair University, founded in 1994, focuses on generating knowledge and nurturing human capital. It offers programs in various disciplines",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 124,
      pic: uet,

      name: "Mirpur University of Science & Technology",
      description:
        "Mirpur University of Science & Technology was formerly a constituent college of University of Azad Jammu and Kashmir as University College of Engineering & Technology Mirpur. It is a state university.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 125,
      pic: uet,

      name: "Mohi-ud-Din Islamic University",
      description:
        "Mohi-ud-Din Islamic University is a private university in Nerian Sharif, Azad Kashmir, Pakistan, that offers undergraduate and post-graduate education. ",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 126,
      pic: uet,

      name: "University of Azad Jammu & Kashmir",
      description:
        "The University of Azad Jammu and Kashmir is located in Muzaffarabad, Azad Jammu and Kashmir, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 127,
      pic: uet,

      name: "University of Kotli",
      description:
        "The University of Kotli Azad Jammu and Kashmir is a university in the Pakistani-administered self-governing region of Azad Jammu and Kashmir. The University of Kotli was formerly a constituent college of the University of Azad Jammu and Kashmir.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 128,
      pic: uet,

      name: "University of Poonch",
      description:
        "University of Poonch is a public university located in Rawalakot, Azad Kashmir, Pakistan. The university has 3 different campuses: The Main campus in Rawalakot, the Kahuta campus, and the Mong campus. As of 2017, the university has 7 faculties consisting of 26 departments.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 129,
      pic: uet,

      name: "Women University of Azad Jammu & Kashmir",
      description:
        "Women University of Azad Jammu and Kashmir Bagh is a public university located in Bagh, Azad Jammu & Kashmir, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 130,
      pic: uet,

      name: "Al-Hamd Islamic University",
      description:
        "Alhamd Islamic University was conceived by Alhamd Educational System (AES), that was established in the year 1995 with the vision of Promoting Education in all the Sectors of Education. AES is already operating number of educational institutions, research & development organizations like Balochistan Institute of Technology, BIT Girls College, Dar-e-Arqam School of Islam and Modern Sciences, Dar-e-Arqam Girls College, and Quran Research Academy.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 131,
      pic: uet,

      name: "Balochistan University of Engineering & Technology",
      description:
        "The Balochistan University of Engineering & Technology, Khuzdar is a public university located in Khuzdar, Balochistan, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 132,
      pic: uet,

      name: "Balochistan University of Information Technology, Engineering & Management Quetta",
      description:
        "The Balochistan University of Information Technology, Engineering, and Management Sciences is a public research university in Quetta, Balochistan, Pakistan. The Government of Balochistan chartered the university on 18 July 2002.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 133,
      pic: uet,

      name: "Lasbela University of Agriculture, Water & Marine Sciences",
      description:
        "Lasbela University of Agriculture, Water & Marine Sciences is a public sector university located in Uthal, in Lasbela District, in Balochistan province of Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 134,
      pic: uet,

      name: "Mir Chakar Khan Rind University, Sibi Balochistan",
      description:
        "The Mir Chakar Khan Rind University is a public university located in Sibi, Balochistan, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 135,
      pic: uet,

      name: "Sardar Bahadur Khan Women University",
      description:
        "Sardar Bahadur Khan Women's University is a women's university in Quetta, Balochistan, Pakistan. It was established in 2004. The university offers degree programs in Arts and Sciences. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 136,
      pic: uet,

      name: "The Bolan University of Medical and Health Sciences, Quetta",
      description:
        "Bolan University of Medical and Health Sciences is a medical university located in Quetta, Balochistan, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 137,
      pic: uet,

      name: "University of Balochistan",
      description:
        "The University of Balochistan also known as Balochistan University, is a public university located in the city center area of Quetta, Balochistan, Pakistan. UoB is the oldest highest education institution in Balochistan, having been established in 1970.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 138,
      pic: uet,

      name: "University of Gwadar",
      description:
        "The University of Gwadar is a public university situated in Gwadar, Balochistan, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 139,
      pic: uet,

      name: "University of Loralai",
      description:
        "University of Loralai is in Loralai, Pakistan. The university started its academic activities in 2012.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 140,
      pic: uet,

      name: "University of Makran,Panjgur",
      description:
        "The University of Makran (UOM) is a public university located in Panjgur, Balochistan, Pakistan. It was the campus of University of Turbat (UoT) but in 2022",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 141,
      pic: uet,

      name: "University of Turbat",
      description:
        "The University of Turbat is a public university situated in Turbat, Balochistan, Pakistan. University of Turbat is the second General University in public sector, chartered by the Government of Balochistan by Act 2012 passed by the Provincial Assembly of Balochistan in May, 2012.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 142,
      pic: uet,

      name: "Karakurum International University",
      description:
        "Karakoram International University or Karakoram University is a public sector university located in Gilgit, the capital city of the Gilgit-Baltistan region in northern Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 143,
      pic: uet,

      name: "University of Baltistan,Skardu",
      description:
        "University Of Baltistan or Baltistan University is an international level university in Skardu, Gilgit-Baltistan, Pakistan. It was established in 2017 with a charter by the Federal Government of Pakistan, with the goal of improving access to higher education for the people of Gilgit-Baltistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 144,
      pic: uet,

      name: "Abasyn University",
      description:
        "Abasyn University, Peshawar was established in December 2007 through promulgation of an ordinance by the Governor KPK following recommendation of Higher Education Commission, Islamabad for grant of charter to Abasyn University, Peshawar, upon fulfillment of the bench-marks laid down by the Commission and the Federal Cabinet",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 145,
      pic: uet,

      name: "Abbottabad University of Science and Technology (AUST)",
      description:
        "The Abbottabad University of Science and Technology is a public university located in Havelian, Pakistan. It offers undergraduate and postgraduate programs.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 146,
      pic: uet,

      name: "Abdul Wali Khan University",
      description:
        "The Abdul Wali Khan University Mardan is a public university located in the Mardan District of the Khyber-Pakhtunkhwa province of Pakistan. Established in April 2009, the university is named after Abdul Wali Khan, a prominent personality of Khyber Pakhtunkhwa.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 147,
      pic: uet,

      name: "Bacha Khan University",
      description:
        "Bacha Khan University is a public university situated in Charsadda, Khyber Pakhtunkhwa, Pakistan, named after Abdul Ghaffar Khan. The university was founded on 3 July 2012 with the mission to advance knowledge and learning through quality research and education for Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 148,
      pic: uet,

      name: "Brains Institute Peshawar",
      description:
        "BRAINS Institute aspires to be a center of excellence, dedicated to “Opening Minds, Building Futures” by fostering innovation, knowledge, and growth for a brighter future",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 149,
      pic: uet,

      name: "CECOS University of Information Technology & Emerging Sciences",
      description:
        "CECOS University of IT and Emerging Sciences is a private university in Peshawar, Pakistan. It was established in 1986 by Engr. Muhammad Tanveer Javed as a small private sector institute named CECOS Data Institute with limited resources.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 150,
      pic: uet,

      name: "City University of Science and Information Technology",
      description:
        "City University of Science and Information Technology, Peshawar is a private-sector university based in Peshawar, Khyber Pakhtunkhwa, Pakistan. It is chartered by the government of Khyber Pakhtunkhwa, recognized by the Higher Education Commission, and allowed to operate by the Pakistan Engineering Council.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 151,
      pic: uet,

      name: "Gandhara University",
      description:
        "The Gandhara University is a private university located in Peshawar, Khyber Pakhtunkhwa, Pakistan. It is chartered by the Government of Khyber Pakhtunkhwa. Gandhara University was the first private medical university of Khyber Pakhtunkhwa. It provides specialized training in the health sciences. ",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 152,
      pic: uet,

      name: "Ghulam Ishaq Khan Institute of Engineering Sciences & Technology",
      description:
        "The Ghulam Ishaq Khan Institute of Engineering Sciences and Technology is a private research university located in Topi, Khyber Pakhtunkhwa in Pakistan. The institute has a 400-acre campus that is located in the vicinity of Swabi District. It was founded by the former President of Pakistan, Ghulam Ishaq Khan, in 1993",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 153,
      pic: uet,

      name: "Gomal University",
      description:
        "Gomal University, is a public research university located in Dera Ismail Khan, Khyber Pakhtunkhwa, Pakistan. Founded and established in 1974, the university is one of the oldest institutions in the country and occupies one of the largest campuses in the Khyber-Pakhtunkhwa province.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 154,
      pic: uet,

      name: "Hazara University",
      description:
        "The Hazara University is a public university located in Mansehra, Khyber Pakhtunkhwa, Pakistan. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 155,
      pic: uet,

      name: "Institute of Management Science",
      description:
        "IMS believes in originality, imagination, inventiveness, modernization and advancement of idea which are harnessed through resourcefulness. Our state-of-the-art faculty, Software Development Cell and Post-graduate Research plays an important role toward creativity innovation.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 156,
      pic: uet,

      name: "Iqra National University",
      description:
        "Iqra National University, is a private university in Peshawar, KPK, Pakistan. It is chartered by the Government of Khyber Pakhtunkhwa and is recognized by HEC and Pakistan Engineering Council.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 157,
      pic: uet,
      name: "Islamia College Peshawar",
      description:
        "Islamia College Peshawar is a public university located in Peshawar, Khyber Pakhtunkhwa, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 158,
      pic: uet,

      name: "Khushal Khan Khattak University",
      description:
        "Khushal Khan Khattak University Karak was established in 2012. The university has been a dream of the populace, realized in the form of this University, named after the legendary Khushal Khan Khattak",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 159,
      pic: uet,

      name: "Khyber Medical University",
      description:
        "Khyber Medical University, is a public research university located in Peshawar, Khyber Pakhtunkhwa, Pakistan. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },
    {
      id: 160,
      pic: uet,

      name: "Khyber Pakhtunkhwa Agricultural University",
      description:
        "The University of Agriculture, Peshawar, is a research university located in Peshawar, Khyber Pakhtunkhwa, Pakistan. The university is ranked fourth in agriculture in Pakistan. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 161,
      pic: uet,

      name: "Kohat University of Science and Technology",
      description:
        "The Kohat University of Science and Technology is a public university located at the Kohat District within the Khyber Pakhtunkhwa province of Pakistan. It was established in 2001. The university was inaugurated by the then Governor of Khyber Pakhtunkhwa, Lt. Gen. Syed Iftikhar Hussain Shah.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 162,
      pic: uet,

      name: "Northern University",
      description:
        "The Northern University is a private non profit university funded by EDR Trust, located in Wattar Walai, Nowshera, Khyber Pakhtunkhwa. The inauguration of the university was done by the Former President of Northern University General Sawar Khan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 163,
      pic: uet,

      name: "Pak-Austria Fachhochschule Institute of Applied Sciences and Technology, Haripur",
      description:
        "Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology is a public science and technology university located in Mang, Haripur, Khyber Pakhtunkhwa. The institute focuses on artificial intelligence, railway engineering, nanotechnology, mineral resources and agricultural technologies.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 164,
      pic: uet,

      name: "Pakistan Military Academy",
      description:
        "Pakistan Military Academy, also referred to by its acronym, is an officers training centre located near Kakul village in the city and district of Abbottabad, Khyber Pakhtunkhwa. Established in October 1947, it is the sole service academy in Pakistan tasked with training cadets to serve as army officers.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 165,
      pic: uet,

      name: "Preston University, Kohat",
      description:
        "Preston University, Pakistan was established as School of Business and Commerce in 1984 to foster academic excellence.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 166,
      pic: uet,

      name: "Qurtuba University of Science & Information Technology",
      description:
        "Qurtuba University of Science and Information Technology was established with the sole purpose of imparting quality education in the various fields of science",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 167,
      pic: uet,

      name: "Sarhad University of Science & Information Technology",
      description:
        "The Sarhad University of Science and Information Technology is a private university in Peshawar, Khyber-Pakhtunkhwa, Pakistan. Established in 2001, it offers a wide range of programs from bachelor to doctoral level.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 168,
      pic: uet,

      name: "Shaheed Benazir Bhutto University",
      description:
        "Shaheed Benazir Bhutto University is a public university located in the Sheringal region within the Upper Dir District of the Khyber Pakhtunkhwa province of Pakistan. It was established in 2009 with a presidential order.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 169,
      pic: uet,

      name: "Shaheed Benazir Bhutto Women University",
      description:
        "Shaheed Benazir Bhutto Women University, previously known as the Frontier Women University, is located in Peshawar, Khyber Pakhtunkhwa, Pakistan. It was formed as result of an order from Khyber Pakhtunkhwa government in 2004 and the university has been functioning since 2005.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 170,
      pic: uet,

      name: "Shuhada-e-Army Public School University of Technology, Nowshera",
      description:
        "The Shuhada-e-Army Public School University of Technology is a public university located in Nowshera, Khyber Pakhtunkhwa, Pakistan. It is the first public university in Nowshera District and also the first technical university in Khyber Pakhtunkhwa province.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 171,
      pic: uet,

      name: "The University of Agriculture, D.I. Khan",
      description:
        "The University of Agriculture Dera Ismail Khan is a public sector HEC recognized university located at Dera Ismail Khan city of Khyber Pakhtunkhwa in Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      category: "Agriculture & Veterinary",
    },
    {
      id: 172,
      pic: uet,

      name: "Agriculture Research Institute Mingora Swat",
      description:
        "University of Swat was established for providing higher education to the people of Swat Valley specifically and the whole of the country generally.University of Swat was established in July 2010. Since its establishment the university has made tremendous progress in terms of academics, research and physical infrastructure. Starting with only seven disciplines in 2010, currently the university offers admissions in more than 28 academic disciplines. The university has a strong work ethic and shares common vision and values as a great team.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },
    {
      id: 173,
      pic: uet,

      name: "University of Bunair",
      description:
        "The University of Buner is a public sector university located in the Buner District of the Khyber Pakhtunkhwa province of Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 174,
      pic: uet,

      name: "University of Chitral",
      description:
        "University of Chitral is a public sector university located in the Chitral District of the Khyber Pakhtunkhwa province of Pakistan. The university was founded in 2017. It is being run by the provincial government.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 175,
      pic: uet,

      name: "University of Engineering & Technology",
      description:
        "The University of Engineering and Technology, Peshawar, formerly known as NWFP University of Engineering and Technology, is a public university located in Peshawar, Khyber Pakhtunkhwa, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 176,
      pic: uet,

      name: "University of Engineering & Technology (UET), Mardan",
      description:
        "University of Engineering & Technology Mardan (UET Mardan) was established on 7th March, 2018 by the Government of Khyber Pakhtunkhwa under the KPK",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 177,
      pic: uet,

      name: "University of Engineering and Applied Sciences, Swat",
      description:
        "The UEAS, Swat is an innovative initiative sponsored by Provincial Government of Khyber Pakhtunkhwa to internationalize higher education and to produce highly skilled human resource to cope with contemporary challenges.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 178,
      pic: uet,

      name: "University of FATA",
      description:
        "FATA University is a public sector university situated in Akhorwal, Tribal Sub-Division Darra Adam Khel, Kohat, Khyber Pakhtunkhwa, Pakistan. The university is run by the Higher Education Department, Government of Khyber Pakhtunkhwa.",

      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 179,
      pic: uet,

      name: "University of Haripur",
      description:
        "The University of Haripur is a public university situated in Haripur, Khyber Pakhtunkhwa, Pakistan. UoH offers a wide range of undergraduate and graduate programs in various disciplines, including business administration, computer science and social sciences",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 180,
      pic: uet,

      name: "University of Lakki Marwat",
      description:
        "University of Lakki Marwat is a public sector university located at Lakki Marwat town of Khyber Pakhtunkhwa in Pakistan. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 181,
      pic: uet,

      name: "University of Malakand",
      description:
        "The University of Malakand is a Public Sector University located in the Lower Dir District of Khyber Pakhtunkhwa, Pakistan. Founded in 2001, the university offers undergraduate and postgraduate programmes in various academic disciplines.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 182,
      pic: uet,

      name: "University of Peshawar",
      description:
        "The University of Peshawar is a public research university located in Peshawar, Khyber Pakhtunkhwa, Pakistan. The university is one of the oldest universities in the province, and is ranked as one of the highest rated universities in the country.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 183,
      pic: uet,

      name: "University of Science & Technology",
      description:
        "The University of Science & Technology Bannu is a public university located in the rural area of Bannu District, Khyber-Pakhtunkhwa, Pakistan. Established in 2005, the university offers undergraduate, post-graduate, and doctoral programmes in engineering, social and natural sciences, arts, and humanities.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 184,
      pic: uet,

      name: "University of Swabi",
      description:
        "University Of Swabi, is a public sector university situated in Anbar, Swabi in Khyber Pakhtunkhwa, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 185,
      pic: uet,

      name: "University of Swat",
      description:
        "The University of Swat is a public university. The main campus of the university is situated in the Charbagh area of the Swat District in the Khyber Pakhtunkhwa province of Pakistan. It is about 20 km away from the main city of Mingora.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 186,
      pic: uet,

      name: "Woman University Swabi",
      description:
        "Women University Swabi is a public university situated in Swabi, Khyber Pakhtunkhwa, Pakistan. The university is run by the provincial government and was founded in 2016",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 187,
      pic: uet,

      name: "Women University Mardan",
      description:
        "Women University Mardan is a public university situated in Mardan, Khyber Pakhtunkhwa, Pakistan. The university is run by the Government of Khyber Pakhtunkhwa and was founded in 2016. This university has played major role to increase the rate of higher education among women in the city of Mardan and adjoining areas. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 188,
      pic: uet,

      name: "Aga Khan University",
      description:
        "Aga Khan University is a not-for-profit institution and an agency of the Aga Khan Development Network. It was founded in 1983 as Pakistan's first private university. Starting in 2000, the university expanded to Kenya, Tanzania, Uganda, the United Kingdom and Afghanistan. AKU began life as a health-sciences university. ",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 189,
      pic: uet,

      name: "Air War College Institute, Karachi",
      description:
        "Air War College (AWC) Institute, Karachi is a higher  education institution established by Pakistan Air Force in 1958 previously known as PAF Staff College. It is located at PAF Faisal Base Karachi. Previously this institute was affiliated with Karachi University but Now, National Defence University (NDU). AWC Karachi allows admissions to personnel of Pakistan Air Force along with from Allied Countries including, Bangladesh, China, Egypt, Indonesia, Iran, Iraq, Jordan, Kenya, Kuwait, Libya, Malaysia, Nigeria, Qatar, Saudi Arabia, Sri Lanka, Syria, Turkey, United Arab Emirates and Yemen are regular participants of Air War course.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 190,
      pic: uet,

      name: "Al-Ghazali University",
      description:
        "Al-Ghazali University is a public university in Karachi founded by Jamia Tur Rasheed on 9 December 2022. Mufti Abdur Rahim is the founder and current chancellor. Zeeshan Ahmed is the vice-chancellor. The university is named after the 12th century scholar Imam Al-Ghazali.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 191,
      pic: uet,

      name: "Al-Kawthar University, Karachi",
      description:
        "Al-Kawthar University is established to bridge the gap in modern education by integrating Islamic principles with contemporary learning. Recognising the need for an institution that nurtures both intellectual and ethical development, a group of seasoned educationists with international experience have founded Al-Kawthar University.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 192,
      pic: uet,

      name: "Aror University of Art, Architecture, Design and Heritage, Sukkur",
      description:
        "The Aror University of Art, Architecture, Design and Heritage established near Sukkur at Rohri bypass N-5 National Highway in the vicinity of ancient historical town of Aror, once the capital of Sindh.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 193,
      pic: uet,

      name: "Baqai Medical University",
      description:
        "Baqai Medical University is a higher education institution located on M-9, Super Highway, Karachi, Pakistan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 194,
      pic: uet,

      name: "Begum Nustrat Bhutto Women University, Sukkur",
      description:
        "First ever public sector Women University in the Upper Sindh was established at Rohri, in the name of Begum Nusrat Bhutto by the government of Sindh through the act of parliament. Begum Nusrat Bhutto Women University is located at the National Highway N-5 bypassing Rohri city of Sukkur District.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 195,
      pic: uet,

      name: "Benazir Bhutto Shaheed University Lyari",
      description:
        "Benazir Bhutto Shaheed University Lyari, Karachi is a Public Degree Awarding Institution located at Lyari town, Karachi, Pakistan. It was established in 2010. Facilities like Gymnasium for sports, Auditorium for functions, Computer Labs, Library, Mosque, Canteen, Courtyard, etc. will be available.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 196,
      pic: uet,

      name: "Benazir Bhutto Shaheed University of Technology & Skill Development, Khairpur",
      description:
        "The Benazir Bhutto Shaheed University of Technology and Skill Development, also known as Government College of Technology Khairpur, is a public university located in Khairpur Mirs, Sindh, Pakistan.The Benazir Bhutto Shaheed University of Technology and Skill Development, also known as Government College of Technology Khairpur, is a public university located in Khairpur Mirs, Sindh, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 197,
      pic: uet,

      name: "Commecs Institute of Business & Emerging Sciences",
      description:
        "CIBES was the first institute in Pakistan to get BBA Program affiliation from IBA – the Institute of Business Administration Karachi in the Year 1995. This reflected the confidence and trust of IBA Karachi in the quality of business education provided at CIBES.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 198,
      pic: uet,

      name: "Dadabhoy Institute of Higher Education",
      description:
        "The Dadabhoy Institute of Higher Education (DIHE) was established in 2003, and received its charter as a degree awarding institute from the Government of Sindh, Pakistan through an act of Sindh Assembly. On the basis of its well designed academic programs, well qualified teaching faculty and state-of-art facilities; in 2005, DIHE was placed in the W ‘A’ category by the Higher Education Commission. DIHE aspires to integrate academic excellence in different areas of studies to ensure unique educational experience. It incorporates the value based education system and best academic practices along with various technical as well as cultural initiatives in all the programs being offerd.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 199,
      pic: uet,

      name: "Dawood University of Engineering & Technology",
      description:
        "The Dawood University of Engineering and Technology is a public university located in Karachi, Sindh, Pakistan. It was established by Seth Ahmed Dawood and is named after him.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 200,
      pic: uet,

      name: "DHA Suffa University",
      description:
        "DHA Suffa University is a non-profit private sector university named after Suffah of Masjid-e-Nabwi. It is located in the Phase VII of Defence Housing Authority, Karachi, in Sindh, Pakistan. The university received its Charter in 2002 and started operations in 2012.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 201,
      pic: uet,

      name: "DOW University of Health Sciences",
      description:
        "The Dow University of Health Sciences is a public medical university located in the Urban metropolitan area of Karachi, Sindh, Pakistan. It was founded by Sir Hugh Dow, the then Governor of Sindh, in 1945",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 202,
      pic: uet,

      name: "Emaan Institute of Management & Sciences, Karachi",
      description:
        "EMAAN INSTITUTE OF MANAGEMENT & SCIENCES (EIMS) has been established through a Legislative Act of the Sindh Assembly (Sindh Act No: XXXV of 2018) and is approved and recognized by the Higher Education Commission (HEC) as Degree Awarding Institute in 2019. Emaan Institute Of Management & Sciences has been established for creating leaders and developing the best professionals in every arena of life. It is our motto to impart the best quality education to the people of Pakistan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 203,
      pic: uet,

      name: "Gambat Institute of Medical Sciences",
      description:
        "Pir Abdul Qadir Shah Jeelani Institute of Medical Sciences also known as Gambat Institute of Medical Sciences, is a medical college located in Gambat, Khairpur District, Sindh, Pakistan. It was established in 2012 and is affiliated with the Shaheed Mohtarma Benazir Bhutto Medical University in Larkana, Sindh.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 204,
      pic: uet,

      name: "Government College University, Hyderabad",
      description:
        "The Government College University Hyderabad is a public university located in Hyderabad, Sindh, Pakistan. Government College University Hyderabad is one of Pakistan's oldest and prime educational institutions.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 205,
      pic: uet,

      name: "University of Greenwich",
      description:
        "The University of Greenwich is a public university located in London and Kent, United Kingdom. Previous names include Woolwich Polytechnic and Thames Polytechnic. The university's main campus is at the Old Royal Naval College, which along with its Avery Hill campus, is located in the Royal Borough of Greenwich.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 206,
      pic: uet,

      name: "Habib University",
      description:
        "Habib University is a university for Liberal arts education located in Karachi. Funded by the House of Habib, the Habib University Foundation was established in 2010, and was chartered in 2012 as an independent university.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 207,
      pic: uet,

      name: "Hamdard University",
      description:
        "Hamdard University is a private research university with campuses in Karachi and Islamabad, Pakistan. It was founded in 1991 by the philanthropist Hakim Said of the Hamdard Foundation.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 208,
      pic: uet,

      name: "Hands Institute of Development Studies, Karachi",
      description:
        "The HANDS IDS is envisioned as an institution with a steadfast commitment to nation building and unflinching adherence to universal human values, encapsulated in its Tagline: “Learning, Practicing and Developing”. ",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 209,
      pic: uet,

      name: "IBA-e-Sina University, Mirpurkhas",
      description:
        "Muhammad Medical College is located just outside Mirpurkhas (6 km from Zero point) on Hyderabad road. This is opposite Ratanabad Railway station near main bus stand. It spreads over 40 acres owned by Muhammad Foundation Trust for its projects. All necessary facilities including building, gas, electricity, telephone, e-mail. Internet, transport, accommodation, food and drink spots are available. Public transport operating along Hyderabad road provides frequent and regular access to the college. ",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 210,
      pic: uet,

      name: "ILMA University",
      description:
        "Ilma University, is a private, independent university located in Karachi, Sindh, Pakistan. Formerly Institute of Business Technology, it was elevated to university status in May 2017 by legislation passed by the Provincial Sindh Assembly as a judicial Act of Sindh vide Sindh Act # XIX of 2017.Ilma University, is a private, independent university located in Karachi, Sindh, Pakistan. Formerly Institute of Business Technology, it was elevated to university status in May 2017 by legislation passed by the Provincial Sindh Assembly as a judicial Act of Sindh vide Sindh Act # XIX of 2017.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 211,
      pic: uet,

      name: "Indus University",
      description:
        "Indus University, formerly Indus Institute of Higher Education, is a university in Pakistan. It is chartered by the government of Sindh and ranked with the top most category 'W' by the Higher Education Commission of Pakistan. In 2013 CIEC of Pakistan placed Indus University in list of 5 Star Universities of Pakistan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 212,
      pic: uet,

      name: "Indus Valley School of Art & Architecture",
      description:
        "Indus Valley School of Art and Architecture is a not-for-profit degree awarding institution in Karachi, Sindh, Pakistan. The university was established in 1989, thereby empowering it to award its own degrees and was the fourth private institution of higher learning in Pakistan to be given a university status.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 213,
      pic: uet,

      name: "Institute of Business Administration",
      description:
        "The Institute of Business Administration, Karachi; is a public university in Karachi, Sindh, Pakistan. IBA is owned by Government of Sindh. Established initially as a business school, the IBA has expanded to include programs in Computer Science, Social Sciences and more.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 214,
      pic: uet,

      name: "Institute of Business Management",
      description:
        "The Institute of Business Management is a private university and business school in Karachi, Pakistan. IoBM is composed of four colleges, the College of Business Management, the College of Economics and Social Development, the College of Computer Science and Information Systems and the College of Engineering Sciences.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 215,
      pic: uet,

      name: "Iqra University",
      description:
        "Iqra University, is a Private University primarily with its main campus located in the Defence View area of Karachi, Pakistan. It has additional campuses in other parts of the city, in Islamabad and Peshawar.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 216,
      pic: uet,

      name: "Isra University",
      description:
        "Isra University is a private university, legislated by the Isra University Act of 1997 [Sindh Act No. V of 1997], located in Hyderabad, Sindh, Pakistan. It is a non-profit organization owned by the Isra Islamic Foundation and certified by the Pakistan Centre for Philanthropy.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 217,
      pic: uet,

      name: "Jinnah Sindh Medical University",
      description:
        "Jinnah Sindh Medical University, formerly known as Sindh Medical College, is a medical university in Karachi, Sindh, Pakistan. It gained university status in June 2012. It currently has 11 constituent institutes and 35 Affiliated institutes.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 218,
      pic: uet,

      name: "Jinnah University for Women",
      description:
        "The Jinnah University for Women is a private research university in Karachi, Sindh, Pakistan. It is an all-woman university and is the first women's university in the country. Established as a post-graduate college, its status as full-fledged university was upgraded in 1998 the Sindh Assembly. ",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 219,
      pic: uet,

      name: "Karachi Institute of Economics & Technology",
      description:
        "PAF Karachi Institute of Economics and Technology was established in 1997. PAF KIET received recognition by the Higher Education Commission vide letter no. 15-22/UGC-SEC/97/1291 dated 1 August 1998. HEC ranks KIET as 8th best university in Business/IT category.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 220,
      pic: uet,

      name: "Karachi Institute of Technology and Entrepreneurship (KITE), Karachi",
      description:
        "The Karachi Institute of Technology and Entrepreneurship (KITE) is a young, dynamic, degree granting institution of higher learning, located in Karachi. KITE’s mission is to craft and cultivate entrepreneurs and change agents using its unique interdisciplinary undergraduate programs, while also nurturing other requisite aspects of the entrepreneurial ecosystem in the city and the country.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 221,
      pic: uet,

      name: "Karachi School of Business and Leadership",
      description:
        "The Karachi School of Business and Leadership is an independent graduate business school located in Karachi, Sindh, Pakistan. Established through a strategic collaboration between Karachi Education Initiative and the Cambridge Judge Business School, the school was established in 2009.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 222,
      pic: uet,

      name: "KASB Institute of Technology ",
      description:
        "Khadim Ali Shah Bukhari Institute of Technology is a private degree-awarding institution in Karachi, Pakistan. It was established in September 1999, through registration with Securities and Exchange Commission of Pakistan, Government of Pakistan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 223,
      pic: uet,

      name: "Liaquat University of Medical & Health Sciences",
      description:
        "The Liaquat University of Medical and Health Sciences is a public medical university located in Jamshoro, Sindh, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 224,
      pic: uet,

      name: "Malir University of Science & Technology, Karachi",
      description:
        "MALIR UNIVERSITY OF SCIENCE & TECHNOLOGY IS AN EXTENSION OF THE VENTURE OF ZAFAR & ATIA FOUNDATION CHARITABLE TRUST TO PROVIDE QUALITY UNIVERSITY-LEVEL EDUCATION TO THE RURAL COMMUNITY THAT HAS NO ACCESS TO HIGH-LEVEL EDUCATION IN THEIR AREA. MALIR UNIVERSITY PROVIDES FREE OF COST UNDERGRADUATE EDUCATION.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 225,
      pic: uet,

      name: "Mehran University of Engineering & Technology",
      description:
        "Mehran University of Engineering & Technology is a public research university located in Jamshoro, Sindh, Pakistan focused on STEM education. Established in July 1976, as a campus of the University of Sindh, and a year later was chartered as an independent university. The academician S.M.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 226,
      pic: uet,

      name: "Metropolitan University Karachi",
      description:
        "The Metropolitan University Karachi is the new addition to the education world of Pakistan. Founded in 2014 as an independent private institution, to provide a comprehensive education in the fields of business, and computer science starting from graduation to Ph.D. program.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 227,
      pic: uet,

      name: "Millennium Institute of Technology and Entrepreneurship, Karachi",
      description:
        "MiTE is approved by Government of Sindh and is recognized by both provincial and federal regulatory bodies (Higher Education Commission) of Pakistan. MiTE is an institution of higher learning, dedicated to providing innovative graduate programmes in Business Administration, Engineering and Computational Sciences, and Art and Design.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 228,
      pic: uet,

      name: "Muhammad Ali Jinnah University",
      description:
        "The Mohammad Ali Jinnah University, abbreviated as MAJU is a private university located in Karachi, Sindh, Pakistan. Established in 1998, the university offers undergraduate and post-graduate programs with a strong emphasis on business management, applied sciences, engineering and computer science.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 229,
      pic: uet,

      name: "NED University of Engineering & Technology",
      description:
        "The NED University of Engineering & Technology is a public university located in the urban area of Karachi, Sindh, Pakistan. It is one of the oldest engineering universities in Pakistan, acknowledged for its best teaching practices and graduates.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 230,
      pic: uet,

      name: "Newport Institute of Communications & Economics",
      description:
        "Newports Institute of Communications & Economics, chartered by the Government of Sindh and recognized by the Higher Education Commission of Pakistan, is dedicated to nurturing the leaders of tomorrow through a diverse range of academic programs.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 231,
      pic: uet,

      name: "Pakistan Naval Academy",
      description:
        "The Pakistan Naval Academy, PNS Rahbar, Manora is a federal military academy located in Manora, Karachi, Sindh, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 232,
      pic: uet,

      name: "Peoples University of Medical & Health Sciences for Women",
      description:
        "The People’s University of Medical and Health Sciences for Women is a public medical university located in Shaheed Benazirabad District, Sindh, Pakistan. It is the first women’s medical university in Sindh. The University is affiliated with People’s Medical University Hospital and NORIN Cancer Hospital.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 233,
      pic: uet,

      name: "Preston Institute of Management, Science & Technology",
      description:
        "Preston Institute of Management Science and Technology, received charter by the orders of Governor Province of Sindh, Pakistan vide Ordinance No. XXVI of 2001, under section 6(1) of the said ordinance, honorable Governor of Sindh is the Patron of this institute, and it is recognized by the Higher Education Commission Government of Pakistan vide letter No. 16-18/HEC/A&A/2005/1178, dated December 28, 2005. PIMSAT is also Accredited by the Pakistan Engineering Council Established under ACT No. V OF 1976, by the Govt. of Pakistan. PIMSAT is also Affiliated with Sindh Board of Technical Education. Under Section 12 (2) (IV) of the Principal Ordinance 1970.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 234,
      pic: uet,

      name: "Preston University, Karachi",
      description:
        "At Preston University, we pride ourselves on fostering a dynamic learning environment where innovation, creativity, and critical thinking thrive. Our dedicated faculty, cutting-edge programs, and state-of-the-art facilities are here to support you on your journey toward academic and personal success.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 235,
      pic: uet,

      name: "Quaid-e-Awam University of Engineering, Science & Technology",
      description:
        "The Quaid e Awam University of Engineering, Sciences & Technology often referred as 'QUEST' is a public technical and research university located in the urban neighborhood of Nawabshah, Sindh, Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 236,
      pic: uet,

      name: "Saifee Burhani University, Karachi",
      description:
        "Saifee Burhani University (SBU) is dedicated to preserving and promoting the rich intellectual and cultural heritage of the Fatimid dynasty. Our commitment to education, intellect, and architectural restoration reflects our mission to foster socioeconomic development. Led by Chancellor Dr. Syedna Mufaddal Saifuddin, we continue to uphold the legacy of the Fatimid dynasty at SBU. Join us in exploring this remarkable heritage and embark on a journey of enlightenment and cultural appreciation. Visit us today to experience the legacy of the Fatimid dynasty firsthand",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 237,
      pic: uet,

      name: "Salim Habib University (Former Barret Hodgson University), Karachi",
      description:
        "The Salim Habib University formerly known as Barrett Hodgson University is a private university located in Karachi, Sindh, Pakistan. It was established in 2016. It offers multiple courses in Engineering, Management Sciences and Life Sciences.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 238,
      pic: uet,

      name: "Shah Abdul Latif University",
      description:
        "Shah Abdul Latif University, is a public research university in Khairpur, Pakistan. The university is named after the mystic poet and spiritualist Shah Abdul Latif Bhittai. The university also maintains teaching campuses in Shahdadkot and Ghotki.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 239,
      pic: uet,

      name: "Shaheed Allah Buksh Soomro University of Arts, Design and Heritages, Jamshoro",
      description:
        "Shaheed Allah Buksh Soomro University of Art, Design and Heritages, Jamshoro, Sindh, Pakistan is the only University of Art, Design and Heritages in Pakistan. This University is made by Government of Sindh Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 240,
      pic: uet,

      name: "Shaheed Benazir Bhutto City University",
      description:
        "Shaheed Benazir Bhutto City University or SBBCU is a private degree awarding Institution located in Karachi, Pakistan. The University was established in 2013.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 241,
      pic: uet,

      name: "Shaheed Benazir Bhutto Dewan University",
      description:
        "The Shaheed Benazir Bhutto Dewan University is a private university located in Karachi, Sindh, Pakistan. The university was established in 2013 It is recognized by the Higher Education Commission. SBBDU is a part of Yousuf Dewan Companies. ",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 242,
      pic: uet,

      name: "Shaheed Benazir Bhutto University, Shaheed Benazirabad",
      description:
        "Shaheed Benazir Bhutto University, Shaheed Benazirabad, an emerging public sector university in the center of rural Sindh Province, is fully charted University Established through legislative act of the Sindh Assembly [ Sindh Act No. XIX of 2010 ] and is funded by Higher Education Commission, Pakistan. A Premier Institution of Learning,Teaching and Research Shaheed Benazir Bhutto University aims at promoting quality academic and professional programs covering all dimensions of education. The focus of the University is on the social, business and basic sciences.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 243,
      pic: uet,

      name: "Shaheed Mohtarma Benazir Bhutto Medical University",
      description:
        "Shaheed Mohtarma Benazir Bhutto Medical University is a public university of medicine, nursing, pharmacy and allied health sciences. It was established on July 9, 2009. It is located in Larkana, Sindh, Pakistan. The university is named after Benazir Bhutto who was twice the Prime Minister of Pakistan.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },
    {
      id: 244,
      pic: uet,

      name: "Shaheed Zulfikar Ali Bhutto Institute of Science & Technology",
      description:
        "SZABIST is a multi-campus private university with campuses in various major cities of Pakistan and the United Arab Emirates. Its main campus is located in Karachi, Sindh, Pakistan. ",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 245,
      pic: uet,

      name: "Shaheed Zulfiqar Ali Bhutto University of Law",
      description:
        "The Shaheed Zulfiqar Ali Bhutto University of Law is a Public University situated in Karachi, Sindh, Pakistan. SZABUL has unique privilege to be the first ever Law University in Pakistan. It is recognized by the Higher Education Commission and Pakistan Bar Council.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      category: "Law",
    },
    {
      id: 246,
      pic: uet,

      name: "Shaheed Benazir Bhutto University of Veterinary & Animal Sciences",
      description:
        "The main Campus of the Shaheed Benazir Bhutto Veterinary And Animal Science University was located in Sakrand City, district Shaheed Benazirabad. Recently government plan to upgrade it but land can't available in the surrounding area then government shifting or establishing it in new area out of city near Aliabad Cadet College Road Nawabshah.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 247,
      pic: uet,

      name: "Sindh Agriculture University, Tandojam",
      description:
        "Sindh Agriculture University, is a Pakistani university located in Tando Jam town of Hyderabad, on Hyderabad-Mirpurkhas highway. It is about 200 km from Karachi airport linked with Super Highway to Hyderabad.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 248,
      pic: uet,

      name: "Sindh Institute of Medical and Allied Sciences, karachi",
      description:
        "Sindh Institute of Medical and Allied Sciences will provide you a variety of possibilities for growing and learning during the upcoming years.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 249,
      pic: uet,

      name: "Sindh Institute of Management & Technology",
      description:
        "Sindh Institute of Management & Technology (SIMT), is chartered by Government of Sindh as Degree Awarding Institute under the Act XIV of March 2015 and recognized by the Higher Education Commission, Islamabad…",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 250,
      pic: uet,

      name: "Sindh Madressatul Islam University",
      description:
        "Sindh Madressatul Islam University is a university in Karachi, Sindh, Pakistan. Founded in 1885, it is one of the oldest educational institutions in South Asia.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },

    {
      id: 251,
      pic: uet,

      name: "Sir Syed University of Engineering & Technology",
      description:
        "Sir Syed University of Engineering and Technology is a private research university located in the urban area of Karachi, Sindh, Pakistan. The university is honored in the name of notable 19th-century Indian Muslim reformer and philosopher, Sir Syed Ahmad Khan.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 252,
      pic: uet,

      name: "Sohail University, Karachi",
      description:
        "Sohail University was established under the auspices of S.M. Sohail Trust through a bill passed by the Provincial Assembly  of sindh under the Sohail University Act 2017, Sindh Act No: XIII of 2018 on  May 9th 2018. Though we are a new University, however our constituent institutions the Jinnah Medical and Dental College and Jinnah College of Nursing were established in 1998-99 and 2009 respectively. These institutions enjoy high reputation for the quality of innovative teaching and clinical training in our attached well equipped hospitals. So far we have produced 1100 MBBS, 600 BDS and 338 Nursing graduates who are fulling the need of society in health care.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 253,
      pic: uet,

      name: "Sukkur Institute of Business Administration",
      description:
        "The Sukkur IBA University is a higher education institute in Sukkur, Pakistan. It was founded in 1994 by Nisar Ahmed Siddiqui. University is a public sector degree-awarding institute chartered by the Government of Sindh and recognized by the Higher Education Commission.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 254,
      pic: uet,

      name: "Textile Institute of Pakistan",
      description:
        "The Textile Institute of Pakistan is a private institute in Karachi, Sindh, Pakistan. The Institute was established by the All Pakistan Textile Mills Association in 1994 to create textile professionals to support Pakistan's textile industry.",
      location: "Karachi",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 255,
      pic: uet,

      name: "The Nazeer Hussain University",
      description:
        "Nazeer Hussain University is a private university located in Karachi, Sindh, Pakistan. It was established in 2013.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 256,
      pic: uet,

      name: "The Shaikh Ayaz University, Shikarpur Sindh",
      description:
        "Shaikh Ayaz University is a public university funded by the Government of Sindh in Shikarpur, Sindh, Pakistan. It was founded in 2018 and was named after renowned Sindhi poet Shaikh Ayaz. Former campus of Shah Abdul Latif University. ",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 257,
      pic: uet,

      name: "The Sindh Institute of Physical Medicine and Rehabilitation, Karachi",
      description:
        "Sindh Institute of Physical Medicine and Rehabilitation (formerly IPM&R) was established in 2007 for multi-disciplinary rehabilitation of disabilities.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 15,
    },
    {
      id: 258,
      pic: uet,

      name: "UIT University, Karachi",
      description:
        "UIT University is a not-for profit institute. UIT university's campus is located at the intersection of University Road and Abul Hasan Isphahani Road, Gulshan-e-Iqbal, Karachi, Pakistan. On December 18, 2021, the inauguration ceremony took place, officiated by the Governor of Sindh, Imran Ismail.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 259,
      pic: uet,

      name: "University of Art and Culture, Jamshoro",
      description:
        "Welcome to the University of Art and Culture, Jamshoro – where creativity meets excellence. Established under the SINDH ACT NO.XVI OF 2018, we are a non-profit institution dedicated to fostering artistic and technical education in fields like art, craft, design, architecture, theatre, film, research, and various trades. Our commitment to quality, diversity, and equal opportunity is at the core of everything we do. Join us in shaping a brighter future through the power of art and innovation.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 260,
      pic: uet,

      name: "University of Karachi",
      description:
        "The University of Karachi is a public research university located in Karachi, Sindh, Pakistan. Established in June 1951 by an act of Parliament and as a successor to the University of Sindh, the university is a Sindh Government University and designed by Mohsin Baig as its chief architect.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 261,
      pic: uet,

      name: "University of Modern Sciences, Tando Muhammad Khan",
      description:
        "The University of Modern Sciences (TUMS) is a leading private sector university in Pakistan, providing modern teaching and research facilities. Our institution offers well-equipped classrooms, advanced laboratories, and a vast library collection with online access to books and journals, fostering a robust learning environment.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 262,
      pic: uet,

      name: "University of Sindh",
      description:
        "The University of Sindh, the oldest University of the country, was constituted under the University of Sindh Act. No. XVII of 1947 passed by the Legislative Assembly of Sindh. The Act was subsequently revised and modified in 1961 and later.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 263,
      pic: uet,

      name: "University of Sufism and Modern Sciences, Bhitshah Sindh",
      description:
        "University of Sufism and Modern Sciences is a public university funded by the Government of Sindh in Bhit Shah, Sindh, Pakistan. It was founded in 2011 to promote education and research in Sufism and build Sufi studies as an academic subject in Sindh and to connect traditional education of Sufism with modern sciences.",

      Sector: "Public",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 264,
      pic: uet,

      name: "Zia-ud-Din University",
      description:
        "The Ziauddin University is a private university located in Karachi, Sindh, Pakistan. The university is named after the educationist, Ziauddin Ahmad.",

      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    }, // Add more data here...
  ];

  useEffect(() => {
    // Initialize data and filteredArray
    setData(array);
    setFilteredArray(array);

    // Set the search text if a category is provided
    if (category) {
      setFilterText(category.toLowerCase());
    }
  }, [category]);

  useEffect(() => {
    // Filter functionality
    if (filterText.trim() === "") {
      setFilteredArray(data); // Reset to original data if search is cleared
    } else {
      const results = data.filter((item) => {
        const searchTerm = filterText.toLowerCase();
        return (
          (item.name && item.name.toLowerCase().includes(searchTerm)) ||
          (item.description &&
            item.description.toLowerCase().includes(searchTerm)) ||
          (item.Ranking && item.Ranking.toLowerCase().includes(searchTerm)) ||
          (item.Sector && item.Sector.toLowerCase().includes(searchTerm)) ||
          (item.Field && item.Field.toLowerCase().includes(searchTerm))
        );
      });
      setFilteredArray(results);
    }
  }, [filterText, data]);

  // Handle image click
  const handleImageClick = (id) => {
    navigate(`/university/${id}`);
  };

  // Handle "Learn More" click
  const handleLearnMoreClick = (id) => {
    navigate(`/university/${id}`);
  };

  return (
    <>
      <h1 className="p-4 my-10 text-2xl font-bold font-body">
        {filteredArray.length} Results for "{filterText}"
      </h1>
      <div className="w-[100%] flex gap-4 p-4">
        <div className="w-[30%]">
          <Filter
            filteredArray={data} // Pass original data
            setFilteredResults={setFilteredArray} // Corrected to match Filter's expected prop
          />
        </div>
        <div className="flex flex-col">
          {filteredArray.map((item) => (
            <div key={item.id} className="flex gap-3 p-4 my-2">
              <div>
                <div
                  className="h-[160px] w-[260px] cursor-pointer"
                  onClick={() => handleImageClick(item.id)}
                >
                  <img
                    src={item.pic}
                    alt=""
                    className="h-[100%] w-[100%] object-cover object-center hover:opacity-80"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <h2 className="text-lg">
                      <b>{item.name}</b>
                    </h2>
                    <span className="text-gray-500">{item.Ranking}</span>
                  </div>
                  <p className="my-2">{item.description}</p>
                  <p className="text-gray-500">
                    Total Departments: <span>({item.Dept})</span>
                  </p>
                  <p className="text-gray-500">
                    Sector: <span>{item.Sector}</span>
                  </p>
                  <button
                    onClick={() => handleLearnMoreClick(item.id)}
                    className="mt-2 text-blue-500 underline"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
          <hr className="mx-4 my-2 border border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default SearchCom;
