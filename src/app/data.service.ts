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
        "livetest": "www.YouTube.de",
        "github": "https://github.com/Bormex/Join"
      },
      {
        "name": "Join",
        "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
        "languages": ["HTML", "CSS", "JavaScript", "Firebase"],
        "image": "./../../../assets/img/notebook_Join.png",
        "livetest": "www.YouTube.de",
        "github": "https://github.com/Bormex/El-Pollo-Loco"
      },
      {
        "name": "El Pollo Loco",
        "description": "El Pollo Loco is a run-and-jump game where players face chickens as enemies, with a rooster as the final boss. The game features fast-paced action, challenging obstacles, and a fun, quirky theme centered around poultry",
        "languages": ["HTML", "CSS", "JavaScript", "Firebase"],
        "image": "./../../../assets/img/notebook_Pollo_loco.png",
        "livetest": "www.YouTube.de",
        "github": "www.github.com"
      },
      {
        "name": "DaBubble",
        "description": "Ein Projekt, das ich erstellt habe, um Teamarbeit und Projektmanagement zu verbessern.",
        "languages": ["HTML", "SASS", "JavaScript", "Angular", "Typescript", "Firestore"],
        "image": "./../../../assets/img/notebook_Dabubble.png",
        "livetest": "www.YouTube.de",
        "github": "www.github.com"
      }
    ], 
    AboutMe: {
      "description": "Mit dem Programmieren habe ich begonnen, weil ich es faszinierend finde, wie man mit Code eigene Lösungen erschaffen und Abläufe automatisieren kann. Meine ersten Schritte machte ich mit Bash-Skripten in Linux, um automatische Backups für Spiele-Server zu erstellen. Dabei wurde mir schnell klar, welche Möglichkeiten sich durch Programmierung eröffnen. Die Freiheit, kreative Ideen in funktionierende Anwendungen umzusetzen und stetig neue Technologien zu entdecken, motiviert mich bis heute, meine Fähigkeiten weiterzuentwickeln.",
      "subpoints": [
      {
        "image": "./../../../assets/img/icons/location.svg",
        "description": "Ich komme aus Lutherstadt Wittenberg und arbeite gerne vor Ort, um persönlich mit Kollegen zu interagieren. Home-Office sehe ich aber auch als gute Möglichkeit für mehr Abwechslung und Flexibilität.",
      }, 
      {
        "image": "./../../../assets/img/icons/bulb.svg",
        "description": "Ich bin sehr aufgeschlossen gegenüber neuen Technologien und stets motiviert, meine Fähigkeiten weiterzuentwickeln. Die IT-Branche verändert sich ständig, und ich finde es spannend, immer dazuzulernen und innovative Lösungen zu entdecken."
      },
      {
        "image": "./../../../assets/img/icons/puzzle.svg",
        "description": "Kreativ und analytisch gehe ich Probleme an, indem ich verschiedene Lösungsansätze prüfe und dann systematisch die effizienteste wähle. Ich bleibe beharrlich und lerne aus jeder Herausforderung, um mich kontinuierlich zu verbessern. Zusammenarbeit mit anderen hilft mir, verschiedene Perspektiven zu integrieren und die beste Lösung zu finden."
      }]
    }
    
  };

  getJsonData() {
    return this.jsonData;
  }
}
