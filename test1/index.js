const input1 = document.getElementById("i1")
const input2 = document.getElementById("i2")
const input3 = document.getElementById("i3")
const button1 = document.getElementById("b1")
const button2 = document.getElementById("b2")
const result = document.getElementById("result")

//The Add New Memo Part
const listContent = [] //arrays list [] that print result

button1.addEventListener('click', function(){
    //pushing new value into a new object {}
    listContent.unshift({ 
        Memo: input1.value,
        Date: input2.value,
        Time: input3.value 
    })

    // console.log(listContent);
    //getting multiple input and store into listContent array 
    //  for(let i = 0; i<=listContent.length; i++){
    //      console.log(listContent[i]);
    //  }

    let htmlStr = '' //declare a empty object   

    listContent.forEach(function(item){ //put in object for each element in the list
        htmlStr = htmlStr + ` 
        <div>
        <p>Content:${item.Memo}</p>
        <p>Time: ${item.Time} ${item.Date}</p>
        <hr>
        </div>
        `
    })
    result.innerHTML = htmlStr // printing in the html view
 })

      //Delete old Memo part
      button2.addEventListener('click',function(){ 
        listContent.pop() //pop() is inverting to shift() and push()
        let htmlStr = '' //declare a empty object that will be use to insert into html   

    listContent.forEach(function(item){ //put in object for each element in the list
        //the `` is a magical symbol in javascript and this is where the data transfer to html
        htmlStr = htmlStr + ` 
        <div>
        <p>Content:${item.Memo}</p>
        <p>Time: ${item.Time} ${item.Date}</p>
        <hr>
        </div>
        `
    })
    result.innerHTML = htmlStr // printing in the html view

})




    
