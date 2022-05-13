import {useState} from 'react'
import "./Search.css"



// const Search = () => {
function Search() {
    // if ile hangi butona tıklanıyporsa ona göre yazı yazdırılmalı ya da ortak bir yazı bulunmalı
    const [form, setForm] = useState({nameee: " Konaklama başlangıc " , surname: " Konaklama bitiş", konum:"Konum"})  
    
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const [count ,setCount] = useState(0)
    const arttır = () => {
      setCount(count + 1 );
    };

    return (
        //<div>login</div>
        <div className="container">
            <div className="row">
                <div className="col colLeft">
                    <h4 className='yazi'>Sana uygun teklifler için önce kriterlerini gir</h4>
                </div>
                <div className="col colRight">
                    <button type="button" class="btn btn-light buton ">Ulaşım</button>
                    <button type="button" class="btn btn-light buton ">Konaklama</button>

                    <br/>
                    <br/>
                    {/* takvim gelecek */}
                    <input name="nameee" value= {form.nameee} onChange={onChangeInput}/> <br/>
                    <br/>
                    <input name="surname" value= {form.surname} onChange={onChangeInput}/> <br/>
                    <br/>

                    <button type="button" class="btn btn-light butonG" onClick={arttır}> + </button>
                    <span> {count} </span>
                    <button type="button" class="btn btn-light butonG" onClick={() => setCount(count - 1)}> - </button>
                    <br/><br/>
                    <input  name="konum" value= {form.konum} onChange={onChangeInput}/> <br/>
                    <br/><br/>

                    <button type="button" class="btn btn-info">Teklif Ara</button>

                </div>
            </div>
        </div>
    )
}
export default Search
