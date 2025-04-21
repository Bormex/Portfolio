import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getEnJson() {
    return fetch('./assets/i18n/en.json')
      .then((response) => response.json())
      .then((data) => data);
  }

  getDeJson() {
    return fetch('./assets/i18n/de.json')
      .then((response) => response.json())
      .then((data) => data);
  }

  getJsonData() {
    return this.jsonData;
  }

  jsonData = {
    Legalnotice: 'Legal Notice',
    UpcommingProject: '... COMING SOON ...',
    NavBar: {
      aboutMe: 'About Me',
      skills: 'Skills',
    },
    Contact: {
      title: 'Contact',
      subtitle: 'Got a Problem!',
      subdescription: 'Im looking for exciting web development projects, especially with Angular and TypeScript. I bring clean code, initiative, and a strong team spirit – feel free to reach out if you need support!',
      subAnecdote: 'Need a Frontend developer?',
      subAnecdoteContact: 'Contact me!',
      placeholder: {
        name: 'Your name',
        mail: 'Your email',
        message: 'Your message',
      },
      validation: {
        name: 'Your name is required',
        mail: 'Your email is required',
        message: 'Your message is empty',
      },
      Checkbox: {
        textBefore: "I've read the ",
        link: 'privacy policy',
        textAfter: 'and agree to the processing of my data as outlined.',
      },
    },
    Portfolio: {
      information:
        'Explore a selection of my work here - Interact with projects to see my skills in action.',
      MySkills: {
        title: 'My Skills',
        firstSent: 'These are the technologies and skills I’ve worked with so far.',
        lastSent: 'Im always excited to explore new technologies and frameworks – learning and adapting quickly is one of my strengths.',
        title2: [
          'Looking for',
          'another skill'
        ] 
      },
      Projects: [
        {
          name: 'PokeDex',
          description:
            'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
          languages: ['HTML', 'CSS', 'JavaScript', 'Api'],
          image: './../../../assets/img/notebook_Pokedex.png',
          livetest: 'https://YouTube.de',
          github: 'https://github.com/Bormex/Join',
        },
        {
          name: 'Join',
          description:
            'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
          languages: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
          image: './../../../assets/img/notebook_Join.png',
          livetest: 'https://YouTube.de',
          github: 'https://github.com/Bormex/El-Pollo-Loco',
        },
        {
          name: 'El Pollo Loco',
          description:
            'El Pollo Loco is a run-and-jump game where players face chickens as enemies, with a rooster as the final boss.',
          languages: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
          image: './../../../assets/img/notebook_Pollo_loco.png',
          livetest: 'https://YouTube.de',
          github: 'www.github.com',
        },
        {
          name: 'DaBubble',
          description:
            'A project I created to improve teamwork and project management.',
          languages: [
            'HTML',
            'SASS',
            'JavaScript',
            'Angular',
            'Typescript',
            'Firestore',
          ],
          image: './../../../assets/img/notebook_Dabubble.png',
          livetest: 'https://YouTube.de',
          github: 'www.github.com',
        },
      ],
    },
    LandingPage: {
      article: 'I am',
      job: 'FRONTEND DEVELOPER',
      scroll: 'down',
    },
    Links: [
      { image: 'github', path: 'https://github.com/Bormex' },
      { image: 'mail', path: '#contact' },
      { image: 'linkedIn', path: 'https://de.linkedin.com/in/niclas-holzhey-648365334' },
    ],
    Skills: [
      { name: 'HTML', image: 'html' },
      { name: 'CSS', image: 'css' },
      { name: 'JavaScript', image: 'javascript' },
      { name: 'TypeScript', image: 'typescript' },
      { name: 'Angular', image: 'angular' },
      { name: 'Firebase', image: 'firebase' },
      { name: 'Git', image: 'git' },
      { name: 'Rest Api', image: 'api' },
      { name: 'Scrum', image: 'scrum' },
      { name: 'Material Design', image: 'material-desing' },
      { name: 'Continually Learning', image: 'continually-learning' },
    ],
    AboutMe: {
      title: 'About Me',
      description:
        'I started programming because I find it fascinating how you can use code to create your own solutions and automate processes.',
      subpoints: [
        {
          image: './../../../assets/img/icons/location.svg',
          description:
            "I'm from Lutherstadt Wittenberg and enjoy working on-site so I can interact with colleagues face-to-face.",
        },
        {
          image: './../../../assets/img/icons/bulb.svg',
          description:
            "I'm very open to new technologies and always motivated to develop my skills.",
        },
        {
          image: './../../../assets/img/icons/puzzle.svg',
          description:
            'I approach problems creatively and analytically, exploring different approaches to solving problems and then systematically choosing the most effective one.',
        },
      ],
    },
    Comments: [
      {
        author: 'Stephen',
        comment: 'His questions were often very focused and practical, indicating that he doesnt just apply theoretical knowledge but actively solves real problems within the project context.',
        image: './../../../../assets/img/teampartner/ScStephen.png',
      },
      // {
      //   author: 'Dieter',
      //   comment: 'He does greate work!!!',
      //   image: 'path',
      // },
      // {
      //   author: 'Michel',
      //   comment: 'Pure good guy!',
      //   image: 'path',
      // },
    ],
  };

  getData(para: string) {
    this.translateUserComments(para);
    this.translatePrjctDesc(para);
    this.translateAboutMe(para);
    this.translatePageElements(para);
  }
  
  // das ist eine funktion!
  translateUserComments(para: string) {
    this.jsonData.Comments.forEach((comments) => {
      comments.comment = '';
    });
    this.translateUserCommentsDe(para);
    this.translateUserCommentsEn(para);
  }

  translateUserCommentsDe(para : string) {
    if (para == 'de') {
      this.getDeJson().then((data) =>
        data.Comments.forEach((projectDeVersion: any, index: number) => {
          this.jsonData.Comments[index].comment = projectDeVersion.comment;
        })
      );
    }
  }

  translateUserCommentsEn(para : string) {
    if (para == 'en') {
      this.getEnJson().then((data) =>
        data.Comments.forEach((projectDeVersion: any, index: number) => {
          this.jsonData.Comments[index].comment = projectDeVersion.comment;
        })
      );
    }
  }

  //Übersetzung der Beschreibung im Projekt
  translatePrjctDesc(para: string) {
    this.jsonData.Portfolio.Projects.forEach((project) => {
      project.description = '';
    });
    this.translatePrjctDescDe(para);    
    this.translatePrjctDescEn(para);
  }

  translatePrjctDescDe(para : string) {
    if (para == 'de') {
      this.getDeJson().then((data) =>
        data.Portfolio.Projects.forEach(
          (projectDeVersion: any, index: number) => {
            this.jsonData.Portfolio.Projects[index].description =
              projectDeVersion.description;
          }
        )
      );
    }
  }

  translatePrjctDescEn(para : string) {
    if (para == 'en') {
      this.getEnJson().then((data) =>
        data.Portfolio.Projects.forEach(
          (projectDeVersion: any, index: number) => {
            this.jsonData.Portfolio.Projects[index].description =
              projectDeVersion.description;
          }
        )
      );
    }
  }

  // Übersetzung About Me
  translateAboutMe(para: string) {
    this.jsonData.AboutMe.subpoints.forEach((subpoint) => {
      subpoint.description = '';
    });
    this.translateAboutMeDe(para);
    this.translateAboutMeEn(para);
  }

  translateAboutMeDe(para : string) {
    if (para == 'de') {
      this.getDeJson().then((data) =>
        data.AboutMe.subpoints.forEach(
          (subpointDeVersion: any, index: number) => {
            this.jsonData.AboutMe.subpoints[index].description =
              subpointDeVersion.description;
            this.jsonData.AboutMe.description = '';
            this.jsonData.AboutMe.description = data.AboutMe.description;
          }
        )
      );
    }
  }

  translateAboutMeEn(para : string) {
    if (para == 'en') {
      this.getEnJson().then((data) =>
        data.AboutMe.subpoints.forEach(
          (subpointEnVersion: any, index: number) => {
            this.jsonData.AboutMe.subpoints[index].description =
              subpointEnVersion.description;
            this.jsonData.AboutMe.description = '';
            this.jsonData.AboutMe.description = data.AboutMe.description;
          }
        )
      );
    }
  }

  // übersetzung für comming soon
  translateLastProj(data: { UpcommingProject: string }) {
    this.jsonData.UpcommingProject = data.UpcommingProject;
  }

  // Legal Notice
  translateLegalN(data: {
    Legalnotice: string;
    Portfolio: { information: string };
    }) {
    this.jsonData.Legalnotice = data.Legalnotice;
    this.jsonData.Portfolio.information = data.Portfolio.information;
  }

  // translate titles about & skills
  translateTitles(data: {
    AboutMe: { title: string };
    Portfolio: { MySkills: {
      title2: any;
      lastSent: string;
      firstSent: string; title: string 
    } };
    }) {
    this.jsonData.AboutMe.title = data.AboutMe.title; // title about me
    this.jsonData.Portfolio.MySkills.title = data.Portfolio.MySkills.title; // title myskills
    this.jsonData.Portfolio.MySkills.firstSent = data.Portfolio.MySkills.firstSent;
    this.jsonData.Portfolio.MySkills.lastSent = data.Portfolio.MySkills.lastSent;
    this.jsonData.Portfolio.MySkills.title2[0] = data.Portfolio.MySkills.title2[0];
    this.jsonData.Portfolio.MySkills.title2[1] = data.Portfolio.MySkills.title2[1];
  }

  // translate navbar links
  translateNav(data: { NavBar: { aboutMe: string; skills: string } }) {
    this.jsonData.NavBar.aboutMe = data.NavBar.aboutMe;
    this.jsonData.NavBar.skills = data.NavBar.skills;
  }

  // transalate job, scroll down, artikel i am
  translateLandingP(data: {
    LandingPage: { article: string; job: string; scroll: string };
   }) {
    this.jsonData.LandingPage.article = data.LandingPage.article;
    this.jsonData.LandingPage.job = data.LandingPage.job;
    this.jsonData.LandingPage.scroll = data.LandingPage.scroll;
  }

  // alles zu contact sektion
  translateContactSec(data: { Contact: any }) {
    this.translateContact(data);
    this.translatePlaceholder(data);
    this.translateVali(data);
    this.translateCheckbox(data);
  }
  

  // alle tag elemente in contact bspw h1
  translateContact(data: { Contact: any }) {
    this.jsonData.Contact.title = data.Contact.title;
    this.jsonData.Contact.subtitle = data.Contact.subtitle;
    this.jsonData.Contact.subdescription = data.Contact.subdescription;
    this.jsonData.Contact.subAnecdoteContact = data.Contact.subAnecdoteContact;
    this.jsonData.Contact.subAnecdote = data.Contact.subAnecdote;
  }

  //placeholder
  translatePlaceholder(data: { Contact: any }) {
    this.jsonData.Contact.placeholder.name = data.Contact.placeholder.name;
    this.jsonData.Contact.placeholder.mail = data.Contact.placeholder.mail;
    this.jsonData.Contact.placeholder.message =
      data.Contact.placeholder.message;
  }

  // validation in contact
  translateVali(data: { Contact: any }) {
    this.jsonData.Contact.validation.name = data.Contact.validation.name;
    this.jsonData.Contact.validation.mail = data.Contact.validation.mail;
    this.jsonData.Contact.validation.message = data.Contact.validation.message;
  }

  // checkbox link und text
  translateCheckbox(data: { Contact: any }) {
    this.jsonData.Contact.Checkbox.textBefore =
      data.Contact.Checkbox.textBefore;
    this.jsonData.Contact.Checkbox.link = data.Contact.Checkbox.link;
    this.jsonData.Contact.Checkbox.textAfter = data.Contact.Checkbox.textAfter;
  }

  translatePageElements(para: string) {
    this.translateDe(para);
    this.translateEn(para);
  }

  // übersetzung aller einzelheiten ins englische
  translateEn(para : string) {
    if (para == 'en') {
     this.getEnJson().then((data) => {
       this.translateLandingP(data);
       this.translateNav(data);
       this.translateTitles(data);
       this.translateLegalN(data);
       this.translateLastProj(data);
       this.translateContactSec(data);
     });
   }
  }

  // übersetzung aller einzelheiten ins deutsch
  translateDe(para : string) {
    if (para == 'de') {
      this.getDeJson().then((data) => {
        this.translateLandingP(data);
        this.translateNav(data);
        this.translateTitles(data);
        this.translateLegalN(data);
        this.translateLastProj(data);
        this.translateContactSec(data);
      });
    }
  } 
}