const path=require('path');
const express=require('express');
const app=express();
const port=3000;

app.set('view engine', 'hbs');
app.use( express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));


const hbs=require('hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

//cookies
const Cookies=require('cookies');
const keys=['keyword cat']



// app.post('/login',(req,res)=>{
//     const {username,password}=req.body;
//     const cookies=new Cookies(req,res,{keys:keys});
//     cookies.set(username,JSON.stringify({
//         // username:username,
//         password:password,
//         isAdmin:true
//     }))
//     res.redirect('/profile');
// })
app.post('/login', (req, res) => {
    // This will create a cookie
    const { username } = req.body;
    var cookies = new Cookies(req, res, { keys: keys });

    cookies.set('user', JSON.stringify({
        isAdmin: false,
        username
    }));
    res.redirect('/profile');
})



// app.get('/login',(req,res,next)=>{
//     var cookies = new Cookies(req, res, { keys: keys });
//     let data = cookies.get('user');

//     if(!data){
//         return res.render('login');
//     }
//     res.redirect('/profile');
// });

app.get('/login', (req, res, next) => {
    var cookies = new Cookies(req, res, { keys: keys });
    let data = cookies.get('user');

    if (!data)
        return res.render('login');
    res.redirect('/profile');
});


// app.get('/profile',(req,res)=>{
//     var cookies = new Cookies(req, res, { keys: keys });
//     let data = cookies.get('user');
//     if(!data){
//         return res.redirect('/login');
//     }
//     data=data.JSON.parse(data)   
    
//     res.render('profile', {
//             username: data.username
//         });
// }) ;



// We cannot access profile before login
app.get('/profile', (req, res, next) => {
    var cookies = new Cookies(req, res, { keys: keys });
    let data = cookies.get('user');

    if (!data)
        return res.redirect('/login');
    data = JSON.parse(data);
    res.render('profile', {
        username: data.username
    });
})




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})