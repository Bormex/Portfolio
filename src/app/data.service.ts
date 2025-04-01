import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  http: any;
  
  constructor() {}

  jsonData = {
    Legalnotice: "Legal Notice",
    Checkbox: {
      "textBefore": "I've read the ",
      "link": "privacy policy",
      "textAfter": "and agree to the processing of my data as outlined."
    },
    UpcommingProject: {
      "message": "... COMING SOON ..."
    },
    NavBar: {
      "aboutMe": "About Me",
      "skills": "Skills"
    },
    MySkills: {
      "title": "My Skills"
    },
    Contact: {
      "title": "Contact",
      "subtitle": "Got a Problem!",
      "subdescription": "Encourage people to contact you and describe what role you are interested in. Show that you will add value to their projects through your work.",
      "subAnecdote": "Need a Frontend developer?",
      "subAnecdoteContact": "Contact me!",
      "placeholder": {
        "name": "Your name",
        "mail": "Your email",
        "message": "Your message"
      },
      "validation": {
        "name": "Your name is required",
        "mail": "Your email is required",
        "message": "Your message is empty"
      }
    },
    Portfolio: {
    "information": "Explore a selection of my work here - Interact with projects to see my skills in action."
    },
    LandingPage: { 
      "article": "I am",
      "job": "FRONTEND DEVELOPER",
      "scroll": "down"
    },
    Links: [
      { "image": "github", path: 'https://github.com/Bormex' },
      { "image": "mail", path: 'https://github.com/Bormex' },
      { "image": "linkedIn", path: 'https://github.com/Bormex' },
    ],
    Skills: [
      { "name": 'HTML', "image": 'html' },
      { "name": 'CSS', "image": 'css' },
      { "name": 'JavaScript', "image": 'javascript' },
      { "name": 'TypeScript', "image": 'typescript' },
      { "name": 'Angular', "image": 'angular' },
      { "name": 'Firebase', "image": 'firebase' },
      { "name": 'Git', "image": 'git' },
      { "name": 'Rest Api', "image": 'api' },
      { "name": 'Scrum', "image": 'scrum' },
      { "name": 'Material Design', "image": 'material-desing' },
      { "name": 'Continually Learning', "image": 'continually-learning' },
    ],
    Projects: [
      {
        "name": "PokeDex",
        "description": "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
        "languages": ["HTML", "CSS", "JavaScript", "Api"],
        "image": "./../../../assets/img/notebook_Pokedex.png",
        "livetest": "https://YouTube.de",
        "github": "https://github.com/Bormex/Join"
      },
      {
        "name": "Join",
        "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
        "languages": ["HTML", "CSS", "JavaScript", "Firebase"],
        "image": "./../../../assets/img/notebook_Join.png",
        "livetest": "https://YouTube.de",
        "github": "https://github.com/Bormex/El-Pollo-Loco"
      },
      {
        "name": "El Pollo Loco",
        "description": "El Pollo Loco is a run-and-jump game where players face chickens as enemies, with a rooster as the final boss. The game features fast-paced action, challenging obstacles, and a fun, quirky theme centered around poultry",
        "languages": ["HTML", "CSS", "JavaScript", "Firebase"],
        "image": "./../../../assets/img/notebook_Pollo_loco.png",
        "livetest": "https://YouTube.de",
        "github": "www.github.com"
      },
      {
        "name": "DaBubble",
        "description": "A project I created to improve teamwork and project management.",
        "languages": ["HTML", "SASS", "JavaScript", "Angular", "Typescript", "Firestore"],
        "image": "./../../../assets/img/notebook_Dabubble.png",
        "livetest": "https://YouTube.de",
        "github": "www.github.com"
      }
    ], 
    AboutMe: {
      "title": "About Me",
      "description": "I started programming because I find it fascinating how you can use code to create your own solutions and automate processes. My first steps were with Bash scripts in Linux to create automatic backups for game servers. I quickly realized the possibilities programming opens up. The freedom to turn creative ideas into functional applications and to constantly discover new technologies continues to motivate me to develop my skills.",
      "subpoints": [
      {
        "image": "./../../../assets/img/icons/location.svg",
        "description": "I'm from Lutherstadt Wittenberg and enjoy working on-site so I can interact with colleagues face-to-face. However, I also see working from home as a great opportunity for more variety and flexibility.",
      }, 
      {
        "image": "./../../../assets/img/icons/bulb.svg",
        "description": "I'm very open to new technologies and always motivated to develop my skills. The IT industry is constantly changing, and I find it exciting to keep learning and discovering innovative solutions."
      },
      {
        "image": "./../../../assets/img/icons/puzzle.svg",
        "description": "I approach problems creatively and analytically, exploring different approaches to solving problems and then systematically choosing the most effective one. I persist and learn from every challenge to continuously improve. Collaborating with others helps me integrate different perspectives and find the best solution."
      }]
    },
    Comments: [
      {
        "author": "Stephen",
        "comment": "What a great men!!!",
        "image": "path"
      },
      {
        "author": "Dieter",
        "comment": "He does greate work!!!",
        "image": "path"
      },
      {
        "author": "Michel",
        "comment": "Pure good guy!",
        "image": "path"
      }
    ]
  };

  await: any;


  getData(para: string) {

    if (para == "de") {

      this.translatePrjctDescDE();

      this.translateAboutMeDE();
      
      this.translateUserCommentsDE();


      // übersetzung landingpage
      this.getDeJson().then((data) => {
        this.jsonData.LandingPage.article = data.LandingPage.article;
        this.jsonData.LandingPage.job = data.LandingPage.job;
        this.jsonData.LandingPage.scroll = data.LandingPage.scroll;

        this.jsonData.NavBar.aboutMe = data.NavBar.aboutMe;
        this.jsonData.NavBar.skills =  data.NavBar.skills;

        this.jsonData.AboutMe.title = data.AboutMe.title;

        this.jsonData.MySkills.title = data.MySkills.title;

        this.jsonData.Portfolio.information = data.Portfolio.information;

        this.jsonData.UpcommingProject.message = data.UpcommingProject.message;

        // alle zu contact sektion
        this.jsonData.Contact.title = data.Contact.title;
        this.jsonData.Contact.subtitle = data.Contact.subtitle;
        this.jsonData.Contact.subdescription = data.Contact.subdescription;
        this.jsonData.Contact.subAnecdoteContact = data.Contact.subAnecdoteContact;
        this.jsonData.Contact.subAnecdote = data.Contact.subAnecdote;
        // alles zu placeholder in contact
        this.jsonData.Contact.placeholder.name = data.Contact.placeholder.name;
        this.jsonData.Contact.placeholder.mail = data.Contact.placeholder.mail;
        this.jsonData.Contact.placeholder.message = data.Contact.placeholder.message;
        // alles zu den validation in contact
        this.jsonData.Contact.validation.name = data.Contact.validation.name;
        this.jsonData.Contact.validation.mail = data.Contact.validation.mail;
        this.jsonData.Contact.validation.message = data.Contact.validation.message;
        // alles zum datenschutz checkbox link und text
        this.jsonData.Checkbox.textBefore = data.Checkbox.textBefore;
        this.jsonData.Checkbox.link = data.Checkbox.link;
        this.jsonData.Checkbox.textAfter = data.Checkbox.textAfter;
        
        
        
        // Legal Notice
        this.jsonData.Legalnotice = data.Legalnotice; 

      });

    }

    if (para == "en") {

      this.translatePrjctDescEN();
      
      this.translateAboutMeEN();

      
      this.translateUserCommentsEN();
    


       // übersetzung landingpage
      this.getEnJson().then((data) => {
        this.jsonData.LandingPage.article = data.LandingPage.article;
        this.jsonData.LandingPage.job = data.LandingPage.job;
        this.jsonData.LandingPage.scroll = data.LandingPage.scroll;

        this.jsonData.NavBar.aboutMe = data.NavBar.aboutMe;
        this.jsonData.NavBar.skills =  data.NavBar.skills;

        this.jsonData.AboutMe.title = data.AboutMe.title;

        this.jsonData.MySkills.title = data.MySkills.title; 

        this.jsonData.Portfolio.information = data.Portfolio.information;

        this.jsonData.UpcommingProject.message = data.UpcommingProject.message;

        //alle zu contact sektion
        this.jsonData.Contact.title = data.Contact.title;
        this.jsonData.Contact.subtitle = data.Contact.subtitle;
        this.jsonData.Contact.subdescription = data.Contact.subdescription;
        this.jsonData.Contact.subAnecdoteContact = data.Contact.subAnecdoteContact;
        this.jsonData.Contact.subAnecdote = data.Contact.subAnecdote;
        // alles zu placeholder in contact
        this.jsonData.Contact.placeholder.name = data.Contact.placeholder.name;
        this.jsonData.Contact.placeholder.mail = data.Contact.placeholder.mail;
        this.jsonData.Contact.placeholder.message = data.Contact.placeholder.message;
        // alles zu den validation in contact
        this.jsonData.Contact.validation.name = data.Contact.validation.name;
        this.jsonData.Contact.validation.mail = data.Contact.validation.mail;
        this.jsonData.Contact.validation.message = data.Contact.validation.message;
        // alles zum datenschutz checkbox link und text
        this.jsonData.Checkbox.textBefore = data.Checkbox.textBefore;
        this.jsonData.Checkbox.link = data.Checkbox.link;
        this.jsonData.Checkbox.textAfter = data.Checkbox.textAfter;

        // Legal Notice
        this.jsonData.Legalnotice = data.Legalnotice; 
      });

    }
  }

  getEnJson() {
    return fetch('./assets/i18n/en.json')
      .then(response => response.json())
      .then(data => data)
  }

  getDeJson() {
    return fetch('./assets/i18n/de.json')
      .then(response => response.json())
      .then(data => data)
  }


