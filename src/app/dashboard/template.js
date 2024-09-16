export default function DashBoardTemplate({children}){
    const time=new Date().toString()
   return(
    <div>
        {children}
         <footer>
        <p>Dashboard Footer - {time}</p>
      </footer>
     
    </div>
   )
}