"use client";
import {useEffect,useRef,useState} from "react";
const PLAYLIST_ID="PL_Dem1ipPjIj_etHyVG_peyth4K1ZBNFW";
declare global{interface Window{YT?:any;onYouTubeIframeAPIReady?:()=>void}}
export default function BusExperience(){
 const player=useRef<any>(null); const [entered,setEntered]=useState(false); const [ready,setReady]=useState(false); const [playing,setPlaying]=useState(false); const [online,setOnline]=useState(19); const [muted,setMuted]=useState(false);
 useEffect(()=>{const s=document.createElement("script");s.src="https://www.youtube.com/iframe_api";s.async=true;document.body.appendChild(s);
 window.onYouTubeIframeAPIReady=()=>{player.current=new window.YT.Player("yt",{width:"100%",height:"100%",playerVars:{listType:"playlist",list:PLAYLIST_ID,playsinline:1,controls:1,rel:0,origin:location.origin},events:{onReady:()=>setReady(true),onStateChange:(e:any)=>setPlaying(e.data===1)}})};
 const t=setInterval(()=>setOnline(v=>Math.max(7,v+(Math.random()>.52?1:-1))),4500); return()=>{clearInterval(t);s.remove();delete window.onYouTubeIframeAPIReady}},[]);
 const enter=()=>{setEntered(true);setTimeout(()=>player.current?.playVideo(),350)};
 const play=()=>playing?player.current?.pauseVideo():player.current?.playVideo();
 const mute=()=>{if(!player.current)return;muted?player.current.unMute():player.current.mute();setMuted(!muted)};
 return <main className={"scene "+(entered?"on":"off")}>
  <div className="stars"/><div className="rain"/><div className="motion motion1"/><div className="motion motion2"/>
  <div className="bus-frame"><div className="glass"><div className="horizon"/><div className="city city1"/><div className="city city2"/><div className="roadline"/></div><div className="curtain left"/><div className="curtain right"/><div className="ceiling-light"/></div>
  <div className="grain"/>
  <header><div className="logo"><b>OB</b> ODISHA BUS PLAYLIST</div><div className="online"><i/> {online} ONLINE</div></header>
  {!entered?<section className="landing"><div className="ticket">NIGHT SERVICE · 2007 → NOW</div><div className="bus">🚌</div><h1>ODISHA<br/><span>BUS PLAYLIST</span></h1><p>19+ YEARS OF ODIA NOSTALGIA</p><button onClick={enter}>ENTER BUS <small>→</small></button><div className="headphones">HEADPHONES RECOMMENDED</div></section>:
  <section className="inside">
   <div className="route"><span>NOW BOARDING</span><strong>Bhubaneswar → Cuttack → Anywhere</strong></div>
   <div className="screen"><div id="yt"/><div className="screen-shade"><div><small>ODIA CLASSICS</small><h2>KEEP THE WINDOW OPEN.</h2></div><div className="bars">{[1,2,3,4,5,6,7].map(i=><i key={i}/>)}</div></div></div>
   <div className="controls"><button>◀◀</button><button className="round" onClick={play}>{playing?"Ⅱ":"▶"}</button><button>▶▶</button><button className="sound" onClick={mute}>{muted?"MUTED":"SOUND ON"}</button></div>
   <div className="ticket-row"><span>ROUTE 19+</span><span>SEAT NO. 19</span><span>PASSENGERS {online}</span></div>
  </section>}
  <footer><span>ODISHA BUS PLAYLIST © 2026</span><span>MADE FOR THE ROAD</span></footer>
 </main>
}