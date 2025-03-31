import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstants {

  readonly CURRENT_YEAR = new Date().getFullYear();

  readonly MY_FIRST_NAME = "Srđan";
  readonly MY_LAST_NAME = "Ristić";
  readonly MY_LOGO = "logo.png";
  readonly MY_IMAGE = "portrait-hero.png";
  readonly MY_TITLE = "Software Engineer";
  readonly MY_EMAIL = "srdanristic2@gmail.com";
  readonly MY_PHONE = "318-944-1294";
  readonly MY_RESUME = "Srdan_Ristic_Resume.pdf";
  readonly MY_ABOUT_ME_IMAGE = "srdan_ristic_portrait.png";
  readonly MY_WEBSITE = "srdanristic.com";

  readonly MY_GITHUB = "https://github.com/ristics18";
  readonly MY_LINKEDIN = "https://www.linkedin.com/in/srdan-ristic";
  readonly MY_STACKOVERFLOW = "https://stackoverflow.com/users/2687059/srdan-ristic";
  readonly MY_INSTAGRAM = "https://www.instagram.com/srdjan__ristic";
  readonly MY_FACEBOOK = "https://www.facebook.com/srdjan.ristic.surge";

  readonly STATISTICS = [
    {
      StatisticName: "Years of Experience",
      Statistic: this.CURRENT_YEAR - 2018,
      StatisticIcon: "counterup-icon-3.png",
      StatisticSymbol: "+"
    },
    {
      StatisticName: "Stack Overflow Reach",
      Statistic: 620, //620k
      StatisticIcon: "counterup-icon-1.png",
      StatisticSymbol: "k+"
    },
    {
      StatisticName: "Projects Complete",
      Statistic: 20, //20+
      StatisticIcon: "counterup-icon-2.png",
      StatisticSymbol: "+"
    }
  ];

  readonly EXPERIENCES = [
    {
      ExperienceName: "Software Development Team Lead",
      ExperienceCompany: "RedSail Technologies (PioneerRx)",
      ExperienceLink: "https://www.redsailtechnologies.com/",
      ExperienceDate: "2023 - " + this.CURRENT_YEAR,
      ExperienceDesc: "I am leading a team of five offshore developers, balancing technical and project management responsibilities to ensure the success of key initiatives. My role also involves collaborating closely with senior management and other team leads, contributing to the company's long-term goals and innovative strategies."
    },
    {
      ExperienceName: "Software Developer",
      ExperienceCompany: "PioneerRx",
      ExperienceLink: "https://www.pioneerrx.com/",
      ExperienceDate: "2018 - 2023",
      ExperienceDesc: "Developed desktop application for independent pharmacies using C# and SQL technologies. My main focus was on the implementation of data synchronization processes between pharmacies. I was also involved in the Azure DevOps CI/CD development."
    },
    {
      ExperienceName: "Graduate Research Assistant",
      ExperienceCompany: "Louisiana State University Shreveport",
      ExperienceLink: "https://www.lsus.edu/",
      ExperienceDate: "2017 - 2018",
      ExperienceDesc: "Worked on variety of biomedical informatics projects. With the use of powerful computers, I learned and worked on managing and analyzing biological, chemical, and medical processes in the interest of improving medicine and patient care. I frequently collaborated with doctors regarding the data analysis."
    },
    {
      ExperienceName: "Intern Software Developer",
      ExperienceCompany: "Benetech Corporation",
      ExperienceLink: "",
      ExperienceDate: "2015 - 2016",
      ExperienceDesc: "Mostly spent time learning and acquiring new skills using various programming technologies. Worked on development and maintenance of the systems for content management, using technologies such as Java, Spring, REST, SQL, Alfresco, CMIS and AngularJS. I communicated with clients on a daily bases regarding the improvement of the system."
    }
  ];

  readonly EDUCATIONS = [
    {
      EducationName: "Master's in Computer System Technology",
      EducationUniversity: "Louisiana State University Shreveport",
      EducationLink: "https://www.lsus.edu/",
      EducationDate: "2017 - 2018",
      EducationDesc: "Attended LSUS for a year and a half and achieved the completion of Master's degree in CST. Worked on variety of projects, including: Capstone Project (Android app), PHP web applications, data analysis/research, Python development (web and research) etc."
    },
    {
      EducationName: "Bachelor's in Information Technology",
      EducationUniversity: "University Metropolitan",
      EducationLink: "https://www.metropolitan.ac.rs/en/home/",
      EducationDate: "2012 - 2016",
      EducationDesc: "Pursued and achieved my Bachelor's degree in Belgrade, Serbia. This was my starting point in the software development career. Worked on many Java and Web based projects. My capstone project was research based, with the intent to analyze data acquired from Twitter (using Twitter real-time API) from the 2016 Olympics in Rio."
    },
    {
      EducationName: "High School",
      EducationUniversity: "First Sports High School in Belgrade",
      EducationLink: "https://www.koledz-beograd.edu.rs/language/en/home/",
      EducationDate: "2008 - 2012",
      EducationDesc: "Attended First Sports High School in Belgrade, Serbia, where my main focus besides school was basketball. I also traveled to Raymond, IL as an exchange student in 2010, where I completed Junior Year of High School."
    }
  ];

  readonly SKILLS = [
    {
      skillTitle: "Frontend",
      skillImage: "service-icon-2.png",
      skills: [
        {
          skillName: "HTML/CSS"
        },
        {
          skillName: "Bootstrap"
        },
        {
          skillName: "Angular"
        },
        {
          skillName: "Javascript/Typescript"
        },
        {
          skillName: "Security"
        }
      ]
    },
    {
      skillTitle: "Backend",
      skillImage: "service-icon-1.png",
      skills: [
        {
          skillName: "C#"
        },
        {
          skillName: "ASP.NET"
        },
        {
          skillName: "Java"
        },
        {
          skillName: "NodeJS"
        },
        {
          skillName: "SQL/PostgreSQL"
        }
      ]
    },
    {
      skillTitle: "Cloud",
      skillImage: "service-icon-4.png",
      skills: [
        {
          skillName: "Azure/AWS"
        },
        {
          skillName: "Docker/Kubernetes"
        },
        {
          skillName: "Azure Service Bus"
        },
        {
          skillName: "Architecture"
        },
        {
          skillName: "Security"
        }
      ]
    },
    {
      skillTitle: "DevOps",
      skillImage: "service-icon-5.png",
      skills: [
        {
          skillName: "Git/TFS"
        },
        {
          skillName: "CI/CD"
        },
        {
          skillName: "PowerShell"
        },
        {
          skillName: "Agents"
        },
        {
          skillName: "Security"
        }
      ]
    },
    {
      skillTitle: "Leadership",
      skillImage: "service-icon-3.png",
      skills: [
        {
          skillName: "Team Lead"
        },
        {
          skillName: "Project Manager"
        },
        {
          skillName: "Product Delivery"
        },
        {
          skillName: "Team Collaboration"
        },
        {
          skillName: "Agile/Kanban"
        }
      ]
    }
  ];

  readonly AWARDS = [
    {
      AwardName: "Forward-Thinking Award",
      AwardOrg: "RedSail Technologies",
      AwardDesc: "Srđan is our 2024 Annual FORTE Award Winner! His award is for Forward-Thinking!",
      AwardLink: "https://drive.google.com/file/d/1SQNCkKuZrj_9SlUB9k7d62jzsbLuywVP/view"
    },
    {
      AwardName: "Outstanding Student Award",
      AwardOrg: "LSU Shreveport",
      AwardDesc: "University award presented to Srđan for outstanding academic achievements in Computer Systems Technology.",
      AwardLink: "https://drive.google.com/file/d/1t7oczVsPBzQouz63hWJZfFhe97CrBVFp/view"
    }
  ]

  readonly CERTIFICATIONS = [
    {
      CertImage: "azure-fundamentals-cert.png",
      CertLink: "https://www.credly.com/badges/db97c9d0-8434-4342-b6cf-24f83768d1b7"
    },
    {
      CertImage: "developer-associate-cert.png",
      CertLink: "https://www.youracclaim.com/badges/c6050a5e-126c-4848-8f87-e3f4367f857d?source=linked_in_profile"
    },
    {
      CertImage: "cloud-practitioner-cert.png",
      CertLink: "https://www.youracclaim.com/badges/712e83a4-69ef-48b6-853a-17f60e58bf54?source=linked_in_profile"
    },
    {
      CertImage: "microsoft-cert.png",
      CertLink: "https://www.youracclaim.com/badges/8ba16afe-0be6-42dc-bc8e-60441ea37c97/linked_in_profile"
    },
    {
      CertImage: "medical-publication.png",
      CertLink: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6117539/"
    },
    {
      CertImage: "oracle-cert.png",
      CertLink: "https://www.youracclaim.com/badges/b0610484-16e7-43c4-af31-851ebfc2c002/linked_in_profile"
    }
  ];

  readonly PROJECTS = [
    {
      ProjectId: 1,
      ProjectName: 'Pharmacy Management Software',
      ProjectDesciption: 'Initially joining PioneerRx as a Software Developer, I progressed to the role of Software Development Team Lead. Presently, I spearhead an offshore team comprising five skilled developers. Our primary objective is to enhance and construct a robust, fail-safe application tailored for independent pharmacies, ensuring superior performance and reliability.',
      ProjectDate: '2018 - Present',
      ProjectImage: 'work.png',
      ProjectImageTech: '',
      ProjectStatus: 'In Progress',
      ProjectPurpose: 'Purpose',
      ProjectContributions: 'Contributions',
      ProjectLiveViewLink: '',
      ProjectCategory: 'other', // web, mobile, talks, research, courses, other
      ProjectReferences: [
        {
          ProjectReferenceName: 'RedSail Technologies',
          ProjectReferenceLink: 'https://www.redsailtechnologies.com/'
        },
        {
          ProjectReferenceName: 'PioneerRx',
          ProjectReferenceLink: 'https://www.pioneerrx.com/'
        },
      ],
      ProjectTechnologies:[
        {
          TechnologyName: 'C#'
        },
        {
          TechnologyName: '.NET'
        },
        {
          TechnologyName: 'Angular'
        },
        {
          TechnologyName: 'Git'
        },
        {
          TechnologyName: 'SQL Server'
        },
        {
          TechnologyName: 'Azure Cloud'
        },
        {
          TechnologyName: 'Powershell'
        },
        {
          TechnologyName: 'DevOps'
        },
      ]
    },
    {
      ProjectId: 2,
      ProjectName: 'MetTalks',
      ProjectDesciption: 'I was invited to be a guest speaker at the MetTalks event. This event was organized by University Metropolitan, which is the university where I graduated with my Bachelors Degree in IT. Topic of discussion was Studying in Serbia vs studying in foreign countries. I was honored to be invited by my former mentor dr Miroslava Raspopovic Milic.',
      ProjectDate: '2021',
      ProjectImage: 'metTalks.png',
      ProjectImageTech: '',
      ProjectStatus: 'Complete',
      ProjectPurpose: 'Purpose',
      ProjectContributions: 'Contributions',
      ProjectLiveViewLink: '',
      ProjectCategory: 'talks', // web, mobile, talks, research, courses, other
      ProjectReferences: [
        {
          ProjectReferenceName: 'Univerzitet Metropolitan',
          ProjectReferenceLink: 'https://www.metropolitan.ac.rs/en/home/'
        },
        {
          ProjectReferenceName: 'Guest Speaker',
          ProjectReferenceLink: ''
        },
        {
          ProjectReferenceName: 'Studying Abroad',
          ProjectReferenceLink: ''
        },
      ],
      ProjectTechnologies:[]
    },
    {
      ProjectId: 3,
      ProjectName: 'Soccer Notifier',
      ProjectDesciption: 'Developed web application that allows soccer players to subscribe to their teams with phone numbers and/or email addresses. The system consumes the subscriptions and notifies players based on already built games schedule.',
      ProjectDate: '2021',
      ProjectImage: 'soccer-notifier.png',
      ProjectImageTech: 'soccer-notifier-aws.png',
      ProjectStatus: 'Complete',
      ProjectPurpose: 'Purpose',
      ProjectContributions: 'Contributions',
      ProjectLiveViewLink: 'https://soccernotifier.s3.us-east-1.amazonaws.com/index.html',
      ProjectCategory: 'web', // web, mobile, talks, research, courses, other
      ProjectReferences: [
        {
          ProjectReferenceName: 'Live View',
          ProjectReferenceLink: 'https://soccernotifier.s3.us-east-1.amazonaws.com/index.html'
        },
        {
          ProjectReferenceName: 'Shreveport Indoor Soccer',
          ProjectReferenceLink: ''
        },
        {
          ProjectReferenceName: 'Non Profit',
          ProjectReferenceLink: ''
        },
      ],
      ProjectTechnologies:[
        {
          TechnologyName: 'Angular 12'
        },
        {
          TechnologyName: 'AWS DynamoDB'
        },
        {
          TechnologyName: 'AWS Lambda'
        },
        {
          TechnologyName: 'AWS API Gateway'
        },
        {
          TechnologyName: 'AWS CloudWatch Events'
        },
        {
          TechnologyName: 'Git'
        }
      ]
    },
    {
      ProjectId: 4,
      ProjectName: 'WordSym - iOS App',
      ProjectDesciption: 'Developed an iOS app that helps people learn new words from English dictionary. Core functionality of the app is to show an arbitrary word to a user and require them to provide a synonym for it. Once user provides a synonym, the app shows details about the word, as well as correct/incorrect response.',
      ProjectDate: '2020',
      ProjectImage: 'word-sym.png',
      ProjectImageTech: 'word-sym-aws.png',
      ProjectStatus: 'Complete',
      ProjectPurpose: 'Purpose',
      ProjectContributions: 'Contributions',
      ProjectLiveViewLink: '',
      ProjectCategory: 'mobile', // web, mobile, talks, research, courses, other
      ProjectReferences: [
        {
          ProjectReferenceName: 'Word Synonyms',
          ProjectReferenceLink: ''
        },
        {
          ProjectReferenceName: 'English Practice',
          ProjectReferenceLink: ''
        },
        {
          ProjectReferenceName: 'Non Profit',
          ProjectReferenceLink: ''
        },
      ],
      ProjectTechnologies:[
        {
          TechnologyName: 'Swift'
        },
        {
          TechnologyName: 'AWS DynamoDB'
        },
        {
          TechnologyName: 'AWS Lambda'
        },
        {
          TechnologyName: 'AWS API Gateway'
        },
        {
          TechnologyName: 'Git'
        }
      ]
    },
    {
      ProjectId: 5,
      ProjectName: 'Oracle CA Java SE 8 Practice Exams',
      ProjectDesciption: 'I have created this Udemy course with an idea to develop practice exams that will help students and developers prepare for OCA Java SE 8 Programmer I (1Z0-808) certification or Java interviews.',
      ProjectDate: '2019',
      ProjectImage: 'udemyThumbnail.png',
      ProjectImageTech: 'udemyCourse.mp4',
      ProjectStatus: 'Complete',
      ProjectPurpose: 'Purpose',
      ProjectContributions: 'Contributions',
      ProjectLiveViewLink: 'https://www.udemy.com/oracle-certified-associate-java-se-8-practice-exams/',
      ProjectCategory: 'courses', // web, mobile, talks, research, courses, other
      ProjectReferences: [
        {
          ProjectReferenceName: 'Udemy Course',
          ProjectReferenceLink: 'https://www.udemy.com/oracle-certified-associate-java-se-8-practice-exams/'
        },
        {
          ProjectReferenceName: 'Java Certification',
          ProjectReferenceLink: ''
        },
        {
          ProjectReferenceName: 'Practice Exams',
          ProjectReferenceLink: ''
        },
      ],
      ProjectTechnologies:[
        {
          TechnologyName: 'Swift'
        },
        {
          TechnologyName: 'AWS DynamoDB'
        },
        {
          TechnologyName: 'AWS Lambda'
        },
        {
          TechnologyName: 'AWS API Gateway'
        },
        {
          TechnologyName: 'Git'
        }
      ]
    },
    {
      ProjectId: 6,
      ProjectName: 'Srđan Ristić Portfolio',
      ProjectDesciption: 'This is my personal website where you can find out more about my career and life.',
      ProjectDate: '2018 - Present',
      ProjectImage: 'portfolio.png',
      ProjectImageTech: 'portfolio-aws.png',
      ProjectStatus: 'Complete',
      ProjectPurpose: 'Purpose',
      ProjectContributions: 'Contributions',
      ProjectLiveViewLink: 'https://www.srdanristic.com/',
      ProjectCategory: 'web', // web, mobile, talks, research, courses, other
      ProjectReferences: [
        {
          ProjectReferenceName: 'Live View',
          ProjectReferenceLink: 'https://www.srdanristic.com/'
        },
        {
          ProjectReferenceName: 'Portfolio',
          ProjectReferenceLink: ''
        },
        {
          ProjectReferenceName: 'Software Engineer',
          ProjectReferenceLink: ''
        },
      ],
      ProjectTechnologies:[
        {
          TechnologyName: 'Angular 19'
        },
        {
          TechnologyName: 'HTML/CSS/Bootstrap'
        },
        {
          TechnologyName: 'AWS CloudFront'
        },
        {
          TechnologyName: 'AWS S3'
        },
        {
          TechnologyName: 'AWS Route 53'
        },
        {
          TechnologyName: 'AWS Certificate Manager'
        },
        {
          TechnologyName: 'Git'
        }
      ]
    }
  ];

  readonly HOBBIES = [
    {
      HobbyName: "Travel",
      HobbyIcon: "icofont-airplane"
    },
    {
      HobbyName: "Sports",
      HobbyIcon: "icofont-basketball"
    },
    {
      HobbyName: "Cars",
      HobbyIcon: "icofont-racing-car"
    },
    {
      HobbyName: "Adventures",
      HobbyIcon: "icofont-hill"
    }
  ]

  readonly COPYRIGHT = "Copyright © " + new Date().getFullYear() + " - Srđan Ristić";
}
