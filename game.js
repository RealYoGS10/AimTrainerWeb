@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');

* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Orbitron',sans-serif; background:radial-gradient(circle,#0b0b0b,#000); color:#00ffc6; text-align:center; min-height:100vh; display:flex; flex-direction:column;}
header { background:rgba(0,0,0,0.7); padding:15px 0; border-bottom:2px solid #00ffc6; }
h1 { font-size:2em; text-shadow:0 0 15px #00ffc6; }
nav { margin-top:10px; }
nav button { background:transparent; border:1px solid #00ffc6; color:#00ffc6; padding:8px 16px; margin:5px; cursor:pointer; transition:0.3s; }
nav button:hover { background:#00ffc6; color:#000; box-shadow:0 0 10px #00ffc6; }
main { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; }
section { display:none; width:90%; max-width:600px; background:rgba(20,20,20,0.9); padding:30px; border-radius:10px; box-shadow:0 0 20px #00ffc6; margin:15px auto;}
section.active { display:block; }
#gameArea { position:relative; width:90vw; height:50vh; background:#111; border:2px solid #00ffc6; margin:20px auto; overflow:hidden;}
.target { position:absolute; width:50px; height:50px; border-radius:50%; background:#ff0066; cursor:pointer; transition: transform 0.1s;}
.target:hover { transform: scale(1.2);}
input { display:block; margin:10px auto; padding:10px; width:80%; background:#111; border:1px solid #00ffc6; color:#00ffc6; text-align:center;}
.btns { margin-top:10px;}
#leaderboard { list-style:none; padding:0; text-align:left;}
#leaderboard li { padding:8px; border-bottom:1px solid #00ffc6;}
footer { background:#000; padding:10px; font-size:0.9em; border-top:2px solid #00ffc6;}
.hidden { display:none;}
