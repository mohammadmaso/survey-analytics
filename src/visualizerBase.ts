import { Question } from "survey-core";

export class VisualizerBase {
  constructor(
    protected targetElement: HTMLElement,
    public question: Question,
    protected data: Array<{ [index: string]: any }>,
    protected options?: Object
  ) {}

  destroy() {}

  render() {
    this.targetElement.innerHTML = "This question type is not visualized yet";
  }

  getRandomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color[i] = Math.floor(Math.random() * 255);
    }
    return "rgba(" + color.join(", ") + ", 0.4)";

    const colors = this.getColors();

    return "#" + colors[Math.floor(Math.random() * colors.length)];
  }

  getColors() {
    const colors = [
      "86e1fb",
      "3999fb",
      "ff6771",
      "1eb496",
      "ffc152",
      "aba1ff",
      "7d8da5",
      "4ec46c",
      "cf37a6",
      "4e6198"
    ];

    return [
      "86e1fb",
      "3999fb",
      "ff6771",
      "1eb496",
      "ffc152",
      "aba1ff",
      "7d8da5",
      "4ec46c",
      "cf37a6",
      "4e6198",
      "86e1fb",
      "3999fb",
      "ff6771",
      "1eb496",
      "ffc152",
      "aba1ff",
      "7d8da5",
      "4ec46c",
      "cf37a6",
      "4e6198",
      "86e1fb",
      "3999fb",
      "ff6771",
      "1eb496",
      "ffc152",
      "aba1ff",
      "7d8da5",
      "4ec46c",
      "cf37a6",
      "4e6198",
      "86e1fb",
      "3999fb",
      "ff6771",
      "1eb496",
      "ffc152",
      "aba1ff",
      "7d8da5",
      "4ec46c",
      "cf37a6",
      "4e6198",
      "86e1fb",
      "3999fb",
      "ff6771",
      "1eb496",
      "ffc152",
      "aba1ff",
      "7d8da5",
      "4ec46c",
      "cf37a6",
      "4e6198",
      "86e1fb",
      "3999fb",
      "ff6771",
      "1eb496",
      "ffc152",
      "aba1ff",
      "7d8da5",
      "4ec46c",
      "cf37a6",
      "4e6198",
      "86e1fb",
      "3999fb",
      "ff6771",
      "1eb496",
      "ffc152",
      "aba1ff",
      "7d8da5",
      "4ec46c",
      "cf37a6",
      "4e6198",
      "86e1fb",
      "3999fb",
      "ff6771",
      "1eb496",
      "ffc152",
      "aba1ff",
      "7d8da5",
      "4ec46c",
      "cf37a6",
      "4e6198"
    ];
  }
}