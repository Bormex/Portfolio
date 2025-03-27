import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  jsonData = {
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
        "comment": "Was ein guter!!!",
        "image": "path"
      },
      {
        "author": "Dieter",
        "comment": "Er macht sehr gute Arbeit!!!",
        "image": "path"
      },
      {
        "author": "Michel",
        "comment": "Einfach top Kerl!",
        "image": "path"
      }
    ]
  };

  getJsonData() {
    return this.jsonData;
  }
}
