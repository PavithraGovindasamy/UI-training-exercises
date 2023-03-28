const videoobj = [
    {
        "videoUrl": "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
        "title": "Sintel",
        "description": "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
        "comments": [
            {
                "name": "Micheal Scott",
                "image": "../images/reviewers/micheal.png",
                "comment": "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes."
            },
            {
                "name": "Dwight K Schrute (Asst. to the Regional Manager)",
                "image": "../images/reviewers/dwight.png",
                "comment": "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!"
            },
            {
                "name": "Jim Halpert",
                "image": "../images/reviewers/jim.png",
                "comment": "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation."
            },
            {
                "name": "Pam Beesly Halpert",
                "image": "../images/reviewers/pam.png",
                "comment": "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me."
            },
            {
                "name": "Angela Martin",
                "image": "../images/reviewers/angela.png",
                "comment": "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces."
            },
            {
                "name": "Kevin Malone",
                "image": "../images/reviewers/kevin.png",
                "comment": "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win."
            },
            {
                "name": "Andy Bernard",
                "image": "../images/reviewers/andy.png",
                "comment": "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this."
            }
        ]


    }
]


let container = document.getElementById("container");
let main = document.getElementById("main-container");
for (temp in videoobj) {
    // videos
    let card = document.createElement("div");
    card.classList.add("card");
    let video = document.createElement("video");
    video.classList.add("video");
    div_video = document.createElement("div");
    div_video.append(video);
    div_video.classList.add("div_video");
    video.setAttribute("src", videoobj[temp].videoUrl);
    video.setAttribute("controls", true);
    video.setAttribute("poster","../images/bg.jpg");

    card.append(div_video);

    // content
    let title = document.createElement("div");
    title.classList.add("content-title");
    title.innerHTML = videoobj[temp].title;
    console.log(temp);
    let description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = videoobj[temp].description;
    console.log(temp);
    card.append(title);
    card.append(description);
    container.appendChild(card);
}
let comments_container = document.getElementById("comments-container");
let comments = videoobj[0].comments; // Get the comments array from the first video object
for (let i = 0; i < comments.length; i++) {

    let card_comments = document.createElement("div");
    card_comments.classList.add("card-comments");
    let name = document.createElement("p");
    name.classList.add("comment-name");
    name.innerHTML = comments[i].name;
    let com = document.createElement("p");
    com.classList.add("com");
    com.innerHTML = comments[i].comment;
    // Create an image element and set its source attribute to the image URL in the comment object

    let image = document.createElement("img");
    image.classList.add("image");
    image.setAttribute("src", comments[i].image);
    
    let div_card=document.createElement("div");
    div_card.classList.add("div_card");
    
    div_card.append(name);
    div_card.append(com);

    // card_comments.append(name);
    card_comments.append(image);
    card_comments.append(div_card);
  
    comments_container.appendChild(card_comments);
}

container.appendChild(comments_container);

// 
const products = [

    {
        "imageUrl": "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
        "title": "Sprite Fright"
    },
    {
        "imageUrl": "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
        "title": "Agent 327"
    },
    {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
        "title": "Spring"
    }

]


image_container = document.getElementById("image-container");
for (temp in products) {
    let div_image = document.createElement("div");
    //  div_image.classList("div_image");
    products_images = document.createElement("img");
    products_images.classList.add("products_image");
    products_images.setAttribute("src", products[temp].imageUrl);
    div_image.appendChild(products_images);
    div_image.setAttribute("class","div_image");
    image_container.appendChild(div_image);


}

