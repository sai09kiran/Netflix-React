
import  React, {useState} from 'react'
import "../Faq/Faq.css"
const Faq = () => {

    const data=[
        {
            Question:"what is Netflix?",
            Answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
       {
        Question:"How much does Netflix cost ?",
        Answer:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
       },

       {
        Question:"Whare can i watch ?",
        Answer:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
       },
       {
        Question:"How do i cancle ?",
        Answer:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
       },

       {
        Question:"What can i watch on Netflix ?",
        Answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
       },



    ];
  
    const [selected, setSelected] = useState(null);


const handleSelect = (i) => {
  if (selected === i) {
    return setSelected(null);
  }
  setSelected(i);
};


return (
  <div className="faqpage">
    <h2>Frequently Asked Questions</h2>
    <div className="faq">
      <div className="item">
        {data.map((item, i) => (
          <div className='wrapper' key={i}>
            <div className="Question" onClick={() => handleSelect(i)}>
              <h3>{item.Question}</h3>
</div>
            <div className={selected === i ? "Answer show" : "Answer"}>
                  <p>{item.Answer}</p>
            </div>
     </div>
        )
        )}
      </div>
    </div>


   <p>Ready to watch? Enter your email to create or restart your      membership.</p>
    <div className="email">
      <input type="email" placeholder='Email Address' />
      <button>Get Started</button>
    </div>
  </div>
);

};

export default Faq
