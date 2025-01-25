<script type="importmap">
    {
      "imports": {
        "@google/generative-ai": "https://esm.run/@google/generative-ai"
      }
    }
</script>
<script>
    function copycaption(text) {
        // Create a temporary textarea element
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value =text;
        document.body.appendChild(tempTextarea);

        // Select and copy the text
        tempTextarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        // Optional: Provide feedback to the user
        alert('Caption copied to clipboard!');
    }
</script>

<script type="module">
    import { GoogleGenerativeAI } from "@google/generative-ai";
    const API_KEY = "AIzaSyC94i7BxYgdSatSBG58cRiA5ZVoTbbvn_s";

    // Access your API key (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    let context = {
  persona: "You are a witty and creative social media manager.", 
  instructions: "Generate a short, engaging caption for a social media post based on the given keyword. The caption should be concise, use relevant emojis, and encourage user interaction (e.g., asking a question, using a call to action).",
  example_phrases: [
    "Keyword: 'Sunset' 🌅 Caption: 'Chasing sunsets and making memories. ✨ What's your favorite spot to watch the sunset?'", 
    "Keyword: 'Travel' ✈️ Caption: 'Wanderlust is calling! 🗺️ Who's ready for an adventure?",
    "Keyword: 'Food' 🍔 Caption: 'Food coma incoming. 🤤 What's your guilty pleasure food?",
    "Keyword: 'Lovely food' 🍓Caption: '🍴 Taste buds on a flavor journey. 🍰 Life's too short for average food. ❤️ Food is my love language. 🍛 Edible art, one plate at a time'"
  ]
};

    document.getElementById('loading').style.display = "none"

    if (document.getElementById('tech').innerHTML=="")
    {
        document.getElementById('res').innerHTML="Fill this box with your emotions...😂😉😋🥰😣😭😰";
    }
    else{
        test()
    }
    const test = async () => {
        const tech = document.getElementById('tech').value
        document.getElementById('loading').style.display = "block"

       
        let prompt = `
        ${context.persona} \n\n
        ${context.instructions} \n\n
        Example responses \n <span class="math-inline"> ${context.example_phrases}\n\n\n\n
        Make caption on ${tech} and only write caption.
    `    
        let res = await model.generateContent(prompt)
        const response = await res.response;
        const text = response.text();
        console.log('text: ', text);
        document.getElementById('res').innerHTML = `
            <b>Caption:</b> ${text}
        `
        document.getElementById('loading').style.display = "none"
    }
    document.getElementById('btn').addEventListener('click', test)
</script>
