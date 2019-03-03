(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(37)},33:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(3),c=n.n(r),o=n(12),s=n(13),u=n(18),m=n(14),i=n(19),E=n(4),d=n(1),b=n(5),h=(n(33),function(){return a.a.createElement("div",null,"Hey, welcome to HTML/CSS/JavaScript! \ud83d\ude80\u2728")}),p=function(){return a.a.createElement("div",null,"Lesson 1: HTML",a.a.createElement("br",null),a.a.createElement("br",null),"Make this page look nice!",a.a.createElement("br",null),"First create the structure (HTML),",a.a.createElement("br",null),"Then create the style (CSS).",a.a.createElement("br",null),a.a.createElement("br",null),"1. Make this and the next lines into a list, then",a.a.createElement("br",null),a.a.createElement("br",null),"2. Create two of each HTML tag:",a.a.createElement("br",null),a.a.createElement("br",null),"Structural:",a.a.createElement("br",null),"paragraph, h1, h6, blockquote, code, pre,",a.a.createElement("br",null),a.a.createElement("br",null),"Functional:",a.a.createElement("br",null),"button, link, input, textarea, select",a.a.createElement("br",null),a.a.createElement("br",null),"Canvas:",a.a.createElement("br",null),"svg, circle, rect, line, path")},f=function(){return a.a.createElement("div",null,"Lesson 2: CSS",a.a.createElement("br",null),a.a.createElement("br",null),"0. Copy the HTML from the previous lesson below",a.a.createElement("br",null),a.a.createElement("br",null),"1. At the top of this file, add",a.a.createElement("br",null),a.a.createElement("code",null,"import './lesson2.css'"),a.a.createElement("br",null),a.a.createElement("br",null),"2. Create styles in lesson2.css to make your elements shine!")},y=function(){return a.a.createElement("div",null,"Lesson 3: Styled Components",a.a.createElement("br",null),a.a.createElement("br",null),"0. Copy the HTML from the previous lesson below",a.a.createElement("br",null),a.a.createElement("br",null),"1. At the top of this file, add ",a.a.createElement("br",null),a.a.createElement("code",null,"import styled from 'styled-components'"),a.a.createElement("br",null),a.a.createElement("br",null),"2. Translate your lesson2.css into styled-components syntax")},v=function(){return a.a.createElement("div",null,"Lesson 4: Imperative JavaScript (I tell/impel you to do it, and you do it)",a.a.createElement("br",null),a.a.createElement("br",null),"1. Create a button with an onClick handler",a.a.createElement("br",null),a.a.createElement("br",null),"2. On click, imperatively make a styled div animate however you like")},g=function(){return a.a.createElement("div",null,"Lesson 5: CSS pseudo-selectors + more styles",a.a.createElement("br",null),a.a.createElement("br",null),"1. Create four of each HTML element: ",a.a.createElement("code",null,"button, img, a"),a.a.createElement("br",null),a.a.createElement("br",null),"2. Add a unique class to each set of ",a.a.createElement("code",null,"button / img / a")," ","elements",a.a.createElement("br",null),a.a.createElement("br",null),"3. Using styled-components, add some rockin' styles to each set of elements",a.a.createElement("br",null),a.a.createElement("br",null),"4. Add styles on ",a.a.createElement("code",null,":hover")," and ",a.a.createElement("code",null,":active")," for each element")},L=function(){return a.a.createElement("div",null,"Lesson 6: CSS transitions & animations + more styles",a.a.createElement("br",null),a.a.createElement("br",null),"1. Create four of each HTML element: ",a.a.createElement("code",null,"button, img, a"),a.a.createElement("br",null),a.a.createElement("br",null),"2. Add a unique class to each set of ",a.a.createElement("code",null,"button / img / a")," ","elements",a.a.createElement("br",null),a.a.createElement("br",null),"3. Using styled-components, add some rockin' styles to each set of elements",a.a.createElement("br",null),a.a.createElement("br",null),"4. Add styles on ",a.a.createElement("code",null,":hover")," and ",a.a.createElement("code",null,":active")," for each element",a.a.createElement("br",null),a.a.createElement("br",null),"5. Add ",a.a.createElement("code",null,"transition: all 1s ease")," to each element")},w=function(){return a.a.createElement("div",null,"Lesson 7: Declarative JavaScript (I declare it is so, and it is so)",a.a.createElement("br",null),a.a.createElement("br",null),"1. Add the following line below ",a.a.createElement("code",null,"const Lesson5")," and above"," ",a.a.createElement("code",null,"return")," :",a.a.createElement("br",null),a.a.createElement("code",null,"const [buttonPosition, setButtonPosition] = React.useState('left')"),a.a.createElement("br",null),a.a.createElement("br",null),"2. Create a ",a.a.createElement("code",null,"button")," and on click, declaratively make the button move by changing its position",a.a.createElement("br",null),a.a.createElement("br",null),'3. Using styled-components, add as many styles as you can think of inside of the class "bananas"',a.a.createElement("br",null),a.a.createElement("br",null),"4. Add the following line below the previous call to"," ",a.a.createElement("code",null,"React.useState"),":",a.a.createElement("code",null,"const [buttonClass, setButtonClass] = React.useState(null)"),a.a.createElement("br",null),a.a.createElement("br",null),'5. Add a call to setButtonClass("bananas") when clicking the button',a.a.createElement("br",null),a.a.createElement("br",null),"6. Add an ",a.a.createElement("code",null,"if")," statement to set the class to ",a.a.createElement("code",null,"null")," ",'if the button class is already "bananas"')},C=function(){return a.a.createElement("div",null,"Lesson 8: Declarative JavaScript: Mapping Elements",a.a.createElement("br",null),a.a.createElement("br",null),"1. Create an ",a.a.createElement("code",null,"img")," tag with a ",a.a.createElement("code",null,"src")," attribute pointing to ",a.a.createElement("code",null,"https://picsum.photos/200/200/?random"),a.a.createElement("br",null),a.a.createElement("br",null),"2. Declare an array with 5 entries: ",a.a.createElement("code",null,"[200,250,300,350,400]"),".",a.a.createElement("br",null),a.a.createElement("br",null),'3. Using the Array.map function, "map out" an ',a.a.createElement("code",null,"img")," tag for each entry in the array.",a.a.createElement("br",null),a.a.createElement("br",null),"4. For each ",a.a.createElement("code",null,"img"),", dynamically set the ",a.a.createElement("code",null,"src")," ","attribute using the current value in the array.")},k=function(){return a.a.createElement("div",null,"Lesson 9: Four Ways to Do the Robot",a.a.createElement("br",null),a.a.createElement("br",null),"0. Copy the code from the previous lesson over to this file.",a.a.createElement("br",null),a.a.createElement("br",null),"1. Comment out the array, then use a ",a.a.createElement("code",null,"for")," loop to dynamically generate it instead.",a.a.createElement("br",null),a.a.createElement("br",null),"2. Comment out the ",a.a.createElement("code",null,"for")," loop, then and use a"," ",a.a.createElement("code",null,"while")," loop instead.",a.a.createElement("br",null),a.a.createElement("br",null),"3. Replace the array with [1,2,3,4,5], then use a ",a.a.createElement("code",null,"forEach"),"function call instead.",a.a.createElement("br",null),a.a.createElement("br",null),"4. Replace the array with [0,0,0,0,0], then call ",a.a.createElement("code",null,"map")," on that array, and directly use ",a.a.createElement("code",null,"map"),"'s second argument, the index.")};function S(){var e=Object(E.a)(["\n  width: 100%;\n  padding: 20px 40px;\n  background: hsl(180, 60%, 40%);\n  display: grid;\n  grid-template-columns: 200px repeat(auto-fit, 150px);\n  align-items: center;\n  a {\n    color: white;\n    font-size: 18pt;\n    font-family: system-ui;\n    &:hover {\n      color: hsl(10, 40%, 70%);\n    }\n    transition: all 0.1s ease-in-out;\n  }\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);\n"]);return S=function(){return e},e}var x=b.a.div(S()),A=function(e){var t=e.children;return a.a.createElement(x,null,t)};function M(){var e=Object(E.a)(["\n  padding: 20px;\n"]);return M=function(){return e},e}var H=b.a.div(M()),T=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("di",null,a.a.createElement(A,null,a.a.createElement(d.a,{to:"/"},"Home"),a.a.createElement(d.a,{to:"lesson1"},"Lesson 1 \ud83d\udcaa"),a.a.createElement(d.a,{to:"lesson2"},"Lesson 2 \ud83c\udfa8"),a.a.createElement(d.a,{to:"lesson3"},"Lesson 3 \ud83d\udc85"),a.a.createElement(d.a,{to:"lesson4"},"Lesson 4 \ud83d\udef6"),a.a.createElement(d.a,{to:"lesson5"},"Lesson 5 \ud83d\udc7d"),a.a.createElement(d.a,{to:"lesson6"},"Lesson 6 \ud83d\ude80"),a.a.createElement(d.a,{to:"lesson7"},"Lesson 7 \u2728"),a.a.createElement(d.a,{to:"lesson8"},"Lesson 8 \ud83d\uddfa"),a.a.createElement(d.a,{to:"lesson9"},"Lesson 9 \ud83e\udd16")),a.a.createElement(H,null,a.a.createElement(d.b,null,a.a.createElement(h,{path:"/"}),a.a.createElement(p,{path:"lesson1"}),a.a.createElement(f,{path:"lesson2"}),a.a.createElement(y,{path:"lesson3"}),a.a.createElement(v,{path:"lesson4"}),a.a.createElement(g,{path:"lesson5"}),a.a.createElement(w,{path:"lesson6"}),a.a.createElement(L,{path:"lesson7"}),a.a.createElement(C,{path:"lesson8"}),a.a.createElement(k,{path:"lesson9"}))))}}]),t}(l.Component);n(36);c.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.df818b89.chunk.js.map