//############### für die stani Json oben

  getJsonData() {
    return this.jsonData;
  }

  translateAboutMeDE() {
    // Übersetzung About Me
    this.jsonData.AboutMe.subpoints.forEach(subpoint => {
      subpoint.description = '';
    });
    this.getDeJson().then((data) =>
      data.AboutMe.subpoints.forEach((subpointDeVersion: any, index : number) => {  
        this.jsonData.AboutMe.subpoints[index].description = subpointDeVersion.description;  
        this.jsonData.AboutMe.description = '';
        this.jsonData.AboutMe.description = data.AboutMe.description;    
      })
    );
  }
  
  translatePrjctDescDE() {
    //Übersetzung der Beschreibung im Projekt
    this.jsonData.Projects.forEach(project => {
      project.description = '';
    });
    this.getDeJson().then((data) =>
      data.Projects.forEach((projectDeVersion: any, index : number) => {
        this.jsonData.Projects[index].description = projectDeVersion.description;
      })
    );
  }

  translateUserCommentsDE() {
    // das ist eine funktion!
    this.jsonData.Comments.forEach(comments => {
      comments.comment = '';
    });
    this.getDeJson().then((data) =>
      data.Comments.forEach((projectDeVersion: any, index: number) => {
        this.jsonData.Comments[index].comment = projectDeVersion.comment;
      })
    );
  }

  translateUserCommentsEN() {
    // das ist eine funktion!
    this.jsonData.Comments.forEach(comments => {
      comments.comment = '';
    });
    this.getEnJson().then((data) =>
      data.Comments.forEach((projectDeVersion: any, index: number) => {
        this.jsonData.Comments[index].comment = projectDeVersion.comment;
      })
    );
  }

  translatePrjctDescEN() {
    //Übersetzung der Beschreibung im Projekt
    this.jsonData.Projects.forEach(project => {
      project.description = '';
    });
    this.getEnJson().then((data) =>
      data.Projects.forEach((projectDeVersion: any, index : number) => {
        this.jsonData.Projects[index].description = projectDeVersion.description;
      })
    );
  }

  translateAboutMeEN() {
    // Übersetzung About Me
    this.jsonData.AboutMe.subpoints.forEach(subpoint => {
      subpoint.description = '';
    });
    this.getEnJson().then((data) =>
      data.AboutMe.subpoints.forEach((subpointEnVersion: any, index : number) => {  
        this.jsonData.AboutMe.subpoints[index].description = subpointEnVersion.description;  
        this.jsonData.AboutMe.description = '';
        this.jsonData.AboutMe.description = data.AboutMe.description;    
      })
    );
  }






}
