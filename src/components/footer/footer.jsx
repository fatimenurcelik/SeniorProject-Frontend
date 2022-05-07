import "./footer.css"

const footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Gezgin nasıl çalışır ? </li>
          <li className="fListItem">Hakkımızda</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Yardım Merkezi </li>
          <li className="fListItem">Şartlar ve Koşullar</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Kariyer</li>
        </ul>
        <ul className="fList">
            <li className="fListItem">
            {/* facebook twitter linkleri gelecek */}
            </li>
        </ul>
      </div>
      <div className="fText">Gezgin © 2022 </div>
    </div>
    
  )
}

export default footer