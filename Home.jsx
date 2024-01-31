import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Product from "./products.json"
import star from "./star-90-16.png"
import "../style.css"
import Footer from "./Footer";



const Home=()=>{
    // const getdata=()=>{
    //     const Data= localStorage.getItem('cart');
       
    //     if(Data){
    //         return JSON.parse(Data);
    //     }
    //     else{ return[{
    //         "id": 10,
    //         "productName": "Pork - Ham Hocks - Smoked",
    //         "image": "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
    //         "price": 166,
    //         "quantity":1,
    //         "className":"size"
    //       }]}
    //     // Data ? return JSON.parse(Data):return[]
       
    // }
    // const getFav=()=>{
    //     const Data= localStorage.getItem('fav');
       
    //     if(Data){
    //         return JSON.parse(Data);
    //     }
    //     else{ return[]}
    // }
    const[cartItm,setCartItm]=useState([{
    "id": 10,
    "productName": "Pork - Ham Hocks - Smoked",
    "image": "https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/41YorSgCIcL._SX300_SY300_QL70_FMwebp_.jpg",
    "price": 166,
    "quantity":1,
    "className":"size"
  }])
    const[data,setData]=useState(Product)
    const[fav,setFav]=useState([])
    const[red,setRed]=useState(true)
    const[seemore,setSeeMore]=useState(true)
    const[moreDtls,setMoreDtls]=useState([])
    console.log(red)
    console.log(Product)
    const cart=async(row)=>{
        
      await  setCartItm([...cartItm,row])

     
        

    }
    const favItm=async(row)=>{
        const color=data.map((data) =>
        data.id === row.id? { ...data, className:"red size"} :data
      );
   


   
      await  setFav([...fav,row])
        console.log(color)
        setData(color)
        
    }
   
    console.log(cartItm)
   
    useEffect(()=>{
        localStorage.setItem( "cart",JSON.stringify(cartItm));
        
        
    },[cartItm])
    useEffect(()=>{
        localStorage.setItem( "fav",JSON.stringify(fav))
        
    },[fav])
   
    
    
    
    // useEffect(()=>{
    //     // axios.get(`https://fakestoreapi.com/products`)
    //     // .then((res)=>{
    //     //     console.log(res)

    //     // })
    //     // .catch((err)=>{
    //     //     console.log(err)
    //     // })
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    // },[])
    return(<>
<NavBar/>
<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA/gMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EADoQAAIBAwMCAwYEBAUFAQAAAAECAwAEEQUSITFBEyJRBhRhcYGRMkKhwSNSseEzYpLR8AcVcoLx0v/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAkEQADAAIDAAMBAAIDAAAAAAAAAQIDERIhMQQTUUFSYSIjMv/aAAwDAQACEQMRAD8A+p1wrypClLEq6urqwCLDvUJj/CqxulQYboyKW1tBTE9yA+SaUvBknApjM2GYHjBoR3Azg1475KjUI7y3UE5FL4LRTNwB1pvfvzyOtUWSBpPlXfi5KQpB1pboqcimNiFDYGKF/CvAron2v1pX36BLs1FsoPaidoz04pXZzOaZRSAjkGmlyuijKbm3WWMrtzmkz6Cm4nHHpWkCZ7V74Xes8Sb2hNGWl0K3Iw0Qz60i1L2e25aJetfQZo+9BzxqyMCKMrgZSfPYNGZR5l5qq40ssCMYrbGFBQE6qGPSkvM09haMvZ6XskHHGa0tvZ7VHSq4wA3QYphHKuBU8lOwMqNsD3qiWz38YpmCpHavCR6ipJtCi+3tAvUUULfPepmRQeCKuRl7GpX2LoGS0wMY4zVrWSuMFc0QJADRcQVhkVbDHIupSQrj0tP5aJjsEXjbimOziuwBXbONI3IHS2UdOKjJbKTzReKg3XpTqUbky6pCqvEWvRKKpyRMuoB9YsI773KS5QXGcbcHGfTNE+KPWvmOrJLBrF2JCfE8YsD65OQaWq0d/wAD4k/Jpy3rR9TyCvDA1DjBGaSaXeXOoaZDJazoko8sm4Zzgf8AyrC2pKwVryHJ9Eoc2Qr43GmnQHquUuHPPNKvGJY09mu76J8vLG3yShm1y6Q4AUfJa5+t70b65/yQluIJbh1wpAHcjimVno5W2FzDOkq58wAwRVV/rt5JEY8jnr5etWeyl44mkhkVgknPwzTcjqj4irA7TJlcjiuWLnOKKki8OeVAQdrYGO1eAVKq/hy/WmcdQhs8LJy/png/Xp+tVN7SHxTFbxNuCCQgo2QpYLnPTqfXsfSo3lgLrALlNpB8o5yDkY/X71OOwj2FGZ3U5yp4BycmmTlIPEL9n9Svrq5Q6jC9uzEjw2ZTj7Ej0rT9OtZaGJIH3xoAwOSep9etadpFZA4PlI3VXHaZLItFUzBeDS+c5DEVC61BJJNikcGgr+/jggJLDd6VHJe/CXIrllCg5IrO6nf7HJ7URPd7lJz1FZjU3aSQDccZ7VPBDuuzKtjO2vzI+M0TNfCLBZsY9KXWEOEyetTuYd45NVanlo1MYjWowoO+hpvaKLdsB5pFcWr7iUJxS4xSByCec10Tgx1/RORs4dSDfnpza3QZMg5rDadFI/4ia0+mqUXB6Vx/IxzHSM2OWm24NHWF0rYBPNKXwVFQgmMbZBFQi+PaMsn6asOOMVCaRQQAaWxX6+GM9arkuwzZzV6+T10N9kjhHGK5iDStL1RVovUPetPyuuwq5K/eTXC5aqQyDqapluUQHmulcjKaGAnZh8aU65pltest1IzpIgwdhHmGarfUwnGaDudW3AjOc8VRJl8N3ircsawW9rpk8a22QjHa+WJ5PRufjx9ajfXeyWF9/IfBpLfXzA20ytzJCCRnpjj9s/WqtUae4gN1ChaM4dio/CadINVV1yr01d8Q9sHyORScIZThBn4npXltePcWUKNgAjn1oixiaJXLHyN0ANcmTpjzi2t0G6ZpenXCst5FvkXndvZePoacxWthbpHGkQCocr5jwfnnmku5ocSIPw9fl3/58Krub8ggqTgVlf8Ao3F+J9DbVYUE0ckahRKpzjuQf7/pQQA9KlDfpe2QyfPCwJ+R4/euqd9vZp66OUY+VegDPSuZ0jH8QgfWld77Q6ZZ/wCJdKx/liUsf0zSqW/BhtgUW91s0wKTyoI/2rO2epXuoYaz054oCf8AGu32ZHqFHP3Iq67v9ji3OGl58rcA464H++O2KZK0+hMk7QoW01C5neSOTwYs/jc4H96o1K2ns7rDyNKjKCjk5DUdNFPeRkXzEefyi3lOAgBZGyQMA9GHHO340wa2S/tXg4EkJ3IOuOM4z3qnFJEHhWjNFmYc0tnTMg5wc0/e14IC4x60mvoGjJcdqaFpkdaYz0+Heo5+dGvZqy8Cl+hSmQEEYp+Iwo9RUbl8hmhatkMY2ig7jSo/F3bR9qf5HpVU2MdKybQugSy01WH4QKPFmI0AHFW2pXHWrLiQBM1zZN0wNC643KCByKVS3EkLHOcU5ZlfvQV5bK/QAnFHH7pkuIJHfk8g/Srffjuxmlrx+CxwO9eeKQc4roeJMRocNP5QQ1XwSeTuaRxznPPSmNncZTgipXi0gyittW/zULPqDvnGaQ2292ptbW4ZcmvTrUnqqdkDNLIcHPNXxWzPjPeiI4kXmiYyi1N5PwfgCyiaOKPw7Rrh48ghXAYckgDPB4IqK6qVs0uLsXUMzIY5Hjj8PbtP8o/Y96OVxyQM4I/UH/8AIqDrFLBKZ4o5EjwxEiBhg9Rg/L9apGT9JVP4DaNPuWTZP7zHu3LIj7sZ7HPI+tPLeUbAV71kltIrLWpLK2RY43lK4GcjBwCCOR2p0JLmA7ZCGZjtXccn6MOR9RRy4U3tBWV67HZuVQgSDhuM0vuxtLIp4HQ/Dt+lRjk8b8T7MDnjIx9OlSnZlUMsLSBl2jw8ED5mud4qQ85EKpL+bTbjxRuMRG1vTB71sLazlvoVeKYlGAIK+hpHam3ON1uHUHzSSE7T/lUDkn4ninJ1G4gj2oqI06lI448EjA/M3NLcrRqrvoFuNFt5jy7Tf5ix2/3qdnolhaPvSBGl/mYZx8qKsZdybT0xuUfPt9KJqLdLwYjigdRsPeHjlRd7qw4LYwfX+3wFMMV1LNaYGhbDpe4D3uQFV6RoMKOmfvj9aYQxJEAI1woqztXjEKPNjn1o8mzaSA7y1Vssoz61mb+3LEpjAra+C2zc6hV/zDGfpSDVYBgsvWssvF6OTItUKtLjET7RTwD+HSu0UBwaa9VBo1l7F5AjSY4qp5avlizk0tvC6Uf/AEbYXFc7K9luGkBHas/7yySUQmoqWAoPExX2MUJyeTVjThF5qEUqbA1C3Vwm/illbehX0VXJBJbHWq44g4G4Zqp5lZsUXbOuau+kZJMDuLc5/h5FewSGNdpoq8lCKWFJjeqrHfkZpoTpFFKR7Cgj60fDOqClDTN1rz3hsV0/W6O1UkOXu17YzVRu8nqKTm4YniroiX60Pq0SyZ0h1bTGQSDPVDj4kEH+gP3o+0/xCrgMrqVKsMg9/wCoA+tKNN3C4iBUEFsYPTnj96Z28lzhGWCB23qy7XKEHIxwcg81kls51l2zr5pjJDI2Ahxv6nBxjOPnU52NrGdShgTfP1csSQPhnp3qEt1DbvJHOswiMn8F/CLBh17c/Hp3qu1SLVImDzK7ozFLdJPKOc8+p5xj4U3HfpaLSa5eFNwZZ9T2RK0aMwdZIcb2zzjJIA+dO9iRum2UozoCVcHIPQ+dR6g5zmh7W0v1KzXNsIUiIWUNgMD+Xj0Io23GbtnJwVGMeoPP7mpXkpdItax09ovtJHgb3htn4eZGCsuOvUcAfRaMElndOj3sJbuHifA+BwMD7E0okAkYIQOpOT9DXttb/wATw48oxbcShx8PrSu5fon1PW0F3dzDaXxEZzFuyDgjbTNHWSMMnegbizcIojG5CO5AB+H/AAUCsrQeRXCBfysdmM/E5X74pKxKu5YVbXTHnevMrjJxilVhdS3crxlzBtBJeWI4+4OMfWnNrFbBVLXRmbu6DA+n/wBqX0tejOvxEooJZBzsiT+aT9hV263tFDRo8rnpI4x/z6VFrq2jOY1DN64yfv8A3oW41AXKK2DlTgZNJlcxD4+iXN8eTLpJ2mJZ8dOMdBWf1ifYuQM00MoxgdKUaiolYDORmuHG262zkpi+3m84OMU3jfKA0AluG7YwaueTYMHir3pvoRMIkbPSgryLcOal4uehqUh3ICelOm0NsyuoRNFLS+abwzlTzWm1KASAELk4rN3ULJIdyn7V6GG1SM60X2moNj8Rq24nb8QBxQ1jCruM/anJtV8PyjJrW4miO9mee+KOSD8Kut9TO7k4FCavaSRSE4wKWxyMo611Tji52Uk0rXiSeXdnNCS4ZvTFL4rjaQatkuckHNZYteHXixp+jCFd8dVyxN2FEW42Ng9KJfB5xSctM5/uFKJ5wDTG2iziomAFt3ej7WLgcUMl9E7eyyKJgNy8EUxmbw5ZSrALksD6c5qMUWQB0zxVqQLc27meVbfymNlcHdwMcAdeKj74InoONuj3ICbUCqM98jGMD06L9qk6xXryC8ijkblQWQAgADGO4+lB2WsaaxjbxXlkCFZ1C7MEAcjPOCR9M0wmvYYTb3VvbWg3+Rhc3O4L3GSoIBwDj1qqmzomkIraKTxcJK2xZCu5ssF4BH9e5NHLb3ME7yRKJGwA/Pbnt9/vTHXrto7QSRXdtIZMCOIJsRSPU9TnjtQ9rMX3+IsYlIxtV944NJbpM6JaaBI5ipUzq6KUUZK4GQTznoPxfpTK1KG4t2Rg28MOO/GR+9R0uQG1SJstkOASPQg/70SbO2LKxiEZY8mM7Sx+OPlUtzstO9DAkDws/h3/AK84FDW2kj313kYtCCSmTyST3+Q4Hzqma1ljUbb0g7hgSY69sY6fY1e19e28aPLFBJuO1drBQT8D1P8ApFBS/wCAdIztyxbVZY0SNQJGUbUA4BHJ9T8a1HgllG5jt/lBwPrWetklk1uVp1VQZOAGzj1rTO6rnJ4qF0+R1OeMygW72w27sMDAPakksrQwwxg9tx+tMdTL3Efhx8KWG5m4AFItRuA11JsOVXgYqTnkxPkP/p4r1hDXzKvWg7S/8W6ZXPAoG4kLqVGRQNrce73GX5HSq4/jrTZ5jhm0QoyeWld4GRzjnFE6fcJJHww+VHLbLKckVFTp9gWLYki3N5jnFWOz5AA4pubRFU4FAyQ7X6mj6UWPROC2DDkZobU7NDH+Hp8Ka2S4/FXakB4ZwB0pobliuNnz+RhbXRC+tPrOdWiBPFJNQh33TN0IPeiYZ/CjA64rsyzylaAsQdeWi3KnODWd1HSlgBIB5rUWVyJhgDOas1KzE0WOBxUceesdaN9G2fOnHh8c1S0jZrQ3GjySsSoNKp7GWGQq68ivWx5YpenVGCtaQ7kBRs9KLh/iLxzXl2IImZcFmHrVFvdEeUYFczTPIzLjQbsxy2APjRVvLCuM8/Kkr3rBsrhsHkGpC7JGfKD6Cj9TaBzejRe9rtwuB6UtbW1kml8AiQxNggjy5x6/D60ovL53EdvFKI2lbaZD+Qdz9qAN2PDWOBdsSjCAnnH+/rV8Xx+uxOT1s0U/tTcxHbAkKHGN23JxSS5v5b2QtcSbi38vlz9q9stJvtRfEUTEE/iboK12jexCwOJbyQM/UL2qzcQhox5L9Zmjd3UyiGa5mIA8oJzijpH1OCOOSG12ljvGyIqefU1rdSOk6XGGuI1Bxx5aXnUDrkiWdlmFIwRvVSxcjkA46Z4qDrl/Dul8Vpg+n3Wr3Dx+6W/khJd2ldVxnryeuc4HGKNe/ghCPLfXdzPG6kxkoiEd/MBg8Z70mk02+udTFnPqMEZHWKR9rDnsp6mm8nsfd7fLI4HxGc/ap0l+D8wq48P3aO+tJ4kt0AISKNp3kU88lgCCaK2iJvfrOyhWALkXF3I2Oe6gj+in50NY6LenTLm0wvvKyCSOTvjv/TtQcumX1vGqS2wmGeFxnnv1qdPS8EdDGxuYmmNxJLvwCSxQr5j6cc113qrni2TaP5mGTQw95RMyWUg/8RxQbXse4oY5Fb021wVNum9Fq+VVJIhdTSyZaSRj8M0CXyBVl1cxsCOR9KBEyjqwGelVjHTW2jRW/WEtjaSaXzxhu2cmiWy6+Vh969iUEgEEmrJcR3oM0hDHjnrWqtHG0VmrZSgGRRqXew9SBXNX/JmTNAxG0il8wG7NDLfbuA1eNPu6Y+9IpCxja4q+aJXQjHalkNwFNMo5AU5I5pa6BtGY1fTdrM4AFJVA6EVsNWZPDbPpWT3p4n1rox02jIZaZEsWDjy00mlicgY49aXQuAijtVOpXPhxERnBrmrG7s6Mccg5gviHZjFZ3V9jXR24oFtVuEcrvzRFtuuASVye5rtx4KxPk2dnx47KL66DEkZ5pa13tckGgWuXl6D9a63hlupdkUbyNnoor11iS9PmLTsuNz5sgmrknZhgE5PQCnWk+xl9cgSXZWCL0/NWt07RdJ0tQVQSSDqzjNLeSV0ik4dox2k6LdT3UE9zG0VvnBkbjFa3RvZXT7dBJLIl0ePMrBhUte1bbo974EauFhYlQMggDn9Kw2k6np8hEcWj3Mkw4WG2uWjEhPTkYIPzNIuVL8KKFJ9U95tLMbAqKB2AxQsmsu5226E80kg9nL540kGs3lsCASjsJApPYAjOB05NVtp3tHp8zS2uowTRjHmmgVf6E1Lgtj7I63ZanrEmYFCmNSVLjIz8u9KdYBs/au3v7W6utPi1K1jkRoH5RwoQg/IBaaWes63co8gsLaYKxUyQzNEc98BsA/aqtIlhHhRapZzGOB2e3kmjMrI7EkjKqFxzTxtIGjYGGC9gi8do7s7RuaZMlqsg0ezgw9rLc2fwtrl0X/TnH6UPb6xaSfhdJGzjAeMsBgflU59anHc28UzztM6s35ZoXRAPmRXO9m0U6jZ6pdwPBb64zNnKSzW6iSL/AMXTbj6g1fps+r2OnpDq6S6o6MT7zE6ByOwxgZohL6N5UWDwbjd1eOQYj+YPNWiyuLi48fMeB05KqP70eT0bRQfaGxzskae1Pf3qBlUf+wBFEQS286ePEIJ4iceLGQVpb7Qa1pfs/HBLdme5nLbUjQlIyfVieq/Hmlmke0up6zqEUUD6dFZbXaaCPlsbsLtz1yQcn4jij9e1tC77Hs5s7ndG1kNoP4sda4adpDp57ZMAc+XpRFw8VtbBmjIA5CxrudvgB/z96VIus3bGfxIbCL8lvIu9serkf0FKtvwYA1X2YjuplGlhoUGdzEdflVNl7IXHiHxb8hR0wK09vPdtY7bq7slkHV4uAR+1Korm81x5be1RYrFDtN6mf4vqEH70dvWgga6Dc+OsUd34gU5b4U9GgWxiUOOccmmNrbRWkQjhUgDqSeT86sZie9RaW+hlsRv7N2h6Fx8mNVv7PR9ElbNPHfaMc57CrraA8O58x6D0ocENyZmjoU6/hf8ASuayu4hgc1raiwX0FK8EsV0fPtStdQdWCwk1m5LK8il80TZ+VfXZERj0AoQxRs2PDUn1xTzHFaQ83owlm/kHiKy49RQ2sFPDJyRn41rvbG4tNO0d2kRFlkOyIDqT/wAzXzO8vvEjALZrRgfPZ6OCpc7Yunci4PpWq0B4zC26sdK+58mmVlfeCmAa7c+PlOkH4+VK3se6b7FwQIkmqXGSfyDitBE1hp0YSzhRAPzMOftShZb253Tx/wAGP801wcf3/pUovA8QbEe+l7GTiM/Je/60abr1nkpJeDFry6vQRahmH8+PKv1qEccceTNO9y/onC/fvQt9eeDt/wC4Sk9hBCmQPmBwB86pOoWssRT3tIQeNsT7W/1dR9MUug7Gd7C9xZ3FnvWHfGV8NF55Hf0+tfOLh582VhFZeHfWYIBi/FIQc5461odQeaK2MNlPei3wRvZd6D64zn60ns4LNLyOOWSGaBgRKZAU3E+vIP7VfH0hGbuwUX9lFcCGfxWQBp5SyAkDk460TYW15aL4Nx4d67ciRpyv2BFJoZ7REKW1xfPKB5Vt7ouPh+LIqi21K4MTLq9zdnrhPBCgDPQsmM/TioNemNIb2K/uDaLpsstxDjedqmMfDcP6UONPmiv2vD4T8bfdwWjRD9+T9KSvNobBRbJb2kn5vAzDn/SQc1776vvKJDqF7ZxKcnxjv8QfAspwPiTW478MaW8vZLZYre6sPGEx8kcLCQgepBxhfj0qJj8C4hna0iht0bgQOUcN/mxgGlcL6e0jy2t3NHcNjfLFevmTHcgnH6UH7Q3l0+nyW9je3t1M4Ab+GrBf/YAH+tKp30YcarrVhLaSGzSa7cuqCJcDcT0AbHFMBbyvDbx2kj2yK4kkErtvl45HTj+1fNde1KKXS7WKzgNl7r4QcM43SygYZseuckmtrp1xby2UU82oXBupEBaO3uS5L/BDkD7Yprx6nZthHtncxJo/iXdnGVilWRQswYOR69D3/SsR7KXPvntIs7XcVhmNw2QAGLMxwueB1FaSbSNSvRKNSnS4tG/w7ckKyf8AkVGGP6VPRNEj0/UFnFk20DABbP6A081Khpga7NXZ2cyQAxag02M+eVd7N9RVGr6hPpmmS3V54RhToq5Uu3ZR15NKdR1T2fgu5ITZxyaoAAIktdshJGRlgM46V77Meyc6N7/7QTz3ErN4iWjzvJHFnkcMTyK59a7YSy30yT2nNteajbPZWMfmS1yN0jerEdvhWthSOCMRQosaKMBV6CpZ57dO1cTU29jpHpNVuwUZzz2rx5Ao5+le20DTMJJfw/lHrS6CTtYi58aQZ9AaLzwRXvT4fKvDTpCM6qXbP4anIfSqHOxMmsZIrnfAx3NRiXjcelVqDNJ1ouIdugFD0Y+L/wDUDWptR9oZoXVo4rb+GiMMH5/Ws0ZT619Q/wCqns371aLrNoh8aAYnCj8Sev0/pXynB6gcV6OFy46HVPXRaHB61cjgChMkHmpBj2BNUc7DNaN9p0H/AHDU7aC7lkkEzKCxIyuRngYwPtQcerTvqeoWCJFDBbzmIeGCGcAfmOcn5dPQCurq5yQxvJWtbG7uIwpaKIlVYcfakmiXZ1CJLu8hilm7Eg+XPpzxXV1Yw6uAXs533EbVHlHQ81jNTvJVka1Xb4WA2MV1dRkDGGjX7vEIViijUY5RSD/Wjbu8miWQhgdiEjI9K6uo/wBMU2Dm8xdXADTmMsH7r8B8KuiuGZUjYKeAdxHNdXVqAJ/aDUZffhCY4THFghSnX50zsdSmv7YRypGiocDwwV4+9dXVmlxQGda2NuJ3uo4/DdAxwnRvgc/tin+gxww2630MEUc9yAZCiYzXV1DN4BDgzvkEHrVHtPqtxo+lLPaBPEklEW5wfKCucjB615XVzR6OMfYXSLNdNXVdha8uBvaRzuI+Wef3rTFscV1dU8r2wrw7dgdBXZJHJzXV1KMVmFJZPNuBHcGpS3UsC4BDAdAw/wBq6urAZfaytcxebCZ/l/vXQ5MhUsSAcc17XUQEiMSbc5HrQt0xLbewrq6gxkTtVABqCsfEYetdXUyAX+GsyGKQbkcFWHqK+G61YwWmr3trCpEUUzKgPYeleV1UxN9l/jrdAXu8Wfw1clrFj8NdXVZ0z0FE/h//2Q==" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="off">
  <div className="card1">
    <h3 className="name"></h3>
< img src=  "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T1/images/G/31/img21/MA2024/Accessoriesfest/GW/Hero/PC/Sunglasses_Caps_and_more_Prime_3000x1200._CB583072119_.jpg"/>
         
  </div>
</div>
<br/>



{data.map((Product)=>{
    return(<>
    <div className="container">
        <div className="card" >
            <div className={Product.className} onClick={()=>{setRed(!red)
        favItm(Product)    
        }
        
        } > &#128969;</div>
      <img className="card-img-top" src={Product.image} alt={Product.productName} />
      <div className="card-body">
        <h5 class="card-title">{Product.productName}</h5>
        <p class="card-text">Rs. {Product.price}/-</p>
        <button onClick={()=>{
            cart(Product)
        }}
          
          className="btn btn-primary"
        >
          Add to cart
        </button>
        <h5 onClick={()=>{
            setMoreDtls(Product)
            setSeeMore(0)

        }} ><ul><i>See more</i></ul></h5>

      </div>
    </div>

    
    
    </div>
    
    </>)

})}
<div className="container2">
  <div className="card2">
    
    <img src="https://www.digitalcommerce360.com/wp-content/uploads/2017/05/Toys-R-Us-brings-its-e-commerce-operation-in-house.jpg"/>
    <h3 className="name2">30%off</h3>
  </div>

</div>
<br/>

<div className="container">

    <div className={seemore<1? "moreDetails":"lessDetails"}>
    {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
    <button type="button" class="btn-close" aria-label="Close"  onClick={()=>{setSeeMore(2)}}> </button>
         <img className="card-img-top" src={moreDtls.image} alt={Product.productName} />
         <h5 class="card-title">{moreDtls.productName}</h5>
        <p class="card-text">Rs. {moreDtls.price}/-</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi similique ipsum at nostrum, harum aperiam culpa dicta delectus quod consectetur quo? Praesentium ullam libero similique animi autem repudiandae commodi molestiae asperiores, sit suscipit nostrum voluptates blanditiis laborum odit vero molestias culpa eius quas magnam et ad? Recusandae ipsa velit non voluptates nam dolore consequuntur vero itaque harum nobis. Culpa rem praesentium incidunt asperiores laborum quaerat nesciunt suscipit quibusdam eius, modi neque, voluptatem alias illum minima at deserunt, officia consectetur?</p>
        
    </div>
   

</div>
<Footer/>
    
    </>)
}
export default Home;