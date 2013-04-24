/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)": [
            ["style", "opacity", '0']
         ],
         "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)": [
            ["transform", "translateX", '0px'],
            ["style", "opacity", '0']
         ],
         "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)": [
            ["style", "width", '270px'],
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid17", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)", "width", '270px', { fromValue: '270px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid18", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)", "width", '270px', { fromValue: '0px'}], position: 750, duration: 500, easing: "easeInOutQuad" },
            { id: "eid20", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid21", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)", "opacity", '1', { fromValue: '0'}], position: 750, duration: 0, easing: "easeOutCirc" },
            { id: "eid31", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid32", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)", "opacity", '0', { fromValue: '0'}], position: 750, duration: 0, easing: "easeInOutQuad" },
            { id: "eid25", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid6", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid9", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateX", '0px', { fromValue: '500px'}], position: 250, duration: 500, easing: "easeOutCirc" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-307236369");
