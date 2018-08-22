function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let rank = document.querySelectorAll("ul.ranked-list li")
  for(let i=0; i <rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}

function deepestChild(){
  let parent = document.getElementById("grand-node")
  let child = parent.children[0]
  while(child){
    child = child.children[0]
  }
  return parent
}  



// let div1 = grandNode.children[0]
  // let div2 = div1.children[0]
  // let div3 = div2.children[0]
  // let div4 = div3.children[0]
  // return div4