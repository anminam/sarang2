// type: "sticky",
//       heightNum: 7, // 브라우저 높이의 num배로 셋팅
//       scrollHeight: 0,
//       objs: {
//         container: document.querySelector("#scroll-section-0"),
//         messageA: document.querySelector("#scroll-section-0 .main-message.a"),
//         messageB: document.querySelector("#scroll-section-0 .main-message.b"),
//         messageC: document.querySelector("#scroll-section-0 .main-message.c"),
//         messageD: document.querySelector("#scroll-section-0 .main-message.d"),
//         canvas: document.querySelector("#video-canvas-0"),
//         context: document.querySelector("#video-canvas-0").getContext("2d"),
//         videoImages: [],
//       },
//       values: {
//         messageA_opatity_in: [0, 1, { start: 0.1, end: 0.2 }],
//         messageB_opatity_in: [0, 1, { start: 0.3, end: 0.4 }],
//         messageC_opatity_in: [0, 1, { start: 0.5, end: 0.6 }],
//         messageD_opatity_in: [0, 1, { start: 0.7, end: 0.8 }],
//         messageA_opatity_out: [1, 0, { start: 0.25, end: 0.3 }],
//         messageB_opatity_out: [1, 0, { start: 0.45, end: 0.5 }],
//         messageC_opatity_out: [1, 0, { start: 0.65, end: 0.7 }],
//         messageD_opatity_out: [1, 0, { start: 0.85, end: 0.9 }],
//         messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
//         messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
//         messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
//         messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
//         messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
//         messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
//         messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
//         messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
//         videoConfig: {
//           path: "./src/videos/duckdog",
//           width: 852,
//           height: 480,
//           count: 406,
//           sequenceArr: [0, 405],
//           startNumber: 80,
//         },
//         canvase_opacity_in: [0, 1, { start: 0.01, end: 0.2 }],
//         canvase_opacity_out: [1, 0, { start: 0.9, end: 1 }],
//       },
class Scene {
  constructor(type, heightNum, objs) {
    this.type = type;
    this.heightNum = heightNum;
    this.objs = objs;
  }
}
