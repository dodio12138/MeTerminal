// 获取要进行动画的元素
var paper = document.getElementsByClassName('paper')[0];
// var printhead = document.getElementsByClassName('printhead')[0];
let paperHeight = 35;

// 添加事件监听器，当元素被点击时触发动画
// paper.addEventListener('click', function () {
//     // 将宽度从 100px 变为 120px
//     paperHeight += 20;
//     paper.style.height = paperHeight + 'px';
// });

function paperAni() {
    paperHeight += 20;
    paper.style.height = paperHeight + 'px';
    return paper;
}

// function printheadAni(length){
//     const time = length/5;
//     printhead.style.transition = `left ${time}s cubic-bezier(0, 0, 0.37, 1)`;
//     printhead.style.left = (length/2 + 5) + '%';
// }

// function printheadAniBAck(){
//     printhead.style.left = '5%';
// }

// printhead.addEventListener('transitionend', function(event) {
//     printheadAniBAck();
// });