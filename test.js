const dotenv = require("dotenv");
dotenv.config();

const dataMapper = require("./app/dataMapper");
const Level = require("./app/models/level");
const User = require("./app/models/user");
const Tag = require("./app/models/tag");
const Question = require("./app/models/question");
const Quiz = require("./app/models/quiz");

// User.findAll((err,users)=>{
//     console.log(users)
// })

// Question.findById(3,(err,question)=>{
//     console.log(question);
// })

// const tresDifficile = new Level({name: "très difficile"});
// tresDifficile.insert((err, level)=> {
//     console.log(level);
// })

// Quiz.findBy({user_id:"1"}, (err,user)=>{
//     if(err){
//         return console.log("err --->", err.message);
//     }
//     console.log("reponse user --->", user);
// })


// Tag.findById(16,(err,tag)=>{
//     console.log(tag);
//     tag.delete((err,result)=>{
//         console.log(result)
//     })
// })

// Question.findAll((err, items)=>{
//     console.log(items)
// })


const myTag = new Tag({name:"je suis un nouveau tag"});
myTag.insert((err,result)=>{
    if(err){
        console.log(err);
    }else {
        console.log(result)
        myTag.name = "je ne suis plus un nouveau tag";
        myTag.update((err, result)=>{
            if(err){
                console.log(err)
            }else {
                console.log(result)
            }
        })
    }
})

const myNewTag = new Tag({name:"je suis un nouveau tag"});
myNewTag.insert((err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result)
        myNewTag.name = "vufyvbinkjlfvoef";
        myNewTag.update((err, result)=>{
            console.log(result);
        })
    }
})


/*
dataMapper.getAllLevels((err, levels)=>{
    console.log(err, levels)
})

Level.findAll((err, levels)=>{
    console.log(err, levels)
})
*/

// dataMapper.getOneLevel(1, (err,level)=>{
//     console.log(err,level)
// })

// User.findAll((err,users)=>{
//     console.log(users)
// })
/*
const nib = new User({
  email: "nib@free.fr",
  password: "dfzegf123",
  firstname: "Ben",
  lastname: "Schiex",
});

console.log(nib);

nib.insert((err, user) => {
  console.log(user);
  nib.email = "nibelune@gmail.com";
  nib.update((err, user) => {
    console.log(user);
    nib.delete((err,result)=>{
        console.log(result)
    })
  });
});
*/
/*
User.findAll((err,users)=>{
    const phillipe = users[0];
    console.log(phillipe)
    phillipe.lastname = "emmet";
    phillipe.update((err,user)=>{
        console.log(user)
    })

})
*/